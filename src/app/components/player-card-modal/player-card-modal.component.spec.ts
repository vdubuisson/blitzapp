import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import {
  MockBuilder,
  MockedComponentFixture,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { PlayerCardModalComponent } from './player-card-modal.component';

describe('PlayerCardModalComponent', () => {
  let fixture: MockedComponentFixture<PlayerCardModalComponent>;

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(PlayerCardModalComponent).mock(DialogRef).mock(DIALOG_DATA),
  );

  beforeAll(() => {
    MockInstance(DialogRef, () => ({
      close: jest.fn(),
    }));
    fixture = MockRender(PlayerCardModalComponent);
  });

  it('should create', () => {
    const component = fixture.point.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should dismiss on continue', () => {
    const component = fixture.point.componentInstance;

    component.continue();

    const dialogRef = ngMocks.get(DialogRef);

    expect(dialogRef.close).toHaveBeenCalled();
  });

  afterAll(MockReset);
});
