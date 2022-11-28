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
        role: PlayerRoleEnum.SORCIERE,
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
        role: PlayerRoleEnum.SORCIERE,
        statuses: [],
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

  it('should init with VOLEUR in available roles', () => {
    expect(component['availableRoles'].includes(PlayerRoleEnum.VOLEUR)).toEqual(
      true
    );
  });

  it('should init with VOYANTE in available roles', () => {
    expect(
      component['availableRoles'].includes(PlayerRoleEnum.VOYANTE)
    ).toEqual(true);
  });

  it('should remove unique role from available roles on player add', () => {
    component['addPlayer']({ name: 'Name', role: PlayerRoleEnum.SORCIERE });

    expect(
      component['availableRoles'].includes(PlayerRoleEnum.SORCIERE)
    ).toEqual(false);
  });

  it('should not remove non unique role from available roles on player add', () => {
    component['addPlayer']({ name: 'Name', role: PlayerRoleEnum.VILLAGEOIS });

    expect(
      component['availableRoles'].includes(PlayerRoleEnum.VILLAGEOIS)
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
});
