import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';

export const addStatusToPlayer = (
  player: Player,
  status: PlayerStatusEnum,
): Player => ({
  ...player,
  statuses: new Set([...player.statuses, status]),
});

export const removeStatusFromPlayer = (
  player: Player,
  status: PlayerStatusEnum,
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
  status: PlayerStatusEnum,
  playerIds: number[],
): Player[] =>
  players.map((player) =>
    playerIds.includes(player.id) ? addStatusToPlayer(player, status) : player,
  );

export const removeStatusFromPlayersById = (
  players: Player[],
  status: PlayerStatusEnum,
  playerIds: number[],
): Player[] =>
  players.map((player) =>
    playerIds.includes(player.id)
      ? removeStatusFromPlayer(player, status)
      : player,
  );
