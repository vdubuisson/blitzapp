import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';

export class MontreurOursRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [
    RoundEnum.MONTREUR_OURS,
  ];

  constructor() {
    super(PlayerRoleEnum.MONTREUR_OURS, MontreurOursRoleHandler.ROUNDS);
  }
}
