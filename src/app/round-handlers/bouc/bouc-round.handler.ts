import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { Round } from '@/models/round.model';
import { RoundHandler } from '@/round-handlers/round-handler.interface';
import { Observable, of } from 'rxjs';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

export class BoucRoundHandler implements RoundHandler {
  readonly isOnlyOnce = true;
  readonly isDuringDay = true;
  readonly type = RoundTypeEnum.PLAYERS;

  handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    const newPlayers = [...players];

    newPlayers
      .filter(
        (player) => !player.isDead && !selectedPlayerIds.includes(player.id),
      )
      .forEach((player) => player.statuses.add(PlayerStatusEnum.NO_VOTE));

    return of(newPlayers);
  }

  getRoundConfig(players: Player[]): Round {
    const alivePlayers = players.filter((player) => !player.isDead);

    return {
      role: RoundEnum.BOUC,
      selectablePlayers: alivePlayers.map((player) => player.id),
      maxSelectable: alivePlayers.length,
      minSelectable: 0,
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }
}
