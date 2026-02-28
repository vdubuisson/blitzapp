import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import {
  createInjectionContextFactory,
  SpectatorInjectionContext,
  SpyObject,
} from '@ngneat/spectator/vitest';
import { firstValueFrom } from 'rxjs';
import { PereLoupsRoundHandler } from './pere-loups-round.handler';

describe('PereLoupsRoundHandler', () => {
  let roundHandler: PereLoupsRoundHandler;
  let spectator: SpectatorInjectionContext;

  let playersStatusUtility: SpyObject<PlayersStatusUtility>;

  const createInjectionContext = createInjectionContextFactory({
    mocks: [PlayersStatusUtility],
  });

  beforeEach(() => {
    spectator = createInjectionContext();
    roundHandler = spectator.runInInjectionContext(
      () => new PereLoupsRoundHandler(),
    );
    playersStatusUtility = spectator.inject(PlayersStatusUtility);
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
    playersStatusUtility.addStatusToPlayersById.mockReturnValue(players);
    playersStatusUtility.removeStatusFromPlayer.mockReturnValue(expectedPlayer);
    playersStatusUtility.addStatusToPlayer.mockReturnValue(expectedPlayer);

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0]),
    );
    expect(newPlayers[0]).toEqual(expectedPlayer);
    expect(playersStatusUtility.removeStatusFromPlayer).toHaveBeenCalledWith(
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
    playersStatusUtility.addStatusToPlayersById.mockReturnValue(players);
    playersStatusUtility.removeStatusFromPlayer.mockReturnValue(expectedPlayer);
    playersStatusUtility.addStatusToPlayer.mockReturnValue(expectedPlayer);

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0]),
    );
    expect(newPlayers[0]).toEqual(expectedPlayer);
    expect(playersStatusUtility.addStatusToPlayer).toHaveBeenCalledWith(
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
    playersStatusUtility.addStatusToPlayersById.mockReturnValue(
      expectedPlayers,
    );
    playersStatusUtility.addStatusToPlayer.mockReturnValue(expectedPlayers[0]);

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0]),
    );
    expect(newPlayers[0]).not.toEqual(players[0]);
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
    playersStatusUtility.addStatusToPlayersById.mockImplementation(
      (players) => players,
    );
    playersStatusUtility.removeStatusFromPlayer.mockReturnValue(expectedPlayer);
    playersStatusUtility.addStatusToPlayer.mockReturnValue(expectedPlayer);

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0]),
    );
    expect(newPlayers[0]).not.toEqual(players[0]);
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
    playersStatusUtility.addStatusToPlayersById.mockReturnValue(
      expectedPlayers,
    );
    playersStatusUtility.addStatusToPlayer.mockImplementation(
      (player) => player,
    );
    playersStatusUtility.removeStatusFromPlayer.mockImplementation(
      (player) => player,
    );

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0]),
    );
    expect(newPlayers).toBe(expectedPlayers);
    expect(playersStatusUtility.addStatusToPlayersById).toHaveBeenCalledWith(
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
