import { waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { when } from 'jest-when';
import { MockService } from 'ng-mocks';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../../round-handlers/round-handler.interface';
import { DeathService } from '../death/death.service';
import { RoundHandlersService } from '../round-handlers/round-handlers.service';
import { RoundOrchestrationService } from '../round-orchestration/round-orchestration.service';

import { GameService } from './game.service';

class MockRoundHandler implements RoundHandler {
  isOnlyOnce = false;
  isDuringDay = false;

  handleAction(players: Player[], selectedPlayerIds: number[]): Player[] {
    return players;
  }

  getRoundConfig(players: Player[]): Round {
    throw new Error('Method not implemented.');
  }
}

describe('GameService', () => {
  let service: GameService;
  let router: Router;
  let roundHandlersService: RoundHandlersService;
  let roundOrchestrationService: RoundOrchestrationService;
  let deathService: DeathService;
  let roundHandler: RoundHandler;

  let mockPlayers: Player[];

  beforeEach(() => {
    mockPlayers = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.SORCIERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
    router = MockService(Router);
    roundHandlersService = MockService(RoundHandlersService);
    roundOrchestrationService = MockService(RoundOrchestrationService);
    deathService = MockService(DeathService);
    roundHandler = MockService(MockRoundHandler);
    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockReturnValue(roundHandler);

    service = new GameService(
      router,
      roundHandlersService,
      roundOrchestrationService,
      deathService
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return players', waitForAsync(() => {
    service['players'].next(mockPlayers);

    service.getPlayers().subscribe((players) => {
      expect(players).toEqual(mockPlayers);
    });
  }));

  it('should return round', waitForAsync(() => {
    const mockRound: Round = {
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
    };
    service['round'].next(mockRound);

    service.getRound().subscribe((round) => {
      expect(round).toEqual(mockRound);
    });
  }));

  it('should init handlers on game creation', () => {
    jest.spyOn(roundHandlersService, 'initHandlers');

    service.createGame(mockPlayers);

    expect(roundHandlersService.initHandlers).toBeCalledWith([
      PlayerRoleEnum.VILLAGEOIS,
      PlayerRoleEnum.LOUP_GAROU,
      PlayerRoleEnum.SORCIERE,
    ]);
  });

  it('should set players on game creation', () => {
    service.createGame(mockPlayers);

    expect(service['players'].value).toEqual(mockPlayers);
  });

  it('should navigate to /game on game creation', () => {
    jest.spyOn(router, 'navigate');

    service.createGame(mockPlayers);

    expect(router.navigate).toBeCalledWith(['game']);
  });

  it('should set first round on game creation', () => {
    const mockRound: Round = {
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
    };
    jest.spyOn(roundHandler, 'getRoundConfig').mockReturnValue(mockRound);
    jest
      .spyOn(roundOrchestrationService, 'getFirstRound')
      .mockReturnValue(RoundEnum.LOUP_GAROU);

    service.createGame(mockPlayers);

    expect(service['round'].value).toEqual(mockRound);
  });

  it('should add HEALTH_POTION status to player with role SORCIERE on game creation', () => {
    service.createGame(mockPlayers);

    expect(
      service['players'].value[2].statuses.has(PlayerStatusEnum.HEALTH_POTION)
    ).toEqual(true);
  });

  it('should add DEATH_POTION status to player with role SORCIERE on game creation', () => {
    service.createGame(mockPlayers);

    expect(
      service['players'].value[2].statuses.has(PlayerStatusEnum.DEATH_POTION)
    ).toEqual(true);
  });

  it('should update players with handler action on submit', () => {
    jest.spyOn(roundHandler, 'handleAction').mockReturnValue(mockPlayers);
    const mockRound: Round = {
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
    };
    service['round'].next(mockRound);

    expect(service['players'].value).toEqual([]);

    service.submitRoundAction([]);

    expect(service['players'].value).toEqual(mockPlayers);
  });

  it('should set next round on submit', () => {
    jest.spyOn(roundHandler, 'handleAction').mockReturnValue(mockPlayers);
    const mockRound: Round = {
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 2],
      maxSelectable: 1,
      minSelectable: 1,
    };
    const mockNextRound: Round = {
      role: RoundEnum.SORCIERE_HEALTH,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
    };
    service['round'].next(mockRound);
    jest.spyOn(roundHandler, 'getRoundConfig').mockReturnValue(mockNextRound);
    jest
      .spyOn(roundOrchestrationService, 'getNextRound')
      .mockReturnValue(RoundEnum.SORCIERE_HEALTH);

    expect(service['round'].value).toEqual(mockRound);

    service.submitRoundAction([]);

    expect(service['round'].value).toEqual(mockNextRound);
  });

  it('should handle deaths and use after-death round after submit if next round is during day', () => {
    jest.spyOn(roundHandler, 'handleAction').mockReturnValue(mockPlayers);
    jest.spyOn(deathService, 'handleNewDeaths').mockReturnValue(mockPlayers);
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    const getNextRoundSpy = jest.spyOn(
      roundOrchestrationService,
      'getNextRound'
    );

    const mockCurrentRound: Round = {
      role: RoundEnum.SORCIERE_KILL,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
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
    };
    mockChasseurHandler.getRoundConfig = () => mockChasseurRound;
    when(getHandlerSpy)
      .calledWith(RoundEnum.CHASSEUR)
      .mockReturnValue(mockChasseurHandler);

    getNextRoundSpy
      .mockReturnValueOnce(RoundEnum.VILLAGEOIS)
      .mockReturnValueOnce(RoundEnum.CHASSEUR);

    service['round'].next(mockCurrentRound);

    service.submitRoundAction([]);

    expect(service['round'].value).toEqual(mockChasseurRound);
  });

  it('should handle deaths and continue round after submit if next round is during day and no after-death rounds', () => {
    jest.spyOn(roundHandler, 'handleAction').mockReturnValue(mockPlayers);
    jest.spyOn(deathService, 'handleNewDeaths').mockReturnValue(mockPlayers);
    const getHandlerSpy = jest.spyOn(roundHandlersService, 'getHandler');
    const getNextRoundSpy = jest.spyOn(
      roundOrchestrationService,
      'getNextRound'
    );

    const mockCurrentRound: Round = {
      role: RoundEnum.SORCIERE_KILL,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
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
    };
    mockVillageoisHandler.getRoundConfig = () => mockVillageoisRound;
    when(getHandlerSpy)
      .calledWith(RoundEnum.VILLAGEOIS)
      .mockReturnValue(mockVillageoisHandler);

    getNextRoundSpy
      .mockReturnValueOnce(RoundEnum.VILLAGEOIS)
      .mockReturnValueOnce(RoundEnum.VILLAGEOIS);

    service['round'].next(mockCurrentRound);

    service.submitRoundAction([]);

    expect(service['round'].value).toEqual(mockVillageoisRound);
  });
});
