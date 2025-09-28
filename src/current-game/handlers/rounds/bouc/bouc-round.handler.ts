import { PlayerStatusEnum } from '@/types/player-status';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { RoundEnum } from '@/types/round';
import { Player } from '@/shared/types/player';
import { Observable, of } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';
import { addStatusToPlayersById } from '@/utils/status.utils';

export class BoucRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.BOUC, true, true, RoundTypeEnum.PLAYERS);
  }

  override handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    const notSelectedPlayersIds = players.reduce<number[]>(
      (acc, player) =>
        !player.isDead && !selectedPlayerIds.includes(player.id)
          ? [...acc, player.id]
          : acc,
      [],
    );
    const newPlayers = addStatusToPlayersById(
      players,
      PlayerStatusEnum.NO_VOTE,
      notSelectedPlayersIds,
    );

    return of(newPlayers);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players.filter((player) => !player.isDead);
  }
}
