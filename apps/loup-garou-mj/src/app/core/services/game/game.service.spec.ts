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
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../../round-handlers/round-handler.interface';
import { DeathService } from '../death/death.service';
import { RoundHandlersService } from '../round-handlers/round-handlers.service';
import { RoundOrchestrationService } from '../round-orchestration/round-orchestration.service';
import { StatusesService } from '../statuses/statuses.service';
import { StorageService } from '../storage/storage.service';
import { VictoryHandlersService } from '../victory-handlers/victory-handlers.service';

import { GameService } from './game.service';
import { CardList } from '../../models/card-list.model';

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

  const mockStoredPlayers: Player[] = [
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
  const mockStoredRound: Round = {
    role: RoundEnum.VILLAGEOIS,
    selectablePlayers: [],
    maxSelectable: 0,
    minSelectable: 0,
    isDuringDay: true,
    type: RoundTypeEnum.DEFAULT,
  };
  const mockStoredDayCount = 3;

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
    expect(service['players']()).toEqual(mockStoredPlayers);
  });

  it('should init round from storage', () => {
    expect(service['round']()).toEqual(mockStoredRound);
  });

  it('should init day count from storage', () => {
    expect(service['dayCount']()).toEqual(mockStoredDayCount);
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

  it('should set first round on game creation using RoundOrchestrationService if no Ange', () => {
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

    expect(service['round']()).toEqual(mockRound);
    expect(roundHandlersService.getHandler).toHaveBeenCalledWith(
      RoundEnum.VILLAGEOIS,
    );
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

  it('should handle deaths and use after-death round after submit if next round is during day', () => {
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
    when(getHandlerSpy)
      .calledWith(RoundEnum.VILLAGEOIS)
      .mockReturnValue(mockVillageoisHandler);

    const mockChasseurHandler = new MockRoundHandler();
    mockChasseurHandler.isDuringDay = true;
    const mockChasseurRound: Round = {
      role: RoundEnum.CHASSEUR,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    mockChasseurHandler.getRoundConfig = () => mockChasseurRound;
    when(getHandlerSpy)
      .calledWith(RoundEnum.CHASSEUR)
      .mockReturnValue(mockChasseurHandler);

    getNextRoundSpy
      .mockReturnValueOnce(RoundEnum.VILLAGEOIS)
      .mockReturnValueOnce(RoundEnum.CHASSEUR);

    service['round'].set(mockCurrentRound);

    service.submitRoundAction([]);

    expect(service['round']()).toEqual(mockChasseurRound);
  });

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

  it('should init default round handlers on game creation', () => {
    jest.spyOn(roundHandlersService, 'initDefaultHandlers');

    service.createGame(mockPlayers, mockCardList);

    expect(roundHandlersService.initDefaultHandlers).toHaveBeenCalledWith([
      PlayerRoleEnum.VOLEUR,
    ]);
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
});
