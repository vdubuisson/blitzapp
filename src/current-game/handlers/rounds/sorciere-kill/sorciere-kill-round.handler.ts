import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { map, Observable } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';
import { removeStatusFromPlayer } from '@/utils/status.utils';

export class SorciereKillRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(Round.SORCIERE_KILL, false, false, RoundType.PLAYERS);
  }

  override handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    return super.handleAction(players, selectedPlayerIds).pipe(
      map((newPlayers) => {
        if (selectedPlayerIds.length > 0) {
          const sorciereIndex = newPlayers.findIndex(
            (player) => player.role === PlayerRole.SORCIERE,
          );
          if (sorciereIndex > -1) {
            newPlayers[sorciereIndex] = removeStatusFromPlayer(
              newPlayers[sorciereIndex],
              PlayerStatus.DEATH_POTION,
            );
          }
        }
        return newPlayers;
      }),
    );
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return this.canKill(players)
      ? players.filter(
          (player) => player.role !== PlayerRole.SORCIERE && !player.isDead,
        )
      : [];
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override affectSelectedPlayer(player: Player): Player {
    return {
      ...player,
      isDead: true,
      killedBy: PlayerRole.SORCIERE,
    };
  }

  private canKill(players: Player[]): boolean {
    return (
      players
        .find((player) => player.role === PlayerRole.SORCIERE)
        ?.statuses.has(PlayerStatus.DEATH_POTION) ?? false
    );
  }
}
