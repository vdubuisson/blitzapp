import { Player } from '../../models/player.model';
import { VictoryHandler } from '../victory.handler';

export class NoneVictoryHandler implements VictoryHandler {
  isVictorious(players: Player[]): boolean {
    return players.filter((player) => !player.isDead).length === 0;
  }
}
