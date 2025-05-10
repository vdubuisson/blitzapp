import { Player } from '@/models/player.model';
import { CardList } from '@/models/card-list.model';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { LOUPS_GAROUS_ROLES } from '@/configs/loups-garous-roles';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { INNOCENTS_POWER_REMOVAL_ROLES } from '@/configs/innocents-power-removal-roles';

export function getNotPlayedRoles(
  players: Player[],
  cardList: CardList,
): PlayerRoleEnum[] {
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
  return (
    player.killedBy !== undefined &&
    [
      PlayerRoleEnum.CHASSEUR,
      PlayerRoleEnum.SORCIERE,
      PlayerRoleEnum.VILLAGEOIS,
    ].includes(player.killedBy)
  );
}

export function removePowersFromInnocents(players: Player[]): Player[] {
  const newPlayers = [...players];
  const sorcierePlayer = newPlayers.find(
    (player) => player.role === PlayerRoleEnum.SORCIERE,
  );
  if (sorcierePlayer !== undefined) {
    sorcierePlayer.statuses.delete(PlayerStatusEnum.HEALTH_POTION);
    sorcierePlayer.statuses.delete(PlayerStatusEnum.DEATH_POTION);
  }

  newPlayers
    .filter((player) => INNOCENTS_POWER_REMOVAL_ROLES.includes(player.role))
    .forEach((player) => {
      player.role = PlayerRoleEnum.VILLAGEOIS;
    });

  return newPlayers;
}
