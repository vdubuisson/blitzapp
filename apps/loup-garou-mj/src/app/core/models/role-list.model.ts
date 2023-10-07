import { PlayerRoleEnum } from '../enums/player-role.enum';

export interface RoleList {
  selectedRoles: Set<PlayerRoleEnum>;
  loupGarou: number;
  villageois: number;
  playersNumber: number;
}

export interface StoredRoleList {
  selectedRoles: PlayerRoleEnum[];
  loupGarou: number;
  villageois: number;
  playersNumber: number;
}
