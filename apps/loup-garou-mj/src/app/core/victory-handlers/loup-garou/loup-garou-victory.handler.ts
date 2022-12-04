import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { Player } from '../../models/player.model';
import { VictoryHandler } from '../victory.handler';

export class LoupGarouVictoryHandler implements VictoryHandler {
  isVictorious(players: Player[]): boolean {
    return players
      .filter((player) => !player.isDead)
      .every((player) => player.role === PlayerRoleEnum.LOUP_GAROU);
  }
}
