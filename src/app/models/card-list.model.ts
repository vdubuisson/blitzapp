import { PlayerRoleEnum } from '@/enums/player-role.enum';

export type CardList = {
  selectedRoles: Set<PlayerRoleEnum>;
  loupGarou: number;
  villageois: number;
  playersNumber: number;
};

export type StoredCardList = Omit<CardList, 'selectedRoles'> & {
  selectedRoles: PlayerRoleEnum[];
};
