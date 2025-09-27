import { Player } from '@/shared/types/player';
import { CardList } from '@/shared/types/card-list';
import { PlayerRole } from '@/types/player-role';
import { LOUPS_GAROUS_ROLES } from '@/config/loups-garous-roles';
import { PlayerStatus } from '@/types/player-status';
import { INNOCENTS_POWER_REMOVAL_ROLES } from '@/config/innocents-power-removal-roles';
import { removeStatusFromPlayer } from './status.utils';

export function getNotPlayedRoles(
  players: Player[],
  cardList: CardList,
): PlayerRole[] {
  const playedRoles = players.map((player) => player.role);
  const selectedRoles = [
    ...cardList.selectedRoles,
    PlayerRole.VILLAGEOIS,
    PlayerRole.LOUP_GAROU,
  ];

  return selectedRoles.filter((role) => !playedRoles.includes(role));
}

export function isLoupGarou(player: Player): boolean {
  return (
    LOUPS_GAROUS_ROLES.includes(player.role) ||
    player.statuses.has(PlayerStatus.INFECTED)
  );
}

export function isKilledByInnocents(player: Player): boolean {
  return (
    player.killedBy !== undefined &&
    [PlayerRole.CHASSEUR, PlayerRole.SORCIERE, PlayerRole.VILLAGEOIS].includes(
      player.killedBy,
    )
  );
}

export function removePowersFromInnocents(players: Player[]): Player[] {
  return players.map((player) => {
    if (player.role === PlayerRole.SORCIERE) {
      let newPlayer = removeStatusFromPlayer(
        player,
        PlayerStatus.HEALTH_POTION,
      );
      newPlayer = removeStatusFromPlayer(newPlayer, PlayerStatus.DEATH_POTION);
      newPlayer.role = PlayerRole.VILLAGEOIS;
      return newPlayer;
    }
    if (INNOCENTS_POWER_REMOVAL_ROLES.includes(player.role)) {
      return { ...player, role: PlayerRole.VILLAGEOIS };
    }
    return player;
  });
}
