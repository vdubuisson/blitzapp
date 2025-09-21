import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Victory } from '@/types/victory';
import { Player } from '@/shared/types/player';
import { RoundConfig } from '@/shared/types/round-config';
import { RoundHandler } from '@/game-handlers/rounds/round-handler.interface';
import { DeathHandler } from '@/current-game/death/death-handler';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { Router } from '@angular/router';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { Observable, of } from 'rxjs';

import { CardList } from '@/shared/types/card-list';
import { RoleHandler } from '@/game-handlers/roles/role-handler.interface';
import { CardChoiceStore } from '@/new-game/card-choice-store/card-choice-store';
import { CurrentPlayersStore } from '@/current-game/current-players-store/current-players-store';
import { CurrentRoundConfigStore } from '@/current-game/orchestrator/current-round-config/current-round-config-store';
import { NeedCleanAfterBoucStore } from '@/current-game/orchestrator/need-clean-after-bouc/need-clean-after-bouc-store';
import { signal } from '@angular/core';
import { RoleHandlersManager } from '@/game-handlers/roles/role-handlers-manager';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { GameOrchestrator } from './game-orchestrator';
import { RoundOrchestrator } from './round-orchestrator';
import { StatusHandler } from '@/game-handlers/status/status-handler.interface';
import { VictoryHandlersManager } from '@/game-handlers/victories/victory-handlers-manager';

class MockRoleHandler implements RoleHandler {
  role = PlayerRole.VILLAGEOIS;

  prepareNewGame = jest.fn().mockImplementation((players: Player[]) => players);
  handleDeath = jest.fn().mockImplementation((players: Player[]) => players);
  cleanStatusesAfterDay = jest
    .fn()
    .mockImplementation((players: Player[]) => players);
}

class MockRoundHandler implements RoundHandler {
  isOnlyOnce = false;
  isDuringDay = false;
  type = RoundType.DEFAULT;

  handleAction(players: Player[], _: number[]): Observable<Player[]> {
    return of(players);
  }

  getRoundConfig(_: Player[]): RoundConfig {
    return {} as RoundConfig;
  }
}

class MockStatusHandler implements StatusHandler {
  handleDeath(players: Player[]): Player[] {
    return players;
  }

  triggerAction(players: Player[]): Player[] {
    return players;
  }
}

describe('GameOrchestrator on victory', () => {
  let service: GameOrchestrator;
  let mockCurrentRoundConfig: RoundConfig;

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(GameOrchestrator)
      .mock(Router)
      .mock(RoundHandlersManager)
      .mock(VictoryHandlersManager)
      .mock(RoundOrchestrator)
      .mock(DeathHandler)
      .mock(StatusHandlersManager)
      .mock(MockRoundHandler)
      .mock(CurrentPlayersStore)
      .mock(CurrentRoundConfigStore)
      .mock(CardChoiceStore)
      .mock(NeedCleanAfterBoucStore),
  );

  beforeAll(() => {
    mockCurrentRoundConfig = {
      round: Round.CAPITAINE,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = true;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = true;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    MockInstance(RoundHandlersManager, () => ({
      clearHandlers: jest.fn(),
      getHandler(round) {
        switch (round) {
          case Round.CAPITAINE:
            return mockCurrentRoundHandler;
          case Round.VILLAGEOIS:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      },
    }));

    MockInstance(StatusHandlersManager, () => ({
      clearHandlers: jest.fn(),
      getHandler: () => new MockStatusHandler(),
    }));

    MockInstance(DeathHandler, () => ({
      reset: jest.fn(),
      handleNewDeaths: () => [],
    }));

    MockInstance(RoundOrchestrator, () => ({
      resetRounds: jest.fn(),
      getNextRound: () => Round.VILLAGEOIS,
    }));

    MockInstance(VictoryHandlersManager, () => ({
      clearHandlers: jest.fn(),
      getVictory: () => Victory.LOUP_GAROU,
    }));

    MockInstance(CurrentPlayersStore, 'state', signal([]));
    MockInstance(CurrentRoundConfigStore, 'state', signal(null));
    MockInstance(CardChoiceStore, 'state', signal({} as CardList));
    MockInstance(NeedCleanAfterBoucStore, 'state', signal(false));
  });

  beforeEach(() => {
    service = MockRender(GameOrchestrator).point.componentInstance;
    service['roundConfig'].set(mockCurrentRoundConfig);
  });

  it('should reset rounds on victory', () => {
    const roundOrchestrator = ngMocks.get(RoundOrchestrator);

    service.submitRoundAction([]);

    expect(roundOrchestrator.resetRounds).toHaveBeenCalled();
  });

  it('should reset deaths on victory', () => {
    const deathHandler = ngMocks.get(DeathHandler);

    service.submitRoundAction([]);

    expect(deathHandler.reset).toHaveBeenCalled();
  });

  it('should clear round handlers on victory', () => {
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);

    service.submitRoundAction([]);

    expect(roundHandlersManager.clearHandlers).toHaveBeenCalled();
  });

  it('should clear victory handlers on victory', () => {
    const victoryHandlersManager = ngMocks.get(VictoryHandlersManager);

    service.submitRoundAction([]);

    expect(victoryHandlersManager.clearHandlers).toHaveBeenCalled();
  });

  afterAll(MockReset);
});

// TODO: Fix tests

describe.skip('GameOrchestrator', () => {
  let service: GameOrchestrator;
  let router: Router;
  let roleHandlersManager: RoleHandlersManager;
  let roundHandlersManager: RoundHandlersManager;
  let victoryHandlersManager: VictoryHandlersManager;
  let roundOrchestrator: RoundOrchestrator;
  let deathHandler: DeathHandler;

  let mockPlayers: Player[];
  let mockCardList: CardList;
  let mockRoleHandler: MockRoleHandler;
  let mockRoundHandler: MockRoundHandler;

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(GameOrchestrator)
      .mock(Router)
      .mock(RoleHandlersManager)
      .mock(RoundHandlersManager)
      .mock(VictoryHandlersManager)
      .mock(RoundOrchestrator)
      .mock(DeathHandler)
      .mock(StatusHandlersManager)
      .mock(MockRoundHandler)
      .mock(CurrentPlayersStore)
      .mock(CurrentRoundConfigStore)
      .mock(CardChoiceStore)
      .mock(NeedCleanAfterBoucStore),
  );

  beforeAll(() => {
    mockPlayers = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.SORCIERE,
        card: PlayerRole.SORCIERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockCardList = {
      selectedRoles: new Set([PlayerRole.SORCIERE, PlayerRole.VOLEUR]),
      loupGarou: 1,
      villageois: 1,
      playersNumber: 3,
    };
    mockRoundHandler = new MockRoundHandler();
    mockRoleHandler = new MockRoleHandler();

    MockInstance(RoleHandlersManager, () => ({
      clearHandlers: jest.fn(),
      getHandler: () => mockRoleHandler,
    }));

    MockInstance(RoundHandlersManager, () => ({
      getHandler: () => mockRoundHandler,
      initRequiredHandlers: jest.fn(),
      clearHandlers: jest.fn(),
      removeHandlersByRoles: jest.fn(),
      initAsDefaultHandlers: jest.fn(),
    }));

    MockInstance(StatusHandlersManager, () => ({
      clearHandlers: jest.fn(),
      getHandler: () => new MockStatusHandler(),
    }));

    MockInstance(VictoryHandlersManager, () => ({
      initRequiredHandlers: jest.fn(),
      clearHandlers: jest.fn(),
      getVictory: jest.fn(),
      removeHandler: jest.fn(),
    }));

    MockInstance(Router, () => ({
      navigate: jest.fn(),
    }));

    MockInstance(RoundOrchestrator, () => ({
      getFirstRound: jest.fn(),
    }));

    MockInstance(DeathHandler, () => ({
      announceDeaths: jest.fn(),
    }));

    MockInstance(CurrentPlayersStore, 'state', signal([]));
    MockInstance(CurrentRoundConfigStore, 'state', signal(null));
    MockInstance(CardChoiceStore, 'state', signal(mockCardList));
    MockInstance(NeedCleanAfterBoucStore, 'state', signal(false));
  });

  beforeEach(() => {
    ngMocks.get(CurrentPlayersStore).state.set([]);
    ngMocks.get(CurrentRoundConfigStore).state.set(null);

    service = MockRender(GameOrchestrator).point.componentInstance;
    router = ngMocks.get(Router);
    roundHandlersManager = ngMocks.get(RoundHandlersManager);
    victoryHandlersManager = ngMocks.get(VictoryHandlersManager);
    roundOrchestrator = ngMocks.get(RoundOrchestrator);
    deathHandler = ngMocks.get(DeathHandler);
  });

  afterAll(MockReset);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should init round handlers on game creation', () => {
    service.createGame(mockPlayers);

    expect(roundHandlersManager.initRequiredHandlers).toHaveBeenCalledWith([
      PlayerRole.VILLAGEOIS,
      PlayerRole.LOUP_GAROU,
      PlayerRole.SORCIERE,
    ]);
  });

  it('should init victory handlers on game creation', () => {
    service.createGame(mockPlayers);

    expect(victoryHandlersManager.initRequiredHandlers).toHaveBeenCalledWith([
      PlayerRole.VILLAGEOIS,
      PlayerRole.LOUP_GAROU,
      PlayerRole.SORCIERE,
    ]);
  });

  it('should set players on game creation', () => {
    service.createGame(mockPlayers);

    expect(service['players']()).toEqual(mockPlayers);
  });

  it('should set day count to 1 on game creation if no Ange', () => {
    service['dayCount'].set(2);

    service.createGame(mockPlayers);

    expect(service['dayCount']()).toEqual(1);
  });

  it('should set day count to 0 on game creation if Ange', () => {
    service['dayCount'].set(2);

    const newMockPlayers: Player[] = [
      ...mockPlayers,
      {
        id: 3,
        name: 'player3',
        role: PlayerRole.ANGE,
        card: PlayerRole.ANGE,
        statuses: new Set(),
        isDead: false,
      },
    ];

    service.createGame(newMockPlayers);

    expect(service['dayCount']()).toEqual(0);
  });

  it('should navigate to /game on game creation', () => {
    service.createGame(mockPlayers);

    expect(router.navigate).toHaveBeenCalledWith(['current-game']);
  });

  it('should set first round on game creation using RoundOrchestrator', () => {
    const mockRoundConfig: RoundConfig = {
      round: Round.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    mockRoundHandler.getRoundConfig = () => mockRoundConfig;
    jest
      .spyOn(roundOrchestrator, 'getFirstRound')
      .mockReturnValue(Round.LOUP_GAROU);

    service.createGame(mockPlayers);

    expect(service['roundConfig']()).toEqual(mockRoundConfig);
  });

  it('should add HEALTH_POTION status to player with role SORCIERE on game creation', () => {
    service.createGame(mockPlayers);

    expect(
      service['players']()[2].statuses.has(PlayerStatus.HEALTH_POTION),
    ).toEqual(true);
  });

  it('should add DEATH_POTION status to player with role SORCIERE on game creation', () => {
    service.createGame(mockPlayers);

    expect(
      service['players']()[2].statuses.has(PlayerStatus.DEATH_POTION),
    ).toEqual(true);
  });

  it('should update players with handler action on submit', () => {
    mockRoundHandler.handleAction = () => of(mockPlayers);
    const mockRoundConfig: RoundConfig = {
      round: Round.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    service['roundConfig'].set(mockRoundConfig);

    expect(service['players']()).toEqual([]);

    service.submitRoundAction([]);

    expect(service['players']()).toEqual(mockPlayers);
  });

  it('should set next round on submit', () => {
    mockRoundHandler.handleAction = () => of(mockPlayers);
    const mockRoundConfig: RoundConfig = {
      round: Round.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    const mockNextRoundConfig: RoundConfig = {
      round: Round.SORCIERE_HEALTH,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    service['roundConfig'].set(mockRoundConfig);
    mockRoundHandler.getRoundConfig = () => mockNextRoundConfig;
    jest
      .spyOn(roundOrchestrator, 'getNextRound')
      .mockReturnValue(Round.SORCIERE_HEALTH);

    expect(service['roundConfig']()).toEqual(mockRoundConfig);

    service.submitRoundAction([]);

    expect(service['roundConfig']()).toEqual(mockNextRoundConfig);
  });

  it('should skip LOUP_BLANC next round on odd day', () => {
    mockRoundHandler.handleAction = () => of(mockPlayers);
    const mockRoundConfig: RoundConfig = {
      round: Round.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    const mockSorciereHealthRoundConfig: RoundConfig = {
      round: Round.SORCIERE_HEALTH,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    const mockLoupBlancRoundConfig: RoundConfig = {
      round: Round.LOUP_BLANC,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    const mockSorciereHealthHandler = new MockRoundHandler();
    const mockLoupBlancHandler = new MockRoundHandler();
    mockSorciereHealthHandler.getRoundConfig = () =>
      mockSorciereHealthRoundConfig;
    mockLoupBlancHandler.getRoundConfig = () => mockLoupBlancRoundConfig;

    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.SORCIERE_HEALTH:
            return mockSorciereHealthHandler;
          case Round.LOUP_BLANC:
            return mockLoupBlancHandler;
          default:
            return new MockRoundHandler();
        }
      });

    service['roundConfig'].set(mockRoundConfig);
    service['dayCount'].set(1);

    jest
      .spyOn(roundOrchestrator, 'getNextRound')
      .mockReturnValueOnce(Round.LOUP_BLANC)
      .mockReturnValueOnce(Round.SORCIERE_HEALTH);

    expect(service['roundConfig']()).toEqual(mockRoundConfig);

    service.submitRoundAction([]);

    expect(service['roundConfig']()).toEqual(mockSorciereHealthRoundConfig);
  });

  it('should not skip LOUP_BLANC next round on even day', () => {
    mockRoundHandler.handleAction = () => of(mockPlayers);
    const mockRoundConfig: RoundConfig = {
      round: Round.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    const mockSorciereHealthRoundConfig: RoundConfig = {
      round: Round.SORCIERE_HEALTH,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    const mockLoupBlancRoundConfig: RoundConfig = {
      round: Round.LOUP_BLANC,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    const mockSorciereHealthHandler = new MockRoundHandler();
    const mockLoupBlancHandler = new MockRoundHandler();
    mockSorciereHealthHandler.getRoundConfig = () =>
      mockSorciereHealthRoundConfig;
    mockLoupBlancHandler.getRoundConfig = () => mockLoupBlancRoundConfig;

    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.SORCIERE_HEALTH:
            return mockSorciereHealthHandler;
          case Round.LOUP_BLANC:
            return mockLoupBlancHandler;
          default:
            return new MockRoundHandler();
        }
      });

    service['roundConfig'].set(mockRoundConfig);
    service['dayCount'].set(2);

    jest
      .spyOn(roundOrchestrator, 'getNextRound')
      .mockReturnValueOnce(Round.LOUP_BLANC)
      .mockReturnValueOnce(Round.SORCIERE_HEALTH);

    expect(service['roundConfig']()).toEqual(mockRoundConfig);

    service.submitRoundAction([]);

    expect(service['roundConfig']()).toEqual(mockLoupBlancRoundConfig);
  });

  // it('should handle deaths and use after-death round after submit if next round is during day', () => {
  //   jest.spyOn(roundHandler, 'handleAction').mockReturnValue(of(mockPlayers));
  //   jest.spyOn(deathHandler, 'handleNewDeaths').mockReturnValue(mockPlayers);
  //   const getHandlerSpy = jest.spyOn(roundHandlersManager, 'getHandler');
  //   const getNextRoundSpy = jest.spyOn(
  //     roundOrchestrator,
  //     'getNextRound',
  //   );
  //
  //   const mockCurrentRound: Round = {
  //     role: RoundEnum.SORCIERE_KILL,
  //     selectablePlayers: [0],
  //     maxSelectable: 1,
  //     minSelectable: 0,
  //     isDuringDay: false,
  //     type: RoundTypeEnum.DEFAULT,
  //   };
  //
  //   const mockSorciereKillHandler = new MockRoundHandler();
  //   mockSorciereKillHandler.isDuringDay = false;
  //   when(getHandlerSpy)
  //     .calledWith(RoundEnum.SORCIERE_KILL)
  //     .mockReturnValue(mockSorciereKillHandler);
  //
  //   const mockVillageoisHandler = new MockRoundHandler();
  //   mockVillageoisHandler.isDuringDay = true;
  //   when(getHandlerSpy)
  //     .calledWith(RoundEnum.VILLAGEOIS)
  //     .mockReturnValue(mockVillageoisHandler);
  //
  //   const mockChasseurHandler = new MockRoundHandler();
  //   mockChasseurHandler.isDuringDay = true;
  //   const mockChasseurRound: Round = {
  //     role: RoundEnum.CHASSEUR,
  //     selectablePlayers: [0],
  //     maxSelectable: 1,
  //     minSelectable: 1,
  //     isDuringDay: false,
  //     type: RoundTypeEnum.DEFAULT,
  //   };
  //   mockChasseurHandler.getRoundConfig = () => mockChasseurRound;
  //   when(getHandlerSpy)
  //     .calledWith(RoundEnum.CHASSEUR)
  //     .mockReturnValue(mockChasseurHandler);
  //
  //   getNextRoundSpy
  //     .mockReturnValueOnce(RoundEnum.VILLAGEOIS)
  //     .mockReturnValueOnce(RoundEnum.CHASSEUR);
  //
  //   service['roundConfig'].set(mockCurrentRound);
  //
  //   service.submitRoundAction([]);
  //
  //   expect(service['roundConfig']()).toEqual(mockChasseurRound);
  // });

  it('should handle deaths and continue round after submit if next round is during day and no after-death rounds', () => {
    mockRoundHandler.handleAction = () => of(mockPlayers);
    jest.spyOn(deathHandler, 'handleNewDeaths').mockReturnValue(mockPlayers);

    const mockCurrentRoundConfig: RoundConfig = {
      round: Round.SORCIERE_KILL,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };

    const mockSorciereKillHandler = new MockRoundHandler();
    mockSorciereKillHandler.isDuringDay = false;

    const mockVillageoisHandler = new MockRoundHandler();
    mockVillageoisHandler.isDuringDay = true;
    const mockVillageoisRoundConfig: RoundConfig = {
      round: Round.VILLAGEOIS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    mockVillageoisHandler.getRoundConfig = () => mockVillageoisRoundConfig;

    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.SORCIERE_KILL:
            return mockSorciereKillHandler;
          case Round.VILLAGEOIS:
            return mockVillageoisHandler;
          default:
            return new MockRoundHandler();
        }
      });

    jest
      .spyOn(roundOrchestrator, 'getNextRound')
      .mockReturnValueOnce(Round.VILLAGEOIS)
      .mockReturnValueOnce(Round.VILLAGEOIS);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(service['roundConfig']()).toEqual(mockVillageoisRoundConfig);
  });

  it('should not check victory during night', () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: Round.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = false;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = false;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.LOUP_GAROU:
            return mockCurrentRoundHandler;
          case Round.SORCIERE_HEALTH:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrator, 'getNextRound')
      .mockReturnValue(Round.SORCIERE_HEALTH);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(victoryHandlersManager.getVictory).not.toHaveBeenCalled();
  });

  it('should check victory after night', () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: Round.SORCIERE_KILL,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = false;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = true;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest.spyOn(deathHandler, 'handleNewDeaths').mockReturnValue([]);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.SORCIERE_KILL:
            return mockCurrentRoundHandler;
          case Round.VILLAGEOIS:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrator, 'getNextRound')
      .mockReturnValue(Round.VILLAGEOIS);
    jest
      .spyOn(victoryHandlersManager, 'getVictory')
      .mockReturnValue(Victory.LOUP_GAROU);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(router.navigate).toHaveBeenCalledWith(['victory'], {
      queryParams: { victory: Victory.LOUP_GAROU },
    });
  });

  it('should check victory during day', () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: Round.CAPITAINE,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = true;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = true;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest.spyOn(deathHandler, 'handleNewDeaths').mockReturnValue([]);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.CAPITAINE:
            return mockCurrentRoundHandler;
          case Round.VILLAGEOIS:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrator, 'getNextRound')
      .mockReturnValue(Round.VILLAGEOIS);
    jest
      .spyOn(victoryHandlersManager, 'getVictory')
      .mockReturnValue(Victory.LOUP_GAROU);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(router.navigate).toHaveBeenCalledWith(['victory'], {
      queryParams: { victory: Victory.LOUP_GAROU },
    });
  });

  it('should not check victory if next round is CHASSEUR', () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: Round.SORCIERE_KILL,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = false;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = true;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest.spyOn(deathHandler, 'handleNewDeaths').mockReturnValue([]);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.SORCIERE_KILL:
            return mockCurrentRoundHandler;
          case Round.CHASSEUR:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrator, 'getNextRound')
      .mockReturnValue(Round.CHASSEUR);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(victoryHandlersManager.getVictory).not.toHaveBeenCalled();
  });

  it('should announce deaths after night if no victory', () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: Round.SORCIERE_KILL,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = false;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = true;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest.spyOn(deathHandler, 'handleNewDeaths').mockReturnValue([]);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.SORCIERE_KILL:
            return mockCurrentRoundHandler;
          case Round.VILLAGEOIS:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrator, 'getNextRound')
      .mockReturnValue(Round.VILLAGEOIS);
    jest.spyOn(victoryHandlersManager, 'getVictory').mockReturnValue(undefined);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(deathHandler.announceDeaths).toHaveBeenCalled();
  });

  it('should announce deaths during day if no victory', () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: Round.CAPITAINE,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = true;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = true;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest.spyOn(deathHandler, 'handleNewDeaths').mockReturnValue([]);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.CAPITAINE:
            return mockCurrentRoundHandler;
          case Round.VILLAGEOIS:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrator, 'getNextRound')
      .mockReturnValue(Round.VILLAGEOIS);
    jest.spyOn(victoryHandlersManager, 'getVictory').mockReturnValue(undefined);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(deathHandler.announceDeaths).toHaveBeenCalled();
  });

  it('should not announce deaths if next round is CHASSEUR', () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: Round.SORCIERE_KILL,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = false;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = true;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest.spyOn(deathHandler, 'handleNewDeaths').mockReturnValue([]);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.SORCIERE_KILL:
            return mockCurrentRoundHandler;
          case Round.CHASSEUR:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrator, 'getNextRound')
      .mockReturnValue(Round.CHASSEUR);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(deathHandler.announceDeaths).not.toHaveBeenCalled();
  });

  it('should clean statuses after day', () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: Round.VILLAGEOIS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: true,
      type: RoundType.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = true;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = false;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.VILLAGEOIS:
            return mockCurrentRoundHandler;
          case Round.LOUP_GAROU:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrator, 'getNextRound')
      .mockReturnValue(Round.LOUP_GAROU);
    jest.spyOn(victoryHandlersManager, 'getVictory').mockReturnValue(undefined);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(mockRoleHandler.cleanStatusesAfterDay).toHaveBeenCalled();
  });

  it('should increment day count after day', () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: Round.VILLAGEOIS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: true,
      type: RoundType.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = true;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = false;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.VILLAGEOIS:
            return mockCurrentRoundHandler;
          case Round.LOUP_GAROU:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrator, 'getNextRound')
      .mockReturnValue(Round.LOUP_GAROU);
    jest.spyOn(victoryHandlersManager, 'getVictory').mockReturnValue(undefined);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(service['dayCount']()).toEqual(2);
  });

  it('should clear and reinit handlers after VOLEUR round', async () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: Round.VOLEUR,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundType.ROLES,
    };
    const mockNewPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.SORCIERE,
        card: PlayerRole.VOLEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.CUPIDON,
        card: PlayerRole.CUPIDON,
        statuses: new Set(),
        isDead: false,
      },
    ];
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = false;
    mockCurrentRoundHandler.handleAction = () => of(mockNewPlayers);
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = false;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.VOLEUR:
            return mockCurrentRoundHandler;
          case Round.VOYANTE:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrator, 'getNextRound')
      .mockReturnValue(Round.VOYANTE);
    jest.spyOn(victoryHandlersManager, 'getVictory').mockReturnValue(undefined);

    service['roundConfig'].set(mockCurrentRoundConfig);
    ngMocks.get(CardChoiceStore).state.set(mockCardList);

    service.submitRoundAction([]);

    expect(roundHandlersManager.clearHandlers).toHaveBeenCalled();
    expect(victoryHandlersManager.clearHandlers).toHaveBeenCalled();
    expect(roundHandlersManager.initRequiredHandlers).toHaveBeenCalledWith([
      PlayerRole.SORCIERE,
      PlayerRole.CUPIDON,
    ]);
    expect(victoryHandlersManager.initRequiredHandlers).toHaveBeenCalledWith([
      PlayerRole.SORCIERE,
      PlayerRole.CUPIDON,
    ]);
  });

  it('should remove JOUEUR_FLUTE handlers if JOUEUR_FLUTE has become LOUP_GAROU after PERE_LOUPS round', async () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: Round.PERE_LOUPS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundType.PLAYERS,
    };
    const mockNewPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.JOUEUR_FLUTE,
        statuses: new Set(),
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
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = false;
    mockCurrentRoundHandler.handleAction = () => of(mockNewPlayers);
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = false;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.PERE_LOUPS:
            return mockCurrentRoundHandler;
          case Round.VOYANTE:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrator, 'getNextRound')
      .mockReturnValue(Round.VOYANTE);
    jest.spyOn(victoryHandlersManager, 'getVictory').mockReturnValue(undefined);

    service['roundConfig'].set(mockCurrentRoundConfig);
    ngMocks.get(CardChoiceStore).state.set({
      ...mockCardList,
      selectedRoles: new Set<PlayerRole>([PlayerRole.JOUEUR_FLUTE]),
    });

    service.submitRoundAction([]);

    expect(roundHandlersManager.removeHandlersByRoles).toHaveBeenCalledWith([
      PlayerRole.JOUEUR_FLUTE,
    ]);
    expect(victoryHandlersManager.removeHandler).toHaveBeenCalledWith(
      Victory.JOUEUR_FLUTE,
    );
  });

  it('should not remove JOUEUR_FLUTE handlers if JOUEUR_FLUTE has not become LOUP_GAROU after PERE_LOUPS round', async () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: Round.PERE_LOUPS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundType.PLAYERS,
    };
    const mockNewPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.JOUEUR_FLUTE,
        card: PlayerRole.JOUEUR_FLUTE,
        statuses: new Set(),
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
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = false;
    mockCurrentRoundHandler.handleAction = () => of(mockNewPlayers);
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = false;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.PERE_LOUPS:
            return mockCurrentRoundHandler;
          case Round.VOYANTE:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrator, 'getNextRound')
      .mockReturnValue(Round.VOYANTE);
    jest.spyOn(victoryHandlersManager, 'getVictory').mockReturnValue(undefined);

    service['roundConfig'].set(mockCurrentRoundConfig);
    ngMocks.get(CardChoiceStore).state.set({
      ...mockCardList,
      selectedRoles: new Set<PlayerRole>([PlayerRole.JOUEUR_FLUTE]),
    });

    service.submitRoundAction([]);

    expect(roundHandlersManager.removeHandlersByRoles).not.toHaveBeenCalled();
    expect(victoryHandlersManager.removeHandler).not.toHaveBeenCalled();
  });

  it('should init default round handlers on game creation', () => {
    service.createGame(mockPlayers);

    expect(roundHandlersManager.initAsDefaultHandlers).toHaveBeenCalledWith([
      PlayerRole.VOLEUR,
    ]);
  });

  it('should return game in progress if current round', () => {
    service['roundConfig'].set({
      round: Round.VILLAGEOIS,
      selectablePlayers: [],
      maxSelectable: 0,
      minSelectable: 0,
      type: RoundType.DEFAULT,
      isDuringDay: true,
    });

    expect(service.isGameInProgress()).toBe(true);
  });

  it('should return game not in progress if no current round', () => {
    service['roundConfig'].set(null);

    expect(service.isGameInProgress()).toBe(false);
  });

  it('should set needCleanAfterBouc to true after BOUC round', async () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: Round.BOUC,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: true,
      type: RoundType.PLAYERS,
    };
    const mockNewPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.BOUC,
        card: PlayerRole.BOUC,
        statuses: new Set(),
        isDead: false,
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
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = true;
    mockCurrentRoundHandler.handleAction = () => of(mockNewPlayers);
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = false;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.BOUC:
            return mockCurrentRoundHandler;
          case Round.LOUP_GAROU:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrator, 'getNextRound')
      .mockReturnValue(Round.LOUP_GAROU);
    jest.spyOn(victoryHandlersManager, 'getVictory').mockReturnValue(undefined);

    service['roundConfig'].set(mockCurrentRoundConfig);
    ngMocks.get(CardChoiceStore).state.set(mockCardList);

    service.submitRoundAction([]);

    expect(service['needCleanAfterBouc']()).toEqual(true);
  });
});
