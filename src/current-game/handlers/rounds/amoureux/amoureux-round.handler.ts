import { RoundEnum } from '@/types/round';
import { DefaultRoundHandler } from '@/game-handlers/rounds/default/default-round.handler';

export class AmoureuxRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.AMOUREUX, true, false);
  }
}
