import { PlayerRole } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class ChienLoupRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRole.CHIEN_LOUP, ROLE_METADATA_CONFIG[PlayerRole.CHIEN_LOUP]!);
  }
}
