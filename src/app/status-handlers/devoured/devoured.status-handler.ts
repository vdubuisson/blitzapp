import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { DefaultStatusHandler } from '../default/default.status-handler';
import { removeStatusFromPlayer } from '@/utils/status.utils';

export class DevouredStatusHandler extends DefaultStatusHandler {
  /**
   * Triggers the action for the "DEVOURED" status.
   *
   * @param players - The list of players to process.
   * @return A new array of players with updated statuses.
   */
  override triggerAction(players: Player[]): Player[] {
    return players.map((player) => {
      if (player.statuses.has(PlayerStatusEnum.DEVOURED)) {
        const newPlayer = removeStatusFromPlayer(
          player,
          PlayerStatusEnum.DEVOURED,
        );
        newPlayer.isDead = true;
        return newPlayer;
      }
      return player;
    });
  }
}
