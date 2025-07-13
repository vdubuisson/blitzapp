import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';

export class RenardRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRoleEnum.RENARD, ROLE_METADATA_CONFIG[PlayerRoleEnum.RENARD]!);
  }
}
