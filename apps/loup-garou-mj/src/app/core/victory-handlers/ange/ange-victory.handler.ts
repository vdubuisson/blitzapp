import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { Player } from '../../models/player.model';
import { VictoryHandler } from '../victory.handler';

export class AngeVictoryHandler implements VictoryHandler {
  isVictorious(players: Player[], isFirstDayOrNight: boolean): boolean {
    return (
      isFirstDayOrNight &&
      (players.find((player) => (player.role = PlayerRoleEnum.ANGE))?.isDead ??
        false)
    );
  }
}
