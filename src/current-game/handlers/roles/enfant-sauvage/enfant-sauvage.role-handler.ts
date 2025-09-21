import { PlayerRole } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class EnfantSauvageRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRole.ENFANT_SAUVAGE,
      ROLE_METADATA_CONFIG[PlayerRole.ENFANT_SAUVAGE]!,
    );
  }
}
