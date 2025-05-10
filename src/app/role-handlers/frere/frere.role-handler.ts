import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';

export class FrereRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.FRERES];

  constructor() {
    super(PlayerRoleEnum.FRERE, FrereRoleHandler.ROUNDS);
  }

  override handleDeath(players: Player[], _: Player): Player[] {
    if (
      players
        .filter((player) => player.role === PlayerRoleEnum.FRERE)
        .every((player) => player.isDead)
    ) {
      this.roundHandlersService.removeHandler(RoundEnum.FRERES);
    }
    return players;
  }
}
