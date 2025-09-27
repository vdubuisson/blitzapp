import { Player, StoredPlayer } from '@/shared/types/player';
import { Injectable } from '@angular/core';
import { AbstractStore } from '../../../core/storage/abstract-store';

@Injectable({
  providedIn: 'root',
})
export class DeathsToAnnounceStore extends AbstractStore<
  Player[],
  StoredPlayer[]
> {
  constructor() {
    super('store.deathsToAnnounce', []);
  }

  protected override convertStateToStored(state: Player[]): StoredPlayer[] {
    return state.map((player) => ({
      ...player,
      statuses: Array.from(player.statuses),
    }));
  }

  protected override convertStoredToState(state: StoredPlayer[]): Player[] {
    return state.map((player) => ({
      ...player,
      statuses: new Set(player.statuses),
    }));
  }
}
