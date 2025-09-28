import { Player } from '@/shared/types/player';
import { CardList } from '@/shared/types/card-list';
import { PlayerRole, PlayerRoleEnum } from '@/types/player-role';
import { LOUPS_GAROUS_ROLES } from '@/config/loups-garous-roles';
import { PlayerStatusEnum } from '@/types/player-status';
import { INNOCENTS_POWER_REMOVAL_ROLES } from '@/config/innocents-power-removal-roles';
import { removeStatusFromPlayer } from './status.utils';

export function getNotPlayedRoles(
  players: Player[],
  cardList: CardList,
): PlayerRole[] {
  const playedRoles = players.map((player) => player.role);
  const selectedRoles = [
    ...cardList.selectedRoles,
    PlayerRoleEnum.VILLAGEOIS,
    PlayerRoleEnum.LOUP_GAROU,
  ];

  return selectedRoles.filter((role) => !playedRoles.includes(role));
}

export function isLoupGarou(player: Player): boolean {
  return (
    LOUPS_GAROUS_ROLES.includes(player.role) ||
    player.statuses.has(PlayerStatusEnum.INFECTED)
  );
}

export function isKilledByInnocents(player: Player): boolean {
  const innocentRoles: PlayerRole[] = [
    PlayerRoleEnum.CHASSEUR,
    PlayerRoleEnum.SORCIERE,
    PlayerRoleEnum.VILLAGEOIS,
  ];
  return (
    player.killedBy !== undefined && innocentRoles.includes(player.killedBy)
  );
}

export function removePowersFromInnocents(players: Player[]): Player[] {
  return players.map((player) => {
    if (player.role === PlayerRoleEnum.SORCIERE) {
      let newPlayer = removeStatusFromPlayer(
        player,
        PlayerStatusEnum.HEALTH_POTION,
      );
      newPlayer = removeStatusFromPlayer(
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
