import { when } from 'jest-when';
import { MockService } from 'ng-mocks';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerRoleNamePipe } from '../../pipes/player-role-name/player-role-name.pipe';
import { PlayerComponent } from './player.component';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let playerRoleNamePipe: PlayerRoleNamePipe;

  beforeEach(async () => {
    playerRoleNamePipe = MockService(PlayerRoleNamePipe);
    component = new PlayerComponent(playerRoleNamePipe);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort roles alphabetically on set', () => {
    const pipeTransform = jest.spyOn(playerRoleNamePipe, 'transform');
    when(pipeTransform)
      .calledWith(PlayerRoleEnum.VILLAGEOIS)
      .mockReturnValue('Villageois');
    when(pipeTransform)
      .calledWith(PlayerRoleEnum.LOUP_GAROU)
      .mockReturnValue('Loup');
    component.player = {
      id: 0,
      name: 'player',
      role: PlayerRoleEnum.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    };

    component.selectableRoles = [
      PlayerRoleEnum.VILLAGEOIS,
      PlayerRoleEnum.LOUP_GAROU,
    ];

    expect(component['sortedRoles']).toEqual([
      PlayerRoleEnum.LOUP_GAROU,
      PlayerRoleEnum.VILLAGEOIS,
    ]);
  });

  it('should add current role to selectable roles on set', () => {
    const pipeTransform = jest.spyOn(playerRoleNamePipe, 'transform');
    when(pipeTransform)
      .calledWith(PlayerRoleEnum.VILLAGEOIS)
      .mockReturnValue('Villageois');
    when(pipeTransform)
      .calledWith(PlayerRoleEnum.LOUP_GAROU)
      .mockReturnValue('Loup');
    when(pipeTransform)
      .calledWith(PlayerRoleEnum.CUPIDON)
      .mockReturnValue('Cupidon');

    component.player = {
      id: 0,
      name: 'player',
      role: PlayerRoleEnum.CUPIDON,
      statuses: new Set(),
      isDead: false,
    };

    component.selectableRoles = [
      PlayerRoleEnum.VILLAGEOIS,
      PlayerRoleEnum.LOUP_GAROU,
    ];

    expect(component['sortedRoles'].includes(PlayerRoleEnum.CUPIDON)).toEqual(
      true
    );
  });

  it('should not add current role NOT_SELECTED to selectable roles on set', () => {
    const pipeTransform = jest.spyOn(playerRoleNamePipe, 'transform');
    when(pipeTransform)
      .calledWith(PlayerRoleEnum.VILLAGEOIS)
      .mockReturnValue('Villageois');
    when(pipeTransform)
      .calledWith(PlayerRoleEnum.LOUP_GAROU)
      .mockReturnValue('Loup');

    component.player = {
      id: 0,
      name: 'player',
      role: PlayerRoleEnum.NOT_SELECTED,
      statuses: new Set(),
      isDead: false,
    };

    component.selectableRoles = [
      PlayerRoleEnum.VILLAGEOIS,
      PlayerRoleEnum.LOUP_GAROU,
    ];

    expect(
      component['sortedRoles'].includes(PlayerRoleEnum.NOT_SELECTED)
    ).toEqual(false);
  });
});
