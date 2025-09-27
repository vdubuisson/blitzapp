import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { VictoryHandler } from '@/game-handlers/victories/victory.handler';

export class AngeVictoryHandler implements VictoryHandler {
  isVictorious(players: Player[], isFirstDayOrNight: boolean): boolean {
    return (
      isFirstDayOrNight &&
      (players.find((player) => player.role === PlayerRole.ANGE)?.isDead ??
        false)
    );
  }
}
