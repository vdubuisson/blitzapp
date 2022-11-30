import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../round-handler.interface';

export class LoupGarouRoundHandler implements RoundHandler {
  readonly isOnlyOnce = false;

  handleAction(players: Player[], selectedPlayerIds: number[]): Player[] {
    const newPlayers = [...players];
    newPlayers
      .find((player) => player.id === selectedPlayerIds[0])
      ?.statuses.add(PlayerStatusEnum.WOLF_TARGET);
    return newPlayers;
  }

  getRoundConfig(players: Player[]): Round {
    return {
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: players
        .filter(
          (player) =>
            player.role !== PlayerRoleEnum.LOUP_GAROU && !player.isDead
        )
        .map((player) => player.id),
      maxSelectable: 1,
      minSelectable: 1,
    };
  }
}
