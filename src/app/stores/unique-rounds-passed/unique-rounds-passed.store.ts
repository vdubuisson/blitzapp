import { RoundEnum } from '@/enums/round.enum';
import { Injectable } from '@angular/core';
import { AbstractStore } from '../abstract-store';

@Injectable({
  providedIn: 'root',
})
export class UniqueRoundsPassedStore extends AbstractStore<
  Set<RoundEnum>,
  RoundEnum[]
> {
  constructor() {
    super('store.uniqueRoundsPassed', new Set());
  }

  protected override convertStateToStored(state: Set<RoundEnum>): RoundEnum[] {
    return Array.from(state);
  }

  protected override convertStoredToState(stored: RoundEnum[]): Set<RoundEnum> {
    return new Set(stored);
  }
}
