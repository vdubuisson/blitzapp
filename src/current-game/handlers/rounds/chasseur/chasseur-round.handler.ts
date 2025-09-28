import { PlayerRoleEnum } from '@/types/player-role';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { RoundEnum } from '@/types/round';
import { Player } from '@/shared/types/player';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class ChasseurRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.CHASSEUR, true, true, RoundTypeEnum.PLAYERS);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players.filter(
      (player) => player.role !== PlayerRoleEnum.CHASSEUR && !player.isDead,
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
      killedBy: PlayerRoleEnum.CHASSEUR,
    };
  }
}
