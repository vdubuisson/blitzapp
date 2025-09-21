import { PlayerRole } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class GrandMechantLoupRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRole.GRAND_MECHANT_LOUP,
      ROLE_METADATA_CONFIG[PlayerRole.GRAND_MECHANT_LOUP]!,
    );
  }
}
