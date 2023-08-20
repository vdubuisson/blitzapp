import { waitForAsync } from '@angular/core/testing';
import { MockService } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { Player } from '../../core/models/player.model';
import { NewGameService } from '../../core/services/new-game/new-game.service';

import { NewGamePage } from './new-game.page';
import { RoleChoiceService } from '../../core/services/role-choice/role-choice.service';
import { RoleList } from '../../core/models/role-list.model';

describe('NewGamePage', () => {
  let component: NewGamePage;
  let newGameService: NewGameService;
  let roleChoiceService: RoleChoiceService;
  let mockPlayers$: BehaviorSubject<Player[]>;

  beforeEach(waitForAsync(() => {
    mockPlayers$ = new BehaviorSubject<Player[]>([]);
    newGameService = MockService(NewGameService);
    roleChoiceService = MockService(RoleChoiceService);
    jest.spyOn(newGameService, 'getPlayers').mockReturnValue(mockPlayers$);
    jest
      .spyOn(roleChoiceService, 'getCurrentChosenRoles')
      .mockReturnValue(of({ playersNumber: 3 } as RoleList));

    component = new NewGamePage(newGameService, roleChoiceService);
  }));

  it('should get players from NewGameService', waitForAsync(() => {
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
    mockPlayers$.next(mockPlayers);

    component['players$'].subscribe((players) =>
      expect(players).toEqual(mockPlayers)
    );
  }));

  it('should get playersNumber from RoleChoiceService', waitForAsync(() => {
    mockPlayers$.next([]);

    component['players$'].subscribe(() =>
      expect(component['playersCount']).toEqual(3)
    );
  }));

  it('should not be able to validate if less than playersCount', waitForAsync(() => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.next(mockPlayers);

    component['players$'].subscribe(() =>
      expect(component['canValidate']).toEqual(false)
    );
  }));

  it('should be able to validate if equals playersCount', waitForAsync(() => {
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
        role: PlayerRoleEnum.VILLAGEOIS,
card: PlayerRoleEnum.VILLAGEOIS,
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
