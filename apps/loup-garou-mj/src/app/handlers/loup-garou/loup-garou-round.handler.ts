import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { Player } from '../../models/player.model';
import { RoundHandler } from '../round-handler.interface';

export class LoupGarouRoundHandler implements RoundHandler {
  readonly isOnlyFirstNight = false;

  handleAction(players: Player[], selectedPlayerIds: number[]): Player[] {
    const newPlayers = [...players];
    newPlayers
      .find((player) => player.id === selectedPlayerIds[0])
      ?.statuses.add(PlayerStatusEnum.WOLF_TARGET);
    return newPlayers;
  }
}
