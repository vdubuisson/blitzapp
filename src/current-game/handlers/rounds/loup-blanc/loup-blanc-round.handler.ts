import { PlayerRoleEnum } from '@/types/player-role';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { RoundEnum } from '@/types/round';
import { Player } from '@/shared/types/player';
import { isLoupGarou } from '@/utils/roles.utils';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class LoupBlancRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.LOUP_BLANC, false, false, RoundTypeEnum.PLAYERS);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players.filter(
      (player) =>
        isLoupGarou(player) &&
        player.role !== PlayerRoleEnum.LOUP_BLANC &&
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
      killedBy: PlayerRoleEnum.LOUP_BLANC,
    };
  }
}
