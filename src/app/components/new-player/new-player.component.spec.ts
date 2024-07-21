import { waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import {
  MockBuilder,
  MockedComponentFixture,
  MockRender,
  ngMocks,
} from 'ng-mocks';
import { NewPlayerComponent } from './new-player.component';

describe('NewPlayerComponent', () => {
  let fixture: MockedComponentFixture<NewPlayerComponent>;

  ngMocks.faster();

  beforeAll(async () => MockBuilder(NewPlayerComponent).keep(FormBuilder));

  beforeAll(() => (fixture = MockRender(NewPlayerComponent)));

  it('should create', () => {
    expect(fixture.point.componentInstance).toBeTruthy();
  });

  it('should emit name on submit', waitForAsync(() => {
    const component = fixture.point.componentInstance;

    component['playerForm'].setValue({ name: 'Name' });
    component.onSubmit();

    component.newPlayer.subscribe((newPlayer) => {
      expect(newPlayer).toEqual('Name');
      expect(component['playerForm'].reset).toHaveBeenCalled();
    });
  }));
});
