import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';

export class LoupBlancRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.LOUP_BLANC,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.LOUP_BLANC]!,
    );
  }
}
