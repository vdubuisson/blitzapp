import { waitForAsync } from '@angular/core/testing';
import { MockService } from 'ng-mocks';
import { PlayerRoleEnum } from '../enums/player-role.enum';
import { Player } from '../models/player.model';
import { GameService } from '../services/game/game.service';

import { NewGamePage } from './new-game.page';

describe('NewGamePage', () => {
  let component: NewGamePage;
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
    component = new NewGamePage(gameService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create game', () => {
    jest.spyOn(gameService, 'createGame');
    component['players'] = mockPlayers;

    component['createGame']();
    expect(gameService.createGame).toBeCalledWith(mockPlayers);
  });

  it('should add player', () => {
    expect(component['players']).toEqual([]);

    component['addPlayer']({
      name: 'player0',
      role: PlayerRoleEnum.VILLAGEOIS,
    });

    expect(component['players']).toEqual([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: [],
        isDead: false,
      },
    ]);
  });

  it('should remove player', () => {
    component['players'] = mockPlayers;

    component['removePlayer'](1);

    expect(component['players']).toEqual([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: [],
        isDead: false,
      },
    ]);
  });

  it('should reindex players on remove', () => {
    component['players'] = mockPlayers;

    component['removePlayer'](0);

    expect(component['players']).toEqual([
      {
        id: 0,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: [],
        isDead: false,
      },
    ]);
  });
});
