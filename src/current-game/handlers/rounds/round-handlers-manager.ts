import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { ROLE_ROUNDS } from '@/config/role-rounds';
import { ROUND_HANDLERS } from '@/config/round-handlers';
import { PlayerRole } from '@/types/player-role';
import { Round } from '@/types/round';
import { DefaultRoundHandler } from '@/game-handlers/rounds/default/default-round.handler';
import { RoundHandler } from '@/game-handlers/rounds/round-handler.interface';
import { DefaultRoundHandlersStore } from '@/game-handlers/rounds/default-round-handlers-store';
import { RoundHandlersStore } from '@/game-handlers/rounds/round-handlers-store';
import {
  inject,
  Injectable,
  Injector,
  runInInjectionContext,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoundHandlersManager {
  private readonly injector = inject(Injector);

  private readonly roundHandlers = new Map<Round, RoundHandler>();

  private readonly roundHandlersState = inject(RoundHandlersStore).state;
  private readonly defaultRoundHandlersState = inject(DefaultRoundHandlersStore)
    .state;

  constructor() {
    this.roundHandlersState().forEach((round) =>
      this.createRoundHandler(round),
    );
    this.defaultRoundHandlersState().forEach((round) =>
      this.createDefaultRoundHandler(round),
    );
  }

  /**
   * Initializes the round handlers always required for a game.
   */
  initRequiredHandlers(): void {
    this.createRoundHandler(Round.VILLAGEOIS);
    this.createRoundHandler(Round.LOUP_GAROU);
    this.createRoundHandler(Round.CAPITAINE);
  }

  /**
   * Initializes the default round handlers based on the provided player roles.
   *
   * @param roles - Player roles not played in the game.
   */
  initAsDefaultHandlers(roles: PlayerRole[]): void {
    const rolesSet = new Set<PlayerRole>(roles);
    rolesSet.forEach((role) => {
      ROLE_ROUNDS[role].forEach((round) =>
        this.createDefaultRoundHandler(round),
      );
    });
  }

  /**
   * Retrieves the round handler for a specific round.
   *
   * @param round - The round for which to retrieve the handler.
   * @returns The corresponding round handler or undefined if not found.
   */
  getHandler(round: Round): RoundHandler | undefined {
    return this.roundHandlers.get(round);
  }

  /**
   * Removes round handlers for the specified player roles.
   *
   * @param roles - The player roles for which to remove the handlers.
   */
  removeHandlersByRoles(roles: PlayerRole[]): void {
    const rolesSet = new Set<PlayerRole>(roles);
    const roundsToRemove: Round[] = Array.from(rolesSet.values()).flatMap(
      (role) => ROLE_METADATA_CONFIG[role]?.rounds ?? [],
    );
    roundsToRemove.forEach((round) => this.removeHandler(round));
  }

  /**
   * Clears all round handlers.
   */
  clearHandlers(): void {
    this.roundHandlers.clear();
    this.roundHandlersState.set(new Set());
    this.defaultRoundHandlersState.set(new Set());
  }

  /**
   * Removes the round handler for a specific round.
   *
   * @param round - The round for which to remove the handler.
   */
  removeHandler(round: Round): void {
    this.roundHandlers.delete(round);
    if (this.roundHandlersState().has(round)) {
      this.roundHandlersState.update((state) => {
        state.delete(round);
        return new Set(state);
      });
    }
    if (this.defaultRoundHandlersState().has(round)) {
      this.defaultRoundHandlersState.update((state) => {
        state.delete(round);
        return new Set(state);
      });
    }
  }

  createRoundHandler(round: Round): void {
    if (this.roundHandlers.has(round)) {
      return;
    }
    if (ROUND_HANDLERS[round] === undefined) {
      throw new Error(`Missing RoundHandler config for ${round}`);
    }
    runInInjectionContext(this.injector, () => {
      const roundHandler = new ROUND_HANDLERS[round]();
      this.roundHandlers.set(round, roundHandler);
      this.roundHandlersState.update((state) => new Set([...state, round]));
    });
  }

  private createDefaultRoundHandler(round: Round): void {
    if (this.roundHandlers.has(round)) {
      return;
    }
    if (ROUND_HANDLERS[round] === undefined) {
      throw new Error(`Missing RoundHandler config for ${round}`);
    }
    runInInjectionContext(this.injector, () => {
      const roundHandler = new ROUND_HANDLERS[round]();
      const defaultRoundHandler = new DefaultRoundHandler(
        round,
        roundHandler.isOnlyOnce,
        roundHandler.isDuringDay,
      );
      this.roundHandlers.set(round, defaultRoundHandler);
      this.defaultRoundHandlersState.update(
        (state) => new Set([...state, round]),
      );
    });
  }
}
