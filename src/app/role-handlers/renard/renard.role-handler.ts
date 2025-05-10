import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';

export class RenardRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.RENARD];

  constructor() {
    super(PlayerRoleEnum.RENARD, RenardRoleHandler.ROUNDS);
  }
}
