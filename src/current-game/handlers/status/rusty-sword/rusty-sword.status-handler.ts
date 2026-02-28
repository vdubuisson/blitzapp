import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { inject } from '@angular/core';
import { DefaultStatusHandler } from '../default/default.status-handler';

export class RustySwordStatusHandler extends DefaultStatusHandler {
  private readonly playersStatusUtility = inject(PlayersStatusUtility);

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
      newPlayers[playerWithSwordIndex] =
        this.playersStatusUtility.removeStatusFromPlayer(
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
