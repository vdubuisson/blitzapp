import { PlayerStatus } from '@/types/player-status';
import { Player } from '@/shared/types/player';

export const addStatusToPlayer = (
  player: Player,
  status: PlayerStatus,
): Player => ({
  ...player,
  statuses: new Set([...player.statuses, status]),
});

export const removeStatusFromPlayer = (
  player: Player,
  status: PlayerStatus,
): Player => {
  const updatedStatuses = new Set(player.statuses);
  updatedStatuses.delete(status);
  return {
    ...player,
    statuses: updatedStatuses,
  };
};

export const addStatusToPlayersById = (
  players: Player[],
  status: PlayerStatus,
  playerIds: number[],
): Player[] =>
  players.map((player) =>
    playerIds.includes(player.id) ? addStatusToPlayer(player, status) : player,
  );

export const removeStatusFromPlayersById = (
  players: Player[],
  status: PlayerStatus,
  playerIds: number[],
): Player[] =>
  players.map((player) =>
    playerIds.includes(player.id)
      ? removeStatusFromPlayer(player, status)
      : player,
  );
