import { PlayerCardModalComponent } from './player-card-modal.component';
import { ModalController } from '@ionic/angular';
import { MockService } from 'ng-mocks';

describe('PlayerCardModalComponent', () => {
  let component: PlayerCardModalComponent;

  let modalCtrl: ModalController;

  beforeEach(() => {
    modalCtrl = MockService(ModalController);
    jest.spyOn(modalCtrl, 'dismiss');

    component = new PlayerCardModalComponent(modalCtrl);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dismiss on continue', () => {
    component.continue();

    expect(modalCtrl.dismiss).toHaveBeenCalled();
  });
});
