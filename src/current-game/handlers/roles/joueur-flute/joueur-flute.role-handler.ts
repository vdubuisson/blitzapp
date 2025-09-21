import { PlayerRole } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { Player } from '@/shared/types/player';
import { Victory } from '@/types/victory';

export class JoueurFluteRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRole.JOUEUR_FLUTE,
      ROLE_METADATA_CONFIG[PlayerRole.JOUEUR_FLUTE]!,
    );
  }

  override handleDeath(players: Player[], _deadPlayer: Player): Player[] {
    this.victoryHandlersManager.removeHandler(Victory.JOUEUR_FLUTE);
    return super.handleDeath(players, _deadPlayer);
  }
}
