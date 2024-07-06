import { DialogRef } from '@angular/cdk/dialog';
import { MockService } from 'ng-mocks';
import { TextModalComponent } from './text-modal.component';

describe('TextModalComponent', () => {
  let component: TextModalComponent;

  let dialogRef: DialogRef<boolean>;

  beforeEach(() => {
    dialogRef = MockService(DialogRef);
    jest.spyOn(dialogRef, 'close');

    component = new TextModalComponent(dialogRef, {});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dismiss with false on cancel', () => {
    component.close(false);

    expect(dialogRef.close).toHaveBeenCalledWith(false);
  });

  it('should dismiss with true on confirm', () => {
    component.close(true);

    expect(dialogRef.close).toHaveBeenCalledWith(true);
  });
});
