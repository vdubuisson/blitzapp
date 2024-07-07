import { PlayerRoleEnum } from '../enums/player-role.enum';
import { PlayerStatusEnum } from '../enums/player-status.enum';

export interface Player {
  id: number;
  name: string;
  role: PlayerRoleEnum;
  card: PlayerRoleEnum;
  statuses: Set<PlayerStatusEnum>;
  isDead: boolean;
  killedBy?: PlayerRoleEnum;
}

export interface StoredPlayer extends Omit<Player, 'statuses'> {
  statuses: PlayerStatusEnum[];
}
