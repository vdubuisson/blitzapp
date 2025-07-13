import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';

export class CupidonRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.CUPIDON,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.CUPIDON]!,
    );
  }
}
