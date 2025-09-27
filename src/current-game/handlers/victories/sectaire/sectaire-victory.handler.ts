import { PlayerStatus } from '@/types/player-status';
import { Player } from '@/shared/types/player';
import { VictoryHandler } from '@/game-handlers/victories/victory.handler';
import { PlayerRole } from '@/types/player-role';

export class SectaireVictoryHandler implements VictoryHandler {
  isVictorious(players: Player[]): boolean {
    const sectairePlayer = players.find(
      (player) => player.role === PlayerRole.SECTAIRE,
    );
    if (sectairePlayer) {
      const sectaireTeam = sectairePlayer.statuses.has(PlayerStatus.BLUE_TEAM)
        ? PlayerStatus.BLUE_TEAM
        : PlayerStatus.RED_TEAM;

      return (
        !sectairePlayer.isDead &&
        players
          .filter((player) => !player.statuses.has(sectaireTeam))
          .every((player) => player.isDead)
      );
    }
    return false;
  }
}
