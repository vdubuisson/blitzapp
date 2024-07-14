import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import { VictoryHandler } from '@/victory-handlers/victory.handler';

export class LoupBlancVictoryHandler implements VictoryHandler {
  isVictorious(players: Player[]): boolean {
    const alivePlayers = players.filter((player) => !player.isDead);
    return (
      alivePlayers.length === 1 &&
      alivePlayers[0].role === PlayerRoleEnum.LOUP_BLANC
    );
  }
}
