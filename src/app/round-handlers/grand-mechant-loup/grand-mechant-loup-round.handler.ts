import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { Round } from '@/models/round.model';
import { RoundHandler } from '@/round-handlers/round-handler.interface';
import { Observable, of } from 'rxjs';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { isLoupGarou } from '@/utils/roles.utils';

export class GrandMechantLoupRoundHandler implements RoundHandler {
  readonly isOnlyOnce = false;
  readonly isDuringDay = false;
  readonly type = RoundTypeEnum.PLAYERS;

  handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    const newPlayers = [...players];
    const selectedPlayer = newPlayers.find(
      (player) => player.id === selectedPlayerIds[0],
    );
    if (selectedPlayer !== undefined) {
      selectedPlayer.statuses.add(PlayerStatusEnum.WOLF_TARGET);
      selectedPlayer.killedBy = PlayerRoleEnum.GRAND_MECHANT_LOUP;
    }
    return of(newPlayers);
  }

  getRoundConfig(players: Player[]): Round {
    const isLoupGarouDead = players.some(
      (player) => isLoupGarou(player) && player.isDead,
    );
    return {
      role: RoundEnum.GRAND_MECHANT_LOUP,
      selectablePlayers: isLoupGarouDead
        ? []
        : players
            .filter(
              (player) =>
                !isLoupGarou(player) &&
                !player.isDead &&
                !player.statuses.has(PlayerStatusEnum.WOLF_TARGET),
            )
            .map((player) => player.id),
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }
}
