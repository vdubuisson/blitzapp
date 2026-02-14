import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { inject } from '@angular/core';
import { DefaultRoleHandler } from '../default/default.role-handler';

export class SorciereRoleHandler extends DefaultRoleHandler {
  private readonly playersStatusUtility = inject(PlayersStatusUtility);

  constructor() {
    super(
      PlayerRoleEnum.SORCIERE,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.SORCIERE]!,
    );
  }

  override prepareNewGame(players: Player[]): Player[] {
    let newPlayers = super.prepareNewGame(players);
    const sorciereId = newPlayers.find(
      (player) => player.role === PlayerRoleEnum.SORCIERE,
    )?.id;
    if (sorciereId !== undefined) {
      newPlayers = this.playersStatusUtility.addStatusToPlayersById(
        newPlayers,
        PlayerStatusEnum.HEALTH_POTION,
        [sorciereId],
      );
      newPlayers = this.playersStatusUtility.addStatusToPlayersById(
        newPlayers,
        PlayerStatusEnum.DEATH_POTION,
        [sorciereId],
      );
    }
    return newPlayers;
  }
}
