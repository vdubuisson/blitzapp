import { Player } from '@/models/player.model';
import { DefaultStatusHandler } from '../default/default.status-handler';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { PlayerRoleEnum } from '@/enums/player-role.enum';

export class InfectedStatusHandler extends DefaultStatusHandler {
  /**
   * Triggers the action for the "Infected" status.
   * Handles the transition of the "Infected" status to "Injured" for the player with the "Ancien" role.
   *
   * @param players - The list of players to process.
   * @return A new array of players with updated statuses.
   */
  override triggerAction(players: Player[]): Player[] {
    const newPlayers = [...players];
    const ancien = newPlayers.find(
      (player) => player.role === PlayerRoleEnum.ANCIEN,
    );
    if (
      ancien?.statuses.has(PlayerStatusEnum.INFECTED) &&
      !ancien?.statuses.has(PlayerStatusEnum.INJURED)
    ) {
      ancien.statuses.delete(PlayerStatusEnum.INFECTED);
      ancien.statuses.add(PlayerStatusEnum.INJURED);
    }
    return newPlayers;
  }
}
