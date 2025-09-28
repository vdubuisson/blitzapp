import { PlayerRoleEnum } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class VoleurRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRoleEnum.VOLEUR, ROLE_METADATA_CONFIG[PlayerRoleEnum.VOLEUR]!);
  }
}
