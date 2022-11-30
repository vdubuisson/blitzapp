import { waitForAsync } from '@angular/core/testing';
import { GameService } from '../services/game/game.service';
import { MockService } from 'ng-mocks';

import { GamePage } from './game.page';
import { PlayerRoleEnum } from '../enums/player-role.enum';
import { Player } from '../models/player.model';
import { BehaviorSubject } from 'rxjs';

describe('GamePage', () => {
  let component: GamePage;
  let gameService: GameService;

  let mockPlayers$: BehaviorSubject<Player[]>;

  beforeEach(waitForAsync(() => {
    const mockPlayers: Player[] = [
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
    ];
    mockPlayers$ = new BehaviorSubject(mockPlayers);
    gameService = MockService(GameService);
    jest.spyOn(gameService, 'getPlayers').mockReturnValue(mockPlayers$);
    component = new GamePage(gameService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get players from GameService', () => {
    expect(component['players$']).toEqual(mockPlayers$);
  });
});
