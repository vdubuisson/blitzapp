import { Player } from '../models/player.model';
import { PlayerRoleEnum } from '../enums/player-role.enum';

export function findLeftNeighbor(
  players: Player[],
  selectedIndex: number,
  roles?: PlayerRoleEnum[],
): Player | undefined {
  // Search after the selectedIndex
  let leftPlayer = players.find(
    (player, index) =>
      index > selectedIndex &&
      !player.isDead &&
      (roles === undefined || roles.includes(player.role)),
  );

  if (leftPlayer === undefined && selectedIndex > 0) {
    // Search before the selectedIndex
    leftPlayer = players.find(
      (player, index) =>
        index < selectedIndex &&
        !player.isDead &&
        (roles === undefined || roles.includes(player.role)),
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
