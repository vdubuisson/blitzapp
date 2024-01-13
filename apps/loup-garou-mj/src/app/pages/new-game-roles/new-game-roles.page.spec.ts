import { waitForAsync } from '@angular/core/testing';
import { MockService } from 'ng-mocks';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { Player } from '../../core/models/player.model';
import { NewGameService } from '../../core/services/new-game/new-game.service';

import { NewGameRolesPage } from './new-game-roles.page';
import { CardChoiceService } from '../../core/services/card-choice/card-choice.service';
import { CardList } from '../../core/models/card-list.model';
import { signal, WritableSignal } from '@angular/core';

describe('NewGameRolesPage', () => {
  let component: NewGameRolesPage;
  let newGameService: NewGameService;
  let cardChoiceService: CardChoiceService;

  let mockPlayers$: WritableSignal<Player[]>;
  let mockCards: WritableSignal<CardList>;

  beforeEach(waitForAsync(() => {
    mockPlayers$ = signal([]);
    mockCards = signal({
      selectedRoles: new Set(),
      villageois: 0,
      loupGarou: 0,
      playersNumber: 0,
    });
    newGameService = {
      ...MockService(NewGameService),
      currentPlayers: mockPlayers$.asReadonly(),
    } as NewGameService;
    cardChoiceService = {
      currentChosenCards: mockCards.asReadonly(),
    } as CardChoiceService;

    component = new NewGameRolesPage(newGameService, cardChoiceService);
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
    mockPlayers$.set(mockPlayers);

    expect(component['players']()).toEqual(mockPlayers);
  }));

  it('should create game', () => {
    jest.spyOn(newGameService, 'createGame');

    component['createGame']();

    expect(newGameService.createGame).toHaveBeenCalled();
  });

  it('should change role', () => {
    jest.spyOn(newGameService, 'changeRole');

    component['changeRole'](0, PlayerRoleEnum.SORCIERE);

    expect(newGameService.changeRole).toHaveBeenCalledWith(
      0,
      PlayerRoleEnum.SORCIERE,
    );
  });

  it('should affect last role to players without role if only 1 available', () => {
    jest.spyOn(newGameService, 'changeRole');

    mockCards.set({
      villageois: 3,
      loupGarou: 0,
      selectedRoles: new Set(),
      playersNumber: 3,
    });

    mockPlayers$.set([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.NOT_SELECTED,
        card: PlayerRoleEnum.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.NOT_SELECTED,
        card: PlayerRoleEnum.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.NOT_SELECTED,
        card: PlayerRoleEnum.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
    ]);

    component['changeRole'](0, PlayerRoleEnum.VILLAGEOIS);

    expect(newGameService.changeRole).toHaveBeenCalledWith(
      1,
      PlayerRoleEnum.VILLAGEOIS,
    );
    expect(newGameService.changeRole).toHaveBeenCalledWith(
      2,
      PlayerRoleEnum.VILLAGEOIS,
    );
  });

  it('should not be able to create if there is NOT_SELECTED role', waitForAsync(() => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.NOT_SELECTED,
        card: PlayerRoleEnum.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['canCreate']()).toEqual(false);
  }));

  it('should not be able to create if there is only 1 SOEUR', waitForAsync(() => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['canCreate']()).toEqual(false);
  }));

  it('should not be able to create if there is more than 2 SOEUR', waitForAsync(() => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['canCreate']()).toEqual(false);
  }));

  it('should be able to create if there is 2 SOEUR', waitForAsync(() => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['canCreate']()).toEqual(true);
  }));

  it('should not be able to create if there is less than 3 FRERE', waitForAsync(() => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['canCreate']()).toEqual(false);
  }));

  it('should not be able to create if there is more than 3 FRERE', waitForAsync(() => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 3,
        name: 'player3',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['canCreate']()).toEqual(false);
  }));

  it('should be able to create if there is 3 FRERE', waitForAsync(() => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['canCreate']()).toEqual(true);
  }));

  it('should be able to create if there is no NOT_SELECTED role', waitForAsync(() => {
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
    mockPlayers$.set(mockPlayers);

    expect(component['canCreate']()).toEqual(true);
  }));

  it('should not have already used unique role as available', waitForAsync(() => {
    mockCards.set({
      selectedRoles: new Set([PlayerRoleEnum.CUPIDON]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CUPIDON,
        card: PlayerRoleEnum.CUPIDON,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      component['availableRoles']().includes(PlayerRoleEnum.CUPIDON),
    ).toEqual(false);
  }));

  it('should have SOEUR as available if less than 2 SOEUR', waitForAsync(() => {
    mockCards.set({
      selectedRoles: new Set([PlayerRoleEnum.SOEUR]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      component['availableRoles']().includes(PlayerRoleEnum.SOEUR),
    ).toEqual(true);
  }));

  it('should not have SOEUR as available if 2 SOEUR', waitForAsync(() => {
    mockCards.set({
      selectedRoles: new Set([PlayerRoleEnum.SOEUR]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      component['availableRoles']().includes(PlayerRoleEnum.SOEUR),
    ).toEqual(false);
  }));

  it('should have FRERE as available if less than 3 FRERE', waitForAsync(() => {
    mockCards.set({
      selectedRoles: new Set([PlayerRoleEnum.FRERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      component['availableRoles']().includes(PlayerRoleEnum.FRERE),
    ).toEqual(true);
  }));

  it('should not have FRERE as available if 3 FRERE', waitForAsync(() => {
    mockCards.set({
      selectedRoles: new Set([PlayerRoleEnum.FRERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      component['availableRoles']().includes(PlayerRoleEnum.FRERE),
    ).toEqual(false);
  }));

  it('should have VILLAGEOIS as available if less than villageois number', waitForAsync(() => {
    mockCards.set({
      selectedRoles: new Set(),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      component['availableRoles']().includes(PlayerRoleEnum.VILLAGEOIS),
    ).toEqual(true);
  }));

  it('should not have VILLAGEOIS as available if equals villageois number', waitForAsync(() => {
    mockCards.set({
      selectedRoles: new Set(),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      component['availableRoles']().includes(PlayerRoleEnum.VILLAGEOIS),
    ).toEqual(false);
  }));

  it('should have LOUP_GAROU as available if less than loupGarou number', waitForAsync(() => {
    mockCards.set({
      selectedRoles: new Set(),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    });
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
    mockPlayers$.set(mockPlayers);

    expect(
      component['availableRoles']().includes(PlayerRoleEnum.LOUP_GAROU),
    ).toEqual(true);
  }));

  it('should not have LOUP_GAROU as available if equals loupGarou number', waitForAsync(() => {
    mockCards.set({
      selectedRoles: new Set(),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      component['availableRoles']().includes(PlayerRoleEnum.LOUP_GAROU),
    ).toEqual(false);
  }));
});
