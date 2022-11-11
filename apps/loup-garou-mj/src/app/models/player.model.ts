import { PlayerRoleEnum } from '../enums/player-role.enum';
import { PlayerStatusEnum } from '../enums/player-status.enum';

export interface Player {
  id: number;
  name: string;
  role: PlayerRoleEnum;
  statuses: PlayerStatusEnum[];
  isDead: boolean;
}
