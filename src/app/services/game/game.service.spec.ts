import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { VictoryEnum } from '@/enums/victory.enum';
import { Player } from '@/models/player.model';
import { RoundConfig } from '@/models/round-config.model';
import { RoundHandler } from '@/round-handlers/round-handler.interface';
import { DeathService } from '@/services/death/death.service';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { RoundOrchestrationService } from '@/services/round-orchestration/round-orchestration.service';
import { StatusesService } from '@/services/statuses/statuses.service';
import { VictoryHandlersService } from '@/services/victory-handlers/victory-handlers.service';
import { waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { Observable, of } from 'rxjs';

import { CardList } from '@/models/card-list.model';
import { CardChoiceStore } from '@/stores/card-choice/card-choice.store';
import { CurrentPlayersStore } from '@/stores/current-players/current-players.store';
import { CurrentRoundConfigStore } from '@/stores/current-round/current-round-config.store';
import { NeedCleanAfterBoucStore } from '@/stores/need-clean-after-bouc/need-clean-after-bouc.store';
import { signal } from '@angular/core';
import { GameService } from './game.service';

class MockRoundHandler implements RoundHandler {
  isOnlyOnce = false;
  isDuringDay = false;
  type = RoundTypeEnum.DEFAULT;

  handleAction(players: Player[], _: number[]): Observable<Player[]> {
    return of(players);
  }

  getRoundConfig(_: Player[]): RoundConfig {
    return {} as RoundConfig;
  }
}

describe('GameService on victory', () => {
  let service: GameService;
  let mockCurrentRoundConfig: RoundConfig;

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(GameService)
      .mock(Router)
      .mock(RoundHandlersService)
      .mock(VictoryHandlersService)
      .mock(RoundOrchestrationService)
      .mock(DeathService)
      .mock(StatusesService)
      .mock(MockRoundHandler)
      .mock(CurrentPlayersStore)
      .mock(CurrentRoundConfigStore)
      .mock(CardChoiceStore)
      .mock(NeedCleanAfterBoucStore),
  );

  beforeAll(() => {
    mockCurrentRoundConfig = {
      round: RoundEnum.CAPITAINE,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = true;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = true;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    MockInstance(RoundHandlersService, () => ({
      clearHandlers: jest.fn(),
      getHandler(round) {
        switch (round) {
          case RoundEnum.CAPITAINE:
            return mockCurrentRoundHandler;
          case RoundEnum.VILLAGEOIS:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      },
    }));

    MockInstance(DeathService, () => ({
      reset: jest.fn(),
      handleNewDeaths: () => [],
    }));

    MockInstance(RoundOrchestrationService, () => ({
      resetRounds: jest.fn(),
      getNextRound: () => RoundEnum.VILLAGEOIS,
    }));

    MockInstance(VictoryHandlersService, () => ({
      clearHandlers: jest.fn(),
      getVictory: () => VictoryEnum.LOUP_GAROU,
    }));

    MockInstance(CurrentPlayersStore, 'state', signal([]));
    MockInstance(CurrentRoundConfigStore, 'state', signal(null));
    MockInstance(CardChoiceStore, 'state', signal({} as CardList));
    MockInstance(NeedCleanAfterBoucStore, 'state', signal(false));
  });

  beforeEach(() => {
    service = MockRender(GameService).point.componentInstance;
    service['roundConfig'].set(mockCurrentRoundConfig);
  });

  it('should reset rounds on victory', () => {
    const roundOrchestrationService = ngMocks.get(RoundOrchestrationService);

    service.submitRoundAction([]);

    expect(roundOrchestrationService.resetRounds).toHaveBeenCalled();
  });

  it('should reset deaths on victory', () => {
    const deathService = ngMocks.get(DeathService);

    service.submitRoundAction([]);

    expect(deathService.reset).toHaveBeenCalled();
  });

  it('should clear round handlers on victory', () => {
    const roundHandlersService = ngMocks.get(RoundHandlersService);

    service.submitRoundAction([]);

    expect(roundHandlersService.clearHandlers).toHaveBeenCalled();
  });

  it('should clear victory handlers on victory', () => {
    const victoryHandlersService = ngMocks.get(VictoryHandlersService);

    service.submitRoundAction([]);

    expect(victoryHandlersService.clearHandlers).toHaveBeenCalled();
  });

  afterAll(MockReset);
});

describe('GameService', () => {
  let service: GameService;
  let router: Router;
  let roundHandlersService: RoundHandlersService;
  let victoryHandlersService: VictoryHandlersService;
  let roundOrchestrationService: RoundOrchestrationService;
  let deathService: DeathService;
  let statusesService: StatusesService;

  let mockPlayers: Player[];
  let mockCardList: CardList;
  let mockRoundHandler: MockRoundHandler;

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(GameService)
      .mock(Router)
      .mock(RoundHandlersService)
      .mock(VictoryHandlersService)
      .mock(RoundOrchestrationService)
      .mock(DeathService)
      .mock(StatusesService)
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
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.SORCIERE,
        card: PlayerRoleEnum.SORCIERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockCardList = {
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE, PlayerRoleEnum.VOLEUR]),
      loupGarou: 1,
      villageois: 1,
      playersNumber: 3,
    };
    mockRoundHandler = new MockRoundHandler();

    MockInstance(RoundHandlersService, () => ({
      getHandler: () => mockRoundHandler,
      initHandlers: jest.fn(),
      clearHandlers: jest.fn(),
      removeHandlersByRoles: jest.fn(),
      initDefaultHandlers: jest.fn(),
    }));

    MockInstance(StatusesService, () => ({
      handleWolfTarget: (players) => players,
      handleInfectedAncien: (players) => players,
    }));

    MockInstance(VictoryHandlersService, () => ({
      initHandlers: jest.fn(),
      clearHandlers: jest.fn(),
      getVictory: jest.fn(),
      removeHandler: jest.fn(),
    }));

    MockInstance(Router, () => ({
      navigate: jest.fn(),
    }));

    MockInstance(RoundOrchestrationService, () => ({
      setVillageoisFirst: jest.fn(),
      getFirstRound: jest.fn(),
    }));

    MockInstance(DeathService, () => ({
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

    service = MockRender(GameService).point.componentInstance;
    router = ngMocks.get(Router);
    roundHandlersService = ngMocks.get(RoundHandlersService);
    victoryHandlersService = ngMocks.get(VictoryHandlersService);
    roundOrchestrationService = ngMocks.get(RoundOrchestrationService);
    deathService = ngMocks.get(DeathService);
    statusesService = ngMocks.get(StatusesService);
  });

  afterAll(MockReset);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should init round handlers on game creation', () => {
    service.createGame(mockPlayers);

    expect(roundHandlersService.initHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.VILLAGEOIS,
      PlayerRoleEnum.LOUP_GAROU,
      PlayerRoleEnum.SORCIERE,
    ]);
  });

  it('should init victory handlers on game creation', () => {
    service.createGame(mockPlayers);

    expect(victoryHandlersService.initHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.VILLAGEOIS,
      PlayerRoleEnum.LOUP_GAROU,
      PlayerRoleEnum.SORCIERE,
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
        role: PlayerRoleEnum.ANGE,
        card: PlayerRoleEnum.ANGE,
        statuses: new Set(),
        isDead: false,
      },
    ];

    service.createGame(newMockPlayers);

    expect(service['dayCount']()).toEqual(0);
  });

  it('should navigate to /game on game creation', () => {
    service.createGame(mockPlayers);

    expect(router.navigate).toHaveBeenCalledWith(['game']);
  });

  it('should set first round on game creation using RoundOrchestrationService', () => {
    const mockRoundConfig: RoundConfig = {
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    mockRoundHandler.getRoundConfig = () => mockRoundConfig;
    jest
      .spyOn(roundOrchestrationService, 'getFirstRound')
      .mockReturnValue(RoundEnum.LOUP_GAROU);

    service.createGame(mockPlayers);

    expect(service['roundConfig']()).toEqual(mockRoundConfig);
  });

  it('should set first round on game creation as VILLAGEOIS if Ange', () => {
    const mockRoundConfig: RoundConfig = {
      round: RoundEnum.VILLAGEOIS,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    mockRoundHandler.getRoundConfig = () => mockRoundConfig;

    jest
      .spyOn(roundOrchestrationService, 'getFirstRound')
      .mockReturnValue(RoundEnum.LOUP_GAROU);

    const newMockPlayers: Player[] = [
      ...mockPlayers,
      {
        id: 3,
        name: 'player3',
        role: PlayerRoleEnum.ANGE,
        card: PlayerRoleEnum.ANGE,
        statuses: new Set(),
        isDead: false,
      },
    ];

    service.createGame(newMockPlayers);

    expect(roundOrchestrationService.setVillageoisFirst).toHaveBeenCalled();
  });

  it('should add HEALTH_POTION status to player with role SORCIERE on game creation', () => {
    service.createGame(mockPlayers);

    expect(
      service['players']()[2].statuses.has(PlayerStatusEnum.HEALTH_POTION),
    ).toEqual(true);
  });

  it('should add DEATH_POTION status to player with role SORCIERE on game creation', () => {
    service.createGame(mockPlayers);

    expect(
      service['players']()[2].statuses.has(PlayerStatusEnum.DEATH_POTION),
    ).toEqual(true);
  });

  it('should update players with handler action on submit', () => {
    mockRoundHandler.handleAction = () => of(mockPlayers);
    const mockRoundConfig: RoundConfig = {
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    service['roundConfig'].set(mockRoundConfig);

    expect(service['players']()).toEqual([]);

    service.submitRoundAction([]);

    expect(service['players']()).toEqual(mockPlayers);
  });

  it('should set next round on submit', () => {
    mockRoundHandler.handleAction = () => of(mockPlayers);
    const mockRoundConfig: RoundConfig = {
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockNextRoundConfig: RoundConfig = {
      round: RoundEnum.SORCIERE_HEALTH,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    service['roundConfig'].set(mockRoundConfig);
    mockRoundHandler.getRoundConfig = () => mockNextRoundConfig;
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.SORCIERE_HEALTH);

    expect(service['roundConfig']()).toEqual(mockRoundConfig);

    service.submitRoundAction([]);

    expect(service['roundConfig']()).toEqual(mockNextRoundConfig);
  });

  it('should skip LOUP_BLANC next round on odd day', () => {
    mockRoundHandler.handleAction = () => of(mockPlayers);
    const mockRoundConfig: RoundConfig = {
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockSorciereHealthRoundConfig: RoundConfig = {
      round: RoundEnum.SORCIERE_HEALTH,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockLoupBlancRoundConfig: RoundConfig = {
      round: RoundEnum.LOUP_BLANC,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockSorciereHealthHandler = new MockRoundHandler();
    const mockLoupBlancHandler = new MockRoundHandler();
    mockSorciereHealthHandler.getRoundConfig = () =>
      mockSorciereHealthRoundConfig;
    mockLoupBlancHandler.getRoundConfig = () => mockLoupBlancRoundConfig;

    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.SORCIERE_HEALTH:
            return mockSorciereHealthHandler;
          case RoundEnum.LOUP_BLANC:
            return mockLoupBlancHandler;
          default:
            return new MockRoundHandler();
        }
      });

    service['roundConfig'].set(mockRoundConfig);
    service['dayCount'].set(1);

    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValueOnce(RoundEnum.LOUP_BLANC)
      .mockReturnValueOnce(RoundEnum.SORCIERE_HEALTH);

    expect(service['roundConfig']()).toEqual(mockRoundConfig);

    service.submitRoundAction([]);

    expect(service['roundConfig']()).toEqual(mockSorciereHealthRoundConfig);
  });

  it('should not skip LOUP_BLANC next round on even day', () => {
    mockRoundHandler.handleAction = () => of(mockPlayers);
    const mockRoundConfig: RoundConfig = {
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockSorciereHealthRoundConfig: RoundConfig = {
      round: RoundEnum.SORCIERE_HEALTH,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockLoupBlancRoundConfig: RoundConfig = {
      round: RoundEnum.LOUP_BLANC,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockSorciereHealthHandler = new MockRoundHandler();
    const mockLoupBlancHandler = new MockRoundHandler();
    mockSorciereHealthHandler.getRoundConfig = () =>
      mockSorciereHealthRoundConfig;
    mockLoupBlancHandler.getRoundConfig = () => mockLoupBlancRoundConfig;

    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.SORCIERE_HEALTH:
            return mockSorciereHealthHandler;
          case RoundEnum.LOUP_BLANC:
            return mockLoupBlancHandler;
          default:
            return new MockRoundHandler();
        }
      });

    service['roundConfig'].set(mockRoundConfig);
    service['dayCount'].set(2);

    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValueOnce(RoundEnum.LOUP_BLANC)
      .mockReturnValueOnce(RoundEnum.SORCIERE_HEALTH);

    expect(service['roundConfig']()).toEqual(mockRoundConfig);

    service.submitRoundAction([]);

    expect(service['roundConfig']()).toEqual(mockLoupBlancRoundConfig);
  });

  // it('should handle deaths and use after-death round after submit if next round is during day', () => {
  //   jest.spyOn(roundHandler, 'handleAction').mockReturnValue(of(mockPlayers));
  //   jest.spyOn(deathService, 'handleNewDeaths').mockReturnValue(mockPlayers);
  //   const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
  //   const getNextRoundSpy = jest.spyOn(
  //     roundOrchestrationService,
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
    jest.spyOn(deathService, 'handleNewDeaths').mockReturnValue(mockPlayers);

    const mockCurrentRoundConfig: RoundConfig = {
      round: RoundEnum.SORCIERE_KILL,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };

    const mockSorciereKillHandler = new MockRoundHandler();
    mockSorciereKillHandler.isDuringDay = false;

    const mockVillageoisHandler = new MockRoundHandler();
    mockVillageoisHandler.isDuringDay = true;
    const mockVillageoisRoundConfig: RoundConfig = {
      round: RoundEnum.VILLAGEOIS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    mockVillageoisHandler.getRoundConfig = () => mockVillageoisRoundConfig;

    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.SORCIERE_KILL:
            return mockSorciereKillHandler;
          case RoundEnum.VILLAGEOIS:
            return mockVillageoisHandler;
          default:
            return new MockRoundHandler();
        }
      });

    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValueOnce(RoundEnum.VILLAGEOIS)
      .mockReturnValueOnce(RoundEnum.VILLAGEOIS);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(service['roundConfig']()).toEqual(mockVillageoisRoundConfig);
  });

  it('should not check victory during night', () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = false;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = false;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.LOUP_GAROU:
            return mockCurrentRoundHandler;
          case RoundEnum.SORCIERE_HEALTH:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.SORCIERE_HEALTH);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(victoryHandlersService.getVictory).toHaveBeenCalledTimes(0);
  });

  it('should check victory after night', () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: RoundEnum.SORCIERE_KILL,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = false;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = true;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest.spyOn(deathService, 'handleNewDeaths').mockReturnValue([]);
    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.SORCIERE_KILL:
            return mockCurrentRoundHandler;
          case RoundEnum.VILLAGEOIS:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.VILLAGEOIS);
    jest
      .spyOn(victoryHandlersService, 'getVictory')
      .mockReturnValue(VictoryEnum.LOUP_GAROU);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(router.navigate).toHaveBeenCalledWith(['victory'], {
      queryParams: { victory: VictoryEnum.LOUP_GAROU },
    });
  });

  it('should check victory during day', () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: RoundEnum.CAPITAINE,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = true;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = true;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest.spyOn(deathService, 'handleNewDeaths').mockReturnValue([]);
    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.CAPITAINE:
            return mockCurrentRoundHandler;
          case RoundEnum.VILLAGEOIS:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.VILLAGEOIS);
    jest
      .spyOn(victoryHandlersService, 'getVictory')
      .mockReturnValue(VictoryEnum.LOUP_GAROU);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(router.navigate).toHaveBeenCalledWith(['victory'], {
      queryParams: { victory: VictoryEnum.LOUP_GAROU },
    });
  });

  it('should not check victory if next round is CHASSEUR', () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: RoundEnum.SORCIERE_KILL,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = false;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = true;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest.spyOn(deathService, 'handleNewDeaths').mockReturnValue([]);
    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.SORCIERE_KILL:
            return mockCurrentRoundHandler;
          case RoundEnum.CHASSEUR:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.CHASSEUR);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(victoryHandlersService.getVictory).toHaveBeenCalledTimes(0);
  });

  it('should announce deaths after night if no victory', () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: RoundEnum.SORCIERE_KILL,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = false;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = true;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest.spyOn(deathService, 'handleNewDeaths').mockReturnValue([]);
    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.SORCIERE_KILL:
            return mockCurrentRoundHandler;
          case RoundEnum.VILLAGEOIS:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.VILLAGEOIS);
    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(deathService.announceDeaths).toHaveBeenCalled();
  });

  it('should announce deaths during day if no victory', () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: RoundEnum.CAPITAINE,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = true;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = true;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest.spyOn(deathService, 'handleNewDeaths').mockReturnValue([]);
    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.CAPITAINE:
            return mockCurrentRoundHandler;
          case RoundEnum.VILLAGEOIS:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.VILLAGEOIS);
    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(deathService.announceDeaths).toHaveBeenCalled();
  });

  it('should not announce deaths if next round is CHASSEUR', () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: RoundEnum.SORCIERE_KILL,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = false;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = true;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest.spyOn(deathService, 'handleNewDeaths').mockReturnValue([]);
    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.SORCIERE_KILL:
            return mockCurrentRoundHandler;
          case RoundEnum.CHASSEUR:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.CHASSEUR);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(deathService.announceDeaths).toHaveBeenCalledTimes(0);
  });

  it('should clean statuses after day', () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: RoundEnum.VILLAGEOIS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: true,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = true;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = false;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest.spyOn(statusesService, 'cleanStatusesAfterDay').mockReturnValue([]);
    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.VILLAGEOIS:
            return mockCurrentRoundHandler;
          case RoundEnum.LOUP_GAROU:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.LOUP_GAROU);
    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(statusesService.cleanStatusesAfterDay).toHaveBeenCalled();
  });

  it('should increment day count after day', () => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: RoundEnum.VILLAGEOIS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: true,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = true;
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = false;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest.spyOn(statusesService, 'cleanStatusesAfterDay').mockReturnValue([]);
    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.VILLAGEOIS:
            return mockCurrentRoundHandler;
          case RoundEnum.LOUP_GAROU:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.LOUP_GAROU);
    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    service['roundConfig'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(service['dayCount']()).toEqual(2);
  });

  it('should clear and reinit handlers after VOLEUR round', waitForAsync(() => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: RoundEnum.VOLEUR,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.ROLES,
    };
    const mockNewPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SORCIERE,
        card: PlayerRoleEnum.VOLEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.CUPIDON,
        card: PlayerRoleEnum.CUPIDON,
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
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.VOLEUR:
            return mockCurrentRoundHandler;
          case RoundEnum.VOYANTE:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.VOYANTE);
    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    service['roundConfig'].set(mockCurrentRoundConfig);
    ngMocks.get(CardChoiceStore).state.set(mockCardList);

    service.submitRoundAction([]);

    expect(roundHandlersService.clearHandlers).toHaveBeenCalled();
    expect(victoryHandlersService.clearHandlers).toHaveBeenCalled();
    expect(roundHandlersService.initHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.SORCIERE,
      PlayerRoleEnum.CUPIDON,
    ]);
    expect(victoryHandlersService.initHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.SORCIERE,
      PlayerRoleEnum.CUPIDON,
    ]);
  }));

  it('should remove JOUEUR_FLUTE handlers if JOUEUR_FLUTE has become LOUP_GAROU after PERE_LOUPS round', waitForAsync(() => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: RoundEnum.PERE_LOUPS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.PLAYERS,
    };
    const mockNewPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.JOUEUR_FLUTE,
        statuses: new Set(),
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
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = false;
    mockCurrentRoundHandler.handleAction = () => of(mockNewPlayers);
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = false;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.PERE_LOUPS:
            return mockCurrentRoundHandler;
          case RoundEnum.VOYANTE:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.VOYANTE);
    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    service['roundConfig'].set(mockCurrentRoundConfig);
    ngMocks.get(CardChoiceStore).state.set({
      ...mockCardList,
      selectedRoles: new Set<PlayerRoleEnum>([PlayerRoleEnum.JOUEUR_FLUTE]),
    });

    service.submitRoundAction([]);

    expect(roundHandlersService.removeHandlersByRoles).toHaveBeenCalledWith([
      PlayerRoleEnum.JOUEUR_FLUTE,
    ]);
    expect(victoryHandlersService.removeHandler).toHaveBeenCalledWith(
      VictoryEnum.JOUEUR_FLUTE,
    );
  }));

  it('should not remove JOUEUR_FLUTE handlers if JOUEUR_FLUTE has not become LOUP_GAROU after PERE_LOUPS round', waitForAsync(() => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: RoundEnum.PERE_LOUPS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.PLAYERS,
    };
    const mockNewPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.JOUEUR_FLUTE,
        card: PlayerRoleEnum.JOUEUR_FLUTE,
        statuses: new Set(),
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
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = false;
    mockCurrentRoundHandler.handleAction = () => of(mockNewPlayers);
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = false;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.PERE_LOUPS:
            return mockCurrentRoundHandler;
          case RoundEnum.VOYANTE:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.VOYANTE);
    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    service['roundConfig'].set(mockCurrentRoundConfig);
    ngMocks.get(CardChoiceStore).state.set({
      ...mockCardList,
      selectedRoles: new Set<PlayerRoleEnum>([PlayerRoleEnum.JOUEUR_FLUTE]),
    });

    service.submitRoundAction([]);

    expect(roundHandlersService.removeHandlersByRoles).toHaveBeenCalledTimes(0);
    expect(victoryHandlersService.removeHandler).toHaveBeenCalledTimes(0);
  }));

  it('should init default round handlers on game creation', () => {
    service.createGame(mockPlayers);

    expect(roundHandlersService.initDefaultHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.VOLEUR,
    ]);
  });

  it('should return game in progress if current round', () => {
    service['roundConfig'].set({
      round: RoundEnum.VILLAGEOIS,
      selectablePlayers: [],
      maxSelectable: 0,
      minSelectable: 0,
      type: RoundTypeEnum.DEFAULT,
      isDuringDay: true,
    });

    expect(service.isGameInProgress()).toBe(true);
  });

  it('should return game not in progress if no current round', () => {
    service['roundConfig'].set(null);

    expect(service.isGameInProgress()).toBe(false);
  });

  it('should set needCleanAfterBouc to true after BOUC round', waitForAsync(() => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: RoundEnum.BOUC,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: true,
      type: RoundTypeEnum.PLAYERS,
    };
    const mockNewPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.BOUC,
        card: PlayerRoleEnum.BOUC,
        statuses: new Set(),
        isDead: false,
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
    const mockCurrentRoundHandler = new MockRoundHandler();
    mockCurrentRoundHandler.isDuringDay = true;
    mockCurrentRoundHandler.handleAction = () => of(mockNewPlayers);
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = false;
    mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.BOUC:
            return mockCurrentRoundHandler;
          case RoundEnum.LOUP_GAROU:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.LOUP_GAROU);
    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    service['roundConfig'].set(mockCurrentRoundConfig);
    ngMocks.get(CardChoiceStore).state.set(mockCardList);

    service.submitRoundAction([]);

    expect(service['needCleanAfterBouc']()).toEqual(true);
  }));

  it('should clean no vote after VILLAGEOIS round if need clean', waitForAsync(() => {
    const mockCurrentRoundConfig: RoundConfig = {
      round: RoundEnum.VILLAGEOIS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: true,
      type: RoundTypeEnum.PLAYERS,
    };
    const mockNewPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.BOUC,
        card: PlayerRoleEnum.BOUC,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.NO_VOTE]),
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
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.VILLAGEOIS:
            return mockCurrentRoundHandler;
          case RoundEnum.LOUP_GAROU:
            return mockNextRoundHandler;
          default:
            return new MockRoundHandler();
        }
      });
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.LOUP_GAROU);
    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    service['roundConfig'].set(mockCurrentRoundConfig);
    ngMocks.get(CardChoiceStore).state.set(mockCardList);
    service['needCleanAfterBouc'].set(true);

    const mockNewPlayersAfterClean: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.BOUC,
        card: PlayerRoleEnum.BOUC,
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

    jest
      .spyOn(statusesService, 'cleanNoVoteAfterDay')
      .mockReturnValue(mockNewPlayersAfterClean);
    jest
      .spyOn(statusesService, 'cleanStatusesAfterDay')
      .mockImplementation((players) => players);
    jest
      .spyOn(deathService, 'handleNewDeaths')
      .mockImplementation((players) => players);

    service.submitRoundAction([]);

    expect(service['players']()).toEqual(mockNewPlayersAfterClean);
    expect(service['needCleanAfterBouc']()).toEqual(false);
  }));
});
