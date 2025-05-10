import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';

export class LoupBlancRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.LOUP_BLANC];

  constructor() {
    super(PlayerRoleEnum.LOUP_BLANC, LoupBlancRoleHandler.ROUNDS);
  }
}
