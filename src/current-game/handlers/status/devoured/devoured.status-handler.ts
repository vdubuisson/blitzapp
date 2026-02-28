import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { Player } from '@/shared/types/player';
import { PlayerStatusEnum } from '@/types/player-status';
import { inject } from '@angular/core';
import { DefaultStatusHandler } from '../default/default.status-handler';

export class DevouredStatusHandler extends DefaultStatusHandler {
  private readonly playersStatusUtility = inject(PlayersStatusUtility);

  /**
   * Triggers the action for the "DEVOURED" status.
   *
   * @param players - The list of players to process.
   * @return A new array of players with updated statuses.
   */
  override triggerAction(players: Player[]): Player[] {
    return players.map((player) => {
      if (player.statuses.has(PlayerStatusEnum.DEVOURED)) {
        const newPlayer = this.playersStatusUtility.removeStatusFromPlayer(
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
