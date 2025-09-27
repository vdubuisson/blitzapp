import { PlayerRole } from '@/types/player-role';
import { CardList } from '@/shared/types/card-list';
import { PlayerRoleNamePipe } from '@/shared/pipes/player-role-name/player-role-name-pipe';
import { CardChoiceStore } from '@/new-game/card-choice-store/card-choice-store';
import { signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  MockBuilder,
  MockedComponentFixture,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import NewGameRolesPage from './new-game-roles-page';

describe('NewGameRolesPage', () => {
  let page: NewGameRolesPage;
  let fixture: MockedComponentFixture<NewGameRolesPage>;

  let currentChosenCards: WritableSignal<CardList>;

  function createComponent() {
    fixture = MockRender(NewGameRolesPage);
    page = fixture.point.componentInstance;
  }

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(NewGameRolesPage)
      .mock(CardChoiceStore)
      .mock(Router)
      .mock(PlayerRoleNamePipe)
      .mock(ActivatedRoute),
  );

  beforeAll(async () => {
    currentChosenCards = signal({
      selectedRoles: new Set([]),
      villageois: 1,
      loupGarou: 2,
      playersNumber: 3,
    });

    MockInstance(CardChoiceStore, () => ({
      state: currentChosenCards,
    }));

    MockInstance(Router, () => ({
      navigate: jest.fn(),
    }));

    MockInstance(ActivatedRoute, () => ({
      parent: undefined,
    }));

    MockInstance(PlayerRoleNamePipe, () => ({
      transform: () => '',
    }));
  });

  it('should create page', () => {
    createComponent();

    expect(page).toBeTruthy();
  });

  it('should get roles from service', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRole.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['selectedRoles']()).toEqual(mockCards.selectedRoles);
  });

  it('should init form with roles', () => {
    const mockCards = {
      selectedRoles: new Set([]),
      villageois: 1,
      loupGarou: 2,
      playersNumber: 3,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['roleCountForm'].value).toEqual({
      loupGarou: mockCards.loupGarou,
      villageois: mockCards.villageois,
    });
  });

  it('should init playersCount', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRole.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber);
  });

  it('should add role on check', () => {
    createComponent();

    expect(page['selectedRoles']().has(PlayerRole.CHASSEUR)).toBeFalsy();

    page['onRoleCheckChange'](PlayerRole.CHASSEUR);

    expect(page['selectedRoles']().has(PlayerRole.CHASSEUR)).toBeTruthy();
  });

  it('should increment playersCount by 1 on simple role check', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRole.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber);

    page['onRoleCheckChange'](PlayerRole.CHASSEUR);

    expect(page['playersCount']()).toEqual(mockCards.playersNumber + 1);
  });

  it('should increment playersCount by 2 on SOEUR role check', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRole.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber);

    page['onRoleCheckChange'](PlayerRole.SOEUR);

    expect(page['playersCount']()).toEqual(mockCards.playersNumber + 2);
  });

  it('should increment playersCount by 3 on FRERE role check', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRole.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber);

    page['onRoleCheckChange'](PlayerRole.FRERE);

    expect(page['playersCount']()).toEqual(mockCards.playersNumber + 3);
  });

  it('should delete role on uncheck', () => {
    createComponent();

    page['rolesSelection'].setSelection(PlayerRole.CHASSEUR);

    expect(page['selectedRoles']().has(PlayerRole.CHASSEUR)).toBeTruthy();

    page['onRoleCheckChange'](PlayerRole.CHASSEUR);

    expect(page['selectedRoles']().has(PlayerRole.CHASSEUR)).toBeFalsy();
  });

  it('should decrement playersCount by 1 on simple role uncheck', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRole.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber);

    page['onRoleCheckChange'](PlayerRole.SORCIERE);

    expect(page['playersCount']()).toEqual(mockCards.playersNumber - 1);
  });

  it('should decrement playersCount by 2 on SOEUR role uncheck', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRole.SOEUR]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 4,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber);

    page['onRoleCheckChange'](PlayerRole.SOEUR);

    expect(page['playersCount']()).toEqual(mockCards.playersNumber - 2);
  });

  it('should decrement playersCount by 3 on FRERE role uncheck', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRole.FRERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 5,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber);

    page['onRoleCheckChange'](PlayerRole.FRERE);

    expect(page['playersCount']()).toEqual(mockCards.playersNumber - 3);
  });

  it('should clear selected roles on deselect', () => {
    createComponent();

    page['rolesSelection'].setSelection(PlayerRole.CHASSEUR);

    expect(page['selectedRoles']().size).toEqual(1);

    page['deselectAll']();

    expect(page['selectedRoles']().size).toEqual(0);
  });

  it('should reset form on deselect', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRole.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['roleCountForm'].value).not.toEqual({
      villageois: 0,
      loupGarou: 0,
    });

    page['deselectAll']();

    expect(page['roleCountForm'].value).toEqual({
      villageois: 0,
      loupGarou: 0,
    });
  });

  it('should reset playersCount on deselect', async () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRole.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['playersCount']()).not.toEqual(0);

    page['deselectAll']();

    await fixture.whenStable();

    expect(page['playersCount']()).toEqual(0);
  });

  it('should set roles on validate', () => {
    const mockCards = {
      selectedRoles: new Set([]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    const selectedRoles = new Set([PlayerRole.CHASSEUR, PlayerRole.CUPIDON]);

    page['rolesSelection'].setSelection(...selectedRoles);

    const expectedCardList: CardList = {
      selectedRoles,
      villageois: 1,
      loupGarou: 1,
      playersNumber: 4,
    };

    page['validateRoles']();

    const cardChoiceStore = ngMocks.get(CardChoiceStore);

    expect(cardChoiceStore.state()).toEqual(expectedCardList);
  });

  it('should navigate to /players on validate', () => {
    createComponent();

    page['validateRoles']();

    const router = ngMocks.get(Router);

    expect(router.navigate).toHaveBeenCalledWith(['players'], {
      relativeTo: undefined,
    });
  });

  it('should increment playersCount on villageois form increase', async () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRole.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber);

    page['roleCountForm'].get('villageois')?.setValue(mockCards.villageois + 2);

    await fixture.whenStable();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber + 2);
  });

  it('should increment playersCount on loupGarou form increase', async () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRole.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber);

    page['roleCountForm'].get('loupGarou')?.setValue(mockCards.loupGarou + 2);

    await fixture.whenStable();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber + 2);
  });

  it('should decrement playersCount on villageois form decrease', async () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRole.SORCIERE]),
      villageois: 3,
      loupGarou: 1,
      playersNumber: 5,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber);

    page['roleCountForm'].get('villageois')?.setValue(mockCards.villageois - 2);

    await fixture.whenStable();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber - 2);
  });

  it('should decrement playersCount on loupGarou form decrease', async () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRole.SORCIERE]),
      villageois: 1,
      loupGarou: 3,
      playersNumber: 5,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber);

    page['roleCountForm'].get('loupGarou')?.setValue(mockCards.loupGarou - 2);

    await fixture.whenStable();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber - 2);
  });

  it('should increment villageois count by 2 on VOLEUR check', () => {
    const mockCards = {
      selectedRoles: new Set([]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    page['onRoleCheckChange'](PlayerRole.VOLEUR);

    expect(page['roleCountForm'].get('villageois')?.value).toEqual(
      mockCards.villageois + 2,
    );
  });

  it('should decrement villageois count by 2 on VOLEUR uncheck', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRole.VOLEUR]),
      villageois: 3,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    page['onRoleCheckChange'](PlayerRole.VOLEUR);

    expect(page['roleCountForm'].get('villageois')?.value).toEqual(
      mockCards.villageois - 2,
    );
  });

  it('should decrement villageois count to 0 on VOLEUR uncheck if less than 2', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRole.VOLEUR]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    page['onRoleCheckChange'](PlayerRole.VOLEUR);

    expect(page['roleCountForm'].get('villageois')?.value).toEqual(0);
  });

  it('should ignore 2 villageois in playersCount when VOLEUR checked', async () => {
    const mockCards = {
      selectedRoles: new Set([]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    page['onRoleCheckChange'](PlayerRole.VOLEUR);

    await fixture.whenStable();

    expect(page['playersCount']()).toEqual(3);
  });

  afterAll(MockReset);
});
