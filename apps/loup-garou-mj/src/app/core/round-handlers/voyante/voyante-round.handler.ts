import { RoundEnum } from '../../enums/round.enum';
import { DefaultRoundHandler } from '../default-round.handler';

export class VoyanteRoundHandler extends DefaultRoundHandler {
  constructor() {
    super(RoundEnum.VOYANTE, false);
  }
}
