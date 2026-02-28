import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { inject } from '@angular/core';
import { DefaultRoleHandler } from '../default/default.role-handler';

export class SalvateurRoleHandler extends DefaultRoleHandler {
  private readonly playersStatusUtility = inject(PlayersStatusUtility);

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
        return this.playersStatusUtility.removeStatusFromPlayersById(
          players,
          PlayerStatusEnum.PROTECTED,
          [protectedPlayerId],
        );
      }
    }
    return players;
  }
}
