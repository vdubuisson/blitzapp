import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';

export class PereLoupsRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.PERE_LOUPS];

  constructor() {
    super(PlayerRoleEnum.PERE_LOUPS, PereLoupsRoleHandler.ROUNDS);
  }
}
