import { Player } from '../models/player.model';
import { isLoupGarou } from './roles.utils';

export function findLeftNeighbor(
  players: Player[],
  selectedIndex: number,
  onlyLoupGarou = false,
): Player | undefined {
  // Search after the selectedIndex
  let leftPlayer = players.find(
    (player, index) =>
      index > selectedIndex &&
      !player.isDead &&
      (!onlyLoupGarou || isLoupGarou(player)),
  );

  if (leftPlayer === undefined && selectedIndex > 0) {
    // Search before the selectedIndex
    leftPlayer = players.find(
      (player, index) =>
        index < selectedIndex &&
        !player.isDead &&
        (!onlyLoupGarou || isLoupGarou(player)),
    );
  }

  return leftPlayer;
}

export function findRightNeighbor(
  players: Player[],
  selectedIndex: number,
): Player {
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
