import { PlayerRoleEnum } from '../enums/player-role.enum';

export interface CardList {
  selectedRoles: Set<PlayerRoleEnum>;
  loupGarou: number;
  villageois: number;
  playersNumber: number;
}

export interface StoredCardList extends Omit<CardList, 'selectedRoles'> {
  selectedRoles: PlayerRoleEnum[];
}
