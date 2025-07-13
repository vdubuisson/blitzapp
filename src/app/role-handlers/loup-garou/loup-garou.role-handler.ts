import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { DefaultRoleHandler } from '../default/default.role-handler';

export class LoupGarouRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.LOUP_GAROU,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.LOUP_GAROU]!,
    );
  }

  override handleDeath(players: Player[], _: Player): Player[] {
    this.roundHandlersService.removeHandler(RoundEnum.GRAND_MECHANT_LOUP);
    return players;
  }
}
