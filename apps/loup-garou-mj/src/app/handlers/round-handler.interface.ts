import { Player } from '../models/player.model';

export interface RoundHandler {
  readonly isOnlyFirstNight: boolean;
  handleAction(players: Player[], selectedPlayerIds: number[]): Player[];
}
