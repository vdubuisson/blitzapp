import { LOUPS_GAROUS_ROLES } from '../../configs/loups-garous-roles';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../round-handler.interface';
import { Observable, of } from 'rxjs';

export class GrandMechantLoupRoundHandler implements RoundHandler {
  readonly isOnlyOnce = false;
  readonly isDuringDay = false;
  readonly type = RoundTypeEnum.PLAYERS;

  handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    const newPlayers = [...players];
    newPlayers
      .find((player) => player.id === selectedPlayerIds[0])
      ?.statuses.add(PlayerStatusEnum.WOLF_TARGET);
    return of(newPlayers);
  }

  getRoundConfig(players: Player[]): Round {
    return {
      role: RoundEnum.GRAND_MECHANT_LOUP,
      selectablePlayers: players
        .filter(
          (player) =>
            !LOUPS_GAROUS_ROLES.includes(player.role) &&
            !player.isDead &&
            !player.statuses.has(PlayerStatusEnum.WOLF_TARGET),
        )
        .map((player) => player.id),
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }
}
