import { waitForAsync } from '@angular/core/testing';
import { MockService } from 'ng-mocks';
import { PlayerDisplayModeEnum } from '../../core/enums/player-display-mode.enum';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { Player } from '../../core/models/player.model';
import { GameService } from '../../core/services/game/game.service';

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

    gameService = MockService(GameService);
    component = new NewGamePage(gameService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init on CREATE mode', () => {
    expect(component['playerDisplayMode']).toEqual(
      PlayerDisplayModeEnum.CREATE
    );
  });

  it('should switch to EDIT_ROLE mode', () => {
    component['validatePlayers']();

    expect(component['playerDisplayMode']).toEqual(
      PlayerDisplayModeEnum.EDIT_ROLE
    );
  });

  it('should switch back to CREATE mode', () => {
    component['playerDisplayMode'] = PlayerDisplayModeEnum.EDIT_ROLE;

    component['backToCreation']();

    expect(component['playerDisplayMode']).toEqual(
      PlayerDisplayModeEnum.CREATE
    );
  });

  it('should create game', () => {
    jest.spyOn(gameService, 'createGame');
    component['players'] = mockPlayers;

    component['createGame']();
    expect(gameService.createGame).toBeCalledWith(mockPlayers);
  });

  it('should add player', () => {
    expect(component['players']).toEqual([]);

    component['addPlayer']('player0');

    expect(component['players']).toEqual([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.NOT_SELECTED,
        statuses: new Set(),
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
        statuses: new Set(),
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
        statuses: new Set(),
        isDead: false,
      },
    ]);
  });

  it('should init with VILLAGEOIS in available roles', () => {
    expect(
      component['availableRoles'].includes(PlayerRoleEnum.VILLAGEOIS)
    ).toEqual(true);
  });

  it('should init with LOUP_GAROU in available roles', () => {
    expect(
      component['availableRoles'].includes(PlayerRoleEnum.LOUP_GAROU)
    ).toEqual(true);
  });

  it('should init with CHASSEUR in available roles', () => {
    expect(
      component['availableRoles'].includes(PlayerRoleEnum.CHASSEUR)
    ).toEqual(true);
  });

  it('should init with CUPIDON in available roles', () => {
    expect(
      component['availableRoles'].includes(PlayerRoleEnum.CUPIDON)
    ).toEqual(true);
  });

  it('should init with PETITE_FILLE in available roles', () => {
    expect(
      component['availableRoles'].includes(PlayerRoleEnum.PETITE_FILLE)
    ).toEqual(true);
  });

  it('should init with SORCIERE in available roles', () => {
    expect(
      component['availableRoles'].includes(PlayerRoleEnum.SORCIERE)
    ).toEqual(true);
  });

  // TODO Handle VOLEUR role
  // it('should init with VOLEUR in available roles', () => {
  //   expect(component['availableRoles'].includes(PlayerRoleEnum.VOLEUR)).toEqual(
  //     true
  //   );
  // });

  it('should init with VOYANTE in available roles', () => {
    expect(
      component['availableRoles'].includes(PlayerRoleEnum.VOYANTE)
    ).toEqual(true);
  });

  it('should add unique role to available roles on player remove', () => {
    component['availableRoles'] = [];
    component['players'] = mockPlayers;

    component['removePlayer'](1);

    expect(
      component['availableRoles'].includes(PlayerRoleEnum.SORCIERE)
    ).toEqual(true);
  });

  it('should change role', () => {
    component['players'] = mockPlayers;

    component['changeRole'](0, PlayerRoleEnum.SORCIERE);

    expect(component['players'][0].role).toEqual(PlayerRoleEnum.SORCIERE);
  });

  it('should remove unique role from available roles on change', () => {
    component['players'] = mockPlayers;

    component['changeRole'](0, PlayerRoleEnum.SORCIERE);

    expect(
      component['availableRoles'].includes(PlayerRoleEnum.SORCIERE)
    ).toEqual(false);
  });

  it('should add unique role to available roles on change', () => {
    component['players'] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SORCIERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
    component['availableRoles'] = [PlayerRoleEnum.VILLAGEOIS];

    component['changeRole'](0, PlayerRoleEnum.VILLAGEOIS);

    expect(
      component['availableRoles'].includes(PlayerRoleEnum.SORCIERE)
    ).toEqual(true);
  });

  it('should not be able to create if there is NOT_SELECTED role', () => {
    component['players'] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
    ];

    expect(component['cannotCreate']).toEqual(true);
  });

  it('should be able to create if there is no NOT_SELECTED role', () => {
    component['players'] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    expect(component['cannotCreate']).toEqual(false);
  });
});