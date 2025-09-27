import { PlayerRole } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { Player } from '@/shared/types/player';
import { PlayerStatus } from '@/types/player-status';
import { removeStatusFromPlayersById } from '@/utils/status.utils';

export class SalvateurRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRole.SALVATEUR, ROLE_METADATA_CONFIG[PlayerRole.SALVATEUR]!);
  }

  override cleanStatusesAfterDay(players: Player[]): Player[] {
    if (
      players.some(
        (player) => player.role === PlayerRole.SALVATEUR && player.isDead,
      )
    ) {
      const protectedPlayerId = players.find((player) =>
        player.statuses.has(PlayerStatus.PROTECTED),
      )?.id;

      if (protectedPlayerId !== undefined) {
        return removeStatusFromPlayersById(players, PlayerStatus.PROTECTED, [
          protectedPlayerId,
        ]);
      }
    }
    return players;
  }
}
