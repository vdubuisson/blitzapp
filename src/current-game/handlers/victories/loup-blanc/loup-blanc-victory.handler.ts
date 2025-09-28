import { PlayerRoleEnum } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { VictoryHandler } from '@/game-handlers/victories/victory.handler';

export class LoupBlancVictoryHandler implements VictoryHandler {
  isVictorious(players: Player[]): boolean {
    const alivePlayers = players.filter((player) => !player.isDead);
    return (
      alivePlayers.length === 1 &&
      alivePlayers[0].role === PlayerRoleEnum.LOUP_BLANC
    );
  }
}
