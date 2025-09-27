import { PlayerRole } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class PetiteFilleRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRole.PETITE_FILLE,
      ROLE_METADATA_CONFIG[PlayerRole.PETITE_FILLE]!,
    );
  }
}
