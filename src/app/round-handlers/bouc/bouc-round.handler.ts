import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { Observable, of } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class BoucRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.BOUC, true, true, RoundTypeEnum.PLAYERS);
  }

  override handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    const newPlayers = players.map((player) => {
      if (!player.isDead && !selectedPlayerIds.includes(player.id)) {
        return {
          ...player,
          statuses: new Set([...player.statuses, PlayerStatusEnum.NO_VOTE]),
        };
      }
      return player;
    });

    return of(newPlayers);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players.filter((player) => !player.isDead);
  }
}
