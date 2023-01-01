import { RoundEnum } from '../../enums/round.enum';
import { DefaultRoundHandler } from '../default-round.handler';

export class SoeursRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.SOEURS, true, false);
  }
}
