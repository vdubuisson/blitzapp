import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';

export class EnfantSauvageRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.ENFANT_SAUVAGE,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.ENFANT_SAUVAGE]!,
    );
  }
}
