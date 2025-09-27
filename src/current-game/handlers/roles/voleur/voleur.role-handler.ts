import { PlayerRole } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class VoleurRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRole.VOLEUR, ROLE_METADATA_CONFIG[PlayerRole.VOLEUR]!);
  }
}
