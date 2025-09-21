import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { AfterDeathRoundQueueStore } from '@/current-game/death/after-death-round-queue/after-death-round-queue-store';
import { removeStatusFromPlayersById } from '@/utils/status.utils';
import { inject } from '@angular/core';
import { DefaultStatusHandler } from '../default/default.status-handler';

export class CaptainStatusHandler extends DefaultStatusHandler {
  private readonly afterDeathRoundQueue = inject(AfterDeathRoundQueueStore)
    .state;

  /**
   * Handles the death of a player with the CAPTAIN status.
   *
   * @param players - The list of players in the game.
   * @param deadPlayer - The player who has died.
   * @return The updated list of players after handling the death.
   */
  override handleDeath(players: Player[], deadPlayer: Player): Player[] {
    if (deadPlayer.role !== PlayerRole.IDIOT) {
      this.afterDeathRoundQueue.update((queue) => [...queue, Round.CAPITAINE]);
      return removeStatusFromPlayersById(players, PlayerStatus.CAPTAIN, [
        deadPlayer.id,
      ]);
    }
    return players;
  }
}
