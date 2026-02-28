import { INNOCENTS_POWER_REMOVAL_ROLES } from '@/config/innocents-power-removal-roles';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { PlayersRoleUtility } from '@/current-game/players/players-role-utility';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { inject } from '@angular/core';
import { DefaultRoleHandler } from '../default/default.role-handler';

export class AncienRoleHandler extends DefaultRoleHandler {
  private readonly playersRoleUtility = inject(PlayersRoleUtility);

  constructor() {
    super(PlayerRoleEnum.ANCIEN, ROLE_METADATA_CONFIG[PlayerRoleEnum.ANCIEN]!);
  }

  override handleDeath(players: Player[], deadPlayer: Player): Player[] {
    if (this.playersRoleUtility.isKilledByInnocents(deadPlayer)) {
      this.roundHandlersManager.removeHandlersByRoles(
        INNOCENTS_POWER_REMOVAL_ROLES,
      );
      return this.playersRoleUtility.removePowersFromInnocents(players);
    }
    return players;
  }
}
