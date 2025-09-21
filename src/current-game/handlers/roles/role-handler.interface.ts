import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';

export interface RoleHandler {
  readonly role: PlayerRole;
  prepareNewGame(players: Player[]): Player[];
  handleDeath(players: Player[], deadPlayer: Player): Player[];
  cleanStatusesAfterDay(players: Player[]): Player[];
}
