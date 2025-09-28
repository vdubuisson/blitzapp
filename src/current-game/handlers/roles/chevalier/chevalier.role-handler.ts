import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { Player } from '@/shared/types/player';
import { findLeftNeighbor } from '@/utils/neighbor.utils';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { addStatusToPlayersById } from '@/utils/status.utils';

export class ChevalierRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.CHEVALIER,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.CHEVALIER]!,
    );
  }

  override handleDeath(players: Player[], deadPlayer: Player): Player[] {
    let playerToAddStatusId: number | undefined;
    if (deadPlayer.killedBy === PlayerRoleEnum.GRAND_MECHANT_LOUP) {
      playerToAddStatusId = players.find(
        (player) => player.role === PlayerRoleEnum.GRAND_MECHANT_LOUP,
      )?.id;
    } else if (deadPlayer.killedBy === PlayerRoleEnum.LOUP_GAROU) {
      const chevalierIndex = players.indexOf(deadPlayer);
      playerToAddStatusId = findLeftNeighbor(players, chevalierIndex, true)?.id;
    }

    if (playerToAddStatusId !== undefined) {
      return addStatusToPlayersById(players, PlayerStatusEnum.RUSTY_SWORD, [
        playerToAddStatusId,
      ]);
    }

    return players;
  }

  override cleanStatusesAfterDay(players: Player[]): Player[] {
    if (
      players.some(
        (player) => player.role === PlayerRoleEnum.CHEVALIER && player.isDead,
      )
    ) {
      return this.statusHandlersManager
        .getHandler(PlayerStatusEnum.RUSTY_SWORD)
        .triggerAction(players);
    }
    return players;
  }
}
