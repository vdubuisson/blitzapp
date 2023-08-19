import { RoundTypeEnum } from '../enums/round-type.enum';
import { RoundEnum } from '../enums/round.enum';
import { Player } from '../models/player.model';
import { Round } from '../models/round.model';
import { RoundHandler } from './round-handler.interface';

export abstract class DefaultRoundHandler implements RoundHandler {
  protected constructor(
    private roundRole: RoundEnum,
    public isOnlyOnce: boolean,
    public isDuringDay: boolean,
    public type: RoundTypeEnum = RoundTypeEnum.DEFAULT
  ) {}

  handleAction(players: Player[], _: number[]): Player[] {
    return [...players];
  }

  getRoundConfig(_: Player[]): Round {
    return {
      role: this.roundRole,
      selectablePlayers: [],
      maxSelectable: 0,
      minSelectable: 0,
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }
}
