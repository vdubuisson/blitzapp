import { PlayerRole } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class MontreurOursRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRole.MONTREUR_OURS,
      ROLE_METADATA_CONFIG[PlayerRole.MONTREUR_OURS]!,
    );
  }
}
