import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';

export class FrereRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRoleEnum.FRERE, ROLE_METADATA_CONFIG[PlayerRoleEnum.FRERE]!);
  }

  override handleDeath(players: Player[], _: Player): Player[] {
    if (
      players
        .filter((player) => player.role === PlayerRoleEnum.FRERE)
        .every((player) => player.isDead)
    ) {
      this.roundHandlersService.removeHandler(RoundEnum.FRERES);
    }
    return players;
  }
}
