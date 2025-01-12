import { Player, StoredPlayer } from '@/models/player.model';
import { Injectable } from '@angular/core';
import { AbstractStore } from '../abstract-store';

@Injectable({
  providedIn: 'root',
})
export class CurrentPlayersStore extends AbstractStore<
  Player[],
  StoredPlayer[]
> {
  constructor() {
    super('store.currentPlayers', []);
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
