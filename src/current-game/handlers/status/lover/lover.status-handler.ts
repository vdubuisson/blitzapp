import { PlayerStatusEnum } from '@/types/player-status';
import { Player } from '@/shared/types/player';
import { DefaultStatusHandler } from '../default/default.status-handler';
import { VictoryHandlersManager } from '@/game-handlers/victories/victory-handlers-manager';
import { inject } from '@angular/core';
import { VictoryEnum } from '@/types/victory';

export class LoverStatusHandler extends DefaultStatusHandler {
  private readonly victoryHandlersManager = inject(VictoryHandlersManager);

  /**
   * Handles the death of a player with the LOVER status.
   *
   * @param players - The list of players in the game.
   * @param deadPlayer - The player who has died.
   * @return The updated list of players after handling the death.
   */
  override handleDeath(players: Player[], deadPlayer: Player): Player[] {
    const newPlayers = [...players];
    const otherLivingLoverIndex = newPlayers.findIndex(
      (player) =>
        player.statuses.has(PlayerStatusEnum.LOVER) &&
        player.id !== deadPlayer.id &&
        !player.isDead,
    );
    if (otherLivingLoverIndex > -1) {
      newPlayers[otherLivingLoverIndex] = {
        ...newPlayers[otherLivingLoverIndex],
        isDead: true,
      };
    }

    this.victoryHandlersManager.removeHandler(VictoryEnum.AMOUREUX);

    return newPlayers;
  }
}
