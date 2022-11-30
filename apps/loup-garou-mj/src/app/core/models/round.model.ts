import { RoundEnum } from '../enums/round.enum';

export interface Round {
  role: RoundEnum;
  selectablePlayers: number[];
  maxSelectable: number;
  minSelectable: number;
}
