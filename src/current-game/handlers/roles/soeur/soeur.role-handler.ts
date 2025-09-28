import { PlayerRoleEnum } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/types/round';
import { Player } from '@/shared/types/player';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class SoeurRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRoleEnum.SOEUR, ROLE_METADATA_CONFIG[PlayerRoleEnum.SOEUR]!);
  }

  override handleDeath(players: Player[], _: Player): Player[] {
    if (
      players
        .filter((player) => player.role === PlayerRoleEnum.SOEUR)
        .every((player) => player.isDead)
    ) {
      this.roundHandlersManager.removeHandler(RoundEnum.SOEURS);
    }
    return players;
  }
}
