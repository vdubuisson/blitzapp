import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';

export class SorciereRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.SORCIERE,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.SORCIERE]!,
    );
  }
}
