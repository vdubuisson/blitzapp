import {
  computed,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
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
import { RoundHandler } from '../../round-handlers/round-handler.interface';
import { CardList } from '../../models/card-list.model';
import { getNotPlayedRoles } from '../../utils/roles.utils';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  isGameInProgress: Signal<boolean> = computed(
    () => this.round() !== undefined,
  );

  private players: WritableSignal<Player[]> = signal([]);
  private round: WritableSignal<Round | undefined> = signal(undefined);
  private dayCount: WritableSignal<number> = signal(1);

  private cardList: CardList | undefined;

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
    private storageService: StorageService,
  ) {
    this.initFromStorage();
  }

  get currentPlayers(): Signal<Player[]> {
    return this.players.asReadonly();
  }

  get currentRound(): Signal<Round | undefined> {
    return this.round.asReadonly();
  }

  get currentDayCount(): Signal<number> {
    return this.dayCount.asReadonly();
  }

  createGame(players: Player[], cardList: CardList): void {
    this.cardList = cardList;
    this.initGame(players, cardList);
    const isAngePresent = players
      .map((player) => player.role)
      .includes(PlayerRoleEnum.ANGE);
    if (isAngePresent) {
      this.setRound(RoundEnum.VILLAGEOIS);
      this.nextDayCount(-1);
    } else {
      this.setFirstRound();
      this.nextDayCount(0);
    }
    this.router.navigate(['game']);
  }

  submitRoundAction(
    selectedPlayers: number[],
    selectedRole?: PlayerRoleEnum,
  ): void {
    const currentRoundRole = this.round()?.role;
    if (currentRoundRole !== undefined) {
      const handler = this.roundHandlersService.getHandler(currentRoundRole);
      if (handler !== undefined) {
        handler
          .handleAction(this.players(), selectedPlayers, selectedRole)
          .subscribe((newPlayers) => {
            this.setPlayers(newPlayers);
            this.nextRound();
          });
      }
    }
  }

  private initGame(players: Player[], cardList: CardList): void {
    const roles = players.map((player) => player.role);
    const notPlayedRoles = getNotPlayedRoles(players, cardList);
    this.roundHandlersService.initHandlers(roles);
    this.roundHandlersService.initDefaultHandlers(notPlayedRoles);
    this.victoryHandlersService.initHandlers(roles);
    const sorciere = players.find(
      (player) => player.role === PlayerRoleEnum.SORCIERE,
    );
    if (sorciere) {
      sorciere.statuses.add(PlayerStatusEnum.HEALTH_POTION);
      sorciere.statuses.add(PlayerStatusEnum.DEATH_POTION);
    }
    this.setPlayers(players);
  }

  private setFirstRound(): void {
    const firstRound = this.roundOrchestrationService.getFirstRound();
    this.setRound(firstRound);
  }

  private nextRound(): void {
    const currentRoundRole = this.round()?.role;
    if (currentRoundRole === undefined) {
      throw new Error('No current round');
    }

    if (currentRoundRole === RoundEnum.VOLEUR) {
      this.handleAfterVoleurRound();
    }

    const currentHandler =
      this.roundHandlersService.getHandler(currentRoundRole);

    this.handleDaytimeDeaths(currentHandler);

    let nextRound;
    try {
      nextRound = this.roundOrchestrationService.getNextRound(currentRoundRole);
    } catch (error) {
      if (this.checkVictory()) {
        return;
      }
      throw error;
    }

    nextRound = this.checkLoupBlancRound(nextRound);

    const nextHandler = this.roundHandlersService.getHandler(nextRound);

    nextRound = this.handleAfterNightDeaths(
      currentHandler,
      currentRoundRole,
      nextHandler,
      nextRound,
    );

    const isVictory = this.handleDayRound(
      currentHandler,
      nextHandler,
      nextRound,
    );
    if (isVictory) {
      return;
    }

    this.handleAfterDayEvents(currentHandler, nextHandler);

    this.setRound(nextRound);
  }

  private setRound(role: RoundEnum): void {
    const handler = this.roundHandlersService.getHandler(role);
    if (handler !== undefined) {
      const roundConfig = handler.getRoundConfig(this.players(), this.cardList);
      this.round.set(roundConfig);
      this.storageService.set(this.ROUND_KEY, roundConfig);
      if (handler.type === RoundTypeEnum.AUTO) {
        this.submitRoundAction([]);
      }
    }
  }

  private setPlayers(players: Player[]): void {
    this.players.set(players);
    this.storageService.set(this.PLAYERS_KEY, players);
  }

  private nextDayCount(currentDay?: number): void {
    const nextDay = (currentDay ?? this.dayCount()) + 1;
    this.dayCount.set(nextDay);
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
        this.players.set(storedPlayers);
        this.round.set(storedRound);
        this.dayCount.set(storedDayCount);
      }
    });
  }

  private clearStorage(): void {
    this.storageService.remove(this.PLAYERS_KEY);
    this.storageService.remove(this.ROUND_KEY);
    this.storageService.remove(this.DAY_COUNT_KEY);
  }

  private handleVictory(victory: VictoryEnum): void {
    this.round.set(undefined);
    this.clearStorage();
    this.roundOrchestrationService.resetRounds();
    this.deathService.reset();
    this.roundHandlersService.clearHandlers();
    this.victoryHandlersService.clearHandlers();
    this.router.navigate(['victory'], { queryParams: { victory } });
  }

  private handleDaytimeDeaths(currentHandler: RoundHandler | undefined) {
    if (currentHandler?.isDuringDay) {
      const playersAfterDeath = this.deathService.handleNewDeaths(
        this.players(),
      );
      this.setPlayers(playersAfterDeath);
    }
  }

  private checkLoupBlancRound(nextRound: RoundEnum): RoundEnum {
    if (nextRound === RoundEnum.LOUP_BLANC && this.dayCount() % 2 !== 0) {
      return this.roundOrchestrationService.getNextRound(RoundEnum.LOUP_BLANC);
    }
    return nextRound;
  }

  private handleAfterNightDeaths(
    currentHandler: RoundHandler | undefined,
    currentRoundRole: RoundEnum,
    nextHandler: RoundHandler | undefined,
    nextRound: RoundEnum,
  ): RoundEnum {
    if (nextHandler?.isDuringDay && !currentHandler?.isDuringDay) {
      const playersAfterDeath = this.deathService.handleNewDeaths(
        this.players(),
      );
      this.setPlayers(playersAfterDeath);
      return this.roundOrchestrationService.getNextRound(currentRoundRole);
    }
    return nextRound;
  }

  private handleDayRound(
    currentHandler: RoundHandler | undefined,
    nextHandler: RoundHandler | undefined,
    nextRound: RoundEnum,
  ): boolean {
    if (
      (nextHandler?.isDuringDay || currentHandler?.isDuringDay) &&
      nextRound !== RoundEnum.CHASSEUR
    ) {
      this.deathService.announceDeaths();
      return this.checkVictory();
    }
    return false;
  }

  private checkVictory(): boolean {
    const isFirstDay =
      (this.round()?.isDuringDay && this.dayCount() === 0) ?? false;
    const isFirstNight = !this.round()?.isDuringDay && this.dayCount() === 1;
    const victory = this.victoryHandlersService.getVictory(
      this.players(),
      isFirstDay || isFirstNight,
    );
    if (victory !== undefined) {
      this.handleVictory(victory);
      return true;
    }
    return false;
  }

  private handleAfterDayEvents(
    currentHandler: RoundHandler | undefined,
    nextHandler: RoundHandler | undefined,
  ) {
    if (
      nextHandler !== undefined &&
      !nextHandler.isDuringDay &&
      currentHandler?.isDuringDay
    ) {
      const playersAfterDay = this.statusesService.cleanStatusesAfterDay(
        this.players(),
      );
      this.setPlayers(playersAfterDay);
      this.nextDayCount();
    }
  }

  private handleAfterVoleurRound(): void {
    this.roundHandlersService.clearHandlers();
    this.victoryHandlersService.clearHandlers();

    const players = [...this.players()];
    this.initGame(players, this.cardList as CardList);
  }
}
