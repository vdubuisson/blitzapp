import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { PlayerRoleEnum } from '@/types/player-role';
import { RoundEnum } from '@/types/round';
import { Player } from '@/shared/types/player';
import { DefaultRoleHandler } from '../default/default.role-handler';

export class LoupGarouRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.LOUP_GAROU,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.LOUP_GAROU]!,
    );
  }

  override handleDeath(players: Player[], _: Player): Player[] {
    this.roundHandlersManager.removeHandler(RoundEnum.GRAND_MECHANT_LOUP);
    return players;
  }
}
