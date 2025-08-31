import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class VillageoisRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.VILLAGEOIS,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.VILLAGEOIS]!,
    );
  }
}
