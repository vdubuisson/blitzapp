import { LOUPS_GAROUS_ROLES } from '../../configs/loups-garous-roles';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../round-handler.interface';
import { Observable, of } from 'rxjs';
import { PlayerRoleEnum } from '../../enums/player-role.enum';

export class LoupGarouRoundHandler implements RoundHandler {
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
      selectedPlayer.killedBy = PlayerRoleEnum.LOUP_GAROU;
    }
    return of(newPlayers);
  }

  getRoundConfig(players: Player[]): Round {
    const areAllLoupGarouDead = players
      .filter((player) => LOUPS_GAROUS_ROLES.includes(player.role))
      .every((player) => player.isDead);
    return {
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: areAllLoupGarouDead
        ? []
        : players
            .filter(
              (player) =>
                !LOUPS_GAROUS_ROLES.includes(player.role) && !player.isDead,
            )
            .map((player) => player.id),
      maxSelectable: 1,
      minSelectable: areAllLoupGarouDead ? 0 : 1,
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }
}
