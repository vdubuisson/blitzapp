import { RoundType } from '@/game-handlers/rounds/round-type';
import { PlayerRole } from '@/types/player-role';
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
