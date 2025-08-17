import { VICTORIES_PRIORITY_CONFIG } from '@/configs/victories-priority.config';
import { VICTORY_HANDLERS_CONFIG } from '@/configs/victory-handlers.config';
import { VictoryEnum } from '@/enums/victory.enum';
import { Player } from '@/models/player.model';
import { VictoryHandlersStore } from '@/stores/victory-handlers/victory-handlers.store';
import { VictoryHandler } from '@/victory-handlers/victory.handler';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VictoryHandlersService {
  private readonly victoryHandlers = new Map<VictoryEnum, VictoryHandler>();

  private readonly victoryHandlersState = inject(VictoryHandlersStore).state;

  private readonly victoryPriorities = VICTORIES_PRIORITY_CONFIG;

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
    this.createVictoryHandler(VictoryEnum.NONE);
    this.createVictoryHandler(VictoryEnum.VILLAGEOIS);
  }

  /**
   * Removes a victory handler from the service.
   *
   * @param victory - The victory enum to remove.
   */
  removeHandler(victory: VictoryEnum): void {
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
  ): VictoryEnum | undefined {
    let resultVictory: VictoryEnum | undefined;
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

  createVictoryHandler(victory: VictoryEnum): void {
    if (
      !this.victoryHandlers.has(victory) &&
      VICTORY_HANDLERS_CONFIG[victory] !== undefined
    ) {
      this.victoryHandlers.set(victory, new VICTORY_HANDLERS_CONFIG[victory]());
      this.syncState();
    }
  }

  private syncState(): void {
    this.victoryHandlersState.set(new Set(this.victoryHandlers.keys()));
  }
}
