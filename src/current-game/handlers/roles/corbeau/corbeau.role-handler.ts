import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { inject } from '@angular/core';
import { DefaultRoleHandler } from '../default/default.role-handler';

export class CorbeauRoleHandler extends DefaultRoleHandler {
  private readonly playersStatusUtility = inject(PlayersStatusUtility);

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
      return this.playersStatusUtility.removeStatusFromPlayersById(
        players,
        PlayerStatusEnum.RAVEN,
        [playerWithStatusId],
      );
    }

    return players;
  }
}
