import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

export class IdiotRoleHandler extends DefaultRoleHandler {
  public static override readonly STATUSES: PlayerStatusEnum[] = [
    PlayerStatusEnum.NO_VOTE,
  ];

  constructor() {
    super(
      PlayerRoleEnum.IDIOT,
      DefaultRoleHandler.ROUNDS,
      IdiotRoleHandler.STATUSES,
    );
  }
}
