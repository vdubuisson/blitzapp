import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';

export class MontreurOursRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.MONTREUR_OURS,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.MONTREUR_OURS]!,
    );
  }
}
