import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../round-handler.interface';

export class ChasseurRoundHandler implements RoundHandler {
  readonly isOnlyOnce = true;
  readonly isDuringDay = true;
  readonly type = RoundTypeEnum.PLAYERS;

  handleAction(players: Player[], selectedPlayerIds: number[]): Player[] {
    const newPlayers = [...players];
    (
      newPlayers.find((player) => player.id === selectedPlayerIds[0]) as Player
    ).isDead = true;
    return newPlayers;
  }

  getRoundConfig(players: Player[]): Round {
    return {
      role: RoundEnum.CHASSEUR,
      selectablePlayers: this.getKillablePlayers(players),
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: this.isDuringDay,
    };
  }

  private getKillablePlayers(players: Player[]): number[] {
    return players
      .filter(
        (player) => player.role !== PlayerRoleEnum.CHASSEUR && !player.isDead
      )
      .map((player) => player.id);
  }
}
