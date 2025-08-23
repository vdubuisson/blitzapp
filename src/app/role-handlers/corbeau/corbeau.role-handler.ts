import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';
import { Player } from '@/models/player.model';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
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
