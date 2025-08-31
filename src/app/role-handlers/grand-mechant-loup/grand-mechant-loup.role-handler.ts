import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class GrandMechantLoupRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.GRAND_MECHANT_LOUP,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.GRAND_MECHANT_LOUP]!,
    );
  }
}
