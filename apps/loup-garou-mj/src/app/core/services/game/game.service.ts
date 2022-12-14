import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { DeathService } from '../death/death.service';
import { RoundHandlersService } from '../round-handlers/round-handlers.service';
import { RoundOrchestrationService } from '../round-orchestration/round-orchestration.service';
import { StatusesService } from '../statuses/statuses.service';
import { VictoryHandlersService } from '../victory-handlers/victory-handlers.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private players = new BehaviorSubject<Player[]>([]);
  private round = new BehaviorSubject<Round | undefined>(undefined);
  private gameInProgess = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private roundHandlersService: RoundHandlersService,
    private victoryHandlersService: VictoryHandlersService,
    private roundOrchestrationService: RoundOrchestrationService,
    private deathService: DeathService,
    private statusesService: StatusesService
  ) {}

  getPlayers(): Observable<Player[]> {
    return this.players.asObservable();
  }

  getRound(): Observable<Round | undefined> {
    return this.round.asObservable();
  }

  isGameInProgress(): Observable<boolean> {
    return this.gameInProgess.asObservable();
  }

  createGame(players: Player[]): void {
    this.roundOrchestrationService.resetRounds();
    this.deathService.reset();
    const roles = players.map((player) => player.role);
    this.roundHandlersService.initHandlers(roles);
    this.victoryHandlersService.initHandlers(roles);
    const sorciere = players.find(
      (player) => player.role === PlayerRoleEnum.SORCIERE
    );
    if (sorciere) {
      sorciere.statuses.add(PlayerStatusEnum.HEALTH_POTION);
      sorciere.statuses.add(PlayerStatusEnum.DEATH_POTION);
    }
    this.players.next(players);
    this.setFirstRound();
    this.gameInProgess.next(true);
    this.router.navigate(['game']);
  }

  submitRoundAction(selectedPlayers: number[]): void {
    const currentRoundRole = this.round.value?.role;
    if (currentRoundRole !== undefined) {
      const handler = this.roundHandlersService.getHandler(currentRoundRole);
      if (handler !== undefined) {
        const newPlayers = handler.handleAction(
          this.players.value,
          selectedPlayers
        );
        this.players.next(newPlayers);
        this.nextRound();
      }
    }
  }

  private setFirstRound(): void {
    const firstRound = this.roundOrchestrationService.getFirstRound();
    this.setRound(firstRound);
  }

  private nextRound(): void {
    const currentRoundRole = this.round.value?.role;
    if (currentRoundRole === undefined) {
      throw new Error('No current round');
    }
    const currentHandler =
      this.roundHandlersService.getHandler(currentRoundRole);
    if (currentHandler?.isDuringDay) {
      // Handle daytime deaths
      const playersAfterDeath = this.deathService.handleNewDeaths(
        this.players.value
      );
      this.players.next(playersAfterDeath);
    }

    let nextRound;
    try {
      nextRound = this.roundOrchestrationService.getNextRound(currentRoundRole);
    } catch (error) {
      const victory = this.victoryHandlersService.getVictory(
        this.players.value
      );
      if (victory !== undefined) {
        this.gameInProgess.next(false);
        this.router.navigate(['victory'], { queryParams: { victory } });
        return;
      }
      throw error;
    }

    const nextHandler = this.roundHandlersService.getHandler(nextRound);
    if (
      nextHandler !== undefined &&
      nextHandler.isDuringDay &&
      !currentHandler?.isDuringDay
    ) {
      // Handle after-night deaths
      const playersAfterDeath = this.deathService.handleNewDeaths(
        this.players.value
      );
      this.players.next(playersAfterDeath);
      nextRound = this.roundOrchestrationService.getNextRound(currentRoundRole);
    }

    if (
      (nextHandler?.isDuringDay || currentHandler?.isDuringDay) &&
      nextRound !== RoundEnum.CHASSEUR
    ) {
      const victory = this.victoryHandlersService.getVictory(
        this.players.value
      );
      if (victory !== undefined) {
        this.gameInProgess.next(false);
        this.router.navigate(['victory'], { queryParams: { victory } });
        return;
      }
      this.deathService.announceDeaths();
    }

    if (
      nextHandler !== undefined &&
      !nextHandler.isDuringDay &&
      currentHandler?.isDuringDay
    ) {
      // Handle after-day events
      const playersAfterDay = this.statusesService.cleanStatusesAfterDay(
        this.players.value
      );
      this.players.next(playersAfterDay);
    }

    this.setRound(nextRound);
  }

  private setRound(role: RoundEnum): void {
    const handler = this.roundHandlersService.getHandler(role);
    if (handler !== undefined) {
      const roundConfig = handler.getRoundConfig(this.players.value);
      this.round.next(roundConfig);
    }
  }
}
