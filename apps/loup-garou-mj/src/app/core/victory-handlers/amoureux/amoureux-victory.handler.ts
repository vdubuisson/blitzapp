import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { Player } from '../../models/player.model';
import { VictoryHandler } from '../victory.handler';

export class AmoureuxVictoryHandler implements VictoryHandler {
  isVictorious(players: Player[]): boolean {
    const alivePlayers = players.filter((player) => !player.isDead);
    return (
      alivePlayers.length === 2 &&
      alivePlayers.every((player) =>
        player.statuses.has(PlayerStatusEnum.LOVER)
      )
    );
  }
}
