import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import { DefaultStatusHandler } from '../default/default.status-handler';

export class ChildModelStatusHandler extends DefaultStatusHandler {
  /**
   * Handles the death of a player with the CHILD_MODEL status.
   *
   * @param players - The list of players in the game.
   * @return The updated list of players after handling the death.
   */
  override handleDeath(players: Player[], _: Player): Player[] {
    const newPlayers = [...players];
    const enfantSauvage = newPlayers.find(
      (player) => player.role === PlayerRoleEnum.ENFANT_SAUVAGE,
    );
    if (enfantSauvage !== undefined && !enfantSauvage.isDead) {
      enfantSauvage.role = PlayerRoleEnum.LOUP_GAROU;
    }
    return newPlayers;
  }
}
