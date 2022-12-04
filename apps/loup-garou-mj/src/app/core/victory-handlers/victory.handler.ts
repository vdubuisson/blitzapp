import { Player } from '../models/player.model';

export interface VictoryHandler {
  isVictorious(players: Player[]): boolean;
}
