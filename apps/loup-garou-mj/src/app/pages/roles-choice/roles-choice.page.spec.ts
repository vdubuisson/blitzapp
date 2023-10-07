import { MockService } from 'ng-mocks';
import { PlayerRoleNamePipe } from '../../core/pipes/player-role-name/player-role-name.pipe';
import { RolesChoicePage } from './roles-choice.page';
import { RoleChoiceService } from '../../core/services/role-choice/role-choice.service';
import { Router } from '@angular/router';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { of } from 'rxjs';
import { CheckboxCustomEvent } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoleList } from '../../core/models/role-list.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RolesChoicePage', () => {
  let page: RolesChoicePage;
  let fixture: ComponentFixture<RolesChoicePage>;

  let playerRoleNamePipe: PlayerRoleNamePipe;
  let roleChoiceService: RoleChoiceService;
  let router: Router;

  let mockRoles: RoleList;

  beforeEach(async () => {
    playerRoleNamePipe = MockService(PlayerRoleNamePipe);
    roleChoiceService = MockService(RoleChoiceService);
    router = MockService(Router);

    mockRoles = {
      selectedRoles: new Set([PlayerRoleEnum.CHASSEUR]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };

    jest.spyOn(playerRoleNamePipe, 'transform').mockReturnValue('');
    jest
      .spyOn(roleChoiceService, 'getCurrentChosenRoles')
      .mockReturnValue(of(mockRoles));

    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RolesChoicePage, ReactiveFormsModule, FormsModule],
      providers: [
        { provide: PlayerRoleNamePipe, useValue: playerRoleNamePipe },
        { provide: RoleChoiceService, useValue: roleChoiceService },
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
    expect(page['selectedRoles']).toEqual(mockRoles.selectedRoles);
  });

  it('should init form with roles', () => {
    expect(page['roleCountForm'].value).toEqual({
      loupGarou: mockRoles.loupGarou,
      villageois: mockRoles.villageois,
    });
  });

  it('should init playersCount', () => {
    expect(page['playersCount']).toEqual(mockRoles.playersNumber);
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
    const checkEvent = {
      detail: {
        checked: true,
        value: PlayerRoleEnum.CHASSEUR,
      },
    };

    expect(page['playersCount']).toEqual(mockRoles.playersNumber);

    page['onRoleCheckChange'](
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>,
    );

    expect(page['playersCount']).toEqual(mockRoles.playersNumber + 1);
  });

  it('should increment playersCount by 2 on SOEUR role check', () => {
    const checkEvent = {
      detail: {
        checked: true,
        value: PlayerRoleEnum.SOEUR,
      },
    };

    expect(page['playersCount']).toEqual(mockRoles.playersNumber);

    page['onRoleCheckChange'](
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>,
    );

    expect(page['playersCount']).toEqual(mockRoles.playersNumber + 2);
  });

  it('should increment playersCount by 3 on FRERE role check', () => {
    const checkEvent = {
      detail: {
        checked: true,
        value: PlayerRoleEnum.FRERE,
      },
    };

    expect(page['playersCount']).toEqual(mockRoles.playersNumber);

    page['onRoleCheckChange'](
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>,
    );

    expect(page['playersCount']).toEqual(mockRoles.playersNumber + 3);
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
    const checkEvent = {
      detail: {
        checked: false,
        value: PlayerRoleEnum.CHASSEUR,
      },
    };

    expect(page['playersCount']).toEqual(mockRoles.playersNumber);

    page['onRoleCheckChange'](
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>,
    );

    expect(page['playersCount']).toEqual(mockRoles.playersNumber - 1);
  });

  it('should decrement playersCount by 2 on SOEUR role uncheck', () => {
    const checkEvent = {
      detail: {
        checked: false,
        value: PlayerRoleEnum.SOEUR,
      },
    };

    expect(page['playersCount']).toEqual(mockRoles.playersNumber);

    page['onRoleCheckChange'](
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>,
    );

    expect(page['playersCount']).toEqual(mockRoles.playersNumber - 2);
  });

  it('should decrement playersCount by 3 on FRERE role uncheck', () => {
    const checkEvent = {
      detail: {
        checked: false,
        value: PlayerRoleEnum.FRERE,
      },
    };

    expect(page['playersCount']).toEqual(mockRoles.playersNumber);

    page['onRoleCheckChange'](
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>,
    );

    expect(page['playersCount']).toEqual(mockRoles.playersNumber - 3);
  });

  it('should clear selected roles on deselect', () => {
    page['selectedRoles'] = new Set([PlayerRoleEnum.CHASSEUR]);

    expect(page['selectedRoles'].size).toEqual(1);

    page['deselectAll']();

    expect(page['selectedRoles'].size).toEqual(0);
  });

  it('should reset form on deselect', () => {
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
    expect(page['playersCount']).not.toEqual(0);

    page['deselectAll']();

    expect(page['playersCount']).toEqual(0);
  });

  it('should set roles on validate', () => {
    const selectedRoles = new Set([
      PlayerRoleEnum.CHASSEUR,
      PlayerRoleEnum.CUPIDON,
    ]);
    jest.spyOn(roleChoiceService, 'setRoles');

    page['selectedRoles'] = selectedRoles;

    const expectedRoleList: RoleList = {
      selectedRoles,
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    };

    page['validateRoles']();

    expect(roleChoiceService.setRoles).toHaveBeenCalledWith(expectedRoleList);
  });

  it('should navigate to /new-game on validate', () => {
    jest.spyOn(router, 'navigate');

    page['validateRoles']();

    expect(router.navigate).toHaveBeenCalledWith(['new-game']);
  });

  it('should increment playersCount on villageois form increase', () => {
    expect(page['playersCount']).toEqual(mockRoles.playersNumber);

    page['roleCountForm'].get('villageois')?.setValue(mockRoles.villageois + 2);

    expect(page['playersCount']).toEqual(mockRoles.playersNumber + 2);
  });

  it('should increment playersCount on loupGarou form increase', () => {
    expect(page['playersCount']).toEqual(mockRoles.playersNumber);

    page['roleCountForm'].get('loupGarou')?.setValue(mockRoles.loupGarou + 2);

    expect(page['playersCount']).toEqual(mockRoles.playersNumber + 2);
  });

  it('should decrement playersCount on villageois form decrease', () => {
    expect(page['playersCount']).toEqual(mockRoles.playersNumber);

    page['roleCountForm'].get('villageois')?.setValue(mockRoles.villageois - 2);

    expect(page['playersCount']).toEqual(mockRoles.playersNumber - 2);
  });

  it('should decrement playersCount on loupGarou form decrease', () => {
    expect(page['playersCount']).toEqual(mockRoles.playersNumber);

    page['roleCountForm'].get('loupGarou')?.setValue(mockRoles.loupGarou - 2);

    expect(page['playersCount']).toEqual(mockRoles.playersNumber - 2);
  });
});
