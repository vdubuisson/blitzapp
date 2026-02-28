import { LOUPS_GAROUS_ROLES } from '@/config/loups-garous-roles';
import { AnnouncementTypesEnum } from '@/current-game/announcements/announcement-types';
import { Announcer } from '@/current-game/announcements/announcer';
import { NeighborFinder } from '@/current-game/players/neighbor-finder';
import { PlayersRoleUtility } from '@/current-game/players/players-role-utility';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import {
  createInjectionContextFactory,
  mockProvider,
  SpectatorInjectionContext,
  SpyObject,
} from '@ngneat/spectator/vitest';
import { firstValueFrom } from 'rxjs';
import { MontreurOursRoundHandler } from './montreur-ours-round.handler';

describe('MontreurOursRoundHandler', () => {
  let roundHandler: MontreurOursRoundHandler;
  let spectator: SpectatorInjectionContext;

  let neighborFinder: SpyObject<NeighborFinder>;

  const createContext = createInjectionContextFactory({
    mocks: [Announcer, NeighborFinder],
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
    spectator = createContext();

    roundHandler = spectator.runInInjectionContext(
      () => new MontreurOursRoundHandler(),
    );

    neighborFinder = spectator.inject(NeighborFinder);
  });

  it('should not be only once', () => {
    expect(roundHandler.isOnlyOnce).toEqual(false);
  });

  it('should be during day', () => {
    expect(roundHandler.isDuringDay).toEqual(true);
  });

  it('should return during day', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.isDuringDay).toEqual(true);
  });

  it('should be AUTO type', () => {
    expect(roundHandler.type).toEqual(RoundTypeEnum.AUTO);
  });

  it('should return AUTO type', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.type).toEqual(RoundTypeEnum.AUTO);
  });

  it('should return players without change', async () => {
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
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, []),
    );
    expect(newPlayers).toEqual(players);
  });

  it('should return no players as selectable players', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers).toEqual([]);
  });

  it('should return MONTREUR_OURS as round role', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.round).toEqual(RoundEnum.MONTREUR_OURS);
  });

  it('should return 0 as maxSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.maxSelectable).toEqual(0);
  });

  it('should return 0 as minSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.minSelectable).toEqual(0);
  });

  it('should announce bear growl if MONTREUR_OURS is INFECTED', async () => {
    const mockPlayers: Player[] = [
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
        role: PlayerRoleEnum.MONTREUR_OURS,
        card: PlayerRoleEnum.MONTREUR_OURS,
        statuses: new Set([PlayerStatusEnum.INFECTED]),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    const announcer = spectator.inject(Announcer);

    await firstValueFrom(roundHandler.handleAction(mockPlayers, []));
    expect(announcer.announce).toHaveBeenCalledWith(
      AnnouncementTypesEnum.BEAR_GROWL,
    );
  });

  it('should announce bear growl if left neighbor is LOUP_GAROU', async () => {
    const mockPlayers: Player[] = [
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
        role: PlayerRoleEnum.MONTREUR_OURS,
        card: PlayerRoleEnum.MONTREUR_OURS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    const announcer = spectator.inject(Announcer);
    neighborFinder.findLeftNeighbor.mockReturnValue({
      id: 2,
      name: 'player2',
      role: PlayerRoleEnum.LOUP_GAROU,
      card: PlayerRoleEnum.LOUP_GAROU,
      statuses: new Set(),
      isDead: false,
    });

    await firstValueFrom(roundHandler.handleAction(mockPlayers, []));
    expect(announcer.announce).toHaveBeenCalledWith(
      AnnouncementTypesEnum.BEAR_GROWL,
    );
  });

  it('should announce bear growl if right neighbor is LOUP_GAROU', async () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.MONTREUR_OURS,
        card: PlayerRoleEnum.MONTREUR_OURS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    const announcer = spectator.inject(Announcer);
    neighborFinder.findLeftNeighbor.mockReturnValue({
      id: 2,
      name: 'player2',
      role: PlayerRoleEnum.VILLAGEOIS,
      card: PlayerRoleEnum.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });
    neighborFinder.findRightNeighbor.mockReturnValue({
      id: 0,
      name: 'player0',
      role: PlayerRoleEnum.LOUP_GAROU,
      card: PlayerRoleEnum.LOUP_GAROU,
      statuses: new Set(),
      isDead: false,
    });

    await firstValueFrom(roundHandler.handleAction(mockPlayers, []));
    expect(announcer.announce).toHaveBeenCalledWith(
      AnnouncementTypesEnum.BEAR_GROWL,
    );
  });

  it('should not announce bear growl if no neighbor is LOUP_GAROU', async () => {
    const mockPlayers: Player[] = [
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
        role: PlayerRoleEnum.MONTREUR_OURS,
        card: PlayerRoleEnum.MONTREUR_OURS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    const announcer = spectator.inject(Announcer);
    neighborFinder.findLeftNeighbor.mockReturnValue({
      id: 2,
      name: 'player2',
      role: PlayerRoleEnum.VILLAGEOIS,
      card: PlayerRoleEnum.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });
    neighborFinder.findRightNeighbor.mockReturnValue({
      id: 0,
      name: 'player0',
      role: PlayerRoleEnum.VILLAGEOIS,
      card: PlayerRoleEnum.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });

    await firstValueFrom(roundHandler.handleAction(mockPlayers, []));
    expect(announcer.announce).not.toHaveBeenCalled();
  });
});
