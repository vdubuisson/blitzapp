import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

export class CupidonRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [
    RoundEnum.CUPIDON,
    RoundEnum.AMOUREUX,
  ];

  public static override readonly STATUSES: PlayerStatusEnum[] = [
    PlayerStatusEnum.LOVER,
  ];

  constructor() {
    super(
      PlayerRoleEnum.CUPIDON,
      CupidonRoleHandler.ROUNDS,
      CupidonRoleHandler.STATUSES,
    );
  }
}
