import { Player } from '../../models/player.model';
import { VictoryHandler } from '../victory.handler';
import { isLoupGarou } from '../../utils/roles.utils';

export class VillageoisVictoryHandler implements VictoryHandler {
  isVictorious(players: Player[]): boolean {
    return players
      .filter((player) => !player.isDead)
      .every((player) => !isLoupGarou(player));
  }
}
