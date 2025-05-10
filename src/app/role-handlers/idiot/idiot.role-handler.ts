import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';

export class IdiotRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRoleEnum.IDIOT);
  }
}
