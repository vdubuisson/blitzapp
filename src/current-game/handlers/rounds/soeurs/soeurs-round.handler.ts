import { Round } from '@/types/round';
import { DefaultRoundHandler } from '@/game-handlers/rounds/default/default-round.handler';

export class SoeursRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(Round.SOEURS, true, false);
  }
}
