import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
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
    expect(roundHandler.type).toEqual(RoundTypeEnum.PLAYERS);
  });

  it('should return PLAYERS type', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.type).toEqual(RoundTypeEnum.PLAYERS);
  });

  it('should remove WOLF_TARGET status to selected player', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.PERE_LOUPS,
        card: PlayerRoleEnum.PERE_LOUPS,
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
      PlayerStatusEnum.WOLF_TARGET,
    );
  });

  it('should add INFECTED status to selected player', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.PERE_LOUPS,
        card: PlayerRoleEnum.PERE_LOUPS,
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
      PlayerStatusEnum.INFECTED,
    );
  });

  it('should transform JOUEUR_FLUTE into LOUP_GAROU', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.JOUEUR_FLUTE,
        card: PlayerRoleEnum.JOUEUR_FLUTE,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.PERE_LOUPS,
        card: PlayerRoleEnum.PERE_LOUPS,
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
    expect(newPlayers[0].role).toEqual(PlayerRoleEnum.LOUP_GAROU);
  });

  it('should remove killedBy to selected player', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
        killedBy: PlayerRoleEnum.LOUP_GAROU,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.PERE_LOUPS,
        card: PlayerRoleEnum.PERE_LOUPS,
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
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.PERE_LOUPS,
        card: PlayerRoleEnum.PERE_LOUPS,
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
      PlayerStatusEnum.NO_POWER,
      [1],
    );
  });

  it('should not add NO_POWER status to PERE_LOUPS player if no player selected', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.PERE_LOUPS,
        card: PlayerRoleEnum.PERE_LOUPS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, []),
    );
    expect(newPlayers[1].statuses.has(PlayerStatusEnum.NO_POWER)).toEqual(
      false,
    );
  });

  it('should return player with WOLF_TARGET status as selectable players if PERE_LOUPS has not NO_POWER', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.PERE_LOUPS,
        card: PlayerRoleEnum.PERE_LOUPS,
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
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.PERE_LOUPS,
        card: PlayerRoleEnum.PERE_LOUPS,
        statuses: new Set([PlayerStatusEnum.NO_POWER]),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers).toEqual([]);
  });

  it('should return PERE_LOUPS as round role', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.round).toEqual(RoundEnum.PERE_LOUPS);
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
