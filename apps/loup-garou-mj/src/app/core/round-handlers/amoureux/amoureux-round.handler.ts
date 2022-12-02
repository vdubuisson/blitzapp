import { RoundEnum } from '../../enums/round.enum';
import { DefaultRoundHandler } from '../default-round.handler';

export class AmoureuxRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.AMOUREUX, true, false);
  }
}
