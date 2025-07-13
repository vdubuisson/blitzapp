import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';

export class SalvateurRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.SALVATEUR,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.SALVATEUR]!,
    );
  }
}
