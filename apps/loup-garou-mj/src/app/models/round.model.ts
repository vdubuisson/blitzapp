import { PlayerRoleEnum } from '../enums/player-role.enum';
import { RoundTypeEnum } from '../enums/round-type.enum';
import { RoundEnum } from '../enums/round.enum';

export interface Round {
  role: RoundEnum;
  selectablePlayers: number[];
  selectableRoles?: PlayerRoleEnum[];
  maxSelectable: number;
  minSelectable: number;
  isDuringDay: boolean;
  type: RoundTypeEnum;
}
