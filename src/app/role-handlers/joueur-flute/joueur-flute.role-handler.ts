import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';

export class JoueurFluteRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.JOUEUR_FLUTE,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.JOUEUR_FLUTE]!,
    );
  }
}
