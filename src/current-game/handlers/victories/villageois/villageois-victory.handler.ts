import { Player } from '@/shared/types/player';
import { VictoryHandler } from '@/game-handlers/victories/victory.handler';
import { isLoupGarou } from '@/utils/roles.utils';

export class VillageoisVictoryHandler implements VictoryHandler {
  isVictorious(players: Player[]): boolean {
    return players
      .filter((player) => !player.isDead)
      .every((player) => !isLoupGarou(player));
  }
}
