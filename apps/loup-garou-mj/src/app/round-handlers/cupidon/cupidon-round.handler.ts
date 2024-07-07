import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../round-handler.interface';
import { Observable, of } from 'rxjs';

export class CupidonRoundHandler implements RoundHandler {
  readonly isOnlyOnce = true;
  readonly isDuringDay = false;
  readonly type = RoundTypeEnum.PLAYERS;

  handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    const newPlayers = [...players];
    newPlayers
      .filter((player) => selectedPlayerIds.includes(player.id))
      .forEach((player) => player.statuses.add(PlayerStatusEnum.LOVER));
    return of(newPlayers);
  }

  getRoundConfig(players: Player[]): Round {
    return {
      role: RoundEnum.CUPIDON,
      selectablePlayers: players.map((player) => player.id),
      maxSelectable: 2,
      minSelectable: 2,
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }
}
