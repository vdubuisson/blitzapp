import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { Player } from '@/shared/types/player';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class BoucRoundHandler extends DefaultRoundHandler {
  private readonly playerStatusUtility = inject(PlayersStatusUtility);

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
    const newPlayers = this.playerStatusUtility.addStatusToPlayersById(
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
