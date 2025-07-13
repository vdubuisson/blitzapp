import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { findLeftNeighbor } from '@/utils/neighbor.utils';
import { DefaultRoleHandler } from '../default/default.role-handler';

export class ChevalierRoleHandler extends DefaultRoleHandler {
  public static override readonly STATUSES: PlayerStatusEnum[] = [
    PlayerStatusEnum.RUSTY_SWORD,
  ];

  constructor() {
    super(
      PlayerRoleEnum.CHEVALIER,
      DefaultRoleHandler.ROUNDS,
      ChevalierRoleHandler.STATUSES,
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
}
