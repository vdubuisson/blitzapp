import { waitForAsync } from '@angular/core/testing';
import { MockService } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { Player } from '../../core/models/player.model';
import { NewGameService } from '../../core/services/new-game/new-game.service';

import { NewGameRolesPage } from './new-game-roles.page';
import { RoleChoiceService } from '../../core/services/role-choice/role-choice.service';

describe('NewGamePage', () => {
  let component: NewGameRolesPage;
  let newGameService: NewGameService;
  let roleChoiceService: RoleChoiceService;

  let mockPlayers$: BehaviorSubject<Player[]>;
  let mockRoles$: BehaviorSubject<Set<PlayerRoleEnum>>;

  beforeEach(waitForAsync(() => {
    mockPlayers$ = new BehaviorSubject<Player[]>([]);
    mockRoles$ = new BehaviorSubject<Set<PlayerRoleEnum>>(new Set());
    newGameService = MockService(NewGameService);
    roleChoiceService = MockService(RoleChoiceService);

    jest.spyOn(newGameService, 'getPlayers').mockReturnValue(mockPlayers$);
    jest
      .spyOn(roleChoiceService, 'getCurrentChosenRoles')
      .mockReturnValue(mockRoles$);

    component = new NewGameRolesPage(newGameService, roleChoiceService);
  }));

  it('should get roles from RoleChoiceService', waitForAsync(() => {
    const roles = new Set([
      PlayerRoleEnum.VILLAGEOIS,
      PlayerRoleEnum.LOUP_GAROU,
    ]);
    mockRoles$.next(roles);

    component['players$'].subscribe(() => {
      expect(component['rolesToPlay']).toEqual(roles);
    });
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

  it('should not be able to create if there is only 1 SOEUR', waitForAsync(() => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.next(mockPlayers);

    component['players$'].subscribe(() =>
      expect(component['cannotCreate']).toEqual(true)
    );
  }));

  it('should not be able to create if there is more than 2 SOEUR', waitForAsync(() => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.SOEUR,
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
        role: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.next(mockPlayers);

    component['players$'].subscribe(() =>
      expect(component['cannotCreate']).toEqual(false)
    );
  }));

  it('should be able to create if there is 2 SOEUR', waitForAsync(() => {
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

  it('should not have already used unique role as available', waitForAsync(() => {
    mockRoles$.next(new Set([PlayerRoleEnum.CUPIDON]));
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

  it('should have SOEUR as available if less than 2 SOEUR', waitForAsync(() => {
    mockRoles$.next(new Set([PlayerRoleEnum.SOEUR]));
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.next(mockPlayers);

    component['players$'].subscribe(() =>
      expect(
        component['availableRoles'].includes(PlayerRoleEnum.SOEUR)
      ).toEqual(true)
    );
  }));

  it('should not have SOEUR as available if 2 SOEUR', waitForAsync(() => {
    mockRoles$.next(new Set([PlayerRoleEnum.SOEUR]));
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.next(mockPlayers);

    component['players$'].subscribe(() =>
      expect(
        component['availableRoles'].includes(PlayerRoleEnum.SOEUR)
      ).toEqual(false)
    );
  }));
});
