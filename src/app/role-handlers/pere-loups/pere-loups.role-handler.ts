import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { VictoryEnum } from '@/enums/victory.enum';

export class PereLoupsRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.PERE_LOUPS];
  public static override readonly STATUSES: PlayerStatusEnum[] = [
    PlayerStatusEnum.WOLF_TARGET,
    PlayerStatusEnum.NO_POWER,
    PlayerStatusEnum.INFECTED,
    PlayerStatusEnum.DEVOURED,
  ];
  public static override readonly VICTORIES: VictoryEnum[] = [
    VictoryEnum.LOUP_GAROU,
  ];

  constructor() {
    super(
      PlayerRoleEnum.PERE_LOUPS,
      PereLoupsRoleHandler.ROUNDS,
      PereLoupsRoleHandler.STATUSES,
      PereLoupsRoleHandler.VICTORIES,
    );
  }
}
