import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';

export class EnfantSauvageRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [
    RoundEnum.ENFANT_SAUVAGE,
  ];

  constructor() {
    super(PlayerRoleEnum.ENFANT_SAUVAGE, EnfantSauvageRoleHandler.ROUNDS);
  }
}
