import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';

export class LoupGarouRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRoleEnum.LOUP_GAROU);
  }

  override handleDeath(players: Player[], _: Player): Player[] {
    this.roundHandlersService.removeHandler(RoundEnum.GRAND_MECHANT_LOUP);
    return players;
  }
}
