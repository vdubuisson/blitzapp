import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { Player } from '@/shared/types/player';
import { VictoryHandler } from '@/game-handlers/victories/victory.handler';

export class JoueurFluteVictoryHandler implements VictoryHandler {
  isVictorious(players: Player[]): boolean {
    const isJoueurFluteAlive = !players.find(
      (player) => player.role === PlayerRole.JOUEUR_FLUTE,
    )?.isDead;
    const areAlivePlayersCharmed = players
      .filter(
        (player) => !player.isDead && player.role !== PlayerRole.JOUEUR_FLUTE,
      )
      .every((player) => player.statuses.has(PlayerStatus.CHARMED));
    return isJoueurFluteAlive && areAlivePlayersCharmed;
  }
}
