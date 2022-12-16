import { waitForAsync } from '@angular/core/testing';
import { MockService } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { Player } from '../../core/models/player.model';
import { NewGameService } from '../../core/services/new-game/new-game.service';

import { NewGameRolesPage } from './new-game-roles.page';

describe('NewGamePage', () => {
  let component: NewGameRolesPage;
  let newGameService: NewGameService;
  let mockPlayers$: BehaviorSubject<Player[]>;

  beforeEach(waitForAsync(() => {
    mockPlayers$ = new BehaviorSubject<Player[]>([]);
    newGameService = MockService(NewGameService);
    jest.spyOn(newGameService, 'getPlayers').mockReturnValue(mockPlayers$);

    component = new NewGameRolesPage(newGameService);
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

  it('should create game', () => {
    jest.spyOn(newGameService, 'createGame');

    component['createGame']();

    expect(newGameService.createGame).toBeCalled();
  });

  it('should change role', () => {
    jest.spyOn(newGameService, 'changeRole');

    component['changeRole'](0, PlayerRoleEnum.SORCIERE);

    expect(newGameService.changeRole).toBeCalledWith(
      0,
      PlayerRoleEnum.SORCIERE
    );
  });

  it('should not be able to create if there is NOT_SELECTED role', waitForAsync(() => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.next(mockPlayers);

    component['players$'].subscribe(() =>
      expect(component['cannotCreate']).toEqual(true)
    );
  }));

  it('should be able to create if there is no NOT_SELECTED role', waitForAsync(() => {
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
      expect(component['cannotCreate']).toEqual(false)
    );
  }));

  it('should not have NOT_SELECTED role as available', waitForAsync(() => {
    mockPlayers$.next([]);

    component['players$'].subscribe(() =>
      expect(
        component['availableRoles'].includes(PlayerRoleEnum.NOT_SELECTED)
      ).toEqual(false)
    );
  }));

  it('should not have already used unique role as available', waitForAsync(() => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CUPIDON,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.next(mockPlayers);

    component['players$'].subscribe(() =>
      expect(
        component['availableRoles'].includes(PlayerRoleEnum.CUPIDON)
      ).toEqual(false)
    );
  }));
});
