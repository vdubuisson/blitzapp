import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';

export class AngeRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRoleEnum.ANGE);
  }
}
