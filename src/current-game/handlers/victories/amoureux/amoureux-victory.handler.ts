import { PlayerStatus } from '@/types/player-status';
import { Player } from '@/shared/types/player';
import { VictoryHandler } from '@/game-handlers/victories/victory.handler';

export class AmoureuxVictoryHandler implements VictoryHandler {
  isVictorious(players: Player[]): boolean {
    const alivePlayers = players.filter((player) => !player.isDead);
    return (
      alivePlayers.length === 2 &&
      alivePlayers.every((player) => player.statuses.has(PlayerStatus.LOVER))
    );
  }
}
