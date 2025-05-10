import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';

export class SorciereRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [
    RoundEnum.SORCIERE_HEALTH,
    RoundEnum.SORCIERE_KILL,
  ];

  constructor() {
    super(PlayerRoleEnum.SORCIERE, SorciereRoleHandler.ROUNDS);
  }
}
