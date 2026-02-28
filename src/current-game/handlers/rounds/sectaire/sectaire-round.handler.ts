import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { Player } from '@/shared/types/player';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class SectaireRoundHandler extends DefaultRoundHandler {
  private readonly playersStatusUtility = inject(PlayersStatusUtility);

  constructor() {
    super(RoundEnum.SECTAIRE, true, false, RoundTypeEnum.PLAYERS);
  }

  override handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    const newPlayers = players.map((player) => {
      const isSelected = selectedPlayerIds.includes(player.id);
      return this.playersStatusUtility.addStatusToPlayer(
        player,
        isSelected ? PlayerStatusEnum.BLUE_TEAM : PlayerStatusEnum.RED_TEAM,
      );
    });

    return of(newPlayers);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players;
  }

  protected override getMaxSelectable(players: Player[]): number {
    return players.length - 1;
  }

  protected override getMinSelectable(_: Player[]): number {
    return 1;
  }
}
