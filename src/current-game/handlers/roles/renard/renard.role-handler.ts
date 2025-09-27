import { PlayerRole } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class RenardRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRole.RENARD, ROLE_METADATA_CONFIG[PlayerRole.RENARD]!);
  }
}
