import { LOUPS_GAROUS_ROUNDS } from '@/config/loups-garous-rounds';
import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Victory } from '@/types/victory';
import { CardList } from '@/shared/types/card-list';
import { Player } from '@/shared/types/player';
import { RoundConfig } from '@/shared/types/round-config';
import { RoundHandler } from '@/game-handlers/rounds/round-handler.interface';
import { DeathHandler } from '@/current-game/death/death-handler';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { CardChoiceStore } from '@/new-game/card-choice-store/card-choice-store';
import { CurrentPlayersStore } from '@/current-game/current-players-store/current-players-store';
import { CurrentRoundConfigStore } from '@/current-game/orchestrator/current-round-config/current-round-config-store';
import { DayCountStore } from '@/current-game/orchestrator/day-count/day-count-store';
import { NeedCleanAfterBoucStore } from '@/current-game/orchestrator/need-clean-after-bouc/need-clean-after-bouc-store';
import { getNotPlayedRoles } from '@/utils/roles.utils';
import {
  computed,
  inject,
  Injectable,
  Signal,
  WritableSignal,
} from '@angular/core';
import { Router } from '@angular/router';
import { StatusHandlersManager } from '../handlers/status/status-handlers-manager';
import { RoundOrchestrator } from './round-orchestrator';
import { VictoryHandlersManager } from '@/game-handlers/victories/victory-handlers-manager';
import { RoleHandlersManager } from '@/game-handlers/roles/role-handlers-manager';

@Injectable({
  providedIn: 'root',
})
export class GameOrchestrator {
  private readonly router = inject(Router);
  private readonly roundHandlersManager = inject(RoundHandlersManager);
  private readonly victoryHandlersManager = inject(VictoryHandlersManager);
  private readonly roundOrchestrator = inject(RoundOrchestrator);
  private readonly deathHandler = inject(DeathHandler);
  private readonly statusHandlersManager = inject(StatusHandlersManager);
  private readonly roleHandlersManager = inject(RoleHandlersManager);

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
      .includes(PlayerRole.ANGE);
    if (isAngePresent) {
      this.nextDayCount(-1);
    } else {
      this.nextDayCount(0);
    }
    this.setFirstRound();
    this.router.navigate(['current-game']);
  }

  /**
   * Submits the action for the current round.
   * @param selectedPlayers - The players selected for the action.
   * @param selectedRole - The role selected for the action (optional).
   * @param isEquality - Indicates if the action is an equality (optional).
   */
  submitRoundAction(
    selectedPlayers: number[],
    selectedRole?: PlayerRole,
    isEquality?: boolean,
  ): void {
    const currentRound = this.roundConfig()?.round;
    if (currentRound !== undefined) {
      const handler = this.roundHandlersManager.getHandler(currentRound);
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
    this.roleHandlersManager.clearHandlers();
    this.roundHandlersManager.clearHandlers();
    this.statusHandlersManager.clearHandlers();
    this.victoryHandlersManager.clearHandlers();
    this.roundOrchestrator.resetRoundsOrder();

    this.roundHandlersManager.initRequiredHandlers();
    this.victoryHandlersManager.initRequiredHandlers();
    const notPlayedRoles = getNotPlayedRoles(players, cardList);
    this.roundHandlersManager.initAsDefaultHandlers(notPlayedRoles);
    this.roleHandlersManager.initHandlers(players);
    this.statusHandlersManager.initHandlers(players);

    let newPlayers = [...players];
    this.roleHandlersManager
      .getHandlers()
      .forEach((handler) => (newPlayers = handler.prepareNewGame(newPlayers)));

    this.setPlayers(newPlayers);
  }

  private setFirstRound(): void {
    const firstRound = this.roundOrchestrator.getFirstRound();
    this.setRound(firstRound);
  }

  private nextRound(): void {
    const currentRound = this.roundConfig()?.round;
    if (currentRound === undefined) {
      throw new Error('No current round');
    }

    if (currentRound === Round.VOLEUR) {
      this.handleAfterVoleurRound();
    } else if (currentRound === Round.PERE_LOUPS) {
      this.handleAfterPereLoupRound();
    }

    const currentHandler = this.roundHandlersManager.getHandler(currentRound);

    this.handleDaytimeDeaths(currentHandler);

    let nextRound;
    try {
      nextRound = this.roundOrchestrator.getNextRound(currentRound);
    } catch (error) {
      if (this.checkVictory()) {
        return;
      }
      throw error;
    }

    const nextHandler = this.roundHandlersManager.getHandler(nextRound);

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

    if (currentRound === Round.BOUC) {
      this.needCleanAfterBouc.set(true);
    }

    this.setRound(nextRound);
  }

  private setRound(round: Round): void {
    const handler = this.roundHandlersManager.getHandler(round);
    if (handler !== undefined) {
      const roundConfig = handler.getRoundConfig(
        this.players(),
        this.cardList(),
      );
      this.roundConfig.set(roundConfig);
      if (handler.type === RoundType.AUTO) {
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

  private handleVictory(victory: Victory): void {
    this.roundConfig.set(null);
    this.needCleanAfterBouc.set(false);
    this.roundOrchestrator.resetRounds();
    this.deathHandler.reset();
    this.roundHandlersManager.clearHandlers();
    this.victoryHandlersManager.clearHandlers();
    this.router.navigate(['victory'], { queryParams: { victory } });
  }

  private handleDaytimeDeaths(currentHandler: RoundHandler | undefined) {
    if (currentHandler?.isDuringDay) {
      const playersAfterDeath = this.deathHandler.handleNewDeaths(
        this.players(),
      );
      this.setPlayers(playersAfterDeath);
    }
  }

  private handleAfterNightDeaths(
    currentHandler: RoundHandler | undefined,
    currentRoundRole: Round,
    nextHandler: RoundHandler | undefined,
    nextRound: Round,
  ): Round {
    if (nextHandler?.isDuringDay && !currentHandler?.isDuringDay) {
      const playersAfterDeath = this.deathHandler.handleNewDeaths(
        this.players(),
      );
      this.setPlayers(playersAfterDeath);
      return this.roundOrchestrator.getNextRound(currentRoundRole);
    }
    return nextRound;
  }

  private handleDayRound(
    currentHandler: RoundHandler | undefined,
    nextHandler: RoundHandler | undefined,
    nextRound: Round,
  ): boolean {
    if (
      (nextHandler?.isDuringDay || currentHandler?.isDuringDay) &&
      nextRound !== Round.CHASSEUR
    ) {
      this.deathHandler.announceDeaths();
      return this.checkVictory();
    }
    return false;
  }

  private checkVictory(): boolean {
    const isFirstDay =
      (this.roundConfig()?.isDuringDay && this.dayCount() === 0) ?? false;
    const isFirstNight =
      !this.roundConfig()?.isDuringDay && this.dayCount() === 1;
    const victory = this.victoryHandlersManager.getVictory(
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
        const roleHandler = this.roleHandlersManager.getHandler(role);
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
    if (this.cardList().selectedRoles.has(PlayerRole.JOUEUR_FLUTE)) {
      const joueurFlute = this.players().find(
        (player) => player.card === PlayerRole.JOUEUR_FLUTE,
      );
      if (joueurFlute?.role === PlayerRole.LOUP_GAROU) {
        this.roundHandlersManager.removeHandlersByRoles([
          PlayerRole.JOUEUR_FLUTE,
        ]);
        this.victoryHandlersManager.removeHandler(Victory.JOUEUR_FLUTE);
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
          player.statuses.has(PlayerStatus.WOLF_TARGET),
        )
      ) {
        newPlayers = this.statusHandlersManager
          .getHandler(PlayerStatus.WOLF_TARGET)
          .triggerAction(newPlayers);
      }
      if (
        newPlayers.some((player) => player.statuses.has(PlayerStatus.INFECTED))
      ) {
        newPlayers = this.statusHandlersManager
          .getHandler(PlayerStatus.INFECTED)
          .triggerAction(newPlayers);
      }
      this.players.set(newPlayers);
    }
  }
}
