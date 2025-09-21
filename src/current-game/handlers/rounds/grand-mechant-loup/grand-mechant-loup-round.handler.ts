import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { isLoupGarou } from '@/utils/roles.utils';
import { DefaultRoundHandler } from '../default/default-round.handler';
import { addStatusToPlayer } from '@/utils/status.utils';

export class GrandMechantLoupRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(Round.GRAND_MECHANT_LOUP, false, false, RoundType.PLAYERS);
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
            !player.statuses.has(PlayerStatus.WOLF_TARGET),
        );
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override affectSelectedPlayer(player: Player): Player {
    const updatedPlayer = addStatusToPlayer(player, PlayerStatus.WOLF_TARGET);
    updatedPlayer.killedBy = PlayerRole.GRAND_MECHANT_LOUP;
    return updatedPlayer;
  }
}
