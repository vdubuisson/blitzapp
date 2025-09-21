import { Player } from '@/shared/types/player';
import { VictoryHandler } from '@/game-handlers/victories/victory.handler';

export class NoneVictoryHandler implements VictoryHandler {
  isVictorious(players: Player[]): boolean {
    return players.filter((player) => !player.isDead).length === 0;
  }
}
