import { AnnouncementTypes } from '@/current-game/announcements/announcement-types';
import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { DefaultRoleHandler } from '@/game-handlers/roles/default/default.role-handler';
import { RoleHandler } from '@/game-handlers/roles/role-handler.interface';
import { AfterDeathRoundQueueStore } from '@/current-game/death/after-death-round-queue/after-death-round-queue-store';
import { DeathsToAnnounceStore } from '@/current-game/death/deaths-to-announce/deaths-to-announce-store';
import { KnownDeathsStore } from '@/current-game/death/known-deaths/known-deaths-store';
import { signal } from '@angular/core';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { DeathHandler } from './death-handler';
import { StatusHandlersManager } from '../handlers/status/status-handlers-manager';
import { StatusHandler } from '@/game-handlers/status/status-handler.interface';
import { DefaultStatusHandler } from '@/game-handlers/status/default/default.status-handler';
import { Announcer } from '../announcements/announcer';
import { RoleHandlersManager } from '@/game-handlers/roles/role-handlers-manager';

describe('DeathHandler', () => {
  let service: DeathHandler;
  let mockRoleHandler: RoleHandler;
  let mockStatusHandler: StatusHandler;
  let mockLoverStatusHandler: StatusHandler;

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(DeathHandler)
      .mock(Announcer)
      .mock(RoleHandlersManager)
      .mock(StatusHandlersManager)
      .mock(KnownDeathsStore)
      .mock(DeathsToAnnounceStore)
      .mock(AfterDeathRoundQueueStore),
  );

  beforeAll(() => {
    MockInstance(Announcer, () => ({
      announceDeaths: jest.fn(),
      announce: jest.fn(),
    }));

    mockRoleHandler = {
      handleDeath: jest.fn().mockImplementation((players) => players),
    } as unknown as DefaultRoleHandler;

    MockInstance(RoleHandlersManager, () => ({
      getHandler: jest.fn().mockReturnValue(mockRoleHandler),
    }));

    mockStatusHandler = {
      handleDeath: jest.fn().mockImplementation((players, _) => players),
      triggerAction: jest.fn().mockImplementation((players) => players),
    } as unknown as DefaultStatusHandler;

    mockLoverStatusHandler = {
      handleDeath: jest.fn().mockImplementation((players, _) => {
        const newPlayers = [...players];
        newPlayers.forEach((player) => {
          if (player.statuses.has(PlayerStatus.LOVER)) {
            player.isDead = true;
          }
        });
        return newPlayers;
      }),
      triggerAction: jest.fn().mockImplementation((players) => players),
    } as unknown as DefaultStatusHandler;

    MockInstance(StatusHandlersManager, () => ({
      getHandler: jest.fn().mockImplementation((status) => {
        if (status === PlayerStatus.LOVER) {
          return mockLoverStatusHandler;
        }
        return mockStatusHandler;
      }),
    }));

    MockInstance(
      KnownDeathsStore,
      () => ({ state: signal(new Set()) }) as Partial<KnownDeathsStore>,
    );
    MockInstance(
      DeathsToAnnounceStore,
      () => ({ state: signal([]) }) as Partial<DeathsToAnnounceStore>,
    );
    MockInstance(
      AfterDeathRoundQueueStore,
      () => ({ state: signal([]) }) as Partial<AfterDeathRoundQueueStore>,
    );
  });

  beforeEach(
    () => (service = MockRender(DeathHandler).point.componentInstance),
  );

  it('should return next after-death round', () => {
    const afterDeathRoundQueueStore = ngMocks.get(AfterDeathRoundQueueStore);
    afterDeathRoundQueueStore.state.set([Round.CHASSEUR, Round.CAPITAINE]);

    const nextAfterDeathRound = service.getNextAfterDeathRound();

    expect(nextAfterDeathRound).toEqual(Round.CHASSEUR);
    expect(afterDeathRoundQueueStore.state()).toEqual([Round.CAPITAINE]);
  });

  it('should clear known deaths on reset', () => {
    const knownDeathsStore = ngMocks.get(KnownDeathsStore);
    knownDeathsStore.state.set(new Set([0, 1]));

    service.reset();

    expect(knownDeathsStore.state().size).toEqual(0);
  });

  it('should empty afterDeathRoundQueue on reset', () => {
    const afterDeathRoundQueueStore = ngMocks.get(AfterDeathRoundQueueStore);
    afterDeathRoundQueueStore.state.set([Round.CHASSEUR]);

    service.reset();

    expect(afterDeathRoundQueueStore.state().length).toEqual(0);
  });

  it('should empty deathsToAnnounce on reset', () => {
    const deathsToAnnounceStore = ngMocks.get(DeathsToAnnounceStore);
    deathsToAnnounceStore.state.set([
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: true,
      },
    ]);

    service.reset();

    expect(deathsToAnnounceStore.state().length).toEqual(0);
  });

  it('should trigger action for DEVOURED status', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set([PlayerStatus.DEVOURED]),
        isDead: false,
      },
    ];
    service.handleNewDeaths(mockPlayers);

    expect(mockStatusHandler.triggerAction).toHaveBeenCalledWith(mockPlayers);
  });

  it('should add dead player id to known deaths', () => {
    const knownDeathsStore = ngMocks.get(KnownDeathsStore);
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    knownDeathsStore.state.set(new Set());

    service.handleNewDeaths(mockPlayers);

    expect(knownDeathsStore.state().has(0)).toEqual(true);
  });

  it('should add dead player to deaths to announce', () => {
    const deathsToAnnounceStore = ngMocks.get(DeathsToAnnounceStore);
    deathsToAnnounceStore.state.set([]);

    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    service.handleNewDeaths(mockPlayers);

    expect(deathsToAnnounceStore.state()).toEqual([
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
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
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.CHASSEUR,
        card: PlayerRole.CHASSEUR,
        statuses: new Set([PlayerStatus.LOVER]),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set([PlayerStatus.LOVER]),
        isDead: true,
      },
    ];

    service.handleNewDeaths(mockPlayers);

    const roleHandlersManager = ngMocks.get(RoleHandlersManager);
    expect(roleHandlersManager.getHandler).toHaveBeenCalledWith(
      PlayerRole.CHASSEUR,
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
        role: PlayerRole.VOYANTE,
        card: PlayerRole.VOYANTE,
        statuses: new Set([PlayerStatus.CAPTAIN, PlayerStatus.CHILD_MODEL]),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    service.handleNewDeaths(mockPlayers);

    const statusHandlersManager = ngMocks.get(StatusHandlersManager);
    expect(statusHandlersManager.getHandler).toHaveBeenCalledWith(
      PlayerStatus.CAPTAIN,
    );
    expect(statusHandlersManager.getHandler).toHaveBeenCalledWith(
      PlayerStatus.CHILD_MODEL,
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
        role: PlayerRole.VOYANTE,
        card: PlayerRole.VOYANTE,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    service.handleNewDeaths(mockPlayers);

    const roleHandlersManager = ngMocks.get(RoleHandlersManager);
    expect(roleHandlersManager.getHandler).toHaveBeenCalledWith(
      PlayerRole.VOYANTE,
    );
    expect(mockRoleHandler.handleDeath).toHaveBeenCalledWith(
      mockPlayers,
      mockPlayers[0],
    );
  });

  it('should announce deaths if there are some', () => {
    const deathsToAnnounceStore = ngMocks.get(DeathsToAnnounceStore);
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VOYANTE,
        card: PlayerRole.VOYANTE,
        statuses: new Set(),
        isDead: true,
      },
    ];

    deathsToAnnounceStore.state.set(mockPlayers);

    service.announceDeaths();

    const announcer = ngMocks.get(Announcer);
    expect(announcer.announceDeaths).toHaveBeenCalledWith(mockPlayers);
  });

  it('should announce ANCIEN killed by innocents if killed by CHASSEUR', () => {
    const deathsToAnnounceStore = ngMocks.get(DeathsToAnnounceStore);
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.ANCIEN,
        card: PlayerRole.ANCIEN,
        statuses: new Set(),
        isDead: true,
        killedBy: PlayerRole.CHASSEUR,
      },
    ];

    deathsToAnnounceStore.state.set(mockPlayers);

    service.announceDeaths();

    const announcer = ngMocks.get(Announcer);
    expect(announcer.announce).toHaveBeenCalledWith(
      AnnouncementTypes.ANCIEN_KILLED_BY_INNOCENTS,
    );
  });

  it('should announce ANCIEN killed by innocents if killed by SORCIERE', () => {
    const deathsToAnnounceStore = ngMocks.get(DeathsToAnnounceStore);
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.ANCIEN,
        card: PlayerRole.ANCIEN,
        statuses: new Set(),
        isDead: true,
        killedBy: PlayerRole.SORCIERE,
      },
    ];

    deathsToAnnounceStore.state.set(mockPlayers);

    service.announceDeaths();

    const announcer = ngMocks.get(Announcer);
    expect(announcer.announce).toHaveBeenCalledWith(
      AnnouncementTypes.ANCIEN_KILLED_BY_INNOCENTS,
    );
  });

  it('should announce ANCIEN killed by innocents if killed by VILLAGEOIS', () => {
    const deathsToAnnounceStore = ngMocks.get(DeathsToAnnounceStore);
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.ANCIEN,
        card: PlayerRole.ANCIEN,
        statuses: new Set(),
        isDead: true,
        killedBy: PlayerRole.VILLAGEOIS,
      },
    ];

    deathsToAnnounceStore.state.set(mockPlayers);

    service.announceDeaths();

    const announcer = ngMocks.get(Announcer);
    expect(announcer.announce).toHaveBeenCalledWith(
      AnnouncementTypes.ANCIEN_KILLED_BY_INNOCENTS,
    );
  });

  it('should not announce ANCIEN killed by innocents if not killed by innocent', () => {
    const deathsToAnnounceStore = ngMocks.get(DeathsToAnnounceStore);
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.ANCIEN,
        card: PlayerRole.ANCIEN,
        statuses: new Set(),
        isDead: true,
      },
    ];

    deathsToAnnounceStore.state.set(mockPlayers);

    service.announceDeaths();

    const announcer = ngMocks.get(Announcer);
    expect(announcer.announce).not.toHaveBeenCalled();
  });

  it('should announce player killed by CHEVALIER if present', () => {
    const deathsToAnnounceStore = ngMocks.get(DeathsToAnnounceStore);
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: true,
        killedBy: PlayerRole.CHEVALIER,
      },
    ];

    deathsToAnnounceStore.state.set(mockPlayers);

    service.announceDeaths();

    const announcer = ngMocks.get(Announcer);
    expect(announcer.announce).toHaveBeenCalledWith(
      AnnouncementTypes.WOLF_KILLED_BY_CHEVALIER,
      { playerName: 'player0' },
    );
  });

  it('should not announce deaths if there are none', () => {
    const deathsToAnnounceStore = ngMocks.get(DeathsToAnnounceStore);
    deathsToAnnounceStore.state.set([]);

    service.announceDeaths();

    const announcer = ngMocks.get(Announcer);
    expect(announcer.announceDeaths).not.toHaveBeenCalled();
  });

  it('should clear deaths to announce after announce', () => {
    const deathsToAnnounceStore = ngMocks.get(DeathsToAnnounceStore);
    deathsToAnnounceStore.state.set([
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VOYANTE,
        card: PlayerRole.VOYANTE,
        statuses: new Set(),
        isDead: true,
      },
    ]);

    service.announceDeaths();

    expect(deathsToAnnounceStore.state().length).toEqual(0);
  });

  afterAll(MockReset);
});
