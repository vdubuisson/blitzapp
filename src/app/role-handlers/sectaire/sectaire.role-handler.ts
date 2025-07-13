import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { VictoryEnum } from '@/enums/victory.enum';

export class SectaireRoleHandler extends DefaultRoleHandler {
  public static override readonly ROUNDS: RoundEnum[] = [RoundEnum.SECTAIRE];
  public static override readonly STATUSES: PlayerStatusEnum[] = [
    PlayerStatusEnum.BLUE_TEAM,
    PlayerStatusEnum.RED_TEAM,
  ];
  public static override readonly VICTORIES: VictoryEnum[] = [
    VictoryEnum.SECTAIRE,
  ];

  constructor() {
    super(
      PlayerRoleEnum.SECTAIRE,
      SectaireRoleHandler.ROUNDS,
      SectaireRoleHandler.STATUSES,
      SectaireRoleHandler.VICTORIES,
    );
  }
}
