import { Injectable } from '@angular/core';
import { AbstractStore } from '../../../core/storage/abstract-store';

@Injectable({
  providedIn: 'root',
})
export class KnownDeathsStore extends AbstractStore<Set<number>, number[]> {
  constructor() {
    super('store.knownDeaths', new Set());
  }

  protected override convertStateToStored(state: Set<number>): number[] {
    return Array.from(state);
  }

  protected override convertStoredToState(state: number[]): Set<number> {
    return new Set(state);
  }
}
