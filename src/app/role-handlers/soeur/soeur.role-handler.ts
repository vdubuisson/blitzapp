import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';

export class SoeurRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRoleEnum.SOEUR, ROLE_METADATA_CONFIG[PlayerRoleEnum.SOEUR]!);
  }

  override handleDeath(players: Player[], _: Player): Player[] {
    if (
      players
        .filter((player) => player.role === PlayerRoleEnum.SOEUR)
        .every((player) => player.isDead)
    ) {
      this.roundHandlersService.removeHandler(RoundEnum.SOEURS);
    }
    return players;
  }
}
