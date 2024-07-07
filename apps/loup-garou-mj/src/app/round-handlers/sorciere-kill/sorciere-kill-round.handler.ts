import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { Round } from '@/models/round.model';
import { RoundHandler } from '@/round-handlers/round-handler.interface';
import { Observable, of } from 'rxjs';

export class SorciereKillRoundHandler implements RoundHandler {
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
      selectedPlayer.isDead = true;
      selectedPlayer.killedBy = PlayerRoleEnum.SORCIERE;
      newPlayers
        .find((player) => player.role === PlayerRoleEnum.SORCIERE)
        ?.statuses.delete(PlayerStatusEnum.DEATH_POTION);
    }
    return of(newPlayers);
  }

  getRoundConfig(players: Player[]): Round {
    return {
      role: RoundEnum.SORCIERE_KILL,
      selectablePlayers: this.canKill(players)
        ? this.getKillablePlayers(players)
        : [],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }

  private canKill(players: Player[]): boolean {
    return (
      players
        .find((player) => player.role === PlayerRoleEnum.SORCIERE)
        ?.statuses.has(PlayerStatusEnum.DEATH_POTION) ?? false
    );
  }

  private getKillablePlayers(players: Player[]): number[] {
    return players
      .filter(
        (player) => player.role !== PlayerRoleEnum.SORCIERE && !player.isDead,
      )
      .map((player) => player.id);
  }
}
