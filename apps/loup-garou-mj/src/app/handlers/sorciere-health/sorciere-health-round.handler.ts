import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { Player } from '../../models/player.model';
import { RoundHandler } from '../round-handler.interface';

export class SorciereHealthRoundHandler implements RoundHandler {
  readonly isOnlyFirstNight = false;

  handleAction(players: Player[], selectedPlayerIds: number[]): Player[] {
    const newPlayers = [...players];
    newPlayers
      .find((player) => player.id === selectedPlayerIds[0])
      ?.statuses.delete(PlayerStatusEnum.WOLF_TARGET);
    newPlayers
      .find((player) => player.role === PlayerRoleEnum.SORCIERE)
      ?.statuses.delete(PlayerStatusEnum.HEALTH_POTION);
    return newPlayers;
  }
}
