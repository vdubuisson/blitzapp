import { Player } from '../models/player.model';
import { CardList } from '../models/card-list.model';
import { PlayerRoleEnum } from '../enums/player-role.enum';

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
