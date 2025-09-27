import { Player } from '@/shared/types/player';
import { DefaultStatusHandler } from '../default/default.status-handler';
import { PlayerStatus } from '@/types/player-status';
import { PlayerRole } from '@/types/player-role';
import {
  addStatusToPlayer,
  removeStatusFromPlayer,
} from '@/utils/status.utils';

export class InfectedStatusHandler extends DefaultStatusHandler {
  /**
   * Triggers the action for the "Infected" status.
   * Handles the transition of the "Infected" status to "Injured" for the player with the "Ancien" role.
   *
   * @param players - The list of players to process.
   * @return A new array of players with updated statuses.
   */
  override triggerAction(players: Player[]): Player[] {
    const ancienIndex = players.findIndex(
      (player) => player.role === PlayerRole.ANCIEN,
    );
    const ancien = players[ancienIndex];
    if (
      ancien?.statuses.has(PlayerStatus.INFECTED) &&
      !ancien?.statuses.has(PlayerStatus.INJURED)
    ) {
      const newPlayers = [...players];
      newPlayers[ancienIndex] = removeStatusFromPlayer(
        newPlayers[ancienIndex],
        PlayerStatus.INFECTED,
      );
      newPlayers[ancienIndex] = addStatusToPlayer(
        newPlayers[ancienIndex],
        PlayerStatus.INJURED,
      );
      return newPlayers;
    }
    return players;
  }
}
