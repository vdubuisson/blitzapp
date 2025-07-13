import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { VictoryEnum } from '@/enums/victory.enum';

export class LoupBlancRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.LOUP_BLANC];
  public static override readonly STATUSES: PlayerStatusEnum[] = [
    PlayerStatusEnum.WOLF_TARGET,
    PlayerStatusEnum.DEVOURED,
  ];
  public static override readonly VICTORIES: VictoryEnum[] = [
    VictoryEnum.LOUP_BLANC,
    VictoryEnum.LOUP_GAROU,
  ];

  constructor() {
    super(
      PlayerRoleEnum.LOUP_BLANC,
      LoupBlancRoleHandler.ROUNDS,
      LoupBlancRoleHandler.STATUSES,
      LoupBlancRoleHandler.VICTORIES,
    );
  }
}
