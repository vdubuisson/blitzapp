import { Player } from '@/models/player.model';
import { DefaultStatusHandler } from '../default/default.status-handler';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { PlayerRoleEnum } from '@/enums/player-role.enum';

export class RustySwordStatusHandler extends DefaultStatusHandler {
  /**
   * Triggers the action for the "Rusty sword" status.
   *
   * @param players - The list of players to process.
   * @return A new array of players with updated statuses.
   */
  override triggerAction(players: Player[]): Player[] {
    const newPlayers = [...players];
    const playerWithSword = newPlayers.find((player) =>
      player.statuses.has(PlayerStatusEnum.RUSTY_SWORD),
    );
    if (playerWithSword !== undefined) {
      playerWithSword.statuses.delete(PlayerStatusEnum.RUSTY_SWORD);
      playerWithSword.isDead = true;
      playerWithSword.killedBy = PlayerRoleEnum.CHEVALIER;
    }
    return newPlayers;
  }
}
