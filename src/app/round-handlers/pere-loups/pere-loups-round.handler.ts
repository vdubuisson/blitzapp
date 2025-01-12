import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { map, Observable } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

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
        if (selectedPlayerIds.length > 0) {
          const pereLoupsIndex = newPlayers.findIndex(
            (player) => player.role === PlayerRoleEnum.PERE_LOUPS,
          );
          if (pereLoupsIndex > -1) {
            newPlayers[pereLoupsIndex] = {
              ...newPlayers[pereLoupsIndex],
              statuses: new Set([
                ...newPlayers[pereLoupsIndex].statuses,
                PlayerStatusEnum.NO_POWER,
              ]),
            };
          }

          const selectedPlayerIndex = newPlayers.findIndex(
            (player) => player.id === selectedPlayerIds[0],
          );
          if (
            selectedPlayerIndex > -1 &&
            newPlayers[selectedPlayerIndex].role === PlayerRoleEnum.JOUEUR_FLUTE
          ) {
            newPlayers[selectedPlayerIndex] = {
              ...newPlayers[selectedPlayerIndex],
              role: PlayerRoleEnum.LOUP_GAROU,
            };
          }
        }
        return newPlayers;
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
    const newStatuses = new Set(player.statuses);
    newStatuses.delete(PlayerStatusEnum.WOLF_TARGET);
    newStatuses.add(PlayerStatusEnum.INFECTED);
    return {
      ...player,
      statuses: newStatuses,
      killedBy: undefined,
    };
  }

  private canInfect(players: Player[]): boolean {
    return !(
      players
        .find((player) => player.role === PlayerRoleEnum.PERE_LOUPS)
        ?.statuses.has(PlayerStatusEnum.NO_POWER) ?? false
    );
  }
}
