import {
  addStatusToPlayer,
  addStatusToPlayersById,
  removeStatusFromPlayer,
  removeStatusFromPlayersById,
} from './status.utils';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { PlayerRoleEnum } from '@/enums/player-role.enum';

describe('addStatusToPlayer', () => {
  const basePlayer: Player = {
    id: 1,
    name: 'Alice',
    role: PlayerRoleEnum.VILLAGEOIS,
    card: PlayerRoleEnum.VILLAGEOIS,
    statuses: new Set<PlayerStatusEnum>(),
    isDead: false,
  };

  it('should add a new status to an empty statuses set', () => {
    const updated = addStatusToPlayer(basePlayer, PlayerStatusEnum.WOLF_TARGET);
    expect(updated.statuses.has(PlayerStatusEnum.WOLF_TARGET)).toBe(true);
    expect(updated.statuses.size).toBe(1);
  });

  it('should add a new status to an existing statuses set', () => {
    const playerWithStatus: Player = {
      ...basePlayer,
      statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
    };
    const updated = addStatusToPlayer(
      playerWithStatus,
      PlayerStatusEnum.PROTECTED,
    );
    expect(updated.statuses.has(PlayerStatusEnum.WOLF_TARGET)).toBe(true);
    expect(updated.statuses.has(PlayerStatusEnum.PROTECTED)).toBe(true);
    expect(updated.statuses.size).toBe(2);
  });

  it('should not duplicate statuses', () => {
    const playerWithStatus: Player = {
      ...basePlayer,
      statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
    };
    const updated = addStatusToPlayer(
      playerWithStatus,
      PlayerStatusEnum.WOLF_TARGET,
    );
    expect(updated.statuses.has(PlayerStatusEnum.WOLF_TARGET)).toBe(true);
    expect(updated.statuses.size).toBe(1);
  });

  it('should return a new player object (immutability)', () => {
    const updated = addStatusToPlayer(basePlayer, PlayerStatusEnum.WOLF_TARGET);
    expect(updated).not.toBe(basePlayer);
    expect(updated.statuses).not.toBe(basePlayer.statuses);
  });
});

describe('removeStatusFromPlayer', () => {
  const basePlayer: Player = {
    id: 1,
    name: 'Alice',
    role: PlayerRoleEnum.VILLAGEOIS,
    card: PlayerRoleEnum.VILLAGEOIS,
    statuses: new Set<PlayerStatusEnum>(),
    isDead: false,
  };

  it('should remove an existing status from the statuses set', () => {
    const playerWithStatuses: Player = {
      ...basePlayer,
      statuses: new Set([
        PlayerStatusEnum.WOLF_TARGET,
        PlayerStatusEnum.PROTECTED,
      ]),
    };
    const updated = removeStatusFromPlayer(
      playerWithStatuses,
      PlayerStatusEnum.WOLF_TARGET,
    );
    expect(updated.statuses.has(PlayerStatusEnum.WOLF_TARGET)).toBe(false);
    expect(updated.statuses.has(PlayerStatusEnum.PROTECTED)).toBe(true);
    expect(updated.statuses.size).toBe(1);
  });

  it('should do nothing when removing a non-existent status', () => {
    const updated = removeStatusFromPlayer(
      basePlayer,
      PlayerStatusEnum.PROTECTED,
    );
    expect(updated.statuses.size).toBe(0);
    expect(updated.statuses.has(PlayerStatusEnum.PROTECTED)).toBe(false);
  });

  it('should return a new player object and not mutate original (immutability)', () => {
    const playerWithStatus: Player = {
      ...basePlayer,
      statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
    };
    const updated = removeStatusFromPlayer(
      playerWithStatus,
      PlayerStatusEnum.WOLF_TARGET,
    );
    expect(updated).not.toBe(playerWithStatus);
    expect(updated.statuses).not.toBe(playerWithStatus.statuses);
  });
});

describe('addStatusToPlayers', () => {
  const basePlayer = (id: number): Player => ({
    id,
    name: `Player ${id}`,
    role: PlayerRoleEnum.VILLAGEOIS,
    card: PlayerRoleEnum.VILLAGEOIS,
    statuses: new Set<PlayerStatusEnum>(),
    isDead: false,
  });

  it('should add a status to the specified player indexes and keep others unchanged', () => {
    const players = [basePlayer(1), basePlayer(2), basePlayer(3)];
    const updated = addStatusToPlayersById(
      players,
      PlayerStatusEnum.PROTECTED,
      [0, 2],
    );

    // array identity
    expect(updated).not.toBe(players);

    // changed players are new objects with the status
    expect(updated[0]).not.toBe(players[0]);
    expect(updated[0].statuses.has(PlayerStatusEnum.PROTECTED)).toBe(true);
    expect(updated[0].statuses.size).toBe(1);

    expect(updated[2]).not.toBe(players[2]);
    expect(updated[2].statuses.has(PlayerStatusEnum.PROTECTED)).toBe(true);
    expect(updated[2].statuses.size).toBe(1);

    // untouched player keeps the same reference and statuses
    expect(updated[1]).toBe(players[1]);
    expect(updated[1].statuses.size).toBe(0);
  });

  it('should not duplicate statuses when the status already exists on a player', () => {
    const playerWithStatus = {
      ...basePlayer(1),
      statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
    };
    const players = [playerWithStatus, basePlayer(2)];
    const updated = addStatusToPlayersById(
      players,
      PlayerStatusEnum.WOLF_TARGET,
      [0, 1],
    );

    // first player had it already => still size 1
    expect(updated[0].statuses.has(PlayerStatusEnum.WOLF_TARGET)).toBe(true);
    expect(updated[0].statuses.size).toBe(1);

    // second player got it
    expect(updated[1].statuses.has(PlayerStatusEnum.WOLF_TARGET)).toBe(true);
    expect(updated[1].statuses.size).toBe(1);
  });

  it('should not modify any player when playerIndexes is empty', () => {
    const players = [basePlayer(1), basePlayer(2)];
    const updated = addStatusToPlayersById(
      players,
      PlayerStatusEnum.PROTECTED,
      [],
    );

    // new array but same player references
    expect(updated).not.toBe(players);
    expect(updated[0]).toBe(players[0]);
    expect(updated[1]).toBe(players[1]);
  });
});

describe('removeStatusFromPlayers', () => {
  const basePlayerWith = (
    id: number,
    statuses: PlayerStatusEnum[] = [],
  ): Player => ({
    id,
    name: `Player ${id}`,
    role: PlayerRoleEnum.VILLAGEOIS,
    card: PlayerRoleEnum.VILLAGEOIS,
    statuses: new Set<PlayerStatusEnum>(statuses),
    isDead: false,
  });

  it('should remove the status from specified players and keep others unchanged', () => {
    const players = [
      basePlayerWith(1, [
        PlayerStatusEnum.WOLF_TARGET,
        PlayerStatusEnum.PROTECTED,
      ]),
      basePlayerWith(2, [PlayerStatusEnum.PROTECTED]),
      basePlayerWith(3, [PlayerStatusEnum.WOLF_TARGET]),
    ];

    const updated = removeStatusFromPlayersById(
      players,
      PlayerStatusEnum.WOLF_TARGET,
      [0, 2],
    );

    // changed players
    expect(updated[0]).not.toBe(players[0]);
    expect(updated[0].statuses.has(PlayerStatusEnum.WOLF_TARGET)).toBe(false);
    expect(updated[0].statuses.has(PlayerStatusEnum.PROTECTED)).toBe(true);
    expect(updated[0].statuses.size).toBe(1);

    expect(updated[2]).not.toBe(players[2]);
    expect(updated[2].statuses.has(PlayerStatusEnum.WOLF_TARGET)).toBe(false);
    expect(updated[2].statuses.size).toBe(0);

    // untouched player keeps same reference and statuses
    expect(updated[1]).toBe(players[1]);
    expect(updated[1].statuses.has(PlayerStatusEnum.PROTECTED)).toBe(true);
  });

  it('should do nothing for players that do not have the status', () => {
    const players = [
      basePlayerWith(1, [PlayerStatusEnum.PROTECTED]),
      basePlayerWith(2, []),
    ];
    const updated = removeStatusFromPlayersById(
      players,
      PlayerStatusEnum.WOLF_TARGET,
      [0, 1],
    );

    // neither had WOLF_TARGET, sizes unchanged
    expect(updated[0].statuses.size).toBe(1);
    expect(updated[0].statuses.has(PlayerStatusEnum.PROTECTED)).toBe(true);
    expect(updated[1].statuses.size).toBe(0);
  });

  it('should not modify any player references when playerIndexes is empty', () => {
    const players = [basePlayerWith(1, [PlayerStatusEnum.PROTECTED])];
    const updated = removeStatusFromPlayersById(
      players,
      PlayerStatusEnum.PROTECTED,
      [],
    );

    // new array but same player reference
    expect(updated).not.toBe(players);
    expect(updated[0]).toBe(players[0]);
    expect(updated[0].statuses.has(PlayerStatusEnum.PROTECTED)).toBe(true);
  });
});
