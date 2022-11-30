import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../round-handler.interface';

export class CupidonRoundHandler implements RoundHandler {
  readonly isOnlyOnce = true;

  handleAction(players: Player[], selectedPlayerIds: number[]): Player[] {
    const newPlayers = [...players];
    newPlayers
      .filter((player) => selectedPlayerIds.includes(player.id))
      .forEach((player) => player.statuses.add(PlayerStatusEnum.LOVER));
    return newPlayers;
  }

  getRoundConfig(players: Player[]): Round {
    return {
      role: RoundEnum.CUPIDON,
      selectablePlayers: players.map((player) => player.id),
      maxSelectable: 2,
      minSelectable: 2,
    };
  }
}
