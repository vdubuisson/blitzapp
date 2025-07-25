import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { DefaultStatusHandler } from '../default/default.status-handler';
import { VictoryHandlersService } from '@/services/victory-handlers/victory-handlers.service';
import { inject } from '@angular/core';
import { VictoryEnum } from '@/enums/victory.enum';

export class LoverStatusHandler extends DefaultStatusHandler {
  private readonly victoryHandlersService = inject(VictoryHandlersService);

  /**
   * Handles the death of a player with the LOVER status.
   *
   * @param players - The list of players in the game.
   * @param deadPlayer - The player who has died.
   * @return The updated list of players after handling the death.
   */
  override handleDeath(players: Player[], deadPlayer: Player): Player[] {
    const newPlayers = [...players];
    const otherLivingLover = newPlayers.find(
      (player) =>
        player.statuses.has(PlayerStatusEnum.LOVER) &&
        player.id !== deadPlayer.id &&
        !player.isDead,
    );
    if (otherLivingLover !== undefined) {
      otherLivingLover.isDead = true;
    }

    this.victoryHandlersService.removeHandler(VictoryEnum.AMOUREUX);

    return newPlayers;
  }
}
