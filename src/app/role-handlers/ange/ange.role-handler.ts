import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { VictoryEnum } from '@/enums/victory.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';

export class AngeRoleHandler extends DefaultRoleHandler {
  public static override readonly VICTORIES: VictoryEnum[] = [VictoryEnum.ANGE];

  constructor() {
    super(
      PlayerRoleEnum.ANGE,
      DefaultRoleHandler.ROUNDS,
      DefaultRoleHandler.STATUSES,
      AngeRoleHandler.VICTORIES,
    );
  }
}
