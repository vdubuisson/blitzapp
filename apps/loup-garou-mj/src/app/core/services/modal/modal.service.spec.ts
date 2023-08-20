import { ModalService } from './modal.service';
import { ModalController } from '@ionic/angular';
import { MockService } from 'ng-mocks';
import { waitForAsync } from '@angular/core/testing';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerCardModalComponent } from '../../components/player-card-modal/player-card-modal.component';

describe('ModalService', () => {
  let service: ModalService;

  let modalCtrl: ModalController;
  let modal: HTMLIonModalElement;

  beforeEach(() => {
    modalCtrl = MockService(ModalController);
    modal = {
      present: () => new Promise(() => {}),
      onDidDismiss: () => new Promise(() => {}),
    } as HTMLIonModalElement;
    jest.spyOn(modalCtrl, 'create').mockResolvedValue(modal);

    service = new ModalService(modalCtrl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create PlayerCardModalComponent on showPlayerCard', waitForAsync(() => {
    service.showPlayerCard(PlayerRoleEnum.VILLAGEOIS).subscribe(() => {
      expect(modalCtrl.create).toHaveBeenCalledWith({
        component: PlayerCardModalComponent,
        componentProps: { card: PlayerRoleEnum.VILLAGEOIS },
      });
    });
  }));
});
