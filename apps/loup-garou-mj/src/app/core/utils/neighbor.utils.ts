import { Player } from '../models/player.model';

export function findLeftNeighbor(
  players: Player[],
  selectedIndex: number
): Player {
  let leftIndex = selectedIndex + 1;
  if (leftIndex > players.length - 1) {
    leftIndex = 0;
  }
  let leftPlayer: Player;
  do {
    leftPlayer = players[leftIndex];
    leftIndex++;
    if (leftIndex > players.length - 1) {
      leftIndex = 0;
    }
  } while (leftPlayer.isDead && leftIndex !== selectedIndex);
  return leftPlayer;
}

export function findRightNeighbor(
  players: Player[],
  selectedIndex: number
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
