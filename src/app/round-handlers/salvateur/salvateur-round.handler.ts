import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { map, Observable } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';
import {
  addStatusToPlayer,
  removeStatusFromPlayer,
} from '@/utils/status.utils';

export class SalvateurRoundHandler extends DefaultRoundHandler {
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
          newPlayers[oldProtectedIndex] = removeStatusFromPlayer(
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
    return addStatusToPlayer(player, PlayerStatusEnum.PROTECTED);
  }
}
