import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';

export interface RoleHandler {
  readonly role: PlayerRoleEnum;
  prepareNewGame(players: Player[]): Player[];
  handleDeath(players: Player[], deadPlayer: Player): Player[];
  cleanStatusesAfterDay(players: Player[]): Player[];
}
