import { PlayerRoleEnum } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { Player } from '@/shared/types/player';
import { PlayerStatusEnum } from '@/types/player-status';
import { removeStatusFromPlayersById } from '@/utils/status.utils';

export class CorbeauRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.CORBEAU,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.CORBEAU]!,
    );
  }

  override cleanStatusesAfterDay(players: Player[]): Player[] {
    const playerWithStatusId = players.find((player) =>
      player.statuses.has(PlayerStatusEnum.RAVEN),
    )?.id;

    if (playerWithStatusId !== undefined) {
      return removeStatusFromPlayersById(players, PlayerStatusEnum.RAVEN, [
        playerWithStatusId,
      ]);
    }

    return players;
  }
}
