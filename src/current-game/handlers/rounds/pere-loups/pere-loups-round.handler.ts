import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { map, Observable } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';
import {
  addStatusToPlayer,
  addStatusToPlayersById,
  removeStatusFromPlayer,
} from '@/utils/status.utils';

export class PereLoupsRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(Round.PERE_LOUPS, false, false, RoundType.PLAYERS);
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
            (player) => player.role === PlayerRole.PERE_LOUPS,
          )?.id;
          if (pereLoupsId !== undefined) {
            updatedPlayers = addStatusToPlayersById(
              updatedPlayers,
              PlayerStatus.NO_POWER,
              [pereLoupsId],
            );
          }

          const selectedPlayerIndex = updatedPlayers.findIndex(
            (player) => player.id === selectedPlayerIds[0],
          );
          if (
            selectedPlayerIndex > -1 &&
            updatedPlayers[selectedPlayerIndex].role === PlayerRole.JOUEUR_FLUTE
          ) {
            updatedPlayers[selectedPlayerIndex] = {
              ...updatedPlayers[selectedPlayerIndex],
              role: PlayerRole.LOUP_GAROU,
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
          player.statuses.has(PlayerStatus.WOLF_TARGET),
        )
      : [];
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override affectSelectedPlayer(player: Player): Player {
    let updatedPlayer = removeStatusFromPlayer(
      player,
      PlayerStatus.WOLF_TARGET,
    );
    updatedPlayer = addStatusToPlayer(updatedPlayer, PlayerStatus.INFECTED);
    updatedPlayer.killedBy = undefined;
    return updatedPlayer;
  }

  private canInfect(players: Player[]): boolean {
    return !(
      players
        .find((player) => player.role === PlayerRole.PERE_LOUPS)
        ?.statuses.has(PlayerStatus.NO_POWER) ?? false
    );
  }
}
