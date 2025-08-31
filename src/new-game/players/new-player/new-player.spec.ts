import { FormBuilder } from '@angular/forms';
import {
  MockBuilder,
  MockedComponentFixture,
  MockRender,
  ngMocks,
} from 'ng-mocks';
import { NewPlayer } from './new-player';

describe('NewPlayer', () => {
  let fixture: MockedComponentFixture<NewPlayer>;

  ngMocks.faster();

  beforeAll(async () => MockBuilder(NewPlayer).keep(FormBuilder));

  beforeAll(() => (fixture = MockRender(NewPlayer)));

  it('should create', () => {
    expect(fixture.point.componentInstance).toBeTruthy();
  });

  it('should emit name on submit', async () => {
    const component = fixture.point.componentInstance;

    // spy reset to assert it was called
    jest.spyOn(component['playerForm'], 'reset').mockImplementation(() => {});
    jest.spyOn(component.newPlayer, 'emit').mockImplementation((val) => val);

    component['playerForm'].setValue({ name: 'Name' });
    component.onSubmit();

    expect(component.newPlayer.emit).toHaveBeenCalledWith('Name');
    expect(component['playerForm'].reset).toHaveBeenCalled();
  });
});
