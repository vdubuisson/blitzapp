import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';

export class PereLoupsRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.PERE_LOUPS,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.PERE_LOUPS]!,
    );
  }
}
