import { Player } from '@/models/player.model';
import { DefaultStatusHandler } from '../default/default.status-handler';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { PlayerRoleEnum } from '@/enums/player-role.enum';

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
    const newPlayers = [...players];
    newPlayers
      .filter((player) => player.statuses.has(PlayerStatusEnum.WOLF_TARGET))
      .forEach((player) => {
        player.statuses.delete(PlayerStatusEnum.WOLF_TARGET);
        if (
          !player.statuses.has(PlayerStatusEnum.PROTECTED) ||
          player.role === PlayerRoleEnum.PETITE_FILLE
        ) {
          if (
            player.role === PlayerRoleEnum.ANCIEN &&
            !player.statuses.has(PlayerStatusEnum.INJURED)
          ) {
            player.statuses.add(PlayerStatusEnum.INJURED);
          } else {
            player.statuses.add(PlayerStatusEnum.DEVOURED);
          }
        } else {
          player.killedBy = undefined;
        }
      });
    return newPlayers;
  }
}
