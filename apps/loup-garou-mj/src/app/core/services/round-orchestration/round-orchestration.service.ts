import { Injectable } from '@angular/core';
import { RoundEnum } from '../../enums/round.enum';
import { RoundHandler } from '../../round-handlers/round-handler.interface';
import { RoundHandlersService } from '../round-handlers/round-handlers.service';

@Injectable({
  providedIn: 'root',
})
export class RoundOrchestrationService {
  private readonly sortedRounds: RoundEnum[] = [
    RoundEnum.VOLEUR,
    RoundEnum.CUPIDON,
    RoundEnum.VOYANTE,
    RoundEnum.AMOUREUX,
    RoundEnum.LOUP_GAROU,
    RoundEnum.SORCIERE_HEALTH,
    RoundEnum.SORCIERE_KILL,
    RoundEnum.CAPITAINE,
    RoundEnum.VILLAGEOIS,
  ];

  private uniqueRoundsPassed: Set<RoundEnum> = new Set();

  constructor(private roundHandlersService: RoundHandlersService) {}

  resetRounds(): void {
    this.uniqueRoundsPassed.clear();
  }

  getNextRound(currentRound: RoundEnum): RoundEnum {
    // TODO next round = premier round de DeathService.afterDeathRoundQueue si pas vide
    const currentHandler = this.roundHandlersService.getHandler(currentRound);
    if (currentHandler?.isOnlyOnce) {
      this.uniqueRoundsPassed.add(currentRound);
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
      (nextHandler === undefined || this.uniqueRoundsPassed.has(nextRound)) &&
      nextIndex !== currentIndex
    );

    if (nextHandler === undefined || this.uniqueRoundsPassed.has(nextRound)) {
      throw new Error('No next round found');
    }
    return nextRound;
  }

  // TODO En fin de nuit, appeler DeathService.handleNewDeaths

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
}
