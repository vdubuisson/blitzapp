import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
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
    const enfantSauvageIndex = newPlayers.findIndex(
      (player) => player.role === PlayerRole.ENFANT_SAUVAGE,
    );
    if (enfantSauvageIndex !== -1 && !newPlayers[enfantSauvageIndex].isDead) {
      newPlayers[enfantSauvageIndex] = {
        ...newPlayers[enfantSauvageIndex],
        role: PlayerRole.LOUP_GAROU,
      };
    }
    return newPlayers;
  }
}
