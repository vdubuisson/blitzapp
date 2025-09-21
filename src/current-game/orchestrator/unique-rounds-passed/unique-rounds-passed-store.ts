import { Round } from '@/types/round';
import { Injectable } from '@angular/core';
import { AbstractStore } from '../../../core/storage/abstract-store';

@Injectable({
  providedIn: 'root',
})
export class UniqueRoundsPassedStore extends AbstractStore<
  Set<Round>,
  Round[]
> {
  constructor() {
    super('store.uniqueRoundsPassed', new Set());
  }

  protected override convertStateToStored(state: Set<Round>): Round[] {
    return Array.from(state);
  }

  protected override convertStoredToState(stored: Round[]): Set<Round> {
    return new Set(stored);
  }
}
