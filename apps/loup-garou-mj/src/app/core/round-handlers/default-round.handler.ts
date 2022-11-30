import { RoundEnum } from '../enums/round.enum';
import { Player } from '../models/player.model';
import { Round } from '../models/round.model';
import { RoundHandler } from './round-handler.interface';

export abstract class DefaultRoundHandler implements RoundHandler {
  constructor(private roundRole: RoundEnum, public isOnlyOnce: boolean) {}

  handleAction(players: Player[], _: number[]): Player[] {
    return [...players];
  }

  getRoundConfig(_: Player[]): Round {
    return {
      role: this.roundRole,
      selectablePlayers: [],
      maxSelectable: 0,
      minSelectable: 0,
    };
  }
}
