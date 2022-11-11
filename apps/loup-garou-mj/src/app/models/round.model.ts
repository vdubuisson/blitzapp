import { RoundRoleEnum } from '../enums/round-role.enum';

export interface Round {
  role: RoundRoleEnum;
  selectablePLayers: number[];
  isMultiSelect: boolean;
}
