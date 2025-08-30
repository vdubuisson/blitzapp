import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { CardList } from '@/models/card-list.model';
import { PlayerRoleNamePipe } from '@/pipes/player-role-name/player-role-name.pipe';
import { CardChoiceStore } from '@/stores/card-choice/card-choice.store';
import { signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import {
  MockBuilder,
  MockedComponentFixture,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import RolesChoicePage from './roles-choice.page';

describe('RolesChoicePage', () => {
  let page: RolesChoicePage;
  let fixture: MockedComponentFixture<RolesChoicePage>;

  let currentChosenCards: WritableSignal<CardList>;

  function createComponent() {
    fixture = MockRender(RolesChoicePage);
    page = fixture.point.componentInstance;
  }

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(RolesChoicePage)
      .mock(CardChoiceStore)
      .mock(Router)
      .mock(PlayerRoleNamePipe),
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
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
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
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
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

    expect(page['selectedRoles']().has(PlayerRoleEnum.CHASSEUR)).toBeFalsy();

    page['onRoleCheckChange'](PlayerRoleEnum.CHASSEUR);

    expect(page['selectedRoles']().has(PlayerRoleEnum.CHASSEUR)).toBeTruthy();
  });

  it('should increment playersCount by 1 on simple role check', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber);

    page['onRoleCheckChange'](PlayerRoleEnum.CHASSEUR);

    expect(page['playersCount']()).toEqual(mockCards.playersNumber + 1);
  });

  it('should increment playersCount by 2 on SOEUR role check', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber);

    page['onRoleCheckChange'](PlayerRoleEnum.SOEUR);

    expect(page['playersCount']()).toEqual(mockCards.playersNumber + 2);
  });

  it('should increment playersCount by 3 on FRERE role check', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber);

    page['onRoleCheckChange'](PlayerRoleEnum.FRERE);

    expect(page['playersCount']()).toEqual(mockCards.playersNumber + 3);
  });

  it('should delete role on uncheck', () => {
    createComponent();

    page['rolesSelection'].setSelection(PlayerRoleEnum.CHASSEUR);

    expect(page['selectedRoles']().has(PlayerRoleEnum.CHASSEUR)).toBeTruthy();

    page['onRoleCheckChange'](PlayerRoleEnum.CHASSEUR);

    expect(page['selectedRoles']().has(PlayerRoleEnum.CHASSEUR)).toBeFalsy();
  });

  it('should decrement playersCount by 1 on simple role uncheck', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber);

    page['onRoleCheckChange'](PlayerRoleEnum.SORCIERE);

    expect(page['playersCount']()).toEqual(mockCards.playersNumber - 1);
  });

  it('should decrement playersCount by 2 on SOEUR role uncheck', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SOEUR]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 4,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber);

    page['onRoleCheckChange'](PlayerRoleEnum.SOEUR);

    expect(page['playersCount']()).toEqual(mockCards.playersNumber - 2);
  });

  it('should decrement playersCount by 3 on FRERE role uncheck', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.FRERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 5,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    expect(page['playersCount']()).toEqual(mockCards.playersNumber);

    page['onRoleCheckChange'](PlayerRoleEnum.FRERE);

    expect(page['playersCount']()).toEqual(mockCards.playersNumber - 3);
  });

  it('should clear selected roles on deselect', () => {
    createComponent();

    page['rolesSelection'].setSelection(PlayerRoleEnum.CHASSEUR);

    expect(page['selectedRoles']().size).toEqual(1);

    page['deselectAll']();

    expect(page['selectedRoles']().size).toEqual(0);
  });

  it('should reset form on deselect', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
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
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
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

    const selectedRoles = new Set([
      PlayerRoleEnum.CHASSEUR,
      PlayerRoleEnum.CUPIDON,
    ]);

    page['rolesSelection'].setSelection(...selectedRoles);

    const expectedCardList: CardList = {
      selectedRoles,
      villageois: 1,
      loupGarou: 1,
      playersNumber: 4,
    };

    page['validateRoles']();

    const cardChoiceService = ngMocks.get(CardChoiceStore);

    expect(cardChoiceService.state()).toEqual(expectedCardList);
  });

  it('should navigate to /new-game on validate', () => {
    createComponent();

    page['validateRoles']();

    const router = ngMocks.get(Router);

    expect(router.navigate).toHaveBeenCalledWith(['new-game']);
  });

  it('should increment playersCount on villageois form increase', async () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
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
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
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
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
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
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
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

    page['onRoleCheckChange'](PlayerRoleEnum.VOLEUR);

    expect(page['roleCountForm'].get('villageois')?.value).toEqual(
      mockCards.villageois + 2,
    );
  });

  it('should decrement villageois count by 2 on VOLEUR uncheck', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.VOLEUR]),
      villageois: 3,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    page['onRoleCheckChange'](PlayerRoleEnum.VOLEUR);

    expect(page['roleCountForm'].get('villageois')?.value).toEqual(
      mockCards.villageois - 2,
    );
  });

  it('should decrement villageois count to 0 on VOLEUR uncheck if less than 2', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.VOLEUR]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    page['onRoleCheckChange'](PlayerRoleEnum.VOLEUR);

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

    page['onRoleCheckChange'](PlayerRoleEnum.VOLEUR);

    await fixture.whenStable();

    expect(page['playersCount']()).toEqual(3);
  });

  afterAll(MockReset);
});
