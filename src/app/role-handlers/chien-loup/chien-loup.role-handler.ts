import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';

export class ChienLoupRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.CHIEN_LOUP,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.CHIEN_LOUP]!,
    );
  }
}
