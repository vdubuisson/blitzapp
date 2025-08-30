import { AnnouncementEnum } from '@/enums/announcement.enum';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { DefaultRoleHandler } from '@/role-handlers/default/default.role-handler';
import { RoleHandler } from '@/role-handlers/role-handler.interface';
import { AnnouncementService } from '@/services/announcement/announcement.service';
import { AfterDeathRoundQueueStore } from '@/stores/after-death-round-queue/after-death-round-queue.store';
import { DeathsToAnnounceStore } from '@/stores/deaths-to-announce/deaths-to-announce.store';
import { KnownDeathsStore } from '@/stores/known-deaths/known-deaths.store';
import { signal } from '@angular/core';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { RoleHandlersService } from '../role-handlers/role-handlers.service';
import { DeathService } from './death.service';
import { StatusHandlersService } from '../status-handlers/status-handlers.service';
import { StatusHandler } from '@/status-handlers/status-handler.interface';
import { DefaultStatusHandler } from '@/status-handlers/default/default.status-handler';

describe('DeathService', () => {
  let service: DeathService;
  let mockRoleHandler: RoleHandler;
  let mockStatusHandler: StatusHandler;
  let mockLoverStatusHandler: StatusHandler;

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(DeathService)
      .mock(AnnouncementService)
      .mock(RoleHandlersService)
      .mock(StatusHandlersService)
      .mock(KnownDeathsStore)
      .mock(DeathsToAnnounceStore)
      .mock(AfterDeathRoundQueueStore),
  );

  beforeAll(() => {
    MockInstance(AnnouncementService, () => ({
      announceDeaths: jest.fn(),
      announce: jest.fn(),
    }));

    mockRoleHandler = {
      handleDeath: jest.fn().mockImplementation((players) => players),
    } as unknown as DefaultRoleHandler;

    MockInstance(RoleHandlersService, () => ({
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
          if (player.statuses.has(PlayerStatusEnum.LOVER)) {
            player.isDead = true;
          }
        });
        return newPlayers;
      }),
      triggerAction: jest.fn().mockImplementation((players) => players),
    } as unknown as DefaultStatusHandler;

    MockInstance(StatusHandlersService, () => ({
      getHandler: jest.fn().mockImplementation((status) => {
        if (status === PlayerStatusEnum.LOVER) {
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
    () => (service = MockRender(DeathService).point.componentInstance),
  );

  it('should return next after-death round', () => {
    const afterDeathRoundQueueStore = ngMocks.get(AfterDeathRoundQueueStore);
    afterDeathRoundQueueStore.state.set([
      RoundEnum.CHASSEUR,
      RoundEnum.CAPITAINE,
    ]);

    const nextAfterDeathRound = service.getNextAfterDeathRound();

    expect(nextAfterDeathRound).toEqual(RoundEnum.CHASSEUR);
    expect(afterDeathRoundQueueStore.state()).toEqual([RoundEnum.CAPITAINE]);
  });

  it('should clear known deaths on reset', () => {
    const knownDeathsStore = ngMocks.get(KnownDeathsStore);
    knownDeathsStore.state.set(new Set([0, 1]));

    service.reset();

    expect(knownDeathsStore.state().size).toEqual(0);
  });

  it('should empty afterDeathRoundQueue on reset', () => {
    const afterDeathRoundQueueStore = ngMocks.get(AfterDeathRoundQueueStore);
    afterDeathRoundQueueStore.state.set([RoundEnum.CHASSEUR]);

    service.reset();

    expect(afterDeathRoundQueueStore.state().length).toEqual(0);
  });

  it('should empty deathsToAnnounce on reset', () => {
    const deathsToAnnounceStore = ngMocks.get(DeathsToAnnounceStore);
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

    service.reset();

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
    service.handleNewDeaths(mockPlayers);

    expect(mockStatusHandler.triggerAction).toHaveBeenCalledWith(mockPlayers);
  });

  it('should add dead player id to known deaths', () => {
    const knownDeathsStore = ngMocks.get(KnownDeathsStore);
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

    service.handleNewDeaths(mockPlayers);

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

    service.handleNewDeaths(mockPlayers);

    const roleHandlersService = ngMocks.get(RoleHandlersService);
    expect(roleHandlersService.getHandler).toHaveBeenCalledWith(
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

    service.handleNewDeaths(mockPlayers);

    const statusHandlersService = ngMocks.get(StatusHandlersService);
    expect(statusHandlersService.getHandler).toHaveBeenCalledWith(
      PlayerStatusEnum.CAPTAIN,
    );
    expect(statusHandlersService.getHandler).toHaveBeenCalledWith(
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

    service.handleNewDeaths(mockPlayers);

    const roleHandlersService = ngMocks.get(RoleHandlersService);
    expect(roleHandlersService.getHandler).toHaveBeenCalledWith(
      PlayerRoleEnum.VOYANTE,
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
        role: PlayerRoleEnum.VOYANTE,
        card: PlayerRoleEnum.VOYANTE,
        statuses: new Set(),
        isDead: true,
      },
    ];

    deathsToAnnounceStore.state.set(mockPlayers);

    service.announceDeaths();

    const announcementService = ngMocks.get(AnnouncementService);
    expect(announcementService.announceDeaths).toHaveBeenCalledWith(
      mockPlayers,
    );
  });

  it('should announce ANCIEN killed by innocents if killed by CHASSEUR', () => {
    const deathsToAnnounceStore = ngMocks.get(DeathsToAnnounceStore);
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

    service.announceDeaths();

    const announcementService = ngMocks.get(AnnouncementService);
    expect(announcementService.announce).toHaveBeenCalledWith(
      AnnouncementEnum.ANCIEN_KILLED_BY_INNOCENTS,
    );
  });

  it('should announce ANCIEN killed by innocents if killed by SORCIERE', () => {
    const deathsToAnnounceStore = ngMocks.get(DeathsToAnnounceStore);
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

    service.announceDeaths();

    const announcementService = ngMocks.get(AnnouncementService);
    expect(announcementService.announce).toHaveBeenCalledWith(
      AnnouncementEnum.ANCIEN_KILLED_BY_INNOCENTS,
    );
  });

  it('should announce ANCIEN killed by innocents if killed by VILLAGEOIS', () => {
    const deathsToAnnounceStore = ngMocks.get(DeathsToAnnounceStore);
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

    service.announceDeaths();

    const announcementService = ngMocks.get(AnnouncementService);
    expect(announcementService.announce).toHaveBeenCalledWith(
      AnnouncementEnum.ANCIEN_KILLED_BY_INNOCENTS,
    );
  });

  it('should not announce ANCIEN killed by innocents if not killed by innocent', () => {
    const deathsToAnnounceStore = ngMocks.get(DeathsToAnnounceStore);
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

    service.announceDeaths();

    const announcementService = ngMocks.get(AnnouncementService);
    expect(announcementService.announce).not.toHaveBeenCalled();
  });

  it('should announce player killed by CHEVALIER if present', () => {
    const deathsToAnnounceStore = ngMocks.get(DeathsToAnnounceStore);
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

    service.announceDeaths();

    const announcementService = ngMocks.get(AnnouncementService);
    expect(announcementService.announce).toHaveBeenCalledWith(
      AnnouncementEnum.WOLF_KILLED_BY_CHEVALIER,
      { playerName: 'player0' },
    );
  });

  it('should not announce deaths if there are none', () => {
    const deathsToAnnounceStore = ngMocks.get(DeathsToAnnounceStore);
    deathsToAnnounceStore.state.set([]);

    service.announceDeaths();

    const announcementService = ngMocks.get(AnnouncementService);
    expect(announcementService.announceDeaths).not.toHaveBeenCalled();
  });

  it('should clear deaths to announce after announce', () => {
    const deathsToAnnounceStore = ngMocks.get(DeathsToAnnounceStore);
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

    service.announceDeaths();

    expect(deathsToAnnounceStore.state().length).toEqual(0);
  });

  afterAll(MockReset);
});
