import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

export class SorciereRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [
    RoundEnum.SORCIERE_HEALTH,
    RoundEnum.SORCIERE_KILL,
  ];

  public static override readonly STATUSES: PlayerStatusEnum[] = [
    PlayerStatusEnum.HEALTH_POTION,
    PlayerStatusEnum.DEATH_POTION,
  ];

  constructor() {
    super(
      PlayerRoleEnum.SORCIERE,
      SorciereRoleHandler.ROUNDS,
      SorciereRoleHandler.STATUSES,
    );
  }
}
