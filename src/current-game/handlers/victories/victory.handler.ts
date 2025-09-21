import { Player } from '@/shared/types/player';

export interface VictoryHandler {
  isVictorious(players: Player[], isFirstDayOrNight?: boolean): boolean;
}
