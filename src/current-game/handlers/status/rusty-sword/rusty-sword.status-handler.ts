import { Player } from '@/shared/types/player';
import { DefaultStatusHandler } from '../default/default.status-handler';
import { PlayerStatus } from '@/types/player-status';
import { PlayerRole } from '@/types/player-role';
import { removeStatusFromPlayer } from '@/utils/status.utils';

export class RustySwordStatusHandler extends DefaultStatusHandler {
  /**
   * Triggers the action for the "Rusty sword" status.
   *
   * @param players - The list of players to process.
   * @return A new array of players with updated statuses.
   */
  override triggerAction(players: Player[]): Player[] {
    const playerWithSwordIndex = players.findIndex((player) =>
      player.statuses.has(PlayerStatus.RUSTY_SWORD),
    );
    if (playerWithSwordIndex > -1) {
      const newPlayers = [...players];
      newPlayers[playerWithSwordIndex] = removeStatusFromPlayer(
        newPlayers[playerWithSwordIndex],
        PlayerStatus.RUSTY_SWORD,
      );
      newPlayers[playerWithSwordIndex].isDead = true;
      newPlayers[playerWithSwordIndex].killedBy = PlayerRole.CHEVALIER;
      return newPlayers;
    }
    return players;
  }
}
