import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { inject } from '@angular/core';
import { DefaultStatusHandler } from '../default/default.status-handler';

export class InfectedStatusHandler extends DefaultStatusHandler {
  private readonly playersStatusUtility = inject(PlayersStatusUtility);

  /**
   * Triggers the action for the "Infected" status.
   * Handles the transition of the "Infected" status to "Injured" for the player with the "Ancien" role.
   *
   * @param players - The list of players to process.
   * @return A new array of players with updated statuses.
   */
  override triggerAction(players: Player[]): Player[] {
    const ancienIndex = players.findIndex(
      (player) => player.role === PlayerRoleEnum.ANCIEN,
    );
    const ancien = players[ancienIndex];
    if (
      ancien?.statuses.has(PlayerStatusEnum.INFECTED) &&
      !ancien?.statuses.has(PlayerStatusEnum.INJURED)
    ) {
      const newPlayers = [...players];
      newPlayers[ancienIndex] =
        this.playersStatusUtility.removeStatusFromPlayer(
          newPlayers[ancienIndex],
          PlayerStatusEnum.INFECTED,
        );
      newPlayers[ancienIndex] = this.playersStatusUtility.addStatusToPlayer(
        newPlayers[ancienIndex],
        PlayerStatusEnum.INJURED,
      );
      return newPlayers;
    }
    return players;
  }
}
