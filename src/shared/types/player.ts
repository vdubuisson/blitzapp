import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';

export type Player = {
  id: number;
  name: string;
  role: PlayerRole;
  card: PlayerRole;
  statuses: Set<PlayerStatus>;
  isDead: boolean;
  killedBy?: PlayerRole;
};

export type StoredPlayer = Omit<Player, 'statuses'> & {
  statuses: PlayerStatus[];
};
