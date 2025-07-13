import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

export class CorbeauRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.CORBEAU];
  public static override readonly STATUSES: PlayerStatusEnum[] = [
    PlayerStatusEnum.RAVEN,
  ];

  constructor() {
    super(
      PlayerRoleEnum.CORBEAU,
      CorbeauRoleHandler.ROUNDS,
      CorbeauRoleHandler.STATUSES,
    );
  }
}
