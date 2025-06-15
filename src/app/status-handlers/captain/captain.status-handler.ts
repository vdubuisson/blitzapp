import { Player } from '@/models/player.model';
import { DefaultStatusHandler } from '../default/default.status-handler';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { inject } from '@angular/core';
import { AfterDeathRoundQueueStore } from '@/stores/after-death-round-queue/after-death-round-queue.store';
import { RoundEnum } from '@/enums/round.enum';

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
    const newPlayers = [...players];
    if (deadPlayer.role !== PlayerRoleEnum.IDIOT) {
      newPlayers
        .find((player) => player.id === deadPlayer.id)
        ?.statuses.delete(PlayerStatusEnum.CAPTAIN);
      this.afterDeathRoundQueue.update((queue) => [
        ...queue,
        RoundEnum.CAPITAINE,
      ]);
    }
    return newPlayers;
  }
}
