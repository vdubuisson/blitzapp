import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';

export class JoueurFluteRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [
    RoundEnum.JOUEUR_FLUTE,
    RoundEnum.CHARMED,
  ];

  constructor() {
    super(PlayerRoleEnum.JOUEUR_FLUTE, JoueurFluteRoleHandler.ROUNDS);
  }
}
