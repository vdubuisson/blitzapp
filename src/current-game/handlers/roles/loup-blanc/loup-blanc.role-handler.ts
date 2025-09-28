import { PlayerRoleEnum } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { Player } from '@/shared/types/player';
import { VictoryEnum } from '@/types/victory';

export class LoupBlancRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.LOUP_BLANC,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.LOUP_BLANC]!,
    );
  }

  override handleDeath(players: Player[], _deadPlayer: Player): Player[] {
    this.victoryHandlersManager.removeHandler(VictoryEnum.LOUP_BLANC);
    return super.handleDeath(players, _deadPlayer);
  }
}
