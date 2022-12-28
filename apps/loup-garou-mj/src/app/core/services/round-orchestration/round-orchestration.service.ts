import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { RoundEnum } from '../../enums/round.enum';
import { RoundHandler } from '../../round-handlers/round-handler.interface';
import { DeathService } from '../death/death.service';
import { RoundHandlersService } from '../round-handlers/round-handlers.service';
import { StorageService } from '../storage/storage.service';

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

  private readonly UNIQUE_ROUNDS_KEY =
    'RoundOrchestrationService_uniqueRoundsPassed';
  private readonly BEFORE_DEATH_KEY =
    'RoundOrchestrationService_beforeDeathRound';

  constructor(
    private roundHandlersService: RoundHandlersService,
    private deathService: DeathService,
    private storageService: StorageService
  ) {
    this.initFromStorage();
  }

  resetRounds(): void {
    this.uniqueRoundsPassed.clear();
    this.storageService.remove(this.UNIQUE_ROUNDS_KEY);
  }

  getNextRound(currentRound: RoundEnum): RoundEnum {
    const currentHandler = this.roundHandlersService.getHandler(currentRound);
    if (currentHandler?.isOnlyOnce) {
      this.uniqueRoundsPassed.add(currentRound);
      this.storageService.set(
        this.UNIQUE_ROUNDS_KEY,
        Array.from(this.uniqueRoundsPassed)
      );
    }

    const firstAfterDeathRound = this.deathService.getNextAfterDeathRound();
    if (firstAfterDeathRound !== undefined) {
      this.beforeDeathRound = currentRound;
      this.storageService.set(this.BEFORE_DEATH_KEY, this.beforeDeathRound);
      return firstAfterDeathRound;
    }
    if (this.beforeDeathRound) {
      currentRound = this.beforeDeathRound;
      this.beforeDeathRound = undefined;
      this.storageService.remove(this.BEFORE_DEATH_KEY);
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

  private initFromStorage(): void {
    combineLatest([
      this.storageService.get<RoundEnum[]>(this.UNIQUE_ROUNDS_KEY),
      this.storageService.get<RoundEnum>(this.BEFORE_DEATH_KEY),
    ]).subscribe(([storedUniqueRounds, storedBeforeDeath]) => {
      if (storedUniqueRounds !== null) {
        this.uniqueRoundsPassed = new Set(storedUniqueRounds);
      }
      if (storedBeforeDeath !== null) {
        this.beforeDeathRound = storedBeforeDeath;
      }
    });
  }
}
