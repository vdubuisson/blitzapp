import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import {
  MockBuilder,
  MockedComponentFixture,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { TextModal } from './text-modal';

describe('TextModalComponent', () => {
  let fixture: MockedComponentFixture<TextModal>;

  ngMocks.faster();

  beforeAll(() => MockBuilder(TextModal).mock(DialogRef).mock(DIALOG_DATA, {}));

  beforeAll(() => {
    MockInstance(DialogRef, () => ({
      close: jest.fn(),
    }));
    fixture = MockRender(TextModal);
  });

  it('should create', () => {
    const component = fixture.point.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should dismiss with false on cancel', () => {
    const component = fixture.point.componentInstance;

    component.close(false);

    const dialogRef = ngMocks.get(DialogRef);

    expect(dialogRef.close).toHaveBeenCalledWith(false);
  });

  it('should dismiss with true on confirm', () => {
    const component = fixture.point.componentInstance;

    component.close(true);

    const dialogRef = ngMocks.get(DialogRef);

    expect(dialogRef.close).toHaveBeenCalledWith(true);
  });

  afterAll(MockReset);
});
