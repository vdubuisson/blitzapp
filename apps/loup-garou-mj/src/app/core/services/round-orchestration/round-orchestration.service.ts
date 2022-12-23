import { Injectable } from '@angular/core';
import { RoundEnum } from '../../enums/round.enum';
import { RoundHandler } from '../../round-handlers/round-handler.interface';
import { DeathService } from '../death/death.service';
import { RoundHandlersService } from '../round-handlers/round-handlers.service';

@Injectable({
  providedIn: 'root',
})
export class RoundOrchestrationService {
  private readonly sortedRounds: RoundEnum[] = [
    RoundEnum.VOLEUR,
    RoundEnum.CUPIDON,
    RoundEnum.VOYANTE,
    RoundEnum.RENARD,
    RoundEnum.AMOUREUX,
    RoundEnum.ENFANT_SAUVAGE,
    RoundEnum.CORBEAU,
    RoundEnum.SALVATEUR,
    RoundEnum.CHIEN_LOUP,
    RoundEnum.LOUP_GAROU,
    RoundEnum.GRAND_MECHANT_LOUP,
    RoundEnum.SORCIERE_HEALTH,
    RoundEnum.SORCIERE_KILL,
    RoundEnum.JOUEUR_FLUTE,
    RoundEnum.CHARMED,
    RoundEnum.MONTREUR_OURS,
    RoundEnum.CAPITAINE,
    RoundEnum.VILLAGEOIS,
  ];

  private uniqueRoundsPassed: Set<RoundEnum> = new Set();
  private beforeDeathRound: RoundEnum | undefined;

  constructor(
    private roundHandlersService: RoundHandlersService,
    private deathService: DeathService
  ) {}

  resetRounds(): void {
    this.uniqueRoundsPassed.clear();
  }

  getNextRound(currentRound: RoundEnum): RoundEnum {
    const currentHandler = this.roundHandlersService.getHandler(currentRound);
    if (currentHandler?.isOnlyOnce) {
      this.uniqueRoundsPassed.add(currentRound);
    }

    const firstAfterDeathRound = this.deathService.getNextAfterDeathRound();
    if (firstAfterDeathRound !== undefined) {
      this.beforeDeathRound = currentRound;
      return firstAfterDeathRound;
    }
    if (this.beforeDeathRound) {
      currentRound = this.beforeDeathRound;
      this.beforeDeathRound = undefined;
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
