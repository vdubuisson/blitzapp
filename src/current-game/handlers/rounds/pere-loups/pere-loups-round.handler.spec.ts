import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import * as statusUtils from '@/utils/status.utils';
import { firstValueFrom } from 'rxjs';
import { PereLoupsRoundHandler } from './pere-loups-round.handler';

describe('PereLoupsRoundHandler', () => {
  let roundHandler: PereLoupsRoundHandler;

  beforeAll(() => {
    roundHandler = new PereLoupsRoundHandler();
  });

  it('should not be only once', () => {
    expect(roundHandler.isOnlyOnce).toEqual(false);
  });

  it('should not be during day', () => {
    expect(roundHandler.isDuringDay).toEqual(false);
  });

  it('should return not during day', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.isDuringDay).toEqual(false);
  });

  it('should be PLAYERS type', () => {
    expect(roundHandler.type).toEqual(RoundType.PLAYERS);
  });

  it('should return PLAYERS type', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.type).toEqual(RoundType.PLAYERS);
  });

  it('should remove WOLF_TARGET status to selected player', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set([PlayerStatus.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.PERE_LOUPS,
        card: PlayerRole.PERE_LOUPS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    const expectedPlayer = { ...players[0] };
    jest
      .spyOn(statusUtils, 'removeStatusFromPlayer')
      .mockReturnValue(expectedPlayer);
    jest
      .spyOn(statusUtils, 'addStatusToPlayer')
      .mockReturnValue(expectedPlayer);

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0]),
    );
    expect(newPlayers[0]).toBe(expectedPlayer);
    expect(statusUtils.removeStatusFromPlayer).toHaveBeenCalledWith(
      players[0],
      PlayerStatus.WOLF_TARGET,
    );
  });

  it('should add INFECTED status to selected player', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set([PlayerStatus.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.PERE_LOUPS,
        card: PlayerRole.PERE_LOUPS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    const expectedPlayer = { ...players[0] };
    jest
      .spyOn(statusUtils, 'removeStatusFromPlayer')
      .mockReturnValue(expectedPlayer);
    jest
      .spyOn(statusUtils, 'addStatusToPlayer')
      .mockReturnValue(expectedPlayer);

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0]),
    );
    expect(newPlayers[0]).toBe(expectedPlayer);
    expect(statusUtils.addStatusToPlayer).toHaveBeenCalledWith(
      players[0],
      PlayerStatus.INFECTED,
    );
  });

  it('should transform JOUEUR_FLUTE into LOUP_GAROU', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.JOUEUR_FLUTE,
        card: PlayerRole.JOUEUR_FLUTE,
        statuses: new Set([PlayerStatus.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.PERE_LOUPS,
        card: PlayerRole.PERE_LOUPS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const expectedPlayers = [...players];
    jest
      .spyOn(statusUtils, 'addStatusToPlayersById')
      .mockReturnValue(expectedPlayers);

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0]),
    );
    expect(newPlayers[0]).not.toBe(players[0]);
    expect(newPlayers[0].role).toEqual(PlayerRole.LOUP_GAROU);
  });

  it('should remove killedBy to selected player', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set([PlayerStatus.WOLF_TARGET]),
        isDead: false,
        killedBy: PlayerRole.LOUP_GAROU,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.PERE_LOUPS,
        card: PlayerRole.PERE_LOUPS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    const expectedPlayer = { ...players[0] };
    jest
      .spyOn(statusUtils, 'removeStatusFromPlayer')
      .mockReturnValue(expectedPlayer);
    jest
      .spyOn(statusUtils, 'addStatusToPlayer')
      .mockReturnValue(expectedPlayer);

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0]),
    );
    expect(newPlayers[0]).not.toBe(players[0]);
    expect(newPlayers[0].killedBy).toBeUndefined();
  });

  it('should add NO_POWER status to PERE_LOUPS player', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set([PlayerStatus.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.PERE_LOUPS,
        card: PlayerRole.PERE_LOUPS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    const expectedPlayers = [...players];
    jest
      .spyOn(statusUtils, 'addStatusToPlayersById')
      .mockReturnValue(expectedPlayers);

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0]),
    );
    expect(newPlayers).toBe(expectedPlayers);
    expect(statusUtils.addStatusToPlayersById).toHaveBeenCalledWith(
      expectedPlayers,
      PlayerStatus.NO_POWER,
      [1],
    );
  });

  it('should not add NO_POWER status to PERE_LOUPS player if no player selected', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set([PlayerStatus.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.PERE_LOUPS,
        card: PlayerRole.PERE_LOUPS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, []),
    );
    expect(newPlayers[1].statuses.has(PlayerStatus.NO_POWER)).toEqual(false);
  });

  it('should return player with WOLF_TARGET status as selectable players if PERE_LOUPS has not NO_POWER', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set([PlayerStatus.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.PERE_LOUPS,
        card: PlayerRole.PERE_LOUPS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers).toEqual([0]);
  });

  it('should return empty array as selectable players if PERE_LOUPS has NO_POWER', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set([PlayerStatus.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.PERE_LOUPS,
        card: PlayerRole.PERE_LOUPS,
        statuses: new Set([PlayerStatus.NO_POWER]),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers).toEqual([]);
  });

  it('should return PERE_LOUPS as round role', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.round).toEqual(Round.PERE_LOUPS);
  });

  it('should return 1 as maxSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.maxSelectable).toEqual(1);
  });

  it('should return 0 as minSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.minSelectable).toEqual(0);
  });
});
