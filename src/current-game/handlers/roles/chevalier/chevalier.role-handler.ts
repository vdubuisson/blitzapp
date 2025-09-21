import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { Player } from '@/shared/types/player';
import { findLeftNeighbor } from '@/utils/neighbor.utils';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { addStatusToPlayersById } from '@/utils/status.utils';

export class ChevalierRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRole.CHEVALIER, ROLE_METADATA_CONFIG[PlayerRole.CHEVALIER]!);
  }

  override handleDeath(players: Player[], deadPlayer: Player): Player[] {
    let playerToAddStatusId: number | undefined;
    if (deadPlayer.killedBy === PlayerRole.GRAND_MECHANT_LOUP) {
      playerToAddStatusId = players.find(
        (player) => player.role === PlayerRole.GRAND_MECHANT_LOUP,
      )?.id;
    } else if (deadPlayer.killedBy === PlayerRole.LOUP_GAROU) {
      const chevalierIndex = players.indexOf(deadPlayer);
      playerToAddStatusId = findLeftNeighbor(players, chevalierIndex, true)?.id;
    }

    if (playerToAddStatusId !== undefined) {
      return addStatusToPlayersById(players, PlayerStatus.RUSTY_SWORD, [
        playerToAddStatusId,
      ]);
    }

    return players;
  }

  override cleanStatusesAfterDay(players: Player[]): Player[] {
    if (
      players.some(
        (player) => player.role === PlayerRole.CHEVALIER && player.isDead,
      )
    ) {
      return this.statusHandlersManager
        .getHandler(PlayerStatus.RUSTY_SWORD)
        .triggerAction(players);
    }
    return players;
  }
}
