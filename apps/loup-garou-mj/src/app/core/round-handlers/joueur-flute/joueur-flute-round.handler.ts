import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../round-handler.interface';
import { Observable, of } from 'rxjs';

export class JoueurFluteRoundHandler implements RoundHandler {
  readonly isOnlyOnce = false;
  readonly isDuringDay = false;
  readonly type = RoundTypeEnum.PLAYERS;

  handleAction(players: Player[], selectedPlayerIds: number[]): Observable<Player[]> {
    const newPlayers = [...players];
    newPlayers
      .filter((player) => selectedPlayerIds.includes(player.id))
      .forEach((player) => player.statuses.add(PlayerStatusEnum.CHARMED));
    return of(newPlayers);
  }

  getRoundConfig(players: Player[]): Round {
    return {
      role: RoundEnum.JOUEUR_FLUTE,
      selectablePlayers: players
        .filter(
          (player) =>
            player.role !== PlayerRoleEnum.JOUEUR_FLUTE &&
            !player.isDead &&
            !player.statuses.has(PlayerStatusEnum.CHARMED)
        )
        .map((player) => player.id),
      maxSelectable: 2,
      minSelectable: 0,
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }
}
