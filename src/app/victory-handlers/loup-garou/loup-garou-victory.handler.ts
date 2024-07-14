import { Player } from '@/models/player.model';
import { VictoryHandler } from '@/victory-handlers/victory.handler';
import { isLoupGarou } from '@/utils/roles.utils';

export class LoupGarouVictoryHandler implements VictoryHandler {
  isVictorious(players: Player[]): boolean {
    return players.filter((player) => !player.isDead).every(isLoupGarou);
  }
}
