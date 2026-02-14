import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { inject } from '@angular/core';
import { DefaultStatusHandler } from '../default/default.status-handler';

export class WolfTargetStatusHandler extends DefaultStatusHandler {
  private readonly playersStatusUtility = inject(PlayersStatusUtility);

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
      if (player.statuses.has(PlayerStatusEnum.WOLF_TARGET)) {
        let newPlayer = this.playersStatusUtility.removeStatusFromPlayer(
          player,
          PlayerStatusEnum.WOLF_TARGET,
        );
        if (
          !player.statuses.has(PlayerStatusEnum.PROTECTED) ||
          player.role === PlayerRoleEnum.PETITE_FILLE
        ) {
          if (
            player.role === PlayerRoleEnum.ANCIEN &&
            !player.statuses.has(PlayerStatusEnum.INJURED)
          ) {
            newPlayer = this.playersStatusUtility.addStatusToPlayer(
              newPlayer,
              PlayerStatusEnum.INJURED,
            );
          } else {
            newPlayer = this.playersStatusUtility.addStatusToPlayer(
              newPlayer,
              PlayerStatusEnum.DEVOURED,
            );
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
