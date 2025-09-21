import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import {
  MockBuilder,
  MockedComponentFixture,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { PlayerRoleModal } from './player-role-modal';

describe('PlayerRoleModal', () => {
  let fixture: MockedComponentFixture<PlayerRoleModal>;

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(PlayerRoleModal).mock(DialogRef).mock(DIALOG_DATA),
  );

  beforeAll(() => {
    MockInstance(DialogRef, () => ({
      close: jest.fn(),
    }));
    fixture = MockRender(PlayerRoleModal);
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
