import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { Player } from '@/shared/types/player';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import { inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class SalvateurRoundHandler extends DefaultRoundHandler {
  private readonly playersStatusUtility = inject(PlayersStatusUtility);

  constructor() {
    super(RoundEnum.SALVATEUR, false, false, RoundTypeEnum.PLAYERS);
  }

  override handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    return super.handleAction(players, selectedPlayerIds).pipe(
      map((newPlayers) => {
        const oldProtectedIndex = newPlayers.findIndex(
          (player) =>
            player.statuses.has(PlayerStatusEnum.PROTECTED) &&
            !selectedPlayerIds.includes(player.id),
        );
        if (oldProtectedIndex > -1) {
          newPlayers[oldProtectedIndex] =
            this.playersStatusUtility.removeStatusFromPlayer(
              newPlayers[oldProtectedIndex],
              PlayerStatusEnum.PROTECTED,
            );
        }
        return newPlayers;
      }),
    );
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players.filter(
      (player) =>
        !player.isDead && !player.statuses.has(PlayerStatusEnum.PROTECTED),
    );
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override getMinSelectable(_: Player[]): number {
    return 1;
  }

  protected override affectSelectedPlayer(player: Player): Player {
    return this.playersStatusUtility.addStatusToPlayer(
      player,
      PlayerStatusEnum.PROTECTED,
    );
  }
}
