import { Player } from '@/models/player.model';
import { StatusHandler } from '../status-handler.interface';

export class DefaultStatusHandler implements StatusHandler {
  handleDeath(players: Player[], _: Player): Player[] {
    return players;
  }

  triggerAction(players: Player[]): Player[] {
    return players;
  }
}
