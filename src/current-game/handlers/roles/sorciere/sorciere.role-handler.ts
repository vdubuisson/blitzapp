import { PlayerRole } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { Player } from '@/shared/types/player';
import { PlayerStatus } from '@/types/player-status';
import { addStatusToPlayersById } from '@/utils/status.utils';

export class SorciereRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRole.SORCIERE, ROLE_METADATA_CONFIG[PlayerRole.SORCIERE]!);
  }

  override prepareNewGame(players: Player[]): Player[] {
    let newPlayers = super.prepareNewGame(players);
    const sorciereId = newPlayers.find(
      (player) => player.role === PlayerRole.SORCIERE,
    )?.id;
    if (sorciereId !== undefined) {
      newPlayers = addStatusToPlayersById(
        newPlayers,
        PlayerStatus.HEALTH_POTION,
        [sorciereId],
      );
      newPlayers = addStatusToPlayersById(
        newPlayers,
        PlayerStatus.DEATH_POTION,
        [sorciereId],
      );
    }
    return newPlayers;
  }
}
