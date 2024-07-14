import { RoundEnum } from '@/enums/round.enum';
import { DefaultRoundHandler } from '@/round-handlers/default/default-round.handler';

export class SoeursRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.SOEURS, true, false);
  }
}
