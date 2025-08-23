import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { isLoupGarou } from '@/utils/roles.utils';
import { DefaultRoundHandler } from '../default/default-round.handler';
import { addStatusToPlayer } from '@/utils/status.utils';

export class GrandMechantLoupRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.GRAND_MECHANT_LOUP, false, false, RoundTypeEnum.PLAYERS);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    const isLoupGarouDead = players.some(
      (player) => isLoupGarou(player) && player.isDead,
    );
    return isLoupGarouDead
      ? []
      : players.filter(
          (player) =>
            !isLoupGarou(player) &&
            !player.isDead &&
            !player.statuses.has(PlayerStatusEnum.WOLF_TARGET),
        );
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override affectSelectedPlayer(player: Player): Player {
    const updatedPlayer = addStatusToPlayer(
      player,
      PlayerStatusEnum.WOLF_TARGET,
    );
    updatedPlayer.killedBy = PlayerRoleEnum.GRAND_MECHANT_LOUP;
    return updatedPlayer;
  }
}
