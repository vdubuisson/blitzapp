import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

export class ChienLoupRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.CHIEN_LOUP];
  public static override readonly STATUSES: PlayerStatusEnum[] = [
    PlayerStatusEnum.WOLF_TARGET,
    PlayerStatusEnum.DEVOURED,
  ];

  constructor() {
    super(
      PlayerRoleEnum.CHIEN_LOUP,
      ChienLoupRoleHandler.ROUNDS,
      ChienLoupRoleHandler.STATUSES,
    );
  }
}
