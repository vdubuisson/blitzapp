import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { VictoryEnum } from '@/enums/victory.enum';

export class CupidonRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [
    RoundEnum.CUPIDON,
    RoundEnum.AMOUREUX,
  ];

  public static override readonly STATUSES: PlayerStatusEnum[] = [
    PlayerStatusEnum.LOVER,
  ];

  public static override readonly VICTORIES: VictoryEnum[] = [
    VictoryEnum.AMOUREUX,
  ];

  constructor() {
    super(
      PlayerRoleEnum.CUPIDON,
      CupidonRoleHandler.ROUNDS,
      CupidonRoleHandler.STATUSES,
      CupidonRoleHandler.VICTORIES,
    );
  }
}
