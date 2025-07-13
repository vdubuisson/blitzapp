import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

export class EnfantSauvageRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [
    RoundEnum.ENFANT_SAUVAGE,
  ];
  public static override readonly STATUSES: PlayerStatusEnum[] = [
    PlayerStatusEnum.CHILD_MODEL,
  ];

  constructor() {
    super(
      PlayerRoleEnum.ENFANT_SAUVAGE,
      EnfantSauvageRoleHandler.ROUNDS,
      EnfantSauvageRoleHandler.STATUSES,
    );
  }
}
