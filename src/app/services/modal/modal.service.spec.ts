import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { waitForAsync } from '@angular/core/testing';
import { MockService } from 'ng-mocks';
import { Subject } from 'rxjs';
import { PlayerCardModalComponent } from '@/components/player-card-modal/player-card-modal.component';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;

  let dialog: Dialog;
  let dialogRef: DialogRef;

  beforeEach(() => {
    dialog = MockService(Dialog);
    dialogRef = {
      closed: new Subject().asObservable(),
    } as DialogRef;
    jest.spyOn(dialog, 'open').mockReturnValue(dialogRef);

    service = new ModalService(dialog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create PlayerCardModalComponent on showPlayerCard', waitForAsync(() => {
    service.showPlayerCard(PlayerRoleEnum.VILLAGEOIS).subscribe(() => {
      expect(dialog.open).toHaveBeenCalledWith(PlayerCardModalComponent, {
        data: PlayerRoleEnum.VILLAGEOIS,
      });
    });
  }));
});
