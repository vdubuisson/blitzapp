import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';

export class SectaireRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.SECTAIRE];

  constructor() {
    super(PlayerRoleEnum.SECTAIRE, SectaireRoleHandler.ROUNDS);
  }
}
