import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class VoyanteRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.VOYANTE,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.VOYANTE]!,
    );
  }
}
