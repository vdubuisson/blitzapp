import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { Round } from '@/models/round.model';
import { RoundHandler } from '@/round-handlers/round-handler.interface';
import { Observable, of } from 'rxjs';

export class EnfantSauvageRoundHandler implements RoundHandler {
  readonly isOnlyOnce = true;
  readonly isDuringDay = false;
  readonly type = RoundTypeEnum.PLAYERS;

  handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    const newPlayers = [...players];
    newPlayers
      .find((player) => player.id === selectedPlayerIds[0])
      ?.statuses.add(PlayerStatusEnum.CHILD_MODEL);
    return of(newPlayers);
  }

  getRoundConfig(players: Player[]): Round {
    return {
      role: RoundEnum.ENFANT_SAUVAGE,
      selectablePlayers: players
        .filter((player) => player.role !== PlayerRoleEnum.ENFANT_SAUVAGE)
        .map((player) => player.id),
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }
}
