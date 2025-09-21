import { PlayerRole } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class FrereRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRole.FRERE, ROLE_METADATA_CONFIG[PlayerRole.FRERE]!);
  }

  override handleDeath(players: Player[], _: Player): Player[] {
    if (
      players
        .filter((player) => player.role === PlayerRole.FRERE)
        .every((player) => player.isDead)
    ) {
      this.roundHandlersManager.removeHandler(Round.FRERES);
    }
    return players;
  }
}
