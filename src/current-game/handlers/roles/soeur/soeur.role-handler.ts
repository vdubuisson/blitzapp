import { PlayerRole } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class SoeurRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRole.SOEUR, ROLE_METADATA_CONFIG[PlayerRole.SOEUR]!);
  }

  override handleDeath(players: Player[], _: Player): Player[] {
    if (
      players
        .filter((player) => player.role === PlayerRole.SOEUR)
        .every((player) => player.isDead)
    ) {
      this.roundHandlersManager.removeHandler(Round.SOEURS);
    }
    return players;
  }
}
