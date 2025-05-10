import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';

export class VoleurRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.VOLEUR];

  constructor() {
    super(PlayerRoleEnum.VOLEUR, VoleurRoleHandler.ROUNDS);
  }
}
