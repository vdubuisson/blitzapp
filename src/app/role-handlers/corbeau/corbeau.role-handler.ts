import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';

export class CorbeauRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.CORBEAU];

  constructor() {
    super(PlayerRoleEnum.CORBEAU, CorbeauRoleHandler.ROUNDS);
  }
}
