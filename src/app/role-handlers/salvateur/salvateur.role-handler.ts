import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';

export class SalvateurRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.SALVATEUR];

  constructor() {
    super(PlayerRoleEnum.SALVATEUR, SalvateurRoleHandler.ROUNDS);
  }
}
