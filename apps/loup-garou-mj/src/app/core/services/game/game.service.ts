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

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private players = new BehaviorSubject<Player[]>([]);
  private round = new BehaviorSubject<Round | undefined>(undefined);

  constructor(
    private router: Router,
    private roundHandlersService: RoundHandlersService,
    private roundOrchestrationService: RoundOrchestrationService,
    private deathService: DeathService
  ) {}

  getPlayers(): Observable<Player[]> {
    return this.players.asObservable();
  }

  getRound(): Observable<Round | undefined> {
    return this.round.asObservable();
  }

  createGame(players: Player[]): void {
    this.roundHandlersService.initHandlers(
      players.map((player) => player.role)
    );
    const sorciere = players.find(
      (player) => player.role === PlayerRoleEnum.SORCIERE
    );
    if (sorciere) {
      sorciere.statuses.add(PlayerStatusEnum.HEALTH_POTION);
      sorciere.statuses.add(PlayerStatusEnum.DEATH_POTION);
    }
    this.players.next(players);
    this.setFirstRound();
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
    let nextRound =
      this.roundOrchestrationService.getNextRound(currentRoundRole);

    const nextHandler = this.roundHandlersService.getHandler(nextRound);
    const currentHandler =
      this.roundHandlersService.getHandler(currentRoundRole);
    if (
      nextHandler !== undefined &&
      (nextHandler.isDuringDay || currentHandler?.isDuringDay)
    ) {
      const playersAfterDeath = this.deathService.handleNewDeaths(
        this.players.value
      );
      this.players.next(playersAfterDeath);
      nextRound = this.roundOrchestrationService.getNextRound(currentRoundRole);
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
