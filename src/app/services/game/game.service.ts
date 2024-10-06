import {
  computed,
  inject,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { VictoryEnum } from '@/enums/victory.enum';
import { Player, StoredPlayer } from '@/models/player.model';
import { Round } from '@/models/round.model';
import { DeathService } from '@/services/death/death.service';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { RoundOrchestrationService } from '@/services/round-orchestration/round-orchestration.service';
import { StatusesService } from '@/services/statuses/statuses.service';
import { StorageService } from '@/services/storage/storage.service';
import { VictoryHandlersService } from '@/services/victory-handlers/victory-handlers.service';
import { RoundHandler } from '@/round-handlers/round-handler.interface';
import { CardList, StoredCardList } from '@/models/card-list.model';
import { getNotPlayedRoles } from '@/utils/roles.utils';
import { LOUPS_GAROUS_ROUNDS } from '@/configs/loups-garous-rounds';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private readonly router = inject(Router);
  private readonly roundHandlersService = inject(RoundHandlersService);
  private readonly victoryHandlersService = inject(VictoryHandlersService);
  private readonly roundOrchestrationService = inject(
    RoundOrchestrationService,
  );
  private readonly deathService = inject(DeathService);
  private readonly statusesService = inject(StatusesService);
  private readonly storageService = inject(StorageService);

  isGameInProgress: Signal<boolean> = computed(
    () => this.round() !== undefined,
  );

  private players: WritableSignal<Player[]> = signal([]);
  private round: WritableSignal<Round | undefined> = signal(undefined);
  private dayCount: WritableSignal<number> = signal(1);

  private cardList: CardList | undefined;
  private needCleanAfterBouc = false;

  private readonly PLAYERS_KEY = 'GameService_currentPlayers';
  private readonly ROUND_KEY = 'GameService_currentRound';
  private readonly DAY_COUNT_KEY = 'GameService_dayCount';
  private readonly CARD_LIST_KEY = 'GameService_cardList';
  private readonly NEED_CLEAN_AFTER_BOUC_KEY = 'GameService_needCleanAfterBouc';

  constructor() {
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
    const storedCardList: StoredCardList = {
      ...cardList,
      selectedRoles: Array.from(cardList.selectedRoles),
    };
    this.storageService.set(this.CARD_LIST_KEY, storedCardList);
    this.initGame(players, cardList);
    const isAngePresent = players
      .map((player) => player.role)
      .includes(PlayerRoleEnum.ANGE);
    if (isAngePresent) {
      this.roundOrchestrationService.setVillageoisFirst();
      this.nextDayCount(-1);
    } else {
      this.nextDayCount(0);
    }
    this.setFirstRound();
    this.router.navigate(['game']);
  }

  submitRoundAction(
    selectedPlayers: number[],
    selectedRole?: PlayerRoleEnum,
    isEquality?: boolean,
  ): void {
    const currentRoundRole = this.round()?.role;
    if (currentRoundRole !== undefined) {
      const handler = this.roundHandlersService.getHandler(currentRoundRole);
      if (handler !== undefined) {
        handler
          .handleAction(
            this.players(),
            selectedPlayers,
            selectedRole,
            isEquality,
          )
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
    this.roundHandlersService.clearHandlers();
    this.roundHandlersService.initHandlers(roles);
    this.roundHandlersService.initDefaultHandlers(notPlayedRoles);
    this.victoryHandlersService.clearHandlers();
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
    } else if (currentRoundRole === RoundEnum.PERE_LOUPS) {
      this.handleAfterPereLoupRound();
    } else if (currentRoundRole === RoundEnum.BOUC) {
      this.needCleanAfterBouc = true;
      this.storageService.set(this.NEED_CLEAN_AFTER_BOUC_KEY, true);
    } else if (
      currentRoundRole === RoundEnum.VILLAGEOIS &&
      this.needCleanAfterBouc
    ) {
      this.needCleanAfterBouc = false;
      this.storageService.set(this.NEED_CLEAN_AFTER_BOUC_KEY, false);
      const newPlayers = this.statusesService.cleanNoVoteAfterDay(
        this.players(),
      );
      this.setPlayers(newPlayers);
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

    this.handlerAfterLoupsEvents(nextHandler);

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
    const storedPlayers: StoredPlayer[] = players?.map((player) => ({
      ...player,
      statuses: Array.from(player.statuses),
    }));
    this.storageService.set(this.PLAYERS_KEY, storedPlayers);
  }

  private nextDayCount(currentDay?: number): void {
    const nextDay = (currentDay ?? this.dayCount()) + 1;
    this.dayCount.set(nextDay);
    this.storageService.set(this.DAY_COUNT_KEY, nextDay);
  }

  private initFromStorage(): void {
    combineLatest([
      this.storageService.get<StoredPlayer[]>(this.PLAYERS_KEY),
      this.storageService.get<Round>(this.ROUND_KEY),
      this.storageService.get<number>(this.DAY_COUNT_KEY),
      this.storageService.get<StoredCardList>(this.CARD_LIST_KEY),
      this.storageService.get<boolean>(this.NEED_CLEAN_AFTER_BOUC_KEY),
    ]).subscribe(
      ([
        storedPlayers,
        storedRound,
        storedDayCount,
        storedCardList,
        storedNeedCleanAfterBouc,
      ]) => {
        if (
          storedPlayers !== null &&
          storedRound !== null &&
          storedDayCount !== null
        ) {
          const players: Player[] = storedPlayers.map((player) => ({
            ...player,
            statuses: new Set(player.statuses),
          }));
          this.players.set(players);
          this.round.set(storedRound);
          this.dayCount.set(storedDayCount);
        }

        this.needCleanAfterBouc = storedNeedCleanAfterBouc ?? false;
        const cardList: CardList | undefined =
          storedCardList == null
            ? undefined
            : {
                ...storedCardList,
                selectedRoles: new Set(storedCardList.selectedRoles),
              };
        this.cardList = cardList;
      },
    );
  }

  private clearStorage(): void {
    this.storageService.remove(this.PLAYERS_KEY);
    this.storageService.remove(this.ROUND_KEY);
    this.storageService.remove(this.DAY_COUNT_KEY);
    this.storageService.remove(this.CARD_LIST_KEY);
    this.storageService.remove(this.NEED_CLEAN_AFTER_BOUC_KEY);
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

  private handleAfterPereLoupRound(): void {
    if (this.cardList?.selectedRoles.has(PlayerRoleEnum.JOUEUR_FLUTE)) {
      const joueurFlute = this.players().find(
        (player) => player.card === PlayerRoleEnum.JOUEUR_FLUTE,
      );
      if (joueurFlute?.role === PlayerRoleEnum.LOUP_GAROU) {
        this.roundHandlersService.removeHandlers([PlayerRoleEnum.JOUEUR_FLUTE]);
        this.victoryHandlersService.removeHandler(VictoryEnum.JOUEUR_FLUTE);
      }
    }
  }

  private handlerAfterLoupsEvents(nextHandler: RoundHandler | undefined): void {
    const currentRole = this.round()?.role;
    const nextRole = nextHandler?.getRoundConfig(
      this.players(),
      this.cardList,
    )?.role;
    if (
      currentRole !== undefined &&
      nextRole !== undefined &&
      LOUPS_GAROUS_ROUNDS.includes(currentRole) &&
      !LOUPS_GAROUS_ROUNDS.includes(nextRole)
    ) {
      let newPlayers = this.statusesService.handleWolfTarget(this.players());
      newPlayers = this.statusesService.handleInfectedAncien(newPlayers);
      this.players.set(newPlayers);
    }
  }
}
