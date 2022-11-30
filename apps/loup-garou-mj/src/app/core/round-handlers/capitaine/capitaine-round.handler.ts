import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../round-handler.interface';

export class CapitaineRoundHandler implements RoundHandler {
  readonly isOnlyOnce = true;

  handleAction(players: Player[], selectedPlayerIds: number[]): Player[] {
    const newPlayers = [...players];
    newPlayers
      .find((player) => player.id === selectedPlayerIds[0])
      ?.statuses.add(PlayerStatusEnum.CAPTAIN);
    return newPlayers;
  }

  getRoundConfig(players: Player[]): Round {
    return {
      role: RoundEnum.CAPITAINE,
      selectablePlayers: this.getSelectablePlayers(players),
      maxSelectable: 1,
      minSelectable: 1,
    };
  }

  private getSelectablePlayers(players: Player[]): number[] {
    return players
      .filter((player) => !player.isDead)
      .map((player) => player.id);
  }
}
