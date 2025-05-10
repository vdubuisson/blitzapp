import { AnnouncementEnum } from '@/enums/announcement.enum';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { DefaultRoleHandler } from '@/role-handlers/default/default.role-handler';
import { RoleHandler } from '@/role-handlers/role-handler.interface';
import { AnnouncementService } from '@/services/announcement/announcement.service';
import { VictoryHandlersService } from '@/services/victory-handlers/victory-handlers.service';
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

describe('DeathService', () => {
  let service: DeathService;
  let mockRoleHandler: RoleHandler;

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(DeathService)
      .mock(VictoryHandlersService)
      .mock(AnnouncementService)
      .mock(RoleHandlersService)
      .mock(KnownDeathsStore)
      .mock(DeathsToAnnounceStore)
      .mock(AfterDeathRoundQueueStore),
  );

  beforeAll(() => {
    MockInstance(VictoryHandlersService, () => ({
      removeUselessHandlers: jest.fn(),
    }));

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

  it('should kill players with DEVOURED status', () => {
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
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.DEVOURED]),
        isDead: false,
      },
    ];

    const newPlayers = service.handleNewDeaths(mockPlayers);

    expect(newPlayers[1].isDead).toEqual(true);
  });

  it('should remove DEVOURED status to players with DEVOURED status', () => {
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
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.DEVOURED]),
        isDead: false,
      },
    ];

    const newPlayers = service.handleNewDeaths(mockPlayers);

    expect(newPlayers[1].statuses.has(PlayerStatusEnum.DEVOURED)).toEqual(
      false,
    );
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

  it('should remove CAPTAIN status to player with CAPTAIN status', () => {
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
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.CAPTAIN]),
        isDead: true,
      },
    ];

    const newPlayers = service.handleNewDeaths(mockPlayers);

    expect(newPlayers[1].statuses.has(PlayerStatusEnum.CAPTAIN)).toEqual(false);
  });

  it('should add CAPITAINE round to after-death rounds', () => {
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
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.CAPTAIN]),
        isDead: true,
      },
    ];
    const afterDeathRoundQueueStore = ngMocks.get(AfterDeathRoundQueueStore);
    afterDeathRoundQueueStore.state.set([]);

    service.handleNewDeaths(mockPlayers);

    expect(
      afterDeathRoundQueueStore.state().includes(RoundEnum.CAPITAINE),
    ).toEqual(true);
  });

  it('should not add CAPITAINE round to after-death rounds if it was IDIOT role', () => {
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
        role: PlayerRoleEnum.IDIOT,
        card: PlayerRoleEnum.IDIOT,
        statuses: new Set([PlayerStatusEnum.CAPTAIN]),
        isDead: true,
      },
    ];
    const afterDeathRoundQueueStore = ngMocks.get(AfterDeathRoundQueueStore);
    afterDeathRoundQueueStore.state.set([]);

    service.handleNewDeaths(mockPlayers);

    expect(
      afterDeathRoundQueueStore.state().includes(RoundEnum.CAPITAINE),
    ).toEqual(false);
  });

  it('should kill the other LOVER', () => {
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
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
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

    const newPlayers = service.handleNewDeaths(mockPlayers);

    expect(newPlayers[1].isDead).toEqual(true);
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

  it('should change alive ENFANT_SAUVAGE to LOUP_GAROU on CHILD_MODEL death', () => {
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
        role: PlayerRoleEnum.ENFANT_SAUVAGE,
        card: PlayerRoleEnum.ENFANT_SAUVAGE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.CHILD_MODEL]),
        isDead: true,
      },
    ];

    const newPlayers = service.handleNewDeaths(mockPlayers);

    expect(newPlayers[1].role).toEqual(PlayerRoleEnum.LOUP_GAROU);
  });

  it('should not change dead ENFANT_SAUVAGE to LOUP_GAROU on CHILD_MODEL death', () => {
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
        role: PlayerRoleEnum.ENFANT_SAUVAGE,
        card: PlayerRoleEnum.ENFANT_SAUVAGE,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.CHILD_MODEL]),
        isDead: true,
      },
    ];

    const newPlayers = service.handleNewDeaths(mockPlayers);

    expect(newPlayers[1].role).toEqual(PlayerRoleEnum.ENFANT_SAUVAGE);
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

  it('should remove useless victory handlers on deaths handle', () => {
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

    const victoryHandlersService = ngMocks.get(VictoryHandlersService);
    expect(victoryHandlersService.removeUselessHandlers).toHaveBeenCalledWith(
      mockPlayers,
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
    expect(announcementService.announce).toHaveBeenCalledTimes(0);
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
    expect(announcementService.announceDeaths).toHaveBeenCalledTimes(0);
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
