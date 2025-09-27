import { Player } from '@/shared/types/player';
import { DefaultStatusHandler } from '../default/default.status-handler';
import { PlayerStatus } from '@/types/player-status';
import { PlayerRole } from '@/types/player-role';
import {
  addStatusToPlayer,
  removeStatusFromPlayer,
} from '@/utils/status.utils';

export class WolfTargetStatusHandler extends DefaultStatusHandler {
  /**
   * Handles the action triggered by the WOLF_TARGET status.
   * If a player is targeted by wolves, they are either devoured or injured,
   * unless they are protected or are a Petite Fille.
   *
   * @param players - The list of players to process.
   * @returns A new array of players with updated statuses.
   */
  override triggerAction(players: Player[]): Player[] {
    return players.map((player) => {
      if (player.statuses.has(PlayerStatus.WOLF_TARGET)) {
        let newPlayer = removeStatusFromPlayer(
          player,
          PlayerStatus.WOLF_TARGET,
        );
        if (
          !player.statuses.has(PlayerStatus.PROTECTED) ||
          player.role === PlayerRole.PETITE_FILLE
        ) {
          if (
            player.role === PlayerRole.ANCIEN &&
            !player.statuses.has(PlayerStatus.INJURED)
          ) {
            newPlayer = addStatusToPlayer(newPlayer, PlayerStatus.INJURED);
          } else {
            newPlayer = addStatusToPlayer(newPlayer, PlayerStatus.DEVOURED);
          }
        } else {
          newPlayer.killedBy = undefined;
        }
        return newPlayer;
      }
      return player;
    });
  }
}
