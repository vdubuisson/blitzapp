import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';
import { Player } from '@/models/player.model';
import { VictoryEnum } from '@/enums/victory.enum';

export class LoupBlancRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.LOUP_BLANC,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.LOUP_BLANC]!,
    );
  }

  override handleDeath(players: Player[], _deadPlayer: Player): Player[] {
    this.victoryHandlersService.removeHandler(VictoryEnum.LOUP_BLANC);
    return super.handleDeath(players, _deadPlayer);
  }
}
