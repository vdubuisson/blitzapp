import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

export type Player = {
  id: number;
  name: string;
  role: PlayerRoleEnum;
  card: PlayerRoleEnum;
  statuses: Set<PlayerStatusEnum>;
  isDead: boolean;
  killedBy?: PlayerRoleEnum;
};

export type StoredPlayer = Omit<Player, 'statuses'> & {
  statuses: PlayerStatusEnum[];
};
