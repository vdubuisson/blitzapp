import { Player } from '@/models/player.model';
import { DefaultStatusHandler } from '../default/default.status-handler';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
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
      player.statuses.has(PlayerStatusEnum.RUSTY_SWORD),
    );
    if (playerWithSwordIndex > -1) {
      const newPlayers = [...players];
      newPlayers[playerWithSwordIndex] = removeStatusFromPlayer(
        newPlayers[playerWithSwordIndex],
        PlayerStatusEnum.RUSTY_SWORD,
      );
      newPlayers[playerWithSwordIndex].isDead = true;
      newPlayers[playerWithSwordIndex].killedBy = PlayerRoleEnum.CHEVALIER;
      return newPlayers;
    }
    return players;
  }
}
