import { waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockService } from 'ng-mocks';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundEnum } from '../../enums/round.enum';
import { RoundHandler } from '../../handlers/round-handler.interface';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandlersService } from '../round-handlers/round-handlers.service';

import { GameService } from './game.service';

class MockRoundHandler implements RoundHandler {
  isOnlyOnce = false;

  handleAction(players: Player[], selectedPlayerIds: number[]): Player[] {
    throw new Error('Method not implemented.');
  }

  getRoundConfig(players: Player[]): Round {
    throw new Error('Method not implemented.');
  }
}

describe('GameService', () => {
  let service: GameService;
  let router: Router;
  let roundHandlersService: RoundHandlersService;
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
    roundHandler = MockService(MockRoundHandler);
    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockReturnValue(roundHandler);

    service = new GameService(router, roundHandlersService);
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

    expect(service['round'].value).toEqual(mockRound);

    service.submitRoundAction([]);

    expect(service['round'].value).toEqual(mockNextRound);
  });
});
