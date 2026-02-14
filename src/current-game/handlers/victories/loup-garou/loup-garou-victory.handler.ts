import { PlayersRoleUtility } from '@/current-game/players/players-role-utility';
import { VictoryHandler } from '@/game-handlers/victories/victory.handler';
import { Player } from '@/shared/types/player';
import { inject } from '@angular/core';

export class LoupGarouVictoryHandler implements VictoryHandler {
  private readonly playersRoleUtility = inject(PlayersRoleUtility);

  isVictorious(players: Player[]): boolean {
    return players
      .filter((player) => !player.isDead)
      .every((player) => this.playersRoleUtility.isLoupGarou(player));
  }
}
