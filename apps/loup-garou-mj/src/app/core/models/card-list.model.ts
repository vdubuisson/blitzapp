import { PlayerRoleEnum } from '../enums/player-role.enum';

export interface CardList {
  selectedRoles: Set<PlayerRoleEnum>;
  loupGarou: number;
  villageois: number;
  playersNumber: number;
}

export interface StoredCardList {
  selectedRoles: PlayerRoleEnum[];
  loupGarou: number;
  villageois: number;
  playersNumber: number;
}
