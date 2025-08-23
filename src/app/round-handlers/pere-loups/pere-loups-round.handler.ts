import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { map, Observable } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';
import {
  addStatusToPlayer,
  addStatusToPlayersById,
  removeStatusFromPlayer,
} from '@/utils/status.utils';

export class PereLoupsRoundHandler extends DefaultRoundHandler {
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
            updatedPlayers = addStatusToPlayersById(
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
    let updatedPlayer = removeStatusFromPlayer(
      player,
      PlayerStatusEnum.WOLF_TARGET,
    );
    updatedPlayer = addStatusToPlayer(updatedPlayer, PlayerStatusEnum.INFECTED);
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
