import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';

export class SoeurRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.SOEURS];

  constructor() {
    super(PlayerRoleEnum.SOEUR, SoeurRoleHandler.ROUNDS);
  }

  override handleDeath(players: Player[], _: Player): Player[] {
    if (
      players
        .filter((player) => player.role === PlayerRoleEnum.SOEUR)
        .every((player) => player.isDead)
    ) {
      this.roundHandlersService.removeHandler(RoundEnum.SOEURS);
    }
    return players;
  }
}
