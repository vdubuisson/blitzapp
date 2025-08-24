import { LOUPS_GAROUS_ROUNDS } from '@/configs/loups-garous-rounds';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { VictoryEnum } from '@/enums/victory.enum';
import { CardList } from '@/models/card-list.model';
import { Player } from '@/models/player.model';
import { RoundConfig } from '@/models/round-config.model';
import { RoundHandler } from '@/round-handlers/round-handler.interface';
import { DeathService } from '@/services/death/death.service';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { RoundOrchestrationService } from '@/services/round-orchestration/round-orchestration.service';
import { VictoryHandlersService } from '@/services/victory-handlers/victory-handlers.service';
import { CardChoiceStore } from '@/stores/card-choice/card-choice.store';
import { CurrentPlayersStore } from '@/stores/current-players/current-players.store';
import { CurrentRoundConfigStore } from '@/stores/current-round/current-round-config.store';
import { DayCountStore } from '@/stores/day-count/day-count.store';
import { NeedCleanAfterBoucStore } from '@/stores/need-clean-after-bouc/need-clean-after-bouc.store';
import { getNotPlayedRoles } from '@/utils/roles.utils';
import {
  computed,
  inject,
  Injectable,
  Signal,
  WritableSignal,
} from '@angular/core';
import { Router } from '@angular/router';
import { RoleHandlersService } from '../role-handlers/role-handlers.service';
import { StatusHandlersService } from '../status-handlers/status-handlers.service';

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
  private readonly statusHandlersService = inject(StatusHandlersService);
  private readonly roleHandlersService = inject(RoleHandlersService);

  private readonly players: WritableSignal<Player[]> =
    inject(CurrentPlayersStore).state;
  private readonly roundConfig: WritableSignal<RoundConfig | null> = inject(
    CurrentRoundConfigStore,
  ).state;
  private readonly dayCount: WritableSignal<number> =
    inject(DayCountStore).state;
  private readonly needCleanAfterBouc: WritableSignal<boolean> = inject(
    NeedCleanAfterBoucStore,
  ).state;

  private readonly cardList: Signal<CardList> =
    inject(CardChoiceStore).state.asReadonly();

  readonly isGameInProgress: Signal<boolean> = computed(
    () => this.roundConfig() !== null,
  );

  /**
   * Starts a new game with the given players.
   * @param players - The players participating in the game.
   */
  createGame(players: Player[]): void {
    const cardList = this.cardList();
    this.initGame(players, cardList);
    const isAngePresent = players
      .map((player) => player.role)
      .includes(PlayerRoleEnum.ANGE);
    if (isAngePresent) {
      this.nextDayCount(-1);
    } else {
      this.nextDayCount(0);
    }
    this.setFirstRound();
    this.router.navigate(['game']);
  }

  /**
   * Submits the action for the current round.
   * @param selectedPlayers - The players selected for the action.
   * @param selectedRole - The role selected for the action (optional).
   * @param isEquality - Indicates if the action is an equality (optional).
   */
  submitRoundAction(
    selectedPlayers: number[],
    selectedRole?: PlayerRoleEnum,
    isEquality?: boolean,
  ): void {
    const currentRound = this.roundConfig()?.round;
    if (currentRound !== undefined) {
      const handler = this.roundHandlersService.getHandler(currentRound);
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
    this.roleHandlersService.clearHandlers();
    this.roundHandlersService.clearHandlers();
    this.statusHandlersService.clearHandlers();
    this.victoryHandlersService.clearHandlers();
    this.roundOrchestrationService.resetRoundsOrder();

    this.roundHandlersService.initRequiredHandlers();
    this.victoryHandlersService.initRequiredHandlers();
    const notPlayedRoles = getNotPlayedRoles(players, cardList);
    this.roundHandlersService.initAsDefaultHandlers(notPlayedRoles);
    this.roleHandlersService.initHandlers(players);
    this.statusHandlersService.initHandlers(players);

    let newPlayers = [...players];
    this.roleHandlersService
      .getHandlers()
      .forEach((handler) => (newPlayers = handler.prepareNewGame(newPlayers)));

    this.setPlayers(newPlayers);
  }

  private setFirstRound(): void {
    const firstRound = this.roundOrchestrationService.getFirstRound();
    this.setRound(firstRound);
  }

  private nextRound(): void {
    const currentRound = this.roundConfig()?.round;
    if (currentRound === undefined) {
      throw new Error('No current round');
    }

    if (currentRound === RoundEnum.VOLEUR) {
      this.handleAfterVoleurRound();
    } else if (currentRound === RoundEnum.PERE_LOUPS) {
      this.handleAfterPereLoupRound();
    }

    const currentHandler = this.roundHandlersService.getHandler(currentRound);

    this.handleDaytimeDeaths(currentHandler);

    let nextRound;
    try {
      nextRound = this.roundOrchestrationService.getNextRound(currentRound);
    } catch (error) {
      if (this.checkVictory()) {
        return;
      }
      throw error;
    }

    const nextHandler = this.roundHandlersService.getHandler(nextRound);

    this.handlerAfterLoupsEvents(nextHandler);

    nextRound = this.handleAfterNightDeaths(
      currentHandler,
      currentRound,
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

    if (currentRound === RoundEnum.BOUC) {
      this.needCleanAfterBouc.set(true);
    }

    this.setRound(nextRound);
  }

  private setRound(round: RoundEnum): void {
    const handler = this.roundHandlersService.getHandler(round);
    if (handler !== undefined) {
      const roundConfig = handler.getRoundConfig(
        this.players(),
        this.cardList(),
      );
      this.roundConfig.set(roundConfig);
      if (handler.type === RoundTypeEnum.AUTO) {
        this.submitRoundAction([]);
      }
    }
  }

  private setPlayers(players: Player[]): void {
    this.players.set([...players]);
  }

  private nextDayCount(currentDay?: number): void {
    const nextDay = (currentDay ?? this.dayCount()) + 1;
    this.dayCount.set(nextDay);
  }

  private handleVictory(victory: VictoryEnum): void {
    this.roundConfig.set(null);
    this.needCleanAfterBouc.set(false);
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
      (this.roundConfig()?.isDuringDay && this.dayCount() === 0) ?? false;
    const isFirstNight =
      !this.roundConfig()?.isDuringDay && this.dayCount() === 1;
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
      let playersAfterDay = this.players();

      const playerRoles = new Set(this.players().map((p) => p.role));
      playerRoles.forEach((role) => {
        const roleHandler = this.roleHandlersService.getHandler(role);
        playersAfterDay = roleHandler.cleanStatusesAfterDay(playersAfterDay);
      });

      this.setPlayers(playersAfterDay);
      this.nextDayCount();
    }
  }

  private handleAfterVoleurRound(): void {
    const players = [...this.players()];
    this.initGame(players, this.cardList());
  }

  private handleAfterPereLoupRound(): void {
    if (this.cardList().selectedRoles.has(PlayerRoleEnum.JOUEUR_FLUTE)) {
      const joueurFlute = this.players().find(
        (player) => player.card === PlayerRoleEnum.JOUEUR_FLUTE,
      );
      if (joueurFlute?.role === PlayerRoleEnum.LOUP_GAROU) {
        this.roundHandlersService.removeHandlersByRoles([
          PlayerRoleEnum.JOUEUR_FLUTE,
        ]);
        this.victoryHandlersService.removeHandler(VictoryEnum.JOUEUR_FLUTE);
      }
    }
  }

  private handlerAfterLoupsEvents(nextHandler: RoundHandler | undefined): void {
    const currentRound = this.roundConfig()?.round;
    const nextRound = nextHandler?.getRoundConfig(
      this.players(),
      this.cardList(),
    )?.round;
    if (
      currentRound !== undefined &&
      nextRound !== undefined &&
      LOUPS_GAROUS_ROUNDS.includes(currentRound) &&
      !LOUPS_GAROUS_ROUNDS.includes(nextRound)
    ) {
      let newPlayers = [...this.players()];
      if (
        newPlayers.some((player) =>
          player.statuses.has(PlayerStatusEnum.WOLF_TARGET),
        )
      ) {
        newPlayers = this.statusHandlersService
          .getHandler(PlayerStatusEnum.WOLF_TARGET)
          .triggerAction(newPlayers);
      }
      if (
        newPlayers.some((player) =>
          player.statuses.has(PlayerStatusEnum.INFECTED),
        )
      ) {
        newPlayers = this.statusHandlersService
          .getHandler(PlayerStatusEnum.INFECTED)
          .triggerAction(newPlayers);
      }
      this.players.set(newPlayers);
    }
  }
}
