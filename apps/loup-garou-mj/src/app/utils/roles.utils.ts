import { Player } from '../models/player.model';
import { CardList } from '../models/card-list.model';
import { PlayerRoleEnum } from '../enums/player-role.enum';
import { LOUPS_GAROUS_ROLES } from '../configs/loups-garous-roles';
import { PlayerStatusEnum } from '../enums/player-status.enum';

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
