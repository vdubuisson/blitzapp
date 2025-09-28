import { PlayerRoleEnum } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class IdiotRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(PlayerRoleEnum.IDIOT, ROLE_METADATA_CONFIG[PlayerRoleEnum.IDIOT]!);
  }
}
