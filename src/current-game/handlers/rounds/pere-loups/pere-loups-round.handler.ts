import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import { inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class PereLoupsRoundHandler extends DefaultRoundHandler {
  private readonly playersStatusUtility = inject(PlayersStatusUtility);

  constructor() {
    super(RoundEnum.PERE_LOUPS, false, false, RoundTypeEnum.PLAYERS);
  }

  override handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    return super.handleAction(players, selectedPlayerIds).pipe(
      map((newPlayers) => {
        let updatedPlayers = [...newPlayers];
        if (selectedPlayerIds.length > 0) {
          const pereLoupsId = updatedPlayers.find(
            (player) => player.role === PlayerRoleEnum.PERE_LOUPS,
          )?.id;
          if (pereLoupsId !== undefined) {
            updatedPlayers = this.playersStatusUtility.addStatusToPlayersById(
              updatedPlayers,
              PlayerStatusEnum.NO_POWER,
              [pereLoupsId],
            );
          }

          const selectedPlayerIndex = updatedPlayers.findIndex(
            (player) => player.id === selectedPlayerIds[0],
          );
          if (
            selectedPlayerIndex > -1 &&
            updatedPlayers[selectedPlayerIndex].role ===
              PlayerRoleEnum.JOUEUR_FLUTE
          ) {
            updatedPlayers[selectedPlayerIndex] = {
              ...updatedPlayers[selectedPlayerIndex],
              role: PlayerRoleEnum.LOUP_GAROU,
            };
          }
        }
        return updatedPlayers;
      }),
    );
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return this.canInfect(players)
      ? players.filter((player) =>
          player.statuses.has(PlayerStatusEnum.WOLF_TARGET),
        )
      : [];
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override affectSelectedPlayer(player: Player): Player {
    let updatedPlayer = this.playersStatusUtility.removeStatusFromPlayer(
      player,
      PlayerStatusEnum.WOLF_TARGET,
    );
    updatedPlayer = this.playersStatusUtility.addStatusToPlayer(
      updatedPlayer,
      PlayerStatusEnum.INFECTED,
    );
    updatedPlayer.killedBy = undefined;
    return updatedPlayer;
  }

  private canInfect(players: Player[]): boolean {
    return !(
      players
        .find((player) => player.role === PlayerRoleEnum.PERE_LOUPS)
        ?.statuses.has(PlayerStatusEnum.NO_POWER) ?? false
    );
  }
}
