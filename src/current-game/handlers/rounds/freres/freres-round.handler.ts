import { Round } from '@/types/round';
import { DefaultRoundHandler } from '@/game-handlers/rounds/default/default-round.handler';

export class FreresRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(Round.FRERES, true, false);
  }
}
