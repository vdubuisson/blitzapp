import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';

export class VoyanteRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.VOYANTE];

  constructor() {
    super(PlayerRoleEnum.VOYANTE, VoyanteRoleHandler.ROUNDS);
  }
}
