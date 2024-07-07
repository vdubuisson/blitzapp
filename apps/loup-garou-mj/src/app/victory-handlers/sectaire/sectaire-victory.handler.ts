import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { Player } from '../../models/player.model';
import { VictoryHandler } from '../victory.handler';
import { PlayerRoleEnum } from '../../enums/player-role.enum';

export class SectaireVictoryHandler implements VictoryHandler {
  isVictorious(players: Player[]): boolean {
    const sectairePlayer = players.find(
      (player) => player.role === PlayerRoleEnum.SECTAIRE,
    );
    if (sectairePlayer) {
      const sectaireTeam = sectairePlayer.statuses.has(
        PlayerStatusEnum.BLUE_TEAM,
      )
        ? PlayerStatusEnum.BLUE_TEAM
        : PlayerStatusEnum.RED_TEAM;

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
