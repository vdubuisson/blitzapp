import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../round-handler.interface';
import { Observable, of } from 'rxjs';

export class CorbeauRoundHandler implements RoundHandler {
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
      ?.statuses.add(PlayerStatusEnum.RAVEN);
    return of(newPlayers);
  }

  getRoundConfig(players: Player[]): Round {
    return {
      role: RoundEnum.CORBEAU,
      selectablePlayers: players
        .filter(
          (player) => player.role !== PlayerRoleEnum.CORBEAU && !player.isDead,
        )
        .map((player) => player.id),
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }
}
