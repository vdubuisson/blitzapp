import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { PlayerRole } from '@/types/player-role';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { DefaultRoleHandler } from '../default/default.role-handler';

export class LoupGarouRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRole.LOUP_GAROU, ROLE_METADATA_CONFIG[PlayerRole.LOUP_GAROU]!);
  }

  override handleDeath(players: Player[], _: Player): Player[] {
    this.roundHandlersManager.removeHandler(Round.GRAND_MECHANT_LOUP);
    return players;
  }
}
