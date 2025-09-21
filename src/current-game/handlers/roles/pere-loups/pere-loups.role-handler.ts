import { PlayerRole } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class PereLoupsRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRole.PERE_LOUPS, ROLE_METADATA_CONFIG[PlayerRole.PERE_LOUPS]!);
  }
}
