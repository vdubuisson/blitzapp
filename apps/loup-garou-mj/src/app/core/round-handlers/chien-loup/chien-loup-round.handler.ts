import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../round-handler.interface';

export class ChienLoupRoundHandler implements RoundHandler {
  readonly isOnlyOnce = true;
  readonly isDuringDay = false;
  readonly type = RoundTypeEnum.ROLES;

  handleAction(
    players: Player[],
    _: number[],
    selectedRole?: PlayerRoleEnum
  ): Player[] {
    const newPlayers = [...players];
    const chienLoup = newPlayers.find(
      (player) => player.role === PlayerRoleEnum.CHIEN_LOUP
    );
    if (chienLoup !== undefined && selectedRole !== undefined) {
      chienLoup.role = selectedRole;
    }
    return newPlayers;
  }

  getRoundConfig(players: Player[]): Round {
    return {
      role: RoundEnum.CHIEN_LOUP,
      selectablePlayers: players
        .filter((player) => player.role === PlayerRoleEnum.CHIEN_LOUP)
        .map((player) => player.id),
      selectableRoles: [PlayerRoleEnum.VILLAGEOIS, PlayerRoleEnum.LOUP_GAROU],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }
}
