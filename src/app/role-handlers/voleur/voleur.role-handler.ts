import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class VoleurRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRoleEnum.VOLEUR, ROLE_METADATA_CONFIG[PlayerRoleEnum.VOLEUR]!);
  }
}
