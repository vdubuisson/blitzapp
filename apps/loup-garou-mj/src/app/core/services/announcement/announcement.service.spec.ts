import { AlertController } from '@ionic/angular/standalone';
import { MockService } from 'ng-mocks';
import { of } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { AnnouncementService } from './announcement.service';

describe('AnnouncementService', () => {
  let service: AnnouncementService;
  let alertController: AlertController;
  let storageService: StorageService;

  beforeEach(() => {
    alertController = MockService(AlertController);
    storageService = MockService(StorageService);
    jest.spyOn(storageService, 'get').mockReturnValue(of(null));
    service = new AnnouncementService(alertController, storageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
