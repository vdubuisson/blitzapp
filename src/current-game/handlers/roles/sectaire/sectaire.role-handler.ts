import { PlayerRole } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { Player } from '@/shared/types/player';
import { Victory } from '@/types/victory';

export class SectaireRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRole.SECTAIRE, ROLE_METADATA_CONFIG[PlayerRole.SECTAIRE]!);
  }

  override handleDeath(players: Player[], _deadPlayer: Player): Player[] {
    this.victoryHandlersManager.removeHandler(Victory.SECTAIRE);
    return super.handleDeath(players, _deadPlayer);
  }
}
