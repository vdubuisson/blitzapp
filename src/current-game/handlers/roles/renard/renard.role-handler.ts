import { PlayerRoleEnum } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class RenardRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRoleEnum.RENARD, ROLE_METADATA_CONFIG[PlayerRoleEnum.RENARD]!);
  }
}
