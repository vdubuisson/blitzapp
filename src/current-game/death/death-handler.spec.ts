import { AnnouncementTypesEnum } from '@/current-game/announcements/announcement-types';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import { Player } from '@/shared/types/player';
import { RoleHandler } from '@/game-handlers/roles/role-handler.interface';
import { AfterDeathRoundQueueStore } from '@/current-game/death/after-death-round-queue/after-death-round-queue-store';
import { DeathsToAnnounceStore } from '@/current-game/death/deaths-to-announce/deaths-to-announce-store';
import { KnownDeathsStore } from '@/current-game/death/known-deaths/known-deaths-store';
import { signal } from '@angular/core';
import {
  createServiceFactory,
  SpectatorService,
  mockProvider,
} from '@ngneat/spectator/jest';
import { DeathHandler } from './death-handler';
import { StatusHandlersManager } from '../handlers/status/status-handlers-manager';
import { StatusHandler } from '@/game-handlers/status/status-handler.interface';
import { Announcer } from '../announcements/announcer';
import { RoleHandlersManager } from '@/game-handlers/roles/role-handlers-manager';

describe('DeathHandler', () => {
  let spectator: SpectatorService<DeathHandler>;

  const mockRoleHandler: RoleHandler = {
    handleDeath: jest.fn().mockImplementation((players) => players),
  } as unknown as RoleHandler;

  const mockStatusHandler: StatusHandler = {
    handleDeath: jest.fn().mockImplementation((players, _) => players),
    triggerAction: jest.fn().mockImplementation((players) => players),
  } as unknown as StatusHandler;

  const mockLoverStatusHandler: StatusHandler = {
    handleDeath: jest.fn().mockImplementation((players, _) => {
      const newPlayers = [...players];
      newPlayers.forEach((player) => {
        if (player.statuses.has(PlayerStatusEnum.LOVER)) {
          player.isDead = true;
        }
      });
      return newPlayers;
    }),
    triggerAction: jest.fn().mockImplementation((players) => players),
  } as unknown as StatusHandler;

  const createService = createServiceFactory({
    service: DeathHandler,
    mocks: [Announcer],
    providers: [
      mockProvider(RoleHandlersManager, {
        getHandler: jest.fn().mockReturnValue(mockRoleHandler),
      }),
      mockProvider(StatusHandlersManager, {
        getHandler: jest.fn().mockImplementation((status) => {
          if (status === PlayerStatusEnum.LOVER) {
            return mockLoverStatusHandler;
          }
          return mockStatusHandler;
        }),
      }),
    ],
  });

  beforeEach(() => {
    spectator = createService({
      providers: [
        mockProvider(KnownDeathsStore, {
          state: signal(new Set()),
        }),
        mockProvider(DeathsToAnnounceStore, {
          state: signal([]),
        }),
        mockProvider(AfterDeathRoundQueueStore, {
          state: signal([]),
        }),
      ],
    });
  });

  it('should return next after-death round', () => {
    const afterDeathRoundQueueStore = spectator.inject(
      AfterDeathRoundQueueStore,
    );
    afterDeathRoundQueueStore.state.set([
      RoundEnum.CHASSEUR,
      RoundEnum.CAPITAINE,
    ]);

    const nextAfterDeathRound = spectator.service.getNextAfterDeathRound();

    expect(nextAfterDeathRound).toEqual(RoundEnum.CHASSEUR);
    expect(afterDeathRoundQueueStore.state()).toEqual([RoundEnum.CAPITAINE]);
  });

  it('should clear known deaths on reset', () => {
    const knownDeathsStore = spectator.inject(KnownDeathsStore);
    knownDeathsStore.state.set(new Set([0, 1]));

    spectator.service.reset();

    expect(knownDeathsStore.state().size).toEqual(0);
  });

  it('should empty afterDeathRoundQueue on reset', () => {
    const afterDeathRoundQueueStore = spectator.inject(
      AfterDeathRoundQueueStore,
    );
    afterDeathRoundQueueStore.state.set([RoundEnum.CHASSEUR]);

    spectator.service.reset();

    expect(afterDeathRoundQueueStore.state().length).toEqual(0);
  });

  it('should empty deathsToAnnounce on reset', () => {
    const deathsToAnnounceStore = spectator.inject(DeathsToAnnounceStore);
    deathsToAnnounceStore.state.set([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: true,
      },
    ]);

    spectator.service.reset();

    expect(deathsToAnnounceStore.state().length).toEqual(0);
  });

  it('should trigger action for DEVOURED status', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.DEVOURED]),
        isDead: false,
      },
    ];
    spectator.service.handleNewDeaths(mockPlayers);

    expect(mockStatusHandler.triggerAction).toHaveBeenCalledWith(mockPlayers);
  });

  it('should add dead player id to known deaths', () => {
    const knownDeathsStore = spectator.inject(KnownDeathsStore);
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
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
    ];

    knownDeathsStore.state.set(new Set());

    spectator.service.handleNewDeaths(mockPlayers);

    expect(knownDeathsStore.state().has(0)).toEqual(true);
  });

  it('should add dead player to deaths to announce', () => {
    const deathsToAnnounceStore = spectator.inject(DeathsToAnnounceStore);
    deathsToAnnounceStore.state.set([]);

    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
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
    ];

    spectator.service.handleNewDeaths(mockPlayers);

    expect(deathsToAnnounceStore.state()).toEqual([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: true,
      },
    ]);
  });

  it('should handle the other LOVER special death (ex: CHASSEUR)', () => {
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
        role: PlayerRoleEnum.CHASSEUR,
        card: PlayerRoleEnum.CHASSEUR,
        statuses: new Set([PlayerStatusEnum.LOVER]),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.LOVER]),
        isDead: true,
      },
    ];

    spectator.service.handleNewDeaths(mockPlayers);

    const roleHandlersManager = spectator.inject(RoleHandlersManager);
    expect(roleHandlersManager.getHandler).toHaveBeenCalledWith(
      PlayerRoleEnum.CHASSEUR,
    );
    expect(mockRoleHandler.handleDeath).toHaveBeenCalledWith(
      mockPlayers,
      mockPlayers[1],
    );
  });

  it('should use status handler handleDeath to handle player death', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VOYANTE,
        card: PlayerRoleEnum.VOYANTE,
        statuses: new Set([
          PlayerStatusEnum.CAPTAIN,
          PlayerStatusEnum.CHILD_MODEL,
        ]),
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
    ];

    spectator.service.handleNewDeaths(mockPlayers);

    const statusHandlersManager = spectator.inject(StatusHandlersManager);
    expect(statusHandlersManager.getHandler).toHaveBeenCalledWith(
      PlayerStatusEnum.CAPTAIN,
    );
    expect(statusHandlersManager.getHandler).toHaveBeenCalledWith(
      PlayerStatusEnum.CHILD_MODEL,
    );
    expect(mockStatusHandler.handleDeath).toHaveBeenCalledWith(
      mockPlayers,
      mockPlayers[0],
    );
  });

  it('should use role handler handleDeath to handle player death', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VOYANTE,
        card: PlayerRoleEnum.VOYANTE,
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
    ];

    spectator.service.handleNewDeaths(mockPlayers);

    const roleHandlersManager = spectator.inject(RoleHandlersManager);
    expect(roleHandlersManager.getHandler).toHaveBeenCalledWith(
      PlayerRoleEnum.VOYANTE,
    );
    expect(mockRoleHandler.handleDeath).toHaveBeenCalledWith(
      mockPlayers,
      mockPlayers[0],
    );
  });

  it('should announce deaths if there are some', () => {
    const deathsToAnnounceStore = spectator.inject(DeathsToAnnounceStore);
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VOYANTE,
        card: PlayerRoleEnum.VOYANTE,
        statuses: new Set(),
        isDead: true,
      },
    ];

    deathsToAnnounceStore.state.set(mockPlayers);

    spectator.service.announceDeaths();

    const announcer = spectator.inject(Announcer);
    expect(announcer.announceDeaths).toHaveBeenCalledWith(mockPlayers);
  });

  it('should announce ANCIEN killed by innocents if killed by CHASSEUR', () => {
    const deathsToAnnounceStore = spectator.inject(DeathsToAnnounceStore);
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.ANCIEN,
        card: PlayerRoleEnum.ANCIEN,
        statuses: new Set(),
        isDead: true,
        killedBy: PlayerRoleEnum.CHASSEUR,
      },
    ];

    deathsToAnnounceStore.state.set(mockPlayers);

    spectator.service.announceDeaths();

    const announcer = spectator.inject(Announcer);
    expect(announcer.announce).toHaveBeenCalledWith(
      AnnouncementTypesEnum.ANCIEN_KILLED_BY_INNOCENTS,
    );
  });

  it('should announce ANCIEN killed by innocents if killed by SORCIERE', () => {
    const deathsToAnnounceStore = spectator.inject(DeathsToAnnounceStore);
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.ANCIEN,
        card: PlayerRoleEnum.ANCIEN,
        statuses: new Set(),
        isDead: true,
        killedBy: PlayerRoleEnum.SORCIERE,
      },
    ];

    deathsToAnnounceStore.state.set(mockPlayers);

    spectator.service.announceDeaths();

    const announcer = spectator.inject(Announcer);
    expect(announcer.announce).toHaveBeenCalledWith(
      AnnouncementTypesEnum.ANCIEN_KILLED_BY_INNOCENTS,
    );
  });

  it('should announce ANCIEN killed by innocents if killed by VILLAGEOIS', () => {
    const deathsToAnnounceStore = spectator.inject(DeathsToAnnounceStore);
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.ANCIEN,
        card: PlayerRoleEnum.ANCIEN,
        statuses: new Set(),
        isDead: true,
        killedBy: PlayerRoleEnum.VILLAGEOIS,
      },
    ];

    deathsToAnnounceStore.state.set(mockPlayers);

    spectator.service.announceDeaths();

    const announcer = spectator.inject(Announcer);
    expect(announcer.announce).toHaveBeenCalledWith(
      AnnouncementTypesEnum.ANCIEN_KILLED_BY_INNOCENTS,
    );
  });

  it('should not announce ANCIEN killed by innocents if not killed by innocent', () => {
    const deathsToAnnounceStore = spectator.inject(DeathsToAnnounceStore);
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.ANCIEN,
        card: PlayerRoleEnum.ANCIEN,
        statuses: new Set(),
        isDead: true,
      },
    ];

    deathsToAnnounceStore.state.set(mockPlayers);

    spectator.service.announceDeaths();

    const announcer = spectator.inject(Announcer);
    expect(announcer.announce).not.toHaveBeenCalled();
  });

  it('should announce player killed by CHEVALIER if present', () => {
    const deathsToAnnounceStore = spectator.inject(DeathsToAnnounceStore);
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: true,
        killedBy: PlayerRoleEnum.CHEVALIER,
      },
    ];

    deathsToAnnounceStore.state.set(mockPlayers);

    spectator.service.announceDeaths();

    const announcer = spectator.inject(Announcer);
    expect(announcer.announce).toHaveBeenCalledWith(
      AnnouncementTypesEnum.WOLF_KILLED_BY_CHEVALIER,
      { playerName: 'player0' },
    );
  });

  it('should not announce deaths if there are none', () => {
    const deathsToAnnounceStore = spectator.inject(DeathsToAnnounceStore);
    deathsToAnnounceStore.state.set([]);

    spectator.service.announceDeaths();

    const announcer = spectator.inject(Announcer);
    expect(announcer.announceDeaths).not.toHaveBeenCalled();
  });

  it('should clear deaths to announce after announce', () => {
    const deathsToAnnounceStore = spectator.inject(DeathsToAnnounceStore);
    deathsToAnnounceStore.state.set([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VOYANTE,
        card: PlayerRoleEnum.VOYANTE,
        statuses: new Set(),
        isDead: true,
      },
    ]);

    spectator.service.announceDeaths();

    expect(deathsToAnnounceStore.state().length).toEqual(0);
  });
});
