import { PlayerRole } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class IdiotRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRole.IDIOT, ROLE_METADATA_CONFIG[PlayerRole.IDIOT]!);
  }
}
