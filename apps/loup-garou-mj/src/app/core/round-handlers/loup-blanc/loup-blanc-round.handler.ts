import { LOUPS_GAROUS_ROLES } from '../../configs/loups-garous-roles';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../round-handler.interface';

export class LoupBlancRoundHandler implements RoundHandler {
  readonly isOnlyOnce = false;
  readonly isDuringDay = false;
  readonly type = RoundTypeEnum.PLAYERS;

  handleAction(players: Player[], selectedPlayerIds: number[]): Player[] {
    const newPlayers = [...players];
    if (selectedPlayerIds.length > 0) {
      (
        newPlayers.find(
          (player) => player.id === selectedPlayerIds[0]
        ) as Player
      ).isDead = true;
    }
    return newPlayers;
  }

  getRoundConfig(players: Player[]): Round {
    return {
      role: RoundEnum.LOUP_BLANC,
      selectablePlayers: players
        .filter(
          (player) =>
            LOUPS_GAROUS_ROLES.filter(
              (role) => role !== PlayerRoleEnum.LOUP_BLANC
            ).includes(player.role) && !player.isDead
        )
        .map((player) => player.id),
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }
}
