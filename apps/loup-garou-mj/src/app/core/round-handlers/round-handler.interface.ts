import { Player } from '../models/player.model';
import { Round } from '../models/round.model';

export interface RoundHandler {
  readonly isOnlyOnce: boolean;
  readonly isDuringDay: boolean;
  handleAction(players: Player[], selectedPlayerIds: number[]): Player[];
  getRoundConfig(players: Player[]): Round;
}
