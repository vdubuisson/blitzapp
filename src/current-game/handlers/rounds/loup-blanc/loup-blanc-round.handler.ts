import { PlayerRole } from '@/types/player-role';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { isLoupGarou } from '@/utils/roles.utils';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class LoupBlancRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(Round.LOUP_BLANC, false, false, RoundType.PLAYERS);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players.filter(
      (player) =>
        isLoupGarou(player) &&
        player.role !== PlayerRole.LOUP_BLANC &&
        !player.isDead,
    );
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override affectSelectedPlayer(player: Player): Player {
    return {
      ...player,
      isDead: true,
      killedBy: PlayerRole.LOUP_BLANC,
    };
  }
}
