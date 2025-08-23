import { Player } from '@/models/player.model';
import { DefaultStatusHandler } from '../default/default.status-handler';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
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
      (player) => player.role === PlayerRoleEnum.ANCIEN,
    );
    const ancien = players[ancienIndex];
    if (
      ancien?.statuses.has(PlayerStatusEnum.INFECTED) &&
      !ancien?.statuses.has(PlayerStatusEnum.INJURED)
    ) {
      const newPlayers = [...players];
      newPlayers[ancienIndex] = removeStatusFromPlayer(
        newPlayers[ancienIndex],
        PlayerStatusEnum.INFECTED,
      );
      newPlayers[ancienIndex] = addStatusToPlayer(
        newPlayers[ancienIndex],
        PlayerStatusEnum.INJURED,
      );
      return newPlayers;
    }
    return players;
  }
}
