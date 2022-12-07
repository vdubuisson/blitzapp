import { waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { NewPlayerComponent } from './new-player.component';

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

  it('should emit name on submit', waitForAsync(() => {
    component['playerForm'].setValue({ name: 'Name' });
    component.onSubmit();

    component.newPlayer.asObservable().subscribe((newPlayer) => {
      expect(newPlayer).toEqual('Name');
      expect(component['playerForm'].reset).toBeCalled();
    });
  }));
});
