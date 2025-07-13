import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { VictoryEnum } from '@/enums/victory.enum';

export class JoueurFluteRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [
    RoundEnum.JOUEUR_FLUTE,
    RoundEnum.CHARMED,
  ];

  public static override readonly STATUSES: PlayerStatusEnum[] = [
    PlayerStatusEnum.CHARMED,
  ];

  public static override readonly VICTORIES: VictoryEnum[] = [
    VictoryEnum.JOUEUR_FLUTE,
  ];

  constructor() {
    super(
      PlayerRoleEnum.JOUEUR_FLUTE,
      JoueurFluteRoleHandler.ROUNDS,
      JoueurFluteRoleHandler.STATUSES,
      JoueurFluteRoleHandler.VICTORIES,
    );
  }
}
