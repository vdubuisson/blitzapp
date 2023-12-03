import { MockService } from 'ng-mocks';
import { PlayerRoleNamePipe } from '../../core/pipes/player-role-name/player-role-name.pipe';
import { RolesChoicePage } from './roles-choice.page';
import { CardChoiceService } from '../../core/services/card-choice/card-choice.service';
import { Router } from '@angular/router';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { Subject } from 'rxjs';
import { CheckboxCustomEvent } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardList } from '../../core/models/card-list.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RolesChoicePage', () => {
  let page: RolesChoicePage;
  let fixture: ComponentFixture<RolesChoicePage>;

  let playerRoleNamePipe: PlayerRoleNamePipe;
  let roleChoiceService: CardChoiceService;
  let router: Router;

  let currentChosenCards: Subject<CardList>;

  beforeEach(async () => {
    playerRoleNamePipe = MockService(PlayerRoleNamePipe);
    roleChoiceService = MockService(CardChoiceService);
    router = MockService(Router);

    currentChosenCards = new Subject<CardList>();

    jest.spyOn(playerRoleNamePipe, 'transform').mockReturnValue('');
    jest
      .spyOn(roleChoiceService, 'getCurrentChosenCards')
      .mockReturnValue(currentChosenCards);

    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RolesChoicePage, ReactiveFormsModule, FormsModule],
      providers: [
        { provide: PlayerRoleNamePipe, useValue: playerRoleNamePipe },
        { provide: CardChoiceService, useValue: roleChoiceService },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesChoicePage);
    page = fixture.componentInstance;
  });

  it('should create page', () => {
    expect(page).toBeTruthy();
  });

  it('should get roles from service', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.next(mockCards);

    expect(page['selectedRoles']).toEqual(mockCards.selectedRoles);
  });

  it('should init form with roles', () => {
    const mockCards = {
      selectedRoles: new Set([]),
      villageois: 1,
      loupGarou: 2,
      playersNumber: 3,
    };
    currentChosenCards.next(mockCards);

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
    currentChosenCards.next(mockCards);

    expect(page['playersCount']).toEqual(mockCards.playersNumber);
  });

  it('should add role on check', () => {
    const checkEvent = {
      detail: {
        checked: true,
        value: PlayerRoleEnum.CHASSEUR,
      },
    };

    page['selectedRoles'] = new Set();

    expect(page['selectedRoles'].has(PlayerRoleEnum.CHASSEUR)).toBeFalsy();

    page['onRoleCheckChange'](
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>,
    );

    expect(page['selectedRoles'].has(PlayerRoleEnum.CHASSEUR)).toBeTruthy();
  });

  it('should increment playersCount by 1 on simple role check', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.next(mockCards);

    const checkEvent = {
      detail: {
        checked: true,
        value: PlayerRoleEnum.CHASSEUR,
      },
    };

    expect(page['playersCount']).toEqual(mockCards.playersNumber);

    page['onRoleCheckChange'](
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>,
    );

    expect(page['playersCount']).toEqual(mockCards.playersNumber + 1);
  });

  it('should increment playersCount by 2 on SOEUR role check', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.next(mockCards);

    const checkEvent = {
      detail: {
        checked: true,
        value: PlayerRoleEnum.SOEUR,
      },
    };

    expect(page['playersCount']).toEqual(mockCards.playersNumber);

    page['onRoleCheckChange'](
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>,
    );

    expect(page['playersCount']).toEqual(mockCards.playersNumber + 2);
  });

  it('should increment playersCount by 3 on FRERE role check', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.next(mockCards);

    const checkEvent = {
      detail: {
        checked: true,
        value: PlayerRoleEnum.FRERE,
      },
    };

    expect(page['playersCount']).toEqual(mockCards.playersNumber);

    page['onRoleCheckChange'](
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>,
    );

    expect(page['playersCount']).toEqual(mockCards.playersNumber + 3);
  });

  it('should delete role on uncheck', () => {
    const checkEvent = {
      detail: {
        checked: false,
        value: PlayerRoleEnum.CHASSEUR,
      },
    };

    page['selectedRoles'] = new Set([PlayerRoleEnum.CHASSEUR]);

    expect(page['selectedRoles'].has(PlayerRoleEnum.CHASSEUR)).toBeTruthy();

    page['onRoleCheckChange'](
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>,
    );

    expect(page['selectedRoles'].has(PlayerRoleEnum.CHASSEUR)).toBeFalsy();
  });

  it('should decrement playersCount by 1 on simple role uncheck', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.next(mockCards);

    const checkEvent = {
      detail: {
        checked: false,
        value: PlayerRoleEnum.SORCIERE,
      },
    };

    expect(page['playersCount']).toEqual(mockCards.playersNumber);

    page['onRoleCheckChange'](
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>,
    );

    expect(page['playersCount']).toEqual(mockCards.playersNumber - 1);
  });

  it('should decrement playersCount by 2 on SOEUR role uncheck', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SOEUR]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 4,
    };
    currentChosenCards.next(mockCards);

    const checkEvent = {
      detail: {
        checked: false,
        value: PlayerRoleEnum.SOEUR,
      },
    };

    expect(page['playersCount']).toEqual(mockCards.playersNumber);

    page['onRoleCheckChange'](
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>,
    );

    expect(page['playersCount']).toEqual(mockCards.playersNumber - 2);
  });

  it('should decrement playersCount by 3 on FRERE role uncheck', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.FRERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 5,
    };
    currentChosenCards.next(mockCards);

    const checkEvent = {
      detail: {
        checked: false,
        value: PlayerRoleEnum.FRERE,
      },
    };

    expect(page['playersCount']).toEqual(mockCards.playersNumber);

    page['onRoleCheckChange'](
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>,
    );

    expect(page['playersCount']).toEqual(mockCards.playersNumber - 3);
  });

  it('should clear selected roles on deselect', () => {
    page['selectedRoles'] = new Set([PlayerRoleEnum.CHASSEUR]);

    expect(page['selectedRoles'].size).toEqual(1);

    page['deselectAll']();

    expect(page['selectedRoles'].size).toEqual(0);
  });

  it('should reset form on deselect', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.next(mockCards);

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
    currentChosenCards.next(mockCards);

    expect(page['playersCount']).not.toEqual(0);

    page['deselectAll']();

    expect(page['playersCount']).toEqual(0);
  });

  it('should set roles on validate', () => {
    const mockCards = {
      selectedRoles: new Set([]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    };
    currentChosenCards.next(mockCards);

    const selectedRoles = new Set([
      PlayerRoleEnum.CHASSEUR,
      PlayerRoleEnum.CUPIDON,
    ]);
    jest.spyOn(roleChoiceService, 'setCards');

    page['selectedRoles'] = selectedRoles;

    const expectedCardList: CardList = {
      selectedRoles,
      villageois: 1,
      loupGarou: 1,
      playersNumber: 4,
    };

    page['validateRoles']();

    expect(roleChoiceService.setCards).toHaveBeenCalledWith(expectedCardList);
  });

  it('should navigate to /new-game on validate', () => {
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
    currentChosenCards.next(mockCards);

    expect(page['playersCount']).toEqual(mockCards.playersNumber);

    page['roleCountForm'].get('villageois')?.setValue(mockCards.villageois + 2);

    expect(page['playersCount']).toEqual(mockCards.playersNumber + 2);
  });

  it('should increment playersCount on loupGarou form increase', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };
    currentChosenCards.next(mockCards);

    expect(page['playersCount']).toEqual(mockCards.playersNumber);

    page['roleCountForm'].get('loupGarou')?.setValue(mockCards.loupGarou + 2);

    expect(page['playersCount']).toEqual(mockCards.playersNumber + 2);
  });

  it('should decrement playersCount on villageois form decrease', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
      villageois: 3,
      loupGarou: 1,
      playersNumber: 5,
    };
    currentChosenCards.next(mockCards);

    expect(page['playersCount']).toEqual(mockCards.playersNumber);

    page['roleCountForm'].get('villageois')?.setValue(mockCards.villageois - 2);

    expect(page['playersCount']).toEqual(mockCards.playersNumber - 2);
  });

  it('should decrement playersCount on loupGarou form decrease', () => {
    const mockCards = {
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE]),
      villageois: 1,
      loupGarou: 3,
      playersNumber: 5,
    };
    currentChosenCards.next(mockCards);

    expect(page['playersCount']).toEqual(mockCards.playersNumber);

    page['roleCountForm'].get('loupGarou')?.setValue(mockCards.loupGarou - 2);

    expect(page['playersCount']).toEqual(mockCards.playersNumber - 2);
  });

  it('should increment villageois count by 2 on VOLEUR check', () => {
    const mockCards = {
      selectedRoles: new Set([]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    };
    currentChosenCards.next(mockCards);

    const checkEvent = {
      detail: {
        checked: true,
        value: PlayerRoleEnum.VOLEUR,
      },
    };

    page['onRoleCheckChange'](
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>,
    );

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
    currentChosenCards.next(mockCards);

    const checkEvent = {
      detail: {
        checked: false,
        value: PlayerRoleEnum.VOLEUR,
      },
    };

    page['onRoleCheckChange'](
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>,
    );

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
    currentChosenCards.next(mockCards);

    const checkEvent = {
      detail: {
        checked: false,
        value: PlayerRoleEnum.VOLEUR,
      },
    };

    page['onRoleCheckChange'](
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>,
    );

    expect(page['roleCountForm'].get('villageois')?.value).toEqual(0);
  });

  it('should ignore 2 villageois in playersCount when VOLEUR checked', () => {
    const mockCards = {
      selectedRoles: new Set([]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    };
    currentChosenCards.next(mockCards);

    const checkEvent = {
      detail: {
        checked: true,
        value: PlayerRoleEnum.VOLEUR,
      },
    };

    page['onRoleCheckChange'](
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>,
    );

    expect(page['playersCount']).toEqual(3);
  });
});
