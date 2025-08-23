import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';
import { Player } from '@/models/player.model';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { removeStatusFromPlayersById } from '@/utils/status.utils';

export class SalvateurRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.SALVATEUR,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.SALVATEUR]!,
    );
  }

  override cleanStatusesAfterDay(players: Player[]): Player[] {
    if (
      players.some(
        (player) => player.role === PlayerRoleEnum.SALVATEUR && player.isDead,
      )
    ) {
      const protectedPlayerId = players.find((player) =>
        player.statuses.has(PlayerStatusEnum.PROTECTED),
      )?.id;

      if (protectedPlayerId !== undefined) {
        return removeStatusFromPlayersById(
          players,
          PlayerStatusEnum.PROTECTED,
          [protectedPlayerId],
        );
      }
    }
    return players;
  }
}
