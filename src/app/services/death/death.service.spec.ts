import { INNOCENTS_POWER_REMOVAL_ROLES } from '@/configs/innocents-power-removal-roles';
import { AnnouncementEnum } from '@/enums/announcement.enum';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { AnnouncementService } from '@/services/announcement/announcement.service';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { StatusesService } from '@/services/statuses/statuses.service';
import { VictoryHandlersService } from '@/services/victory-handlers/victory-handlers.service';
import { AfterDeathRoundQueueStore } from '@/stores/after-death-round-queue/after-death-round-queue.store';
import { DeathsToAnnounceStore } from '@/stores/deaths-to-announce/deaths-to-announce.store';
import { KnownDeathsStore } from '@/stores/known-deaths/known-deaths.store';
import * as neighborUtils from '@/utils/neighbor.utils';
import { signal } from '@angular/core';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { DeathService } from './death.service';

describe('DeathService', () => {
  let service: DeathService;

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(DeathService)
      .mock(RoundHandlersService)
      .mock(VictoryHandlersService)
      .mock(AnnouncementService)
      .mock(StatusesService)
      .mock(KnownDeathsStore)
      .mock(DeathsToAnnounceStore)
      .mock(AfterDeathRoundQueueStore),
  );

  beforeAll(() => {
    MockInstance(RoundHandlersService, () => ({
      removeHandlers: jest.fn(),
    }));

    MockInstance(StatusesService, () => ({
      removePowersFromInnocents: jest.fn(),
    }));

    MockInstance(VictoryHandlersService, () => ({
      removeUselessHandlers: jest.fn(),
    }));

    MockInstance(AnnouncementService, () => ({
      announceDeaths: jest.fn(),
      announce: jest.fn(),
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
    const afterDeathRoundQueueStore = ngMocks.get(AfterDeathRoundQueueStore);
    afterDeathRoundQueueStore.state.set([]);

    service.handleNewDeaths(mockPlayers);

    expect(afterDeathRoundQueueStore.state()[0]).toEqual(RoundEnum.CHASSEUR);
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

  it('should remove LOUP_GAROU handlers if no more LOUP_GAROU', () => {
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

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledWith(
      expect.arrayContaining([PlayerRoleEnum.LOUP_GAROU]),
    );
  });

  it('should not remove LOUP_GAROU handlers if no more LOUP_GAROU but GRAND_MECHANT_LOUP still alive', () => {
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
        role: PlayerRoleEnum.GRAND_MECHANT_LOUP,
        card: PlayerRoleEnum.GRAND_MECHANT_LOUP,
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

    service.handleNewDeaths(mockPlayers);

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.GRAND_MECHANT_LOUP,
    ]);
  });

  it('should remove GRAND_MECHANT_LOUP handlers if some LOUP_GAROU is dead', () => {
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
        role: PlayerRoleEnum.GRAND_MECHANT_LOUP,
        card: PlayerRoleEnum.GRAND_MECHANT_LOUP,
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

    service.handleNewDeaths(mockPlayers);

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.GRAND_MECHANT_LOUP,
    ]);
  });

  it('should remove GRAND_MECHANT_LOUP handlers if GRAND_MECHANT_LOUP is dead', () => {
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
        role: PlayerRoleEnum.GRAND_MECHANT_LOUP,
        card: PlayerRoleEnum.GRAND_MECHANT_LOUP,
        statuses: new Set(),
        isDead: true,
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

    service.handleNewDeaths(mockPlayers);

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.GRAND_MECHANT_LOUP,
    ]);
  });

  it('should add CHASSEUR round to the beginning of after-death rounds', () => {
    const afterDeathRoundQueueStore = ngMocks.get(AfterDeathRoundQueueStore);
    afterDeathRoundQueueStore.state.set([RoundEnum.CAPITAINE]);

    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CHASSEUR,
        card: PlayerRoleEnum.CHASSEUR,
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

    expect(afterDeathRoundQueueStore.state()[0]).toEqual(RoundEnum.CHASSEUR);
  });

  it('should remove CUPIDON handlers if CUPIDON is dead', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CUPIDON,
        card: PlayerRoleEnum.CUPIDON,
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

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.CUPIDON,
    ]);
  });

  it('should remove SORCIERE handlers if SORCIERE is dead', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SORCIERE,
        card: PlayerRoleEnum.SORCIERE,
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

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.SORCIERE,
    ]);
  });

  it('should remove VOYANTE handlers if VOYANTE is dead', () => {
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

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.VOYANTE,
    ]);
  });

  it('should remove JOUEUR_FLUTE handlers if JOUEUR_FLUTE is dead', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.JOUEUR_FLUTE,
        card: PlayerRoleEnum.JOUEUR_FLUTE,
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

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.JOUEUR_FLUTE,
    ]);
  });

  it('should remove CORBEAU handlers if CORBEAU is dead', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CORBEAU,
        card: PlayerRoleEnum.CORBEAU,
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

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.CORBEAU,
    ]);
  });

  it('should remove ENFANT_SAUVAGE handlers if ENFANT_SAUVAGE is dead', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.ENFANT_SAUVAGE,
        card: PlayerRoleEnum.ENFANT_SAUVAGE,
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

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.ENFANT_SAUVAGE,
    ]);
  });

  it('should remove SALVATEUR handlers if SALVATEUR is dead', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SALVATEUR,
        card: PlayerRoleEnum.SALVATEUR,
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

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.SALVATEUR,
    ]);
  });

  it('should remove MONTREUR_OURS handlers if MONTREUR_OURS is dead', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.MONTREUR_OURS,
        card: PlayerRoleEnum.MONTREUR_OURS,
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

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.MONTREUR_OURS,
    ]);
  });

  it('should remove RENARD handlers if RENARD is dead', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.RENARD,
        card: PlayerRoleEnum.RENARD,
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

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.RENARD,
    ]);
  });

  it('should remove CHIEN_LOUP handlers if CHIEN_LOUP is dead', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CHIEN_LOUP,
        card: PlayerRoleEnum.CHIEN_LOUP,
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

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.CHIEN_LOUP,
    ]);
  });

  it('should remove SOEUR handlers if all SOEUR are dead', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
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
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: true,
      },
    ];

    service.handleNewDeaths(mockPlayers);

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.SOEUR,
      PlayerRoleEnum.SOEUR,
    ]);
  });

  it('should not remove SOEUR handlers if some SOEUR is alive', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
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
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];

    service.handleNewDeaths(mockPlayers);

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledTimes(0);
  });

  it('should remove FRERE handlers if all FRERE are dead', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
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
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: true,
      },
    ];

    service.handleNewDeaths(mockPlayers);

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.FRERE,
      PlayerRoleEnum.FRERE,
    ]);
  });

  it('should not remove FRERE handlers if some FRERE is alive', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
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
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];

    service.handleNewDeaths(mockPlayers);

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledTimes(0);
  });

  it('should remove power from innocents if ANCIEN killed by innocents', () => {
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

    const statusesService = ngMocks.get(StatusesService);
    expect(statusesService.removePowersFromInnocents).toHaveBeenCalledWith(
      mockPlayers,
    );
  });

  it('should not remove power from innocents if ANCIEN not killed by innocents', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.ANCIEN,
        card: PlayerRoleEnum.ANCIEN,
        statuses: new Set(),
        isDead: true,
        killedBy: PlayerRoleEnum.LOUP_GAROU,
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

    const statusesService = ngMocks.get(StatusesService);
    expect(statusesService.removePowersFromInnocents).toHaveBeenCalledTimes(0);
  });

  it('should remove innocents handlers if ANCIEN killed by innocents', () => {
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

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledWith(
      INNOCENTS_POWER_REMOVAL_ROLES,
    );
  });

  it('should not remove innocents handlers if ANCIEN not killed by innocents', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.ANCIEN,
        card: PlayerRoleEnum.ANCIEN,
        statuses: new Set(),
        isDead: true,
        killedBy: PlayerRoleEnum.LOUP_GAROU,
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

    const roundHandlersService = ngMocks.get(RoundHandlersService);
    expect(roundHandlersService.removeHandlers).toHaveBeenCalledTimes(0);
  });

  it('should add RUSTY_SWORD status to GRAND_MECHANT_LOUP if CHEVALIER killed by GRAND_MECHANT_LOUP', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CHEVALIER,
        card: PlayerRoleEnum.CHEVALIER,
        statuses: new Set(),
        isDead: true,
        killedBy: PlayerRoleEnum.GRAND_MECHANT_LOUP,
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

    service.handleNewDeaths(mockPlayers);

    expect(mockPlayers[1].statuses.has(PlayerStatusEnum.RUSTY_SWORD)).toBe(
      true,
    );
  });

  it('should add RUSTY_SWORD status to left loup-garou if CHEVALIER killed by LOUP_GAROU', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CHEVALIER,
        card: PlayerRoleEnum.CHEVALIER,
        statuses: new Set(),
        isDead: true,
        killedBy: PlayerRoleEnum.LOUP_GAROU,
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
    jest
      .spyOn(neighborUtils, 'findLeftNeighbor')
      .mockReturnValue(mockPlayers[1]);

    service.handleNewDeaths(mockPlayers);

    expect(mockPlayers[1].statuses.has(PlayerStatusEnum.RUSTY_SWORD)).toBe(
      true,
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

  it('should add BOUC round to the after-death rounds', () => {
    const afterDeathRoundQueueStore = ngMocks.get(AfterDeathRoundQueueStore);
    afterDeathRoundQueueStore.state.set([]);

    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.BOUC,
        card: PlayerRoleEnum.BOUC,
        statuses: new Set(),
        isDead: true,
        killedBy: undefined,
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

    expect(afterDeathRoundQueueStore.state()[0]).toEqual(RoundEnum.BOUC);
  });

  afterAll(MockReset);
});
