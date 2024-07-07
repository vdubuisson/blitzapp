import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { Round } from '@/models/round.model';
import { RoundHandler } from '@/round-handlers/round-handler.interface';
import { Observable, of } from 'rxjs';

export class DefaultRoundHandler implements RoundHandler {
  constructor(
    private roundRole: RoundEnum,
    public isOnlyOnce: boolean,
    public isDuringDay: boolean,
    public type: RoundTypeEnum = RoundTypeEnum.DEFAULT,
  ) {}

  handleAction(players: Player[], _: number[]): Observable<Player[]> {
    return of([...players]);
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
