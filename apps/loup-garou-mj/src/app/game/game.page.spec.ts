import { waitForAsync } from '@angular/core/testing';
import { GameService } from '../services/game/game.service';
import { MockService } from 'ng-mocks';

import { GamePage } from './game.page';
import { PlayerRoleEnum } from '../enums/player-role.enum';
import { Player } from '../models/player.model';

describe('GamePage', () => {
  let component: GamePage;
  let gameService: GameService;

  let mockPlayers: Player[];

  beforeEach(waitForAsync(() => {
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

    gameService = MockService(GameService);
    jest.spyOn(gameService, 'getPlayers').mockReturnValue(mockPlayers);
    component = new GamePage(gameService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get players from GameService', () => {
    expect(gameService.getPlayers).toBeCalled();
    expect(component['players']).toEqual(mockPlayers);
  });
});
