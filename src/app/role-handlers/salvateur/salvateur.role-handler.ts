import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

export class SalvateurRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.SALVATEUR];
  public static override readonly STATUSES: PlayerStatusEnum[] = [
    PlayerStatusEnum.PROTECTED,
  ];

  constructor() {
    super(
      PlayerRoleEnum.SALVATEUR,
      SalvateurRoleHandler.ROUNDS,
      SalvateurRoleHandler.STATUSES,
    );
  }
}
