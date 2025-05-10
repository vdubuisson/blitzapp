import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';

export class GrandMechantLoupRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [
    RoundEnum.GRAND_MECHANT_LOUP,
  ];

  constructor() {
    super(
      PlayerRoleEnum.GRAND_MECHANT_LOUP,
      GrandMechantLoupRoleHandler.ROUNDS,
    );
  }
}
