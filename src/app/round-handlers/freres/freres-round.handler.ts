import { RoundEnum } from '@/enums/round.enum';
import { DefaultRoundHandler } from '@/round-handlers/default/default-round.handler';

export class FreresRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.FRERES, true, false);
  }
}
