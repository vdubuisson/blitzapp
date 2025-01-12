import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { map, Observable } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class SorciereKillRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.SORCIERE_KILL, false, false, RoundTypeEnum.PLAYERS);
  }

  override handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    return super.handleAction(players, selectedPlayerIds).pipe(
      map((newPlayers) => {
        if (selectedPlayerIds.length > 0) {
          const sorciereIndex = newPlayers.findIndex(
            (player) => player.role === PlayerRoleEnum.SORCIERE,
          );
          if (sorciereIndex > -1) {
            const newStatuses = new Set(newPlayers[sorciereIndex].statuses);
            newStatuses.delete(PlayerStatusEnum.DEATH_POTION);
            newPlayers[sorciereIndex] = {
              ...newPlayers[sorciereIndex],
              statuses: newStatuses,
            };
          }
        }
        return newPlayers;
      }),
    );
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return this.canKill(players)
      ? players.filter(
          (player) => player.role !== PlayerRoleEnum.SORCIERE && !player.isDead,
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
      killedBy: PlayerRoleEnum.SORCIERE,
    };
  }

  private canKill(players: Player[]): boolean {
    return (
      players
        .find((player) => player.role === PlayerRoleEnum.SORCIERE)
        ?.statuses.has(PlayerStatusEnum.DEATH_POTION) ?? false
    );
  }
}
