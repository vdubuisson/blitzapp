import { Round } from '@/types/round';
import { DefaultRoundHandler } from '@/game-handlers/rounds/default/default-round.handler';

export class CharmedRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(Round.CHARMED, false, false);
  }
}
