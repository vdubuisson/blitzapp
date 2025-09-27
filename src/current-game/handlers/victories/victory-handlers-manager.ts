import { VICTORIES_PRIORITY } from '@/config/victories-priority';
import { VICTORY_HANDLERS } from '@/config/victory-handlers';
import { Victory } from '@/types/victory';
import { Player } from '@/shared/types/player';
import { VictoryHandlersStore } from '@/game-handlers/victories/victory-handlers-store';
import { inject, Injectable } from '@angular/core';
import { VictoryHandler } from './victory.handler';

@Injectable({
  providedIn: 'root',
})
export class VictoryHandlersManager {
  private readonly victoryHandlers = new Map<Victory, VictoryHandler>();

  private readonly victoryHandlersState = inject(VictoryHandlersStore).state;

  private readonly victoryPriorities = VICTORIES_PRIORITY;

  constructor() {
    this.victoryHandlersState().forEach((victory) =>
      this.createVictoryHandler(victory),
    );
  }

  /**
   * Initializes the victory handlers always required for a game.
   *
   * @param roles - Player roles present in the game.
   */
  initRequiredHandlers(): void {
    this.createVictoryHandler(Victory.NONE);
    this.createVictoryHandler(Victory.VILLAGEOIS);
  }

  /**
   * Removes a victory handler from the service.
   *
   * @param victory - The victory enum to remove.
   */
  removeHandler(victory: Victory): void {
    this.victoryHandlers.delete(victory);
    this.syncState();
  }

  /**
   * Checks if there is a victory condition met among the players; if so, returns the corresponding victory enum.
   * @param players - The list of players to evaluate for victory.
   * @param isFirstDayOrNight - Indicates if it is the first day or night phase.
   * @returns The corresponding victory enum if a victory condition is met, otherwise undefined.
   */
  getVictory(
    players: Player[],
    isFirstDayOrNight: boolean,
  ): Victory | undefined {
    let resultVictory: Victory | undefined;
    for (const victoryEnum of this.victoryPriorities) {
      const victoryHandler = this.victoryHandlers.get(victoryEnum);
      if (victoryHandler?.isVictorious(players, isFirstDayOrNight)) {
        resultVictory = victoryEnum;
        break;
      }
    }
    return resultVictory;
  }

  /**
   * Clears all victory handlers from the service.
   */
  clearHandlers(): void {
    this.victoryHandlers.clear();
    this.syncState();
  }

  createVictoryHandler(victory: Victory): void {
    if (
      !this.victoryHandlers.has(victory) &&
      VICTORY_HANDLERS[victory] !== undefined
    ) {
      this.victoryHandlers.set(victory, new VICTORY_HANDLERS[victory]());
      this.syncState();
    }
  }

  private syncState(): void {
    this.victoryHandlersState.set(new Set(this.victoryHandlers.keys()));
  }
}
