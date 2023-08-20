import { waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockService } from 'ng-mocks';
import { of } from 'rxjs';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { Player } from '../../models/player.model';
import { GameService } from '../game/game.service';

import { NewGameService } from './new-game.service';

describe('NewGameService', () => {
  let service: NewGameService;
  let gameService: GameService;
  let router: Router;

  beforeEach(() => {
    gameService = MockService(GameService);
    router = MockService(Router);
    service = new NewGameService(gameService, router);
  });

  it('should return players', waitForAsync(() => {
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
        role: PlayerRoleEnum.LOUP_GAROU,
card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    service['players'].next(mockPlayers);

    service.getPlayers().subscribe((players) => {
      expect(players).toEqual(mockPlayers);
    });
  }));

  it('should add player', () => {
    service['players'].next([]);

    service.addPlayer('player0');

    expect(service['players'].value).toEqual([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.NOT_SELECTED,
card: PlayerRoleEnum.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
    ]);
  });

  it('should remove player', () => {
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
        role: PlayerRoleEnum.LOUP_GAROU,
card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    service['players'].next(mockPlayers);

    service.removePlayer(1);

    expect(service['players'].value).toEqual([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ]);
  });

  it('should reorder players', () => {
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
        role: PlayerRoleEnum.LOUP_GAROU,
card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.LOUP_GAROU,
card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 3,
        name: 'player3',
        role: PlayerRoleEnum.LOUP_GAROU,
card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    service['players'].next(mockPlayers);

    service.reorderPlayers(0, 2);

    expect(service['players'].value).toEqual([
      {
        id: 0,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player2',
        role: PlayerRoleEnum.LOUP_GAROU,
card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 3,
        name: 'player3',
        role: PlayerRoleEnum.LOUP_GAROU,
card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ]);
  });

  it('should get previous players on replay', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set([PlayerStatusEnum.CAPTAIN]),
        isDead: false,
      },
    ];

    jest.spyOn(gameService, 'getPlayers').mockReturnValue(of(mockPlayers));

    service.replay();

    expect(service['players'].value).toEqual([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.NOT_SELECTED,
card: PlayerRoleEnum.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.NOT_SELECTED,
card: PlayerRoleEnum.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
    ]);
  });

  it('should navigate to /roles-choice on replay', () => {
    jest.spyOn(gameService, 'getPlayers').mockReturnValue(of([]));
    jest.spyOn(router, 'navigate');

    service.replay();

    expect(router.navigate).toBeCalledWith(['roles-choice']);
  });

  it('should change role', () => {
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
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    service['players'].next(mockPlayers);

    service.changeRole(0, PlayerRoleEnum.SORCIERE);

    expect(service['players'].value).toEqual([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SORCIERE,
        card: PlayerRoleEnum.SORCIERE,
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
    ]);
  });

  it('should call GameService.createGame on create game', () => {
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
        role: PlayerRoleEnum.LOUP_GAROU,
card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    service['players'].next(mockPlayers);

    jest.spyOn(gameService, 'createGame');

    service.createGame();

    expect(gameService.createGame).toBeCalledWith(mockPlayers);
  });

  it('should reset players on create game', () => {
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
        role: PlayerRoleEnum.LOUP_GAROU,
card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    service['players'].next(mockPlayers);

    service.createGame();

    expect(service['players'].value).toEqual([]);
  });
});
