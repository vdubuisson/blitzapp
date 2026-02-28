import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import { inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class SorciereKillRoundHandler extends DefaultRoundHandler {
  private readonly playersStatusUtility = inject(PlayersStatusUtility);

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
            newPlayers[sorciereIndex] =
              this.playersStatusUtility.removeStatusFromPlayer(
                newPlayers[sorciereIndex],
                PlayerStatusEnum.DEATH_POTION,
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
