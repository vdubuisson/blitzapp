import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';
import { Player } from '@/models/player.model';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

export class SorciereRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.SORCIERE,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.SORCIERE]!,
    );
  }

  override prepareNewGame(players: Player[]): Player[] {
    const newPlayers = super.prepareNewGame(players);
    const sorciere = players.find(
      (player) => player.role === PlayerRoleEnum.SORCIERE,
    );
    if (sorciere) {
      sorciere.statuses.add(PlayerStatusEnum.HEALTH_POTION);
      sorciere.statuses.add(PlayerStatusEnum.DEATH_POTION);
    }
    return newPlayers;
  }
}
