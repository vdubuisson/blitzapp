import { FormBuilder } from '@angular/forms';
import { NewPlayerComponent } from './new-player.component';
import { PlayerRoleEnum } from '../../../enums/player-role.enum';
import { waitForAsync } from '@angular/core/testing';

describe('NewPlayerComponent', () => {
  let component: NewPlayerComponent;

  let formBuilder: FormBuilder;

  beforeEach(async () => {
    formBuilder = new FormBuilder();
    component = new NewPlayerComponent(formBuilder);
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
});
