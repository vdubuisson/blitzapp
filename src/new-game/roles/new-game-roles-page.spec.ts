import { CardChoiceStore } from '@/new-game/card-choice-store/card-choice-store';
import { PlayerRoleNamePipe } from '@/shared/pipes/player-role-name/player-role-name-pipe';
import { CardList } from '@/shared/types/card-list';
import { PlayerRoleEnum } from '@/types/player-role';
import { ActivatedRoute, Router } from '@angular/router';
import {
  createComponentFactory,
  mockProvider,
  Spectator,
} from '@ngneat/spectator/jest';
import NewGameRolesPage from './new-game-roles-page';
import { signal } from '@angular/core';

describe('NewGameRolesPage', () => {
  let spectator: Spectator<NewGameRolesPage>;

  const defaultCards: CardList = {
    selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
    villageois: 1,
    loupGarou: 1,
    playersNumber: 3,
  };

  const createComponent = createComponentFactory({
    component: NewGameRolesPage,
    mocks: [Router, ActivatedRoute],
    providers: [
      mockProvider(PlayerRoleNamePipe, {
        transform: jest.fn().mockReturnValue(''),
      }),
    ],
  });

  const createComponentWithCards = (cards: CardList = defaultCards) =>
    createComponent({
      providers: [
        mockProvider(CardChoiceStore, {
          state: signal(cards),
        }),
      ],
    });

  it('should create page', () => {
    spectator = createComponentWithCards();
    expect(spectator.component).toBeTruthy();
  });

  it('should get roles from service', async () => {
    spectator = createComponentWithCards();
    expect(spectator.component['selectedRoles']()).toEqual(
      defaultCards.selectedRoles,
    );
  });

  it('should init form with roles', () => {
    const mockCards = {
      selectedRoles: new Set([]),
      villageois: 1,
      loupGarou: 2,
      playersNumber: 3,
    };
    spectator = createComponentWithCards(mockCards);

    expect(spectator.component['roleCountForm'].value).toEqual({
      loupGarou: mockCards.loupGarou,
      villageois: mockCards.villageois,
    });
  });

  it('should init playersCount', () => {
    spectator = createComponentWithCards();
    expect(spectator.component['playersCount']()).toEqual(
      defaultCards.playersNumber,
    );
  });

  it('should add role on check', () => {
    spectator = createComponentWithCards();
    expect(
      spectator.component['selectedRoles']().has(PlayerRoleEnum.CHASSEUR),
    ).toBeFalsy();

    spectator.component['onRoleCheckChange'](PlayerRoleEnum.CHASSEUR);

    expect(
      spectator.component['selectedRoles']().has(PlayerRoleEnum.CHASSEUR),
    ).toBeTruthy();
  });

  it('should increment playersCount by 1 on simple role check', () => {
    spectator = createComponentWithCards();

    expect(spectator.component['playersCount']()).toEqual(
      defaultCards.playersNumber,
    );

    spectator.component['onRoleCheckChange'](PlayerRoleEnum.CHASSEUR);

    expect(spectator.component['playersCount']()).toEqual(
      defaultCards.playersNumber + 1,
    );
  });

  it('should increment playersCount by 2 on SOEUR role check', () => {
    spectator = createComponentWithCards();

    expect(spectator.component['playersCount']()).toEqual(
      defaultCards.playersNumber,
    );

    spectator.component['onRoleCheckChange'](PlayerRoleEnum.SOEUR);

    expect(spectator.component['playersCount']()).toEqual(
      defaultCards.playersNumber + 2,
    );
  });

  it('should increment playersCount by 3 on FRERE role check', () => {
    spectator = createComponentWithCards();

    expect(spectator.component['playersCount']()).toEqual(
      defaultCards.playersNumber,
    );

    spectator.component['onRoleCheckChange'](PlayerRoleEnum.FRERE);

    expect(spectator.component['playersCount']()).toEqual(
      defaultCards.playersNumber + 3,
    );
  });

  it('should delete role on uncheck', () => {
    spectator = createComponentWithCards();

    spectator.component['rolesSelection'].setSelection(PlayerRoleEnum.CHASSEUR);

    expect(
      spectator.component['selectedRoles']().has(PlayerRoleEnum.CHASSEUR),
    ).toBeTruthy();

    spectator.component['onRoleCheckChange'](PlayerRoleEnum.CHASSEUR);

    expect(
      spectator.component['selectedRoles']().has(PlayerRoleEnum.CHASSEUR),
    ).toBeFalsy();
  });

  it('should decrement playersCount by 1 on simple role uncheck', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    spectator = createComponentWithCards(mockCards);

    expect(spectator.component['playersCount']()).toEqual(
      mockCards.playersNumber,
    );

    spectator.component['onRoleCheckChange'](PlayerRoleEnum.SORCIERE);

    expect(spectator.component['playersCount']()).toEqual(
      mockCards.playersNumber - 1,
    );
  });

  it('should decrement playersCount by 2 on SOEUR role uncheck', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SOEUR]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 4,
    };
    spectator = createComponentWithCards(mockCards);

    expect(spectator.component['playersCount']()).toEqual(
      mockCards.playersNumber,
    );

    spectator.component['onRoleCheckChange'](PlayerRoleEnum.SOEUR);

    expect(spectator.component['playersCount']()).toEqual(
      mockCards.playersNumber - 2,
    );
  });

  it('should decrement playersCount by 3 on FRERE role uncheck', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.FRERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 5,
    };
    spectator = createComponentWithCards(mockCards);

    expect(spectator.component['playersCount']()).toEqual(
      mockCards.playersNumber,
    );

    spectator.component['onRoleCheckChange'](PlayerRoleEnum.FRERE);

    expect(spectator.component['playersCount']()).toEqual(
      mockCards.playersNumber - 3,
    );
  });

  it('should clear selected roles on deselect', () => {
    spectator = createComponentWithCards();

    spectator.component['rolesSelection'].setSelection(PlayerRoleEnum.CHASSEUR);

    expect(spectator.component['selectedRoles']().size).toEqual(1);

    spectator.component['deselectAll']();

    expect(spectator.component['selectedRoles']().size).toEqual(0);
  });

  it('should reset form on deselect', () => {
    spectator = createComponentWithCards();

    expect(spectator.component['roleCountForm'].value).not.toEqual({
      villageois: 0,
      loupGarou: 0,
    });

    spectator.component['deselectAll']();

    expect(spectator.component['roleCountForm'].value).toEqual({
      villageois: 0,
      loupGarou: 0,
    });
  });

  it('should reset playersCount on deselect', async () => {
    spectator = createComponentWithCards();

    expect(spectator.component['playersCount']()).not.toEqual(0);

    spectator.component['deselectAll']();

    await spectator.fixture.whenStable();

    expect(spectator.component['playersCount']()).toEqual(0);
  });

  it('should set roles on validate', () => {
    const mockCards = {
      selectedRoles: new Set([]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    };
    spectator = createComponentWithCards(mockCards);

    const selectedRoles = new Set([
      PlayerRoleEnum.CHASSEUR,
      PlayerRoleEnum.CUPIDON,
    ]);

    spectator.component['rolesSelection'].setSelection(...selectedRoles);

    const expectedCardList: CardList = {
      selectedRoles,
      villageois: 1,
      loupGarou: 1,
      playersNumber: 4,
    };

    spectator.component['validateRoles']();

    const cardChoiceStore = spectator.inject(CardChoiceStore);

    expect(cardChoiceStore.state()).toEqual(expectedCardList);
  });

  it('should navigate to /players on validate', () => {
    spectator = createComponentWithCards();

    spectator.component['validateRoles']();

    const router = spectator.inject(Router);

    expect(router.navigate).toHaveBeenCalledWith(['players'], {
      relativeTo: undefined,
    });
  });

  it('should increment playersCount on villageois form increase', async () => {
    spectator = createComponentWithCards();

    expect(spectator.component['playersCount']()).toEqual(
      defaultCards.playersNumber,
    );

    spectator.component['roleCountForm']
      .get('villageois')
      ?.setValue(defaultCards.villageois + 2);

    await spectator.fixture.whenStable();

    expect(spectator.component['playersCount']()).toEqual(
      defaultCards.playersNumber + 2,
    );
  });

  it('should increment playersCount on loupGarou form increase', async () => {
    spectator = createComponentWithCards();

    expect(spectator.component['playersCount']()).toEqual(
      defaultCards.playersNumber,
    );

    spectator.component['roleCountForm']
      .get('loupGarou')
      ?.setValue(defaultCards.loupGarou + 2);

    await spectator.fixture.whenStable();

    expect(spectator.component['playersCount']()).toEqual(
      defaultCards.playersNumber + 2,
    );
  });

  it('should decrement playersCount on villageois form decrease', async () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
      villageois: 3,
      loupGarou: 1,
      playersNumber: 5,
    };
    spectator = createComponentWithCards(mockCards);

    expect(spectator.component['playersCount']()).toEqual(
      mockCards.playersNumber,
    );

    spectator.component['roleCountForm']
      .get('villageois')
      ?.setValue(mockCards.villageois - 2);

    await spectator.fixture.whenStable();

    expect(spectator.component['playersCount']()).toEqual(
      mockCards.playersNumber - 2,
    );
  });

  it('should decrement playersCount on loupGarou form decrease', async () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
      villageois: 1,
      loupGarou: 3,
      playersNumber: 5,
    };
    spectator = createComponentWithCards(mockCards);

    expect(spectator.component['playersCount']()).toEqual(
      mockCards.playersNumber,
    );

    spectator.component['roleCountForm']
      .get('loupGarou')
      ?.setValue(mockCards.loupGarou - 2);

    await spectator.fixture.whenStable();

    expect(spectator.component['playersCount']()).toEqual(
      mockCards.playersNumber - 2,
    );
  });

  it('should increment villageois count by 2 on VOLEUR check', () => {
    const mockCards = {
      selectedRoles: new Set([]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    };
    spectator = createComponentWithCards(mockCards);

    spectator.component['onRoleCheckChange'](PlayerRoleEnum.VOLEUR);

    expect(
      spectator.component['roleCountForm'].get('villageois')?.value,
    ).toEqual(mockCards.villageois + 2);
  });

  it('should decrement villageois count by 2 on VOLEUR uncheck', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.VOLEUR]),
      villageois: 3,
      loupGarou: 1,
      playersNumber: 3,
    };
    spectator = createComponentWithCards(mockCards);

    spectator.component['onRoleCheckChange'](PlayerRoleEnum.VOLEUR);

    expect(
      spectator.component['roleCountForm'].get('villageois')?.value,
    ).toEqual(mockCards.villageois - 2);
  });

  it('should decrement villageois count to 0 on VOLEUR uncheck if less than 2', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.VOLEUR]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    };
    spectator = createComponentWithCards(mockCards);

    spectator.component['onRoleCheckChange'](PlayerRoleEnum.VOLEUR);

    expect(
      spectator.component['roleCountForm'].get('villageois')?.value,
    ).toEqual(0);
  });

  it('should ignore 2 villageois in playersCount when VOLEUR checked', async () => {
    const mockCards = {
      selectedRoles: new Set([]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    };
    spectator = createComponentWithCards(mockCards);

    spectator.component['onRoleCheckChange'](PlayerRoleEnum.VOLEUR);

    await spectator.fixture.whenStable();

    expect(spectator.component['playersCount']()).toEqual(3);
  });
});
