import { ROUNDS_ORDER_CONFIG } from '@/configs/rounds-order.config';
import { RoundEnum } from '@/enums/round.enum';
import { RoundHandler } from '@/round-handlers/round-handler.interface';
import { DeathService } from '@/services/death/death.service';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { BeforeDeathRoundStore } from '@/stores/before-death-round/before-death-round.store';
import { UniqueRoundsPassedStore } from '@/stores/unique-rounds-passed/unique-rounds-passed.store';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoundOrchestrationService {
  private readonly roundHandlersService = inject(RoundHandlersService);
  private readonly deathService = inject(DeathService);

  private sortedRounds = [...ROUNDS_ORDER_CONFIG];

  private readonly uniqueRoundsPassed = inject(UniqueRoundsPassedStore).state;
  private readonly beforeDeathRound = inject(BeforeDeathRoundStore).state;

  resetRounds(): void {
    this.uniqueRoundsPassed.set(new Set());
  }

  getNextRound(currentRound: RoundEnum): RoundEnum {
    const currentHandler = this.roundHandlersService.getHandler(currentRound);
    if (currentHandler?.isOnlyOnce) {
      this.uniqueRoundsPassed.update(
        (state) => new Set([...state, currentRound]),
      );
    }

    const firstAfterDeathRound = this.deathService.getNextAfterDeathRound();
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
    let nextRound: RoundEnum;
    do {
      nextRound = this.sortedRounds[nextIndex];
      nextHandler = this.roundHandlersService.getHandler(nextRound);
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

    return nextRound;
  }

  getFirstRound(): RoundEnum {
    let nextHandler: RoundHandler | undefined;
    let nextIndex = 0;
    let nextRound: RoundEnum;
    do {
      nextRound = this.sortedRounds[nextIndex];
      nextHandler = this.roundHandlersService.getHandler(nextRound);
      nextIndex++;
      if (nextIndex > this.sortedRounds.length - 1) {
        throw new Error('No first round found');
      }
    } while (nextHandler === undefined);

    return nextRound;
  }

  setVillageoisFirst(): void {
    const sectaireIndex = this.sortedRounds.indexOf(RoundEnum.SECTAIRE);
    const villageoisIndex = this.sortedRounds.indexOf(RoundEnum.VILLAGEOIS);
    this.sortedRounds.splice(villageoisIndex, 1);
    this.sortedRounds.splice(sectaireIndex + 1, 0, RoundEnum.VILLAGEOIS);
  }
}
