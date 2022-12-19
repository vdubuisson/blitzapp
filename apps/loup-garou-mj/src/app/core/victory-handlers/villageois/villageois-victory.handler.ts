import { LOUPS_GAROUS_ROLES } from '../../constants/loups-garous-roles';
import { Player } from '../../models/player.model';
import { VictoryHandler } from '../victory.handler';

export class VillageoisVictoryHandler implements VictoryHandler {
  isVictorious(players: Player[]): boolean {
    return players
      .filter((player) => !player.isDead)
      .every((player) => !LOUPS_GAROUS_ROLES.includes(player.role));
  }
}
