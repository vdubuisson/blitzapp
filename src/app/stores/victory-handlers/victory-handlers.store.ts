import { VictoryEnum } from '@/enums/victory.enum';
import { Injectable } from '@angular/core';
import { AbstractStore } from '../abstract-store';

@Injectable({
  providedIn: 'root',
})
export class VictoryHandlersStore extends AbstractStore<
  Set<VictoryEnum>,
  VictoryEnum[]
> {
  constructor() {
    super('store.victoryHandlers', new Set());
  }

  protected override convertStateToStored(
    state: Set<VictoryEnum>,
  ): VictoryEnum[] {
    return Array.from(state);
  }

  protected override convertStoredToState(
    stored: VictoryEnum[],
  ): Set<VictoryEnum> {
    return new Set(stored);
  }
}
