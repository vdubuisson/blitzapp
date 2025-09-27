import { Victory } from '@/types/victory';
import { Injectable } from '@angular/core';
import { AbstractStore } from '../../../core/storage/abstract-store';

@Injectable({
  providedIn: 'root',
})
export class VictoryHandlersStore extends AbstractStore<
  Set<Victory>,
  Victory[]
> {
  constructor() {
    super('store.victoryHandlers', new Set());
  }

  protected override convertStateToStored(state: Set<Victory>): Victory[] {
    return Array.from(state);
  }

  protected override convertStoredToState(stored: Victory[]): Set<Victory> {
    return new Set(stored);
  }
}
