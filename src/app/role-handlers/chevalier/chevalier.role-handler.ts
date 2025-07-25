import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { findLeftNeighbor } from '@/utils/neighbor.utils';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';

export class ChevalierRoleHandler extends DefaultRoleHandler {
  constructor() {
    super(
      PlayerRoleEnum.CHEVALIER,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.CHEVALIER]!,
    );
  }

  override handleDeath(players: Player[], deadPlayer: Player): Player[] {
    const newPlayers = [...players];
    if (deadPlayer.killedBy === PlayerRoleEnum.GRAND_MECHANT_LOUP) {
      newPlayers
        .find((player) => player.role === PlayerRoleEnum.GRAND_MECHANT_LOUP)
        ?.statuses.add(PlayerStatusEnum.RUSTY_SWORD);
    } else if (deadPlayer.killedBy === PlayerRoleEnum.LOUP_GAROU) {
      const chevalierIndex = newPlayers.indexOf(deadPlayer);
      findLeftNeighbor(newPlayers, chevalierIndex, true)?.statuses.add(
        PlayerStatusEnum.RUSTY_SWORD,
      );
    }
    return newPlayers;
  }

  override cleanStatusesAfterDay(players: Player[]): Player[] {
    if (
      players.some(
        (player) => player.role === PlayerRoleEnum.CHEVALIER && player.isDead,
      )
    ) {
      return this.statusHandlersService
        .getHandler(PlayerStatusEnum.RUSTY_SWORD)
        .triggerAction(players);
    }
    return players;
  }
}
