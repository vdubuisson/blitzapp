import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { Round } from '@/models/round.model';
import { RoundHandler } from '@/round-handlers/round-handler.interface';
import { Observable, of } from 'rxjs';

export class PereLoupsRoundHandler implements RoundHandler {
  readonly isOnlyOnce = false;
  readonly isDuringDay = false;
  readonly type = RoundTypeEnum.PLAYERS;

  handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    const newPlayers = [...players];
    if (selectedPlayerIds.length > 0) {
      const selectedPlayer = newPlayers.find(
        (player) => player.id === selectedPlayerIds[0],
      ) as Player;
      selectedPlayer.statuses.delete(PlayerStatusEnum.WOLF_TARGET);
      selectedPlayer.statuses.add(PlayerStatusEnum.INFECTED);
      selectedPlayer.killedBy = undefined;

      newPlayers
        .find((player) => player.role === PlayerRoleEnum.PERE_LOUPS)
        ?.statuses.add(PlayerStatusEnum.NO_POWER);

      if (selectedPlayer.role === PlayerRoleEnum.JOUEUR_FLUTE) {
        selectedPlayer.role = PlayerRoleEnum.LOUP_GAROU;
      }
    }
    return of(newPlayers);
  }

  getRoundConfig(players: Player[]): Round {
    return {
      role: RoundEnum.PERE_LOUPS,
      selectablePlayers: this.canInfect(players)
        ? this.getInfectablePlayers(players)
        : [],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }

  private canInfect(players: Player[]): boolean {
    return !(
      players
        .find((player) => player.role === PlayerRoleEnum.PERE_LOUPS)
        ?.statuses.has(PlayerStatusEnum.NO_POWER) ?? false
    );
  }

  private getInfectablePlayers(players: Player[]): number[] {
    return players
      .filter((player) => player.statuses.has(PlayerStatusEnum.WOLF_TARGET))
      .map((player) => player.id);
  }
}
