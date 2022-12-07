import { AlertController } from '@ionic/angular';
import { MockService } from 'ng-mocks';
import { AnnouncementService } from './announcement.service';

describe('AnnouncementService', () => {
  let service: AnnouncementService;
  let alertController: AlertController;

  beforeEach(() => {
    alertController = MockService(AlertController);
    service = new AnnouncementService(alertController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
