import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';
import { Player } from '@/models/player.model';
import { VictoryEnum } from '@/enums/victory.enum';

export class JoueurFluteRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.JOUEUR_FLUTE,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.JOUEUR_FLUTE]!,
    );
  }

  override handleDeath(players: Player[], _deadPlayer: Player): Player[] {
    this.victoryHandlersService.removeHandler(VictoryEnum.JOUEUR_FLUTE);
    return super.handleDeath(players, _deadPlayer);
  }
}
