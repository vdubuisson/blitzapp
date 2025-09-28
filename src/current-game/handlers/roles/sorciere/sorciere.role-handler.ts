import { PlayerRoleEnum } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { Player } from '@/shared/types/player';
import { PlayerStatusEnum } from '@/types/player-status';
import { addStatusToPlayersById } from '@/utils/status.utils';

export class SorciereRoleHandler extends DefaultRoleHandler {
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
      newPlayers = addStatusToPlayersById(
        newPlayers,
        PlayerStatusEnum.HEALTH_POTION,
        [sorciereId],
      );
      newPlayers = addStatusToPlayersById(
        newPlayers,
        PlayerStatusEnum.DEATH_POTION,
        [sorciereId],
      );
    }
    return newPlayers;
  }
}
