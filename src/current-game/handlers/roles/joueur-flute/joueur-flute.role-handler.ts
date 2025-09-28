import { PlayerRoleEnum } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { Player } from '@/shared/types/player';
import { VictoryEnum } from '@/types/victory';

export class JoueurFluteRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.JOUEUR_FLUTE,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.JOUEUR_FLUTE]!,
    );
  }

  override handleDeath(players: Player[], _deadPlayer: Player): Player[] {
    this.victoryHandlersManager.removeHandler(VictoryEnum.JOUEUR_FLUTE);
    return super.handleDeath(players, _deadPlayer);
  }
}
