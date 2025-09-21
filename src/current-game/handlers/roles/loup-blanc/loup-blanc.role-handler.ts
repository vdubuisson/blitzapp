import { PlayerRole } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { Player } from '@/shared/types/player';
import { Victory } from '@/types/victory';

export class LoupBlancRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRole.LOUP_BLANC, ROLE_METADATA_CONFIG[PlayerRole.LOUP_BLANC]!);
  }

  override handleDeath(players: Player[], _deadPlayer: Player): Player[] {
    this.victoryHandlersManager.removeHandler(Victory.LOUP_BLANC);
    return super.handleDeath(players, _deadPlayer);
  }
}
