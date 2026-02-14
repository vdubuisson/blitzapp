import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { NeighborFinder } from '@/current-game/players/neighbor-finder';
import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { inject } from '@angular/core';
import { DefaultRoleHandler } from '../default/default.role-handler';

export class ChevalierRoleHandler extends DefaultRoleHandler {
  private readonly neighborFinder = inject(NeighborFinder);
  private readonly playersStatusUtility = inject(PlayersStatusUtility);

  constructor() {
    super(
      PlayerRoleEnum.CHEVALIER,
      ROLE_METADATA_CONFIG[PlayerRoleEnum.CHEVALIER]!,
    );
  }

  override handleDeath(players: Player[], deadPlayer: Player): Player[] {
    let playerToAddStatusId: number | undefined;
    if (deadPlayer.killedBy === PlayerRoleEnum.GRAND_MECHANT_LOUP) {
      playerToAddStatusId = players.find(
        (player) => player.role === PlayerRoleEnum.GRAND_MECHANT_LOUP,
      )?.id;
    } else if (deadPlayer.killedBy === PlayerRoleEnum.LOUP_GAROU) {
      const chevalierIndex = players.indexOf(deadPlayer);
      playerToAddStatusId = this.neighborFinder.findLeftNeighbor(
        players,
        chevalierIndex,
        true,
      )?.id;
    }

    if (playerToAddStatusId !== undefined) {
      return this.playersStatusUtility.addStatusToPlayersById(
        players,
        PlayerStatusEnum.RUSTY_SWORD,
        [playerToAddStatusId],
      );
    }

    return players;
  }

  override cleanStatusesAfterDay(players: Player[]): Player[] {
    if (
      players.some(
        (player) => player.role === PlayerRoleEnum.CHEVALIER && player.isDead,
      )
    ) {
      return this.statusHandlersManager
        .getHandler(PlayerStatusEnum.RUSTY_SWORD)
        .triggerAction(players);
    }
    return players;
  }
}
