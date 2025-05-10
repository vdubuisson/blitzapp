import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';

export class CupidonRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [
    RoundEnum.CUPIDON,
    RoundEnum.AMOUREUX,
  ];

  constructor() {
    super(PlayerRoleEnum.CUPIDON, CupidonRoleHandler.ROUNDS);
  }
}
