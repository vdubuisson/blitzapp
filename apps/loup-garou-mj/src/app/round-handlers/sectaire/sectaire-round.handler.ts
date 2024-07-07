import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../round-handler.interface';
import { Observable, of } from 'rxjs';
import { PlayerStatusEnum } from '../../enums/player-status.enum';

export class SectaireRoundHandler implements RoundHandler {
  readonly isOnlyOnce = true;
  readonly isDuringDay = false;
  readonly type = RoundTypeEnum.PLAYERS;

  handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    const newPlayers = [...players];

    newPlayers.forEach((player) => {
      const isSelected = selectedPlayerIds.includes(player.id);
      player.statuses.add(
        isSelected ? PlayerStatusEnum.BLUE_TEAM : PlayerStatusEnum.RED_TEAM,
      );
    });

    return of(newPlayers);
  }

  getRoundConfig(players: Player[]): Round {
    return {
      role: RoundEnum.SECTAIRE,
      selectablePlayers: players.map((player) => player.id),
      maxSelectable: players.length - 1,
      minSelectable: 1,
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }
}
