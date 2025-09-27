import { PlayerStatus } from '@/types/player-status';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { map, Observable } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';
import {
  addStatusToPlayer,
  removeStatusFromPlayer,
} from '@/utils/status.utils';

export class SalvateurRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(Round.SALVATEUR, false, false, RoundType.PLAYERS);
  }

  override handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    return super.handleAction(players, selectedPlayerIds).pipe(
      map((newPlayers) => {
        const oldProtectedIndex = newPlayers.findIndex(
          (player) =>
            player.statuses.has(PlayerStatus.PROTECTED) &&
            !selectedPlayerIds.includes(player.id),
        );
        if (oldProtectedIndex > -1) {
          newPlayers[oldProtectedIndex] = removeStatusFromPlayer(
            newPlayers[oldProtectedIndex],
            PlayerStatus.PROTECTED,
          );
        }
        return newPlayers;
      }),
    );
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players.filter(
      (player) =>
        !player.isDead && !player.statuses.has(PlayerStatus.PROTECTED),
    );
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override getMinSelectable(_: Player[]): number {
    return 1;
  }

  protected override affectSelectedPlayer(player: Player): Player {
    return addStatusToPlayer(player, PlayerStatus.PROTECTED);
  }
}
