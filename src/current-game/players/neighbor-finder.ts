import { Player } from '@/shared/types/player';
import { inject, Injectable } from '@angular/core';
import { PlayersRoleUtility } from './players-role-utility';

@Injectable({
  providedIn: 'root',
})
export class NeighborFinder {
  private readonly playersRoleUtility = inject(PlayersRoleUtility);

  findLeftNeighbor(
    players: Player[],
    selectedIndex: number,
    onlyLoupGarou = false,
  ): Player | undefined {
    // Search after the selectedIndex
    let leftPlayer = players.find(
      (player, index) =>
        index > selectedIndex &&
        !player.isDead &&
        (!onlyLoupGarou || this.playersRoleUtility.isLoupGarou(player)),
    );

    if (leftPlayer === undefined && selectedIndex > 0) {
      // Search before the selectedIndex
      leftPlayer = players.find(
        (player, index) =>
          index < selectedIndex &&
          !player.isDead &&
          (!onlyLoupGarou || this.playersRoleUtility.isLoupGarou(player)),
      );
    }

    return leftPlayer;
  }

  findRightNeighbor(players: Player[], selectedIndex: number): Player {
    let rightIndex = selectedIndex - 1;
    if (rightIndex < 0) {
      rightIndex = players.length - 1;
    }
    let rightPlayer: Player;
    do {
      rightPlayer = players[rightIndex];
      rightIndex--;
      if (rightIndex < 0) {
        rightIndex = players.length - 1;
      }
    } while (rightPlayer.isDead && rightIndex !== selectedIndex);
    return rightPlayer;
  }
}
