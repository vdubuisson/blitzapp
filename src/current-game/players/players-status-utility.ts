import { Player } from '@/shared/types/player';
import { PlayerStatus } from '@/shared/types/player-status';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayersStatusUtility {
  addStatusToPlayer(player: Player, status: PlayerStatus): Player {
    return {
      ...player,
      statuses: new Set([...player.statuses, status]),
    };
  }

  removeStatusFromPlayer(player: Player, status: PlayerStatus): Player {
    const updatedStatuses = new Set(player.statuses);
    updatedStatuses.delete(status);
    return {
      ...player,
      statuses: updatedStatuses,
    };
  }

  addStatusToPlayersById(
    players: Player[],
    status: PlayerStatus,
    playerIds: number[],
  ): Player[] {
    return players.map((player) =>
      playerIds.includes(player.id)
        ? this.addStatusToPlayer(player, status)
        : player,
    );
  }

  removeStatusFromPlayersById(
    players: Player[],
    status: PlayerStatus,
    playerIds: number[],
  ): Player[] {
    return players.map((player) =>
      playerIds.includes(player.id)
        ? this.removeStatusFromPlayer(player, status)
        : player,
    );
  }
}
