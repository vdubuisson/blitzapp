import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';
import { Player } from '@/models/player.model';
import { VictoryEnum } from '@/enums/victory.enum';

export class SectaireRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.SECTAIRE,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.SECTAIRE]!,
    );
  }

  override handleDeath(players: Player[], _deadPlayer: Player): Player[] {
    this.victoryHandlersService.removeHandler(VictoryEnum.SECTAIRE);
    return super.handleDeath(players, _deadPlayer);
  }
}
