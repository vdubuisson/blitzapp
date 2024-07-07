import { RoundEnum } from '../../enums/round.enum';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class FreresRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.FRERES, true, false);
  }
}
