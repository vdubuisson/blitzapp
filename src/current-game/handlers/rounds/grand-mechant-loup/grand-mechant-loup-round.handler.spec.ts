import { LOUPS_GAROUS_ROLES } from '@/config/loups-garous-roles';
import { PlayersRoleUtility } from '@/current-game/players/players-role-utility';
import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import {
  createInjectionContextFactory,
  mockProvider,
  SpectatorInjectionContext,
} from '@ngneat/spectator/vitest';
import { firstValueFrom } from 'rxjs';
import { GrandMechantLoupRoundHandler } from './grand-mechant-loup-round.handler';

describe('GrandMechantLoupRoundHandler', () => {
  let roundHandler: GrandMechantLoupRoundHandler;
  let spectator: SpectatorInjectionContext;

  const createInjectionContext = createInjectionContextFactory({
    mocks: [PlayersStatusUtility],
    providers: [
      mockProvider(PlayersRoleUtility, {
        isLoupGarou: vi.fn(
          (player) =>
            LOUPS_GAROUS_ROLES.includes(player.role) ||
            player.statuses.has(PlayerStatusEnum.INFECTED),
        ),
      }),
    ],
  });

  beforeEach(() => {
    spectator = createInjectionContext();
    roundHandler = spectator.runInInjectionContext(
      () => new GrandMechantLoupRoundHandler(),
    );
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

  it('should add WOLF_TARGET status to selected player', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.GRAND_MECHANT_LOUP,
        card: PlayerRoleEnum.GRAND_MECHANT_LOUP,
        statuses: new Set(),
        isDead: false,
      },
    ];
    const expectedPlayer = { ...players[0] };
    const playersStatusUtility = spectator.inject(PlayersStatusUtility);
    playersStatusUtility.addStatusToPlayer.mockReturnValue(expectedPlayer);

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0]),
    );
    expect(newPlayers[0]).toBe(expectedPlayer);
    expect(playersStatusUtility.addStatusToPlayer).toHaveBeenCalledWith(
      players[0],
      PlayerStatusEnum.WOLF_TARGET,
    );
  });

  it('should set killedBy GRAND_MECHANT_LOUP to selected player', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.GRAND_MECHANT_LOUP,
        card: PlayerRoleEnum.GRAND_MECHANT_LOUP,
        statuses: new Set(),
        isDead: false,
      },
    ];
    const expectedPlayer = { ...players[0] };
    const playersStatusUtility = spectator.inject(PlayersStatusUtility);
    playersStatusUtility.addStatusToPlayer.mockReturnValue(expectedPlayer);

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0]),
    );
    expect(newPlayers[0]).toBe(expectedPlayer);
    expect(newPlayers[0].killedBy).toEqual(PlayerRoleEnum.GRAND_MECHANT_LOUP);
  });

  it('should return alive players as selectable', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers.includes(0)).toEqual(true);
  });

  it('should not return dead players as selectable', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers.includes(0)).toEqual(false);
  });

  it('should not return LOUP_GAROU players as selectable', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers.includes(0)).toEqual(false);
  });

  it('should not return GRAND_MECHANT_LOUP player as selectable', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.GRAND_MECHANT_LOUP,
        card: PlayerRoleEnum.GRAND_MECHANT_LOUP,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers.includes(0)).toEqual(false);
  });

  it('should not return WOLF_TARGET player as selectable', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers.includes(0)).toEqual(false);
  });

  it('should return no players as selectable if at least one loup-garou is dead', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: true,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers.length).toEqual(0);
  });

  it('should return GRAND_MECHANT_LOUP as role round', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.round).toEqual(RoundEnum.GRAND_MECHANT_LOUP);
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
