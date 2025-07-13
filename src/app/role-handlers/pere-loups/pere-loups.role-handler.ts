import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

export class PereLoupsRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.PERE_LOUPS];
  public static override readonly STATUSES: PlayerStatusEnum[] = [
    PlayerStatusEnum.WOLF_TARGET,
    PlayerStatusEnum.NO_POWER,
    PlayerStatusEnum.INFECTED,
    PlayerStatusEnum.DEVOURED,
  ];

  constructor() {
    super(
      PlayerRoleEnum.PERE_LOUPS,
      PereLoupsRoleHandler.ROUNDS,
      PereLoupsRoleHandler.STATUSES,
    );
  }
}
