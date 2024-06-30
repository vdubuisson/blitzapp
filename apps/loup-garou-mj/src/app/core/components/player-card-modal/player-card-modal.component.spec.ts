import { DialogRef } from '@angular/cdk/dialog';
import { MockService } from 'ng-mocks';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerCardModalComponent } from './player-card-modal.component';

describe('PlayerCardModalComponent', () => {
  let component: PlayerCardModalComponent;

  let dialogRef: DialogRef<void>;

  beforeEach(() => {
    dialogRef = MockService(DialogRef);
    jest.spyOn(dialogRef, 'close');

    component = new PlayerCardModalComponent(
      dialogRef,
      PlayerRoleEnum.VILLAGEOIS,
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dismiss on continue', () => {
    component.continue();

    expect(dialogRef.close).toHaveBeenCalled();
  });
});
