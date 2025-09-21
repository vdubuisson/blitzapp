import { Round } from '@/types/round';
import { DefaultRoundHandler } from '@/game-handlers/rounds/default/default-round.handler';

export class AmoureuxRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(Round.AMOUREUX, true, false);
  }
}
