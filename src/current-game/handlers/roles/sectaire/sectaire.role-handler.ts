import { PlayerRoleEnum } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { Player } from '@/shared/types/player';
import { VictoryEnum } from '@/types/victory';

export class SectaireRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.SECTAIRE,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.SECTAIRE]!,
    );
  }

  override handleDeath(players: Player[], _deadPlayer: Player): Player[] {
    this.victoryHandlersManager.removeHandler(VictoryEnum.SECTAIRE);
    return super.handleDeath(players, _deadPlayer);
  }
}
