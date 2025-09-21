import { PlayerRole } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { Player } from '@/shared/types/player';
import { PlayerStatus } from '@/types/player-status';
import { removeStatusFromPlayersById } from '@/utils/status.utils';

export class CorbeauRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRole.CORBEAU, ROLE_METADATA_CONFIG[PlayerRole.CORBEAU]!);
  }

  override cleanStatusesAfterDay(players: Player[]): Player[] {
    const playerWithStatusId = players.find((player) =>
      player.statuses.has(PlayerStatus.RAVEN),
    )?.id;

    if (playerWithStatusId !== undefined) {
      return removeStatusFromPlayersById(players, PlayerStatus.RAVEN, [
        playerWithStatusId,
      ]);
    }

    return players;
  }
}
