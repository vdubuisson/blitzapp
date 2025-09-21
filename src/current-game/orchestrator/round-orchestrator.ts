import { ROUNDS_ORDER } from '@/config/rounds-order';
import { Round } from '@/types/round';
import { RoundHandler } from '@/game-handlers/rounds/round-handler.interface';
import { DeathHandler } from '@/current-game/death/death-handler';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { BeforeDeathRoundStore } from '@/current-game/orchestrator/before-death-round/before-death-round-store';
import { DayCountStore } from '@/current-game/orchestrator/day-count/day-count-store';
import { UniqueRoundsPassedStore } from '@/current-game/orchestrator/unique-rounds-passed/unique-rounds-passed-store';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoundOrchestrator {
  private readonly roundHandlersManager = inject(RoundHandlersManager);
  private readonly deathHandler = inject(DeathHandler);

  private sortedRounds = [...ROUNDS_ORDER];

  private readonly uniqueRoundsPassed = inject(UniqueRoundsPassedStore).state;
  private readonly beforeDeathRound = inject(BeforeDeathRoundStore).state;
  private readonly dayCount = inject(DayCountStore).state.asReadonly();

  /**
   * Resets the rounds passed and the before death round.
   */
  resetRounds(): void {
    this.uniqueRoundsPassed.set(new Set());
    this.beforeDeathRound.set(null);
  }

  /**
   * Get the next round.
   * @param currentRound - The current round.
   * @returns The next round.
   */
  getNextRound(currentRound: Round): Round {
    const currentHandler = this.roundHandlersManager.getHandler(currentRound);
    if (currentHandler?.isOnlyOnce) {
      this.uniqueRoundsPassed.update(
        (state) => new Set([...state, currentRound]),
      );
    }

    const firstAfterDeathRound = this.deathHandler.getNextAfterDeathRound();
    if (firstAfterDeathRound !== undefined) {
      this.beforeDeathRound.set(currentRound);
      return firstAfterDeathRound;
    }
    const currentBeforeDeathRound = this.beforeDeathRound();
    if (currentBeforeDeathRound) {
      currentRound = currentBeforeDeathRound;
      this.beforeDeathRound.set(null);
    }

    const currentIndex = this.sortedRounds.indexOf(currentRound);
    let nextHandler: RoundHandler | undefined;
    let nextIndex = currentIndex + 1;
    if (nextIndex > this.sortedRounds.length - 1) {
      nextIndex = 0;
    }
    let nextRound: Round;
    do {
      nextRound = this.sortedRounds[nextIndex];
      nextHandler = this.roundHandlersManager.getHandler(nextRound);
      nextIndex++;
      if (nextIndex > this.sortedRounds.length - 1) {
        nextIndex = 0;
      }
    } while (
      (nextHandler === undefined || this.uniqueRoundsPassed().has(nextRound)) &&
      nextIndex !== currentIndex
    );

    if (nextHandler === undefined || this.uniqueRoundsPassed().has(nextRound)) {
      throw new Error('No next round found');
    }

    if (nextRound === Round.LOUP_BLANC && this.dayCount() % 2 !== 0) {
      return this.getNextRound(Round.LOUP_BLANC);
    }

    return nextRound;
  }

  /**
   * Get the first round of the game.
   * @returns The first round.
   */
  getFirstRound(): Round {
    let nextHandler: RoundHandler | undefined;
    let nextIndex = 0;
    let nextRound: Round;
    do {
      nextRound = this.sortedRounds[nextIndex];
      nextHandler = this.roundHandlersManager.getHandler(nextRound);
      nextIndex++;
      if (nextIndex > this.sortedRounds.length - 1) {
        throw new Error('No first round found');
      }
    } while (nextHandler === undefined);

    return nextRound;
  }

  /**
   * Sets the villageois round to be first in the sorted rounds.
   */
  setVillageoisFirst(): void {
    const sectaireIndex = this.sortedRounds.indexOf(Round.SECTAIRE);
    const villageoisIndex = this.sortedRounds.indexOf(Round.VILLAGEOIS);
    this.sortedRounds.splice(villageoisIndex, 1);
    this.sortedRounds.splice(sectaireIndex + 1, 0, Round.VILLAGEOIS);
  }

  resetRoundsOrder(): void {
    this.sortedRounds = [...ROUNDS_ORDER];
  }
}
