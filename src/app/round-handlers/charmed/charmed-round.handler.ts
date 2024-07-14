import { RoundEnum } from '@/enums/round.enum';
import { DefaultRoundHandler } from '@/round-handlers/default/default-round.handler';

export class CharmedRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.CHARMED, false, false);
  }
}
