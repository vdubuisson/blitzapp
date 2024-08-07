import { waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { when } from 'jest-when';
import { MockService } from 'ng-mocks';
import { Observable, of } from 'rxjs';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { VictoryEnum } from '../../enums/victory.enum';
import { Player, StoredPlayer } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../../round-handlers/round-handler.interface';
import { DeathService } from '../death/death.service';
import { RoundHandlersService } from '../round-handlers/round-handlers.service';
import { RoundOrchestrationService } from '../round-orchestration/round-orchestration.service';
import { StatusesService } from '../statuses/statuses.service';
import { StorageService } from '../storage/storage.service';
import { VictoryHandlersService } from '../victory-handlers/victory-handlers.service';

import { GameService } from './game.service';
import { CardList, StoredCardList } from '../../models/card-list.model';

class MockRoundHandler implements RoundHandler {
  isOnlyOnce = false;
  isDuringDay = false;
  type = RoundTypeEnum.DEFAULT;

  handleAction(players: Player[], _: number[]): Observable<Player[]> {
    return of(players);
  }

  getRoundConfig(_: Player[]): Round {
    throw new Error('Method not implemented.');
  }
}

describe('GameService with storage init', () => {
  let service: GameService;
  let router: Router;
  let roundHandlersService: RoundHandlersService;
  let victoryHandlersService: VictoryHandlersService;
  let roundOrchestrationService: RoundOrchestrationService;
  let deathService: DeathService;
  let statusesService: StatusesService;
  let roundHandler: RoundHandler;
  let storageService: StorageService;

  const mockStoredPlayers: StoredPlayer[] = [
    {
      id: 0,
      name: 'player0',
      role: PlayerRoleEnum.VILLAGEOIS,
      card: PlayerRoleEnum.VILLAGEOIS,
      statuses: [],
      isDead: false,
    },
    {
      id: 1,
      name: 'player1',
      role: PlayerRoleEnum.LOUP_GAROU,
      card: PlayerRoleEnum.LOUP_GAROU,
      statuses: [],
      isDead: false,
    },
    {
      id: 2,
      name: 'player2',
      role: PlayerRoleEnum.SORCIERE,
      card: PlayerRoleEnum.SORCIERE,
      statuses: [],
      isDead: false,
    },
  ];
  const mockStoredRound: Round = {
    role: RoundEnum.VILLAGEOIS,
    selectablePlayers: [],
    maxSelectable: 0,
    minSelectable: 0,
    isDuringDay: true,
    type: RoundTypeEnum.DEFAULT,
  };
  const mockStoredDayCount = 3;
  const mockStoredCardList: StoredCardList = {
    villageois: 1,
    loupGarou: 1,
    selectedRoles: [PlayerRoleEnum.CUPIDON],
    playersNumber: 3,
  };
  const mockStoredNeedCleanAfterBouc = true;

  beforeEach(() => {
    router = MockService(Router);
    roundHandlersService = MockService(RoundHandlersService);
    victoryHandlersService = MockService(VictoryHandlersService);
    roundOrchestrationService = MockService(RoundOrchestrationService);
    deathService = MockService(DeathService);
    statusesService = MockService(StatusesService);
    roundHandler = MockService(MockRoundHandler);
    storageService = MockService(StorageService);

    const storageGetSpy = jest.spyOn(storageService, 'get');
    when(storageGetSpy)
      .calledWith('GameService_currentPlayers')
      .mockReturnValue(of(mockStoredPlayers));
    when(storageGetSpy)
      .calledWith('GameService_currentRound')
      .mockReturnValue(of(mockStoredRound));
    when(storageGetSpy)
      .calledWith('GameService_dayCount')
      .mockReturnValue(of(mockStoredDayCount));
    when(storageGetSpy)
      .calledWith('GameService_cardList')
      .mockReturnValue(of(mockStoredCardList));
    when(storageGetSpy)
      .calledWith('GameService_needCleanAfterBouc')
      .mockReturnValue(of(mockStoredNeedCleanAfterBouc));

    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockReturnValue(roundHandler);

    service = new GameService(
      router,
      roundHandlersService,
      victoryHandlersService,
      roundOrchestrationService,
      deathService,
      statusesService,
      storageService,
    );
  });

  it('should init players from storage', () => {
    const expectedPlayers: Player[] = [
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
    expect(service['players']()).toEqual(expectedPlayers);
  });

  it('should init round from storage', () => {
    expect(service['round']()).toEqual(mockStoredRound);
  });

  it('should init day count from storage', () => {
    expect(service['dayCount']()).toEqual(mockStoredDayCount);
  });

  it('should init card list from storage', () => {
    const expectedCardList: CardList = {
      villageois: 1,
      loupGarou: 1,
      selectedRoles: new Set([PlayerRoleEnum.CUPIDON]),
      playersNumber: 3,
    };
    expect(service['cardList']).toEqual(expectedCardList);
  });

  it('should init needCleanAfterBouc from storage', () => {
    expect(service['needCleanAfterBouc']).toEqual(mockStoredNeedCleanAfterBouc);
  });
});

describe('GameService on victory', () => {
  let service: GameService;
  let router: Router;
  let roundHandlersService: RoundHandlersService;
  let victoryHandlersService: VictoryHandlersService;
  let roundOrchestrationService: RoundOrchestrationService;
  let deathService: DeathService;
  let statusesService: StatusesService;
  let roundHandler: RoundHandler;
  let storageService: StorageService;

  beforeEach(() => {
    router = MockService(Router);
    roundHandlersService = MockService(RoundHandlersService);
    victoryHandlersService = MockService(VictoryHandlersService);
    roundOrchestrationService = MockService(RoundOrchestrationService);
    deathService = MockService(DeathService);
    statusesService = MockService(StatusesService);
    roundHandler = MockService(MockRoundHandler);
    storageService = MockService(StorageService);

    jest.spyOn(storageService, 'get').mockReturnValue(of(null));

    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockReturnValue(roundHandler);

    service = new GameService(
      router,
      roundHandlersService,
      victoryHandlersService,
      roundOrchestrationService,
      deathService,
      statusesService,
      storageService,
    );
  });

  beforeEach(() => {
    const mockCurrentRoundConfig: Round = {
      role: RoundEnum.CAPITAINE,
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
    jest
      .spyOn(mockNextRoundHandler, 'getRoundConfig')
      .mockReturnValue({} as Round);

    jest.spyOn(deathService, 'handleNewDeaths').mockReturnValue([]);
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.CAPITAINE)
      .mockReturnValue(mockCurrentRoundHandler);
    when(getHandlerSpy)
      .calledWith(RoundEnum.VILLAGEOIS)
      .mockReturnValue(mockNextRoundHandler);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.VILLAGEOIS);

    jest
      .spyOn(victoryHandlersService, 'getVictory')
      .mockReturnValue(VictoryEnum.LOUP_GAROU);

    service['round'].set(mockCurrentRoundConfig);
  });

  it('should reset rounds on victory', () => {
    jest.spyOn(roundOrchestrationService, 'resetRounds');

    service.submitRoundAction([]);

    expect(roundOrchestrationService.resetRounds).toHaveBeenCalled();
  });

  it('should reset deaths on victory', () => {
    jest.spyOn(deathService, 'reset');

    service.submitRoundAction([]);

    expect(deathService.reset).toHaveBeenCalled();
  });

  it('should clear round handlers on victory', () => {
    jest.spyOn(roundHandlersService, 'clearHandlers');

    service.submitRoundAction([]);

    expect(roundHandlersService.clearHandlers).toHaveBeenCalled();
  });

  it('should clear victory handlers on victory', () => {
    jest.spyOn(victoryHandlersService, 'clearHandlers');

    service.submitRoundAction([]);

    expect(victoryHandlersService.clearHandlers).toHaveBeenCalled();
  });

  it('should remove players from storage on victory', () => {
    jest.spyOn(storageService, 'remove');

    service.submitRoundAction([]);

    expect(storageService.remove).toHaveBeenCalledWith(service['PLAYERS_KEY']);
  });

  it('should remove round from storage on victory', () => {
    jest.spyOn(storageService, 'remove');

    service.submitRoundAction([]);

    expect(storageService.remove).toHaveBeenCalledWith(service['ROUND_KEY']);
  });

  it('should remove day count from storage on victory', () => {
    jest.spyOn(storageService, 'remove');

    service.submitRoundAction([]);

    expect(storageService.remove).toHaveBeenCalledWith(
      service['DAY_COUNT_KEY'],
    );
  });

  it('should remove card list from storage on victory', () => {
    jest.spyOn(storageService, 'remove');

    service.submitRoundAction([]);

    expect(storageService.remove).toHaveBeenCalledWith(
      service['CARD_LIST_KEY'],
    );
  });

  it('should remove needCleanAfterBouc from storage on victory', () => {
    jest.spyOn(storageService, 'remove');

    service.submitRoundAction([]);

    expect(storageService.remove).toHaveBeenCalledWith(
      service['NEED_CLEAN_AFTER_BOUC_KEY'],
    );
  });
});

describe('GameService', () => {
  let service: GameService;
  let router: Router;
  let roundHandlersService: RoundHandlersService;
  let victoryHandlersService: VictoryHandlersService;
  let roundOrchestrationService: RoundOrchestrationService;
  let deathService: DeathService;
  let statusesService: StatusesService;
  let roundHandler: RoundHandler;
  let storageService: StorageService;

  let mockPlayers: Player[];
  let mockCardList: CardList;

  beforeEach(() => {
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
    router = MockService(Router);
    roundHandlersService = MockService(RoundHandlersService);
    victoryHandlersService = MockService(VictoryHandlersService);
    roundOrchestrationService = MockService(RoundOrchestrationService);
    deathService = MockService(DeathService);
    statusesService = MockService(StatusesService);
    roundHandler = MockService(MockRoundHandler);
    storageService = MockService(StorageService);

    jest.spyOn(storageService, 'get').mockReturnValue(of(null));

    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockReturnValue(roundHandler);

    jest
      .spyOn(statusesService, 'handleWolfTarget')
      .mockImplementation((players) => players);
    jest
      .spyOn(statusesService, 'handleInfectedAncien')
      .mockImplementation((players) => players);

    service = new GameService(
      router,
      roundHandlersService,
      victoryHandlersService,
      roundOrchestrationService,
      deathService,
      statusesService,
      storageService,
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return players', waitForAsync(() => {
    service['players'].set(mockPlayers);

    expect(service.currentPlayers()).toEqual(mockPlayers);
  }));

  it('should return round', waitForAsync(() => {
    const mockRound: Round = {
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    service['round'].set(mockRound);

    expect(service.currentRound()).toEqual(mockRound);
  }));

  it('should return day count', waitForAsync(() => {
    service['dayCount'].set(2);

    expect(service.currentDayCount()).toEqual(2);
  }));

  it('should init round handlers on game creation', () => {
    jest.spyOn(roundHandlersService, 'initHandlers');

    service.createGame(mockPlayers, mockCardList);

    expect(roundHandlersService.initHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.VILLAGEOIS,
      PlayerRoleEnum.LOUP_GAROU,
      PlayerRoleEnum.SORCIERE,
    ]);
  });

  it('should init victory handlers on game creation', () => {
    jest.spyOn(victoryHandlersService, 'initHandlers');

    service.createGame(mockPlayers, mockCardList);

    expect(victoryHandlersService.initHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.VILLAGEOIS,
      PlayerRoleEnum.LOUP_GAROU,
      PlayerRoleEnum.SORCIERE,
    ]);
  });

  it('should set players on game creation', () => {
    service.createGame(mockPlayers, mockCardList);

    expect(service['players']()).toEqual(mockPlayers);
  });

  it('should set day count to 1 on game creation if no Ange', () => {
    service['dayCount'].set(2);

    service.createGame(mockPlayers, mockCardList);

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

    service.createGame(newMockPlayers, mockCardList);

    expect(service['dayCount']()).toEqual(0);
  });

  it('should navigate to /game on game creation', () => {
    jest.spyOn(router, 'navigate');

    service.createGame(mockPlayers, mockCardList);

    expect(router.navigate).toHaveBeenCalledWith(['game']);
  });

  it('should set first round on game creation using RoundOrchestrationService', () => {
    const mockRound: Round = {
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    jest.spyOn(roundHandler, 'getRoundConfig').mockReturnValue(mockRound);
    jest
      .spyOn(roundOrchestrationService, 'getFirstRound')
      .mockReturnValue(RoundEnum.LOUP_GAROU);

    service.createGame(mockPlayers, mockCardList);

    expect(service['round']()).toEqual(mockRound);
  });

  it('should set first round on game creation as VILLAGEOIS if Ange', () => {
    const mockRound: Round = {
      role: RoundEnum.VILLAGEOIS,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    jest.spyOn(roundHandler, 'getRoundConfig').mockReturnValue(mockRound);
    jest
      .spyOn(roundOrchestrationService, 'getFirstRound')
      .mockReturnValue(RoundEnum.LOUP_GAROU);
    jest.spyOn(roundOrchestrationService, 'setVillageoisFirst');

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

    service.createGame(newMockPlayers, mockCardList);

    expect(roundOrchestrationService.setVillageoisFirst).toHaveBeenCalled();
  });

  it('should add HEALTH_POTION status to player with role SORCIERE on game creation', () => {
    service.createGame(mockPlayers, mockCardList);

    expect(
      service['players']()[2].statuses.has(PlayerStatusEnum.HEALTH_POTION),
    ).toEqual(true);
  });

  it('should add DEATH_POTION status to player with role SORCIERE on game creation', () => {
    service.createGame(mockPlayers, mockCardList);

    expect(
      service['players']()[2].statuses.has(PlayerStatusEnum.DEATH_POTION),
    ).toEqual(true);
  });

  it('should update players with handler action on submit', () => {
    jest.spyOn(roundHandler, 'handleAction').mockReturnValue(of(mockPlayers));
    const mockRound: Round = {
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    service['round'].set(mockRound);

    expect(service['players']()).toEqual([]);

    service.submitRoundAction([]);

    expect(service['players']()).toEqual(mockPlayers);
  });

  it('should set next round on submit', () => {
    jest.spyOn(roundHandler, 'handleAction').mockReturnValue(of(mockPlayers));
    const mockRound: Round = {
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockNextRound: Round = {
      role: RoundEnum.SORCIERE_HEALTH,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    service['round'].set(mockRound);
    jest.spyOn(roundHandler, 'getRoundConfig').mockReturnValue(mockNextRound);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.SORCIERE_HEALTH);

    expect(service['round']()).toEqual(mockRound);

    service.submitRoundAction([]);

    expect(service['round']()).toEqual(mockNextRound);
  });

  it('should skip LOUP_BLANC next round on odd day', () => {
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');

    jest.spyOn(roundHandler, 'handleAction').mockReturnValue(of(mockPlayers));
    const mockRound: Round = {
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockSorciereHealthRound: Round = {
      role: RoundEnum.SORCIERE_HEALTH,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockLoupBlancRound: Round = {
      role: RoundEnum.LOUP_BLANC,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockSorciereHealthHandler = new MockRoundHandler();
    const mockLoupBlancHandler = new MockRoundHandler();
    mockSorciereHealthHandler.getRoundConfig = () => mockSorciereHealthRound;
    mockLoupBlancHandler.getRoundConfig = () => mockLoupBlancRound;

    when(getHandlerSpy)
      .calledWith(RoundEnum.SORCIERE_HEALTH)
      .mockReturnValue(mockSorciereHealthHandler);
    when(getHandlerSpy)
      .calledWith(RoundEnum.LOUP_BLANC)
      .mockReturnValue(mockLoupBlancHandler);

    service['round'].set(mockRound);
    service['dayCount'].set(1);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValueOnce(RoundEnum.LOUP_BLANC);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValueOnce(RoundEnum.SORCIERE_HEALTH);

    expect(service['round']()).toEqual(mockRound);

    service.submitRoundAction([]);

    expect(service['round']()).toEqual(mockSorciereHealthRound);
  });

  it('should not skip LOUP_BLANC next round on even day', () => {
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');

    jest.spyOn(roundHandler, 'handleAction').mockReturnValue(of(mockPlayers));
    const mockRound: Round = {
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockSorciereHealthRound: Round = {
      role: RoundEnum.SORCIERE_HEALTH,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockLoupBlancRound: Round = {
      role: RoundEnum.LOUP_BLANC,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    const mockSorciereHealthHandler = new MockRoundHandler();
    const mockLoupBlancHandler = new MockRoundHandler();
    mockSorciereHealthHandler.getRoundConfig = () => mockSorciereHealthRound;
    mockLoupBlancHandler.getRoundConfig = () => mockLoupBlancRound;

    when(getHandlerSpy)
      .calledWith(RoundEnum.SORCIERE_HEALTH)
      .mockReturnValue(mockSorciereHealthHandler);
    when(getHandlerSpy)
      .calledWith(RoundEnum.LOUP_BLANC)
      .mockReturnValue(mockLoupBlancHandler);

    service['round'].set(mockRound);
    service['dayCount'].set(2);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValueOnce(RoundEnum.LOUP_BLANC);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValueOnce(RoundEnum.SORCIERE_HEALTH);

    expect(service['round']()).toEqual(mockRound);

    service.submitRoundAction([]);

    expect(service['round']()).toEqual(mockLoupBlancRound);
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
  //   service['round'].set(mockCurrentRound);
  //
  //   service.submitRoundAction([]);
  //
  //   expect(service['round']()).toEqual(mockChasseurRound);
  // });

  it('should handle deaths and continue round after submit if next round is during day and no after-death rounds', () => {
    jest.spyOn(roundHandler, 'handleAction').mockReturnValue(of(mockPlayers));
    jest.spyOn(deathService, 'handleNewDeaths').mockReturnValue(mockPlayers);
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    const getNextRoundSpy = jest.spyOn(
      roundOrchestrationService,
      'getNextRound',
    );

    const mockCurrentRound: Round = {
      role: RoundEnum.SORCIERE_KILL,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };

    const mockSorciereKillHandler = new MockRoundHandler();
    mockSorciereKillHandler.isDuringDay = false;
    when(getHandlerSpy)
      .calledWith(RoundEnum.SORCIERE_KILL)
      .mockReturnValue(mockSorciereKillHandler);

    const mockVillageoisHandler = new MockRoundHandler();
    mockVillageoisHandler.isDuringDay = true;
    const mockVillageoisRound: Round = {
      role: RoundEnum.VILLAGEOIS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    mockVillageoisHandler.getRoundConfig = () => mockVillageoisRound;
    when(getHandlerSpy)
      .calledWith(RoundEnum.VILLAGEOIS)
      .mockReturnValue(mockVillageoisHandler);

    getNextRoundSpy
      .mockReturnValueOnce(RoundEnum.VILLAGEOIS)
      .mockReturnValueOnce(RoundEnum.VILLAGEOIS);

    service['round'].set(mockCurrentRound);

    service.submitRoundAction([]);

    expect(service['round']()).toEqual(mockVillageoisRound);
  });

  it('should not check victory during night', () => {
    jest.spyOn(victoryHandlersService, 'getVictory');
    const mockCurrentRoundConfig: Round = {
      role: RoundEnum.LOUP_GAROU,
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
    jest
      .spyOn(mockNextRoundHandler, 'getRoundConfig')
      .mockReturnValue({} as Round);

    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.LOUP_GAROU)
      .mockReturnValue(mockCurrentRoundHandler);
    when(getHandlerSpy)
      .calledWith(RoundEnum.SORCIERE_HEALTH)
      .mockReturnValue(mockNextRoundHandler);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.SORCIERE_HEALTH);

    service['round'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(victoryHandlersService.getVictory).toHaveBeenCalledTimes(0);
  });

  it('should check victory after night', () => {
    jest.spyOn(router, 'navigate');
    const mockCurrentRoundConfig: Round = {
      role: RoundEnum.SORCIERE_KILL,
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
    jest
      .spyOn(mockNextRoundHandler, 'getRoundConfig')
      .mockReturnValue({} as Round);

    jest.spyOn(deathService, 'handleNewDeaths').mockReturnValue([]);
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.SORCIERE_KILL)
      .mockReturnValue(mockCurrentRoundHandler);
    when(getHandlerSpy)
      .calledWith(RoundEnum.VILLAGEOIS)
      .mockReturnValue(mockNextRoundHandler);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.VILLAGEOIS);

    jest
      .spyOn(victoryHandlersService, 'getVictory')
      .mockReturnValue(VictoryEnum.LOUP_GAROU);

    service['round'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(router.navigate).toHaveBeenCalledWith(['victory'], {
      queryParams: { victory: VictoryEnum.LOUP_GAROU },
    });
  });

  it('should check victory during day', () => {
    jest.spyOn(router, 'navigate');
    const mockCurrentRoundConfig: Round = {
      role: RoundEnum.CAPITAINE,
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
    jest
      .spyOn(mockNextRoundHandler, 'getRoundConfig')
      .mockReturnValue({} as Round);

    jest.spyOn(deathService, 'handleNewDeaths').mockReturnValue([]);
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.CAPITAINE)
      .mockReturnValue(mockCurrentRoundHandler);
    when(getHandlerSpy)
      .calledWith(RoundEnum.VILLAGEOIS)
      .mockReturnValue(mockNextRoundHandler);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.VILLAGEOIS);

    jest
      .spyOn(victoryHandlersService, 'getVictory')
      .mockReturnValue(VictoryEnum.LOUP_GAROU);

    service['round'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(router.navigate).toHaveBeenCalledWith(['victory'], {
      queryParams: { victory: VictoryEnum.LOUP_GAROU },
    });
  });

  it('should not check victory if next round is CHASSEUR', () => {
    jest.spyOn(router, 'navigate');
    const mockCurrentRoundConfig: Round = {
      role: RoundEnum.SORCIERE_KILL,
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
    jest
      .spyOn(mockNextRoundHandler, 'getRoundConfig')
      .mockReturnValue({} as Round);

    jest.spyOn(deathService, 'handleNewDeaths').mockReturnValue([]);
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.SORCIERE_KILL)
      .mockReturnValue(mockCurrentRoundHandler);
    when(getHandlerSpy)
      .calledWith(RoundEnum.CHASSEUR)
      .mockReturnValue(mockNextRoundHandler);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.CHASSEUR);

    jest.spyOn(victoryHandlersService, 'getVictory');

    service['round'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(victoryHandlersService.getVictory).toHaveBeenCalledTimes(0);
  });

  it('should announce deaths after night if no victory', () => {
    jest.spyOn(deathService, 'announceDeaths');
    const mockCurrentRoundConfig: Round = {
      role: RoundEnum.SORCIERE_KILL,
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
    jest
      .spyOn(mockNextRoundHandler, 'getRoundConfig')
      .mockReturnValue({} as Round);

    jest.spyOn(deathService, 'handleNewDeaths').mockReturnValue([]);
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.SORCIERE_KILL)
      .mockReturnValue(mockCurrentRoundHandler);
    when(getHandlerSpy)
      .calledWith(RoundEnum.VILLAGEOIS)
      .mockReturnValue(mockNextRoundHandler);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.VILLAGEOIS);

    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    service['round'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(deathService.announceDeaths).toHaveBeenCalled();
  });

  it('should announce deaths during day if no victory', () => {
    jest.spyOn(deathService, 'announceDeaths');
    const mockCurrentRoundConfig: Round = {
      role: RoundEnum.CAPITAINE,
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
    jest
      .spyOn(mockNextRoundHandler, 'getRoundConfig')
      .mockReturnValue({} as Round);

    jest.spyOn(deathService, 'handleNewDeaths').mockReturnValue([]);
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.CAPITAINE)
      .mockReturnValue(mockCurrentRoundHandler);
    when(getHandlerSpy)
      .calledWith(RoundEnum.VILLAGEOIS)
      .mockReturnValue(mockNextRoundHandler);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.VILLAGEOIS);

    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    service['round'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(deathService.announceDeaths).toHaveBeenCalled();
  });

  it('should not announce deaths if next round is CHASSEUR', () => {
    jest.spyOn(deathService, 'announceDeaths');
    const mockCurrentRoundConfig: Round = {
      role: RoundEnum.SORCIERE_KILL,
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
    jest
      .spyOn(mockNextRoundHandler, 'getRoundConfig')
      .mockReturnValue({} as Round);

    jest.spyOn(deathService, 'handleNewDeaths').mockReturnValue([]);
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.SORCIERE_KILL)
      .mockReturnValue(mockCurrentRoundHandler);
    when(getHandlerSpy)
      .calledWith(RoundEnum.CHASSEUR)
      .mockReturnValue(mockNextRoundHandler);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.CHASSEUR);

    jest.spyOn(victoryHandlersService, 'getVictory');

    service['round'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(deathService.announceDeaths).toHaveBeenCalledTimes(0);
  });

  it('should clean statuses after day', () => {
    const mockCurrentRoundConfig: Round = {
      role: RoundEnum.VILLAGEOIS,
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
    jest
      .spyOn(mockNextRoundHandler, 'getRoundConfig')
      .mockReturnValue({} as Round);

    jest.spyOn(statusesService, 'cleanStatusesAfterDay').mockReturnValue([]);
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.VILLAGEOIS)
      .mockReturnValue(mockCurrentRoundHandler);
    when(getHandlerSpy)
      .calledWith(RoundEnum.LOUP_GAROU)
      .mockReturnValue(mockNextRoundHandler);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.LOUP_GAROU);

    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    service['round'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(statusesService.cleanStatusesAfterDay).toHaveBeenCalled();
  });

  it('should increment day count after day', () => {
    const mockCurrentRoundConfig: Round = {
      role: RoundEnum.VILLAGEOIS,
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
    jest
      .spyOn(mockNextRoundHandler, 'getRoundConfig')
      .mockReturnValue({} as Round);

    jest.spyOn(statusesService, 'cleanStatusesAfterDay').mockReturnValue([]);
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.VILLAGEOIS)
      .mockReturnValue(mockCurrentRoundHandler);
    when(getHandlerSpy)
      .calledWith(RoundEnum.LOUP_GAROU)
      .mockReturnValue(mockNextRoundHandler);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.LOUP_GAROU);

    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    service['round'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(service['dayCount']()).toEqual(2);
  });

  it('should save new day count to storage after day', () => {
    const mockCurrentRoundConfig: Round = {
      role: RoundEnum.VILLAGEOIS,
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
    jest
      .spyOn(mockNextRoundHandler, 'getRoundConfig')
      .mockReturnValue({} as Round);

    jest.spyOn(statusesService, 'cleanStatusesAfterDay').mockReturnValue([]);
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.VILLAGEOIS)
      .mockReturnValue(mockCurrentRoundHandler);
    when(getHandlerSpy)
      .calledWith(RoundEnum.LOUP_GAROU)
      .mockReturnValue(mockNextRoundHandler);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.LOUP_GAROU);

    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    jest.spyOn(storageService, 'set');

    service['round'].set(mockCurrentRoundConfig);

    service.submitRoundAction([]);

    expect(storageService.set).toHaveBeenCalledWith(
      service['DAY_COUNT_KEY'],
      2,
    );
  });

  it('should clear and reinit handlers after VOLEUR round', waitForAsync(() => {
    const mockCurrentRoundConfig: Round = {
      role: RoundEnum.VOLEUR,
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
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = false;
    jest
      .spyOn(mockNextRoundHandler, 'getRoundConfig')
      .mockReturnValue({} as Round);
    jest
      .spyOn(mockCurrentRoundHandler, 'handleAction')
      .mockReturnValue(of(mockNewPlayers));

    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.VOLEUR)
      .mockReturnValue(mockCurrentRoundHandler);
    when(getHandlerSpy)
      .calledWith(RoundEnum.VOYANTE)
      .mockReturnValue(mockNextRoundHandler);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.VOYANTE);

    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    jest.spyOn(roundHandlersService, 'initHandlers');
    jest.spyOn(roundHandlersService, 'clearHandlers');
    jest.spyOn(victoryHandlersService, 'initHandlers');
    jest.spyOn(victoryHandlersService, 'clearHandlers');

    service['round'].set(mockCurrentRoundConfig);
    service['cardList'] = mockCardList;

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
    const mockCurrentRoundConfig: Round = {
      role: RoundEnum.PERE_LOUPS,
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
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = false;
    jest
      .spyOn(mockNextRoundHandler, 'getRoundConfig')
      .mockReturnValue({} as Round);
    jest
      .spyOn(mockCurrentRoundHandler, 'handleAction')
      .mockReturnValue(of(mockNewPlayers));

    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.PERE_LOUPS)
      .mockReturnValue(mockCurrentRoundHandler);
    when(getHandlerSpy)
      .calledWith(RoundEnum.VOYANTE)
      .mockReturnValue(mockNextRoundHandler);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.VOYANTE);

    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    jest.spyOn(roundHandlersService, 'removeHandlers');
    jest.spyOn(victoryHandlersService, 'removeHandler');

    service['round'].set(mockCurrentRoundConfig);
    service['cardList'] = {
      ...mockCardList,
      selectedRoles: new Set<PlayerRoleEnum>([PlayerRoleEnum.JOUEUR_FLUTE]),
    };

    service.submitRoundAction([]);

    expect(roundHandlersService.removeHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.JOUEUR_FLUTE,
    ]);
    expect(victoryHandlersService.removeHandler).toHaveBeenCalledWith(
      VictoryEnum.JOUEUR_FLUTE,
    );
  }));

  it('should not remove JOUEUR_FLUTE handlers if JOUEUR_FLUTE has not become LOUP_GAROU after PERE_LOUPS round', waitForAsync(() => {
    const mockCurrentRoundConfig: Round = {
      role: RoundEnum.PERE_LOUPS,
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
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = false;
    jest
      .spyOn(mockNextRoundHandler, 'getRoundConfig')
      .mockReturnValue({} as Round);
    jest
      .spyOn(mockCurrentRoundHandler, 'handleAction')
      .mockReturnValue(of(mockNewPlayers));

    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.PERE_LOUPS)
      .mockReturnValue(mockCurrentRoundHandler);
    when(getHandlerSpy)
      .calledWith(RoundEnum.VOYANTE)
      .mockReturnValue(mockNextRoundHandler);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.VOYANTE);

    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    jest.spyOn(roundHandlersService, 'removeHandlers');
    jest.spyOn(victoryHandlersService, 'removeHandler');

    service['round'].set(mockCurrentRoundConfig);
    service['cardList'] = {
      ...mockCardList,
      selectedRoles: new Set<PlayerRoleEnum>([PlayerRoleEnum.JOUEUR_FLUTE]),
    };

    service.submitRoundAction([]);

    expect(roundHandlersService.removeHandlers).toHaveBeenCalledTimes(0);
    expect(victoryHandlersService.removeHandler).toHaveBeenCalledTimes(0);
  }));

  it('should init default round handlers on game creation', () => {
    jest.spyOn(roundHandlersService, 'initDefaultHandlers');

    service.createGame(mockPlayers, mockCardList);

    expect(roundHandlersService.initDefaultHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.VOLEUR,
    ]);
  });

  it('should store card list on game creation', () => {
    jest.spyOn(storageService, 'set');

    service.createGame(mockPlayers, mockCardList);

    const expectedStoredCardList: StoredCardList = {
      ...mockCardList,
      selectedRoles: Array.from(mockCardList.selectedRoles),
    };

    expect(storageService.set).toHaveBeenCalledWith(
      service['CARD_LIST_KEY'],
      expectedStoredCardList,
    );
  });

  it('should return game in progress if current round', () => {
    service['round'].set({
      role: RoundEnum.VILLAGEOIS,
      selectablePlayers: [],
      maxSelectable: 0,
      minSelectable: 0,
      type: RoundTypeEnum.DEFAULT,
      isDuringDay: true,
    });

    expect(service.isGameInProgress()).toBe(true);
  });

  it('should return game not in progress if no current round', () => {
    service['round'].set(undefined);

    expect(service.isGameInProgress()).toBe(false);
  });

  it('should set needCleanAfterBouc to true after BOUC round', waitForAsync(() => {
    const mockCurrentRoundConfig: Round = {
      role: RoundEnum.BOUC,
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
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = false;
    jest
      .spyOn(mockNextRoundHandler, 'getRoundConfig')
      .mockReturnValue({} as Round);
    jest
      .spyOn(mockCurrentRoundHandler, 'handleAction')
      .mockReturnValue(of(mockNewPlayers));

    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.BOUC)
      .mockReturnValue(mockCurrentRoundHandler);
    when(getHandlerSpy)
      .calledWith(RoundEnum.LOUP_GAROU)
      .mockReturnValue(mockNextRoundHandler);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.LOUP_GAROU);

    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    service['round'].set(mockCurrentRoundConfig);
    service['cardList'] = mockCardList;

    service.submitRoundAction([]);

    expect(service['needCleanAfterBouc']).toEqual(true);
  }));

  it('should store needCleanAfterBouc to true after BOUC round', waitForAsync(() => {
    const mockCurrentRoundConfig: Round = {
      role: RoundEnum.BOUC,
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
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = false;
    jest
      .spyOn(mockNextRoundHandler, 'getRoundConfig')
      .mockReturnValue({} as Round);
    jest
      .spyOn(mockCurrentRoundHandler, 'handleAction')
      .mockReturnValue(of(mockNewPlayers));

    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.BOUC)
      .mockReturnValue(mockCurrentRoundHandler);
    when(getHandlerSpy)
      .calledWith(RoundEnum.LOUP_GAROU)
      .mockReturnValue(mockNextRoundHandler);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.LOUP_GAROU);

    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    service['round'].set(mockCurrentRoundConfig);
    service['cardList'] = mockCardList;

    jest.spyOn(storageService, 'set');

    service.submitRoundAction([]);

    expect(storageService.set).toHaveBeenCalledWith(
      service['NEED_CLEAN_AFTER_BOUC_KEY'],
      true,
    );
  }));

  it('should clean no vote after VILLAGEOIS round if need clean', waitForAsync(() => {
    const mockCurrentRoundConfig: Round = {
      role: RoundEnum.VILLAGEOIS,
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
    const mockNextRoundHandler = new MockRoundHandler();
    mockNextRoundHandler.isDuringDay = false;
    jest
      .spyOn(mockNextRoundHandler, 'getRoundConfig')
      .mockReturnValue({} as Round);
    jest
      .spyOn(mockCurrentRoundHandler, 'handleAction')
      .mockReturnValue(of(mockNewPlayers));

    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    when(getHandlerSpy)
      .calledWith(RoundEnum.VILLAGEOIS)
      .mockReturnValue(mockCurrentRoundHandler);
    when(getHandlerSpy)
      .calledWith(RoundEnum.LOUP_GAROU)
      .mockReturnValue(mockNextRoundHandler);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.LOUP_GAROU);

    jest.spyOn(victoryHandlersService, 'getVictory').mockReturnValue(undefined);

    service['round'].set(mockCurrentRoundConfig);
    service['cardList'] = mockCardList;
    service['needCleanAfterBouc'] = true;

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
    jest.spyOn(storageService, 'set');
    jest
      .spyOn(deathService, 'handleNewDeaths')
      .mockImplementation((players) => players);
    jest
      .spyOn(statusesService, 'cleanStatusesAfterDay')
      .mockImplementation((players) => players);

    service.submitRoundAction([]);

    expect(service['players']()).toEqual(mockNewPlayersAfterClean);
    expect(service['needCleanAfterBouc']).toEqual(false);
    expect(storageService.set).toHaveBeenCalledWith(
      service['NEED_CLEAN_AFTER_BOUC_KEY'],
      false,
    );
  }));
});
