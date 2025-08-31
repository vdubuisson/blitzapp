import { INNOCENTS_POWER_REMOVAL_ROLES } from '@/config/innocents-power-removal-roles';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import {
  isKilledByInnocents,
  removePowersFromInnocents,
} from '@/utils/roles.utils';
import { DefaultRoleHandler } from '../default/default.role-handler';

export class AncienRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRoleEnum.ANCIEN, ROLE_METADATA_CONFIG[PlayerRoleEnum.ANCIEN]!);
  }

  override handleDeath(players: Player[], deadPlayer: Player): Player[] {
    if (isKilledByInnocents(deadPlayer)) {
      this.roundHandlersService.removeHandlersByRoles(
        INNOCENTS_POWER_REMOVAL_ROLES,
      );
      return removePowersFromInnocents(players);
    }
    return players;
  }
}
