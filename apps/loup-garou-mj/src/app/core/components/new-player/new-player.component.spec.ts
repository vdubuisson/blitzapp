import { waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { when } from 'jest-when';
import { MockService } from 'ng-mocks';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerRoleNamePipe } from '../../pipes/player-role-name/player-role-name.pipe';

import { NewPlayerComponent } from './new-player.component';

describe('NewPlayerComponent', () => {
  let component: NewPlayerComponent;

  let formBuilder: FormBuilder;
  let playerRoleNamePipe: PlayerRoleNamePipe;

  beforeEach(async () => {
    formBuilder = new FormBuilder();
    playerRoleNamePipe = MockService(PlayerRoleNamePipe);
    component = new NewPlayerComponent(formBuilder, playerRoleNamePipe);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit name and role on submit', waitForAsync(() => {
    component['playerForm'].setValue({
      name: 'Name',
      role: PlayerRoleEnum.VILLAGEOIS,
    });
    component.onSubmit();

    component.newPlayer.asObservable().subscribe((newPlayer) => {
      expect(newPlayer).toEqual({
        name: 'Name',
        role: PlayerRoleEnum.VILLAGEOIS,
      });
      expect(component['playerForm'].reset).toBeCalled();
    });
  }));

  it('should sort roles alphabetically on set', () => {
    const pipeTransform = jest.spyOn(playerRoleNamePipe, 'transform');
    when(pipeTransform)
      .calledWith(PlayerRoleEnum.VILLAGEOIS)
      .mockReturnValue('Villageois');
    when(pipeTransform)
      .calledWith(PlayerRoleEnum.LOUP_GAROU)
      .mockReturnValue('Loup');

    component.roles = [PlayerRoleEnum.VILLAGEOIS, PlayerRoleEnum.LOUP_GAROU];

    expect(component['sortedRoles']).toEqual([
      PlayerRoleEnum.LOUP_GAROU,
      PlayerRoleEnum.VILLAGEOIS,
    ]);
  });
});
