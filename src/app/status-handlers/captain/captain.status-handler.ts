import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { AfterDeathRoundQueueStore } from '@/stores/after-death-round-queue/after-death-round-queue.store';
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
    if (deadPlayer.role !== PlayerRoleEnum.IDIOT) {
      this.afterDeathRoundQueue.update((queue) => [
        ...queue,
        RoundEnum.CAPITAINE,
      ]);
      return removeStatusFromPlayersById(players, PlayerStatusEnum.CAPTAIN, [
        deadPlayer.id,
      ]);
    }
    return players;
  }
}
