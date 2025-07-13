import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

export class RenardRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.RENARD];
  public static override readonly STATUSES: PlayerStatusEnum[] = [
    PlayerStatusEnum.NO_POWER,
  ];

  constructor() {
    super(
      PlayerRoleEnum.RENARD,
      RenardRoleHandler.ROUNDS,
      RenardRoleHandler.STATUSES,
    );
  }
}
