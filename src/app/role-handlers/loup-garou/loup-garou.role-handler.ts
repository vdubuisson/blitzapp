import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

export class LoupGarouRoleHandler extends DefaultRoleHandler {
  public static override readonly STATUSES: PlayerStatusEnum[] = [
    PlayerStatusEnum.WOLF_TARGET,
    PlayerStatusEnum.DEVOURED,
  ];

  constructor() {
    super(
      PlayerRoleEnum.LOUP_GAROU,
      DefaultRoleHandler.ROUNDS,
      LoupGarouRoleHandler.STATUSES,
    );
  }

  override handleDeath(players: Player[], _: Player): Player[] {
    this.roundHandlersService.removeHandler(RoundEnum.GRAND_MECHANT_LOUP);
    return players;
  }
}
