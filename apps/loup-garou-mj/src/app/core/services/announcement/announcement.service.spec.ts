import { MockService } from 'ng-mocks';
import { of } from 'rxjs';
import { ModalService } from '../modal/modal.service';
import { StorageService } from '../storage/storage.service';
import { AnnouncementService } from './announcement.service';

describe('AnnouncementService', () => {
  let service: AnnouncementService;
  let modalService: ModalService;
  let storageService: StorageService;

  beforeEach(() => {
    modalService = MockService(ModalService);
    storageService = MockService(StorageService);
    jest.spyOn(storageService, 'get').mockReturnValue(of(null));
    service = new AnnouncementService(storageService, modalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
