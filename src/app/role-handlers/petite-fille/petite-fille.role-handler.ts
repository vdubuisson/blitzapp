import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';

export class PetiteFilleRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.PETITE_FILLE,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.PETITE_FILLE]!,
    );
  }
}
