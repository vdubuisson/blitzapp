import { PlayerRole } from '@/types/player-role';

export type CardList = {
  selectedRoles: Set<PlayerRole>;
  loupGarou: number;
  villageois: number;
  playersNumber: number;
};

export type StoredCardList = Omit<CardList, 'selectedRoles'> & {
  selectedRoles: PlayerRole[];
};
