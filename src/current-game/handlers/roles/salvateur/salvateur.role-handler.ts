import { PlayerRoleEnum } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { Player } from '@/shared/types/player';
import { PlayerStatusEnum } from '@/types/player-status';
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
