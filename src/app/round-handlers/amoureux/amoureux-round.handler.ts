import { RoundEnum } from '@/enums/round.enum';
import { DefaultRoundHandler } from '@/round-handlers/default/default-round.handler';

export class AmoureuxRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.AMOUREUX, true, false);
  }
}
