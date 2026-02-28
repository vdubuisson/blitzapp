import { INNOCENTS_POWER_REMOVAL_ROLES } from '@/config/innocents-power-removal-roles';
import { LOUPS_GAROUS_ROLES } from '@/config/loups-garous-roles';
import { CardList } from '@/shared/types/card-list';
import { Player } from '@/shared/types/player';
import { PlayerRole, PlayerRoleEnum } from '@/shared/types/player-role';
import { PlayerStatusEnum } from '@/shared/types/player-status';
import { inject, Injectable } from '@angular/core';
import { PlayersStatusUtility } from './players-status-utility';

@Injectable({
  providedIn: 'root',
})
export class PlayersRoleUtility {
  private readonly playersStatusUtility = inject(PlayersStatusUtility);

  getNotPlayedRoles(players: Player[], cardList: CardList): PlayerRole[] {
    const playedRoles = players.map((player) => player.role);
    const selectedRoles = [
      ...cardList.selectedRoles,
      PlayerRoleEnum.VILLAGEOIS,
      PlayerRoleEnum.LOUP_GAROU,
    ];

    return selectedRoles.filter((role) => !playedRoles.includes(role));
  }

  isLoupGarou(player: Player): boolean {
    return (
      LOUPS_GAROUS_ROLES.includes(player.role) ||
      player.statuses.has(PlayerStatusEnum.INFECTED)
    );
  }

  isKilledByInnocents(player: Player): boolean {
    const innocentRoles: PlayerRole[] = [
      PlayerRoleEnum.CHASSEUR,
      PlayerRoleEnum.SORCIERE,
      PlayerRoleEnum.VILLAGEOIS,
    ];
    return (
      player.killedBy !== undefined && innocentRoles.includes(player.killedBy)
    );
  }

  removePowersFromInnocents(players: Player[]): Player[] {
    return players.map((player) => {
      if (player.role === PlayerRoleEnum.SORCIERE) {
        let newPlayer = this.playersStatusUtility.removeStatusFromPlayer(
          player,
          PlayerStatusEnum.HEALTH_POTION,
        );
        newPlayer = this.playersStatusUtility.removeStatusFromPlayer(
          newPlayer,
          PlayerStatusEnum.DEATH_POTION,
        );
        newPlayer.role = PlayerRoleEnum.VILLAGEOIS;
        return newPlayer;
      }
      if (INNOCENTS_POWER_REMOVAL_ROLES.includes(player.role)) {
        return { ...player, role: PlayerRoleEnum.VILLAGEOIS };
      }
      return player;
    });
  }
}
