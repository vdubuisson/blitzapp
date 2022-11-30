import { waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockService } from 'ng-mocks';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { Player } from '../../models/player.model';
import { RoundHandlersService } from '../round-handlers/round-handlers.service';

import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;
  let router: Router;
  let roundHandlersService: RoundHandlersService;
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

  it('should init handlers on game creation', () => {
    jest.spyOn(roundHandlersService, 'initHandlers');

    service.createGame(mockPlayers);

    expect(roundHandlersService.initHandlers).toBeCalled();
  });

  it('should create a new game', () => {
    jest.spyOn(router, 'navigate');

    service.createGame(mockPlayers);

    expect(service['players'].value).toEqual(mockPlayers);
    expect(router.navigate).toBeCalledWith(['game']);
  });

  it('should add HEALTH_POTION status to player with role SORCIERE', () => {
    service.createGame(mockPlayers);

    expect(
      service['players'].value[2].statuses.has(PlayerStatusEnum.HEALTH_POTION)
    ).toEqual(true);
  });

  it('should add DEATH_POTION status to player with role SORCIERE', () => {
    service.createGame(mockPlayers);

    expect(
      service['players'].value[2].statuses.has(PlayerStatusEnum.DEATH_POTION)
    ).toEqual(true);
  });
});
