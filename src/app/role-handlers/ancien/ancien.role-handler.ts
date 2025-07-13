import { INNOCENTS_POWER_REMOVAL_ROLES } from '@/configs/innocents-power-removal-roles';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import {
  isKilledByInnocents,
  removePowersFromInnocents,
} from '@/utils/roles.utils';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

export class AncienRoleHandler extends DefaultRoleHandler {
  public static override readonly STATUSES: PlayerStatusEnum[] = [
    PlayerStatusEnum.INJURED,
  ];

  constructor() {
    super(
      PlayerRoleEnum.ANCIEN,
      DefaultRoleHandler.ROUNDS,
      AncienRoleHandler.STATUSES,
    );
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
