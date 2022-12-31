import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { VictoryEnum } from '../../enums/victory.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { DeathService } from '../death/death.service';
import { RoundHandlersService } from '../round-handlers/round-handlers.service';
import { RoundOrchestrationService } from '../round-orchestration/round-orchestration.service';
import { StatusesService } from '../statuses/statuses.service';
import { StorageService } from '../storage/storage.service';
import { VictoryHandlersService } from '../victory-handlers/victory-handlers.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private players = new BehaviorSubject<Player[]>([]);
  private round = new BehaviorSubject<Round | undefined>(undefined);
  private gameInProgress = new BehaviorSubject<boolean>(false);
  private dayCount = new BehaviorSubject<number>(1);

  private readonly PLAYERS_KEY = 'GameService_currentPlayers';
  private readonly ROUND_KEY = 'GameService_currentRound';
  private readonly DAY_COUNT_KEY = 'GameService_dayCount';

  constructor(
    private router: Router,
    private roundHandlersService: RoundHandlersService,
    private victoryHandlersService: VictoryHandlersService,
    private roundOrchestrationService: RoundOrchestrationService,
    private deathService: DeathService,
    private statusesService: StatusesService,
    private storageService: StorageService
  ) {
    this.initFromStorage();
  }

  getPlayers(): Observable<Player[]> {
    return this.players.asObservable();
  }

  getRound(): Observable<Round | undefined> {
    return this.round.asObservable();
  }

  isGameInProgress(): Observable<boolean> {
    return this.gameInProgress.asObservable();
  }

  getDayCount(): Observable<number> {
    return this.dayCount.asObservable();
  }

  createGame(players: Player[]): void {
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
    this.setPlayers(players);
    this.setFirstRound();
    this.nextDayCount(0);
    this.gameInProgress.next(true);
    this.router.navigate(['game']);
  }

  submitRoundAction(
    selectedPlayers: number[],
    selectedRole?: PlayerRoleEnum
  ): void {
    const currentRoundRole = this.round.value?.role;
    if (currentRoundRole !== undefined) {
      const handler = this.roundHandlersService.getHandler(currentRoundRole);
      if (handler !== undefined) {
        const newPlayers = handler.handleAction(
          this.players.value,
          selectedPlayers,
          selectedRole
        );
        this.setPlayers(newPlayers);
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
      this.setPlayers(playersAfterDeath);
    }

    let nextRound;
    try {
      nextRound = this.roundOrchestrationService.getNextRound(currentRoundRole);
    } catch (error) {
      const victory = this.victoryHandlersService.getVictory(
        this.players.value
      );
      if (victory !== undefined) {
        this.handleVictory(victory);
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
      this.setPlayers(playersAfterDeath);
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
        this.handleVictory(victory);
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
      this.setPlayers(playersAfterDay);
      this.nextDayCount();
    }

    this.setRound(nextRound);
  }

  private setRound(role: RoundEnum): void {
    const handler = this.roundHandlersService.getHandler(role);
    if (handler !== undefined) {
      const roundConfig = handler.getRoundConfig(this.players.value);
      this.round.next(roundConfig);
      this.storageService.set(this.ROUND_KEY, roundConfig);
      if (handler.type === RoundTypeEnum.AUTO) {
        this.submitRoundAction([]);
      }
    }
  }

  private setPlayers(players: Player[]): void {
    this.players.next(players);
    this.storageService.set(this.PLAYERS_KEY, players);
  }

  private nextDayCount(currentDay?: number): void {
    const nextDay = (currentDay ?? this.dayCount.value) + 1;
    this.dayCount.next(nextDay);
    this.storageService.set(this.DAY_COUNT_KEY, nextDay);
  }

  private initFromStorage(): void {
    combineLatest([
      this.storageService.get<Player[]>(this.PLAYERS_KEY),
      this.storageService.get<Round>(this.ROUND_KEY),
      this.storageService.get<number>(this.DAY_COUNT_KEY),
    ]).subscribe(([storedPlayers, storedRound, storedDayCount]) => {
      if (
        storedPlayers !== null &&
        storedRound !== null &&
        storedDayCount !== null
      ) {
        this.players.next(storedPlayers);
        this.round.next(storedRound);
        this.dayCount.next(storedDayCount);
        this.gameInProgress.next(true);
      }
    });
  }

  private clearStorage(): void {
    this.storageService.remove(this.PLAYERS_KEY);
    this.storageService.remove(this.ROUND_KEY);
    this.storageService.remove(this.DAY_COUNT_KEY);
  }

  private handleVictory(victory: VictoryEnum): void {
    this.gameInProgress.next(false);
    this.clearStorage();
    this.roundOrchestrationService.resetRounds();
    this.deathService.reset();
    this.roundHandlersService.clearHandlers();
    this.victoryHandlersService.clearHandlers();
    this.router.navigate(['victory'], { queryParams: { victory } });
  }
}
