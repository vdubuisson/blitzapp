import { PlayerRole } from '@/types/player-role';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';

export type RoundConfig = {
  round: Round;
  selectablePlayers: number[];
  selectableRoles?: PlayerRole[];
  maxSelectable: number;
  minSelectable: number;
  isDuringDay: boolean;
  type: RoundType;
};
