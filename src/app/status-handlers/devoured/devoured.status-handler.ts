import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { DefaultStatusHandler } from '../default/default.status-handler';

export class DevouredStatusHandler extends DefaultStatusHandler {
  /**
   * Triggers the action for the "DEVOURED" status.
   *
   * @param players - The list of players to process.
   * @return A new array of players with updated statuses.
   */
  override triggerAction(players: Player[]): Player[] {
    const newPlayers = [...players];
    newPlayers
      .filter((player) => player.statuses.has(PlayerStatusEnum.DEVOURED))
      .forEach((player) => {
        player.statuses.delete(PlayerStatusEnum.DEVOURED);
        player.isDead = true;
      });
    return newPlayers;
  }
}
