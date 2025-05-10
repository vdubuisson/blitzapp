import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';

export class ChienLoupRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.CHIEN_LOUP];

  constructor() {
    super(PlayerRoleEnum.CHIEN_LOUP, ChienLoupRoleHandler.ROUNDS);
  }
}
