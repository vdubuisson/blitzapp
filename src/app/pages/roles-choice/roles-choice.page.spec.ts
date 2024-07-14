import { NO_ERRORS_SCHEMA, WritableSignal, signal } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MockService } from 'ng-mocks';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { CardList } from '@/models/card-list.model';
import { PlayerRoleNamePipe } from '@/pipes/player-role-name/player-role-name.pipe';
import { CardChoiceService } from '@/services/card-choice/card-choice.service';
import { RolesChoicePage } from './roles-choice.page';

describe('RolesChoicePage', () => {
  let page: RolesChoicePage;
  let fixture: ComponentFixture<RolesChoicePage>;

  let playerRoleNamePipe: PlayerRoleNamePipe;
  let cardChoiceService: CardChoiceService;
  let router: Router;

  let currentChosenCards: WritableSignal<CardList>;

  function createComponent() {
    fixture = TestBed.createComponent(RolesChoicePage);
    page = fixture.componentInstance;
  }

  beforeEach(async () => {
    currentChosenCards = signal({
      selectedRoles: new Set([]),
      villageois: 1,
      loupGarou: 2,
      playersNumber: 3,
    });

    playerRoleNamePipe = MockService(PlayerRoleNamePipe);
    cardChoiceService = {
      ...MockService(CardChoiceService),
      currentChosenCards: currentChosenCards.asReadonly(),
    } as CardChoiceService;
    router = MockService(Router);

    jest.spyOn(playerRoleNamePipe, 'transform').mockReturnValue('');

    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RolesChoicePage, ReactiveFormsModule, FormsModule],
      providers: [
        { provide: PlayerRoleNamePipe, useValue: playerRoleNamePipe },
        { provide: CardChoiceService, useValue: cardChoiceService },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();
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

  it('should reset playersCount on deselect', () => {
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

    expect(page['playersCount']()).toEqual(0);
  });

  it('should set roles on validate', waitForAsync(() => {
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
    jest.spyOn(cardChoiceService, 'setCards');

    page['rolesSelection'].setSelection(...selectedRoles);

    const expectedCardList: CardList = {
      selectedRoles,
      villageois: 1,
      loupGarou: 1,
      playersNumber: 4,
    };

    page['validateRoles']();

    expect(cardChoiceService.setCards).toHaveBeenCalledWith(expectedCardList);
  }));

  it('should navigate to /new-game on validate', () => {
    createComponent();

    jest.spyOn(router, 'navigate');

    page['validateRoles']();

    expect(router.navigate).toHaveBeenCalledWith(['new-game']);
  });

  it('should increment playersCount on villageois form increase', () => {
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

    expect(page['playersCount']()).toEqual(mockCards.playersNumber + 2);
  });

  it('should increment playersCount on loupGarou form increase', () => {
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

    expect(page['playersCount']()).toEqual(mockCards.playersNumber + 2);
  });

  it('should decrement playersCount on villageois form decrease', () => {
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

    expect(page['playersCount']()).toEqual(mockCards.playersNumber - 2);
  });

  it('should decrement playersCount on loupGarou form decrease', () => {
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

  it('should ignore 2 villageois in playersCount when VOLEUR checked', () => {
    const mockCards = {
      selectedRoles: new Set([]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    };
    currentChosenCards.set(mockCards);

    createComponent();

    page['onRoleCheckChange'](PlayerRoleEnum.VOLEUR);

    expect(page['playersCount']()).toEqual(3);
  });
});
