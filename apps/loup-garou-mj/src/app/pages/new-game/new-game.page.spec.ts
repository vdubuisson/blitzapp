import { waitForAsync } from '@angular/core/testing';
import { MockService } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { Player } from '../../core/models/player.model';
import { NewGameService } from '../../core/services/new-game/new-game.service';

import { NewGamePage } from './new-game.page';

describe('NewGamePage', () => {
  let component: NewGamePage;
  let newGameService: NewGameService;
  let mockPlayers$: BehaviorSubject<Player[]>;

  beforeEach(waitForAsync(() => {
    mockPlayers$ = new BehaviorSubject<Player[]>([]);
    newGameService = MockService(NewGameService);
    jest.spyOn(newGameService, 'getPlayers').mockReturnValue(mockPlayers$);

    component = new NewGamePage(newGameService);
  }));

  it('should get players from NewGameService', waitForAsync(() => {
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
    mockPlayers$.next(mockPlayers);

    component['players$'].subscribe((players) =>
      expect(players).toEqual(mockPlayers)
    );
  }));

  it('should not be able to validate if less than 2 players', waitForAsync(() => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.next(mockPlayers);

    component['players$'].subscribe(() =>
      expect(component['canValidate']).toEqual(false)
    );
  }));

  it('should be able to validate if at least 2 players', waitForAsync(() => {
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
    mockPlayers$.next(mockPlayers);

    component['players$'].subscribe(() =>
      expect(component['canValidate']).toEqual(true)
    );
  }));

  it('should add player', () => {
    jest.spyOn(newGameService, 'addPlayer');

    component['addPlayer']('player0');

    expect(newGameService.addPlayer).toBeCalledWith('player0');
  });

  it('should remove player', () => {
    jest.spyOn(newGameService, 'removePlayer');

    component['removePlayer'](0);

    expect(newGameService.removePlayer).toBeCalledWith(0);
  });

  it('should reorder player', () => {
    jest.spyOn(newGameService, 'reorderPlayers');
    const mockEvent: unknown = {
      detail: { from: 0, to: 2, complete: jest.fn() },
    };

    component['reorderPlayer'](mockEvent as Event);

    expect(newGameService.reorderPlayers).toBeCalledWith(0, 2);
  });
});
