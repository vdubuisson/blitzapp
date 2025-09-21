import { PlayerRole } from '@/types/player-role';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class ChasseurRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(Round.CHASSEUR, true, true, RoundType.PLAYERS);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players.filter(
      (player) => player.role !== PlayerRole.CHASSEUR && !player.isDead,
    );
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override getMinSelectable(_: Player[]): number {
    return 1;
  }

  protected override affectSelectedPlayer(player: Player): Player {
    return {
      ...player,
      isDead: true,
      killedBy: PlayerRole.CHASSEUR,
    };
  }
}
