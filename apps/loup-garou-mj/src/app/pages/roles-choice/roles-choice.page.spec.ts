import { MockService } from 'ng-mocks';
import { PlayerRoleNamePipe } from '../../core/pipes/player-role-name/player-role-name.pipe';
import { RolesChoicePage } from './roles-choice.page';
import { RoleChoiceService } from '../../core/services/role-choice/role-choice.service';
import { Router } from '@angular/router';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { of } from 'rxjs';
import { CheckboxCustomEvent } from '@ionic/angular';

describe('RolesChoicePage', () => {
  let page: RolesChoicePage;
  let playerRoleNamePipe: PlayerRoleNamePipe;
  let roleChoiceService: RoleChoiceService;
  let router: Router;

  let mockRoles: Set<PlayerRoleEnum>;

  beforeEach(() => {
    playerRoleNamePipe = MockService(PlayerRoleNamePipe);
    roleChoiceService = MockService(RoleChoiceService);
    router = MockService(Router);

    mockRoles = new Set([PlayerRoleEnum.LOUP_GAROU, PlayerRoleEnum.VILLAGEOIS]);

    jest.spyOn(playerRoleNamePipe, 'transform').mockReturnValue('');
    jest
      .spyOn(roleChoiceService, 'getCurrentChosenRoles')
      .mockReturnValue(of(mockRoles));

    page = new RolesChoicePage(playerRoleNamePipe, roleChoiceService, router);
  });

  it('should create page', () => {
    expect(page).toBeTruthy();
  });

  it('should get roles from service', () => {
    expect(page['selectedRoles']).toEqual(mockRoles);
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
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>
    );

    expect(page['selectedRoles'].has(PlayerRoleEnum.CHASSEUR)).toBeTruthy();
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
      checkEvent as CheckboxCustomEvent<PlayerRoleEnum>
    );

    expect(page['selectedRoles'].has(PlayerRoleEnum.CHASSEUR)).toBeFalsy();
  });

  it('should clear selected roles on deselect', () => {
    page['selectedRoles'] = new Set([PlayerRoleEnum.CHASSEUR]);

    expect(page['selectedRoles'].size).toEqual(1);

    page.deselectAll();

    expect(page['selectedRoles'].size).toEqual(0);
  });

  it('should set roles on validate', () => {
    const selectedRoles = new Set([
      PlayerRoleEnum.CHASSEUR,
      PlayerRoleEnum.CUPIDON,
    ]);
    jest.spyOn(roleChoiceService, 'setRoles');

    page['selectedRoles'] = selectedRoles;

    page.validateRoles();

    expect(roleChoiceService.setRoles).toHaveBeenCalledWith(selectedRoles);
  });

  it('should navigate to /new-game on validate', () => {
    jest.spyOn(router, 'navigate');

    page.validateRoles();

    expect(router.navigate).toHaveBeenCalledWith(['new-game']);
  });
});
