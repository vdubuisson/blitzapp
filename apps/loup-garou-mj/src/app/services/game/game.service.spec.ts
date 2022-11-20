import { Router } from '@angular/router';
import { MockService } from 'ng-mocks';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { Player } from '../../models/player.model';

import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;
  let router: Router;
  let mockPlayers: Player[];

  beforeEach(() => {
    mockPlayers = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: [],
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: [],
        isDead: false,
      },
    ];
    router = MockService(Router);
    service = new GameService(router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return players', () => {
    service['players'] = mockPlayers;

    expect(service.getPlayers()).toEqual(mockPlayers);
  });

  it('should create a new game', () => {
    jest.spyOn(router, 'navigate');

    service.createGame(mockPlayers);

    expect(service['players']).toEqual(mockPlayers);
    expect(router.navigate).toBeCalledWith(['game']);
  });
});
