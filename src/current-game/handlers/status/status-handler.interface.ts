import { Player } from '@/shared/types/player';

export interface StatusHandler {
  handleDeath(players: Player[], deadPlayer: Player): Player[];
  triggerAction(players: Player[]): Player[];
}
