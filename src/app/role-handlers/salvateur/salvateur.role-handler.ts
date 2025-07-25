import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';
import { Player } from '@/models/player.model';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

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
      const newPlayers = [...players];

      newPlayers
        .find((player) => player.statuses.has(PlayerStatusEnum.PROTECTED))
        ?.statuses.delete(PlayerStatusEnum.PROTECTED);

      return newPlayers;
    }
    return players;
  }
}
