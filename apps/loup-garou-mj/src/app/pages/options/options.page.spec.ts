import { MockService } from 'ng-mocks';
import { of } from 'rxjs';
import { StorageService } from '../../core/services/storage/storage.service';
import { OptionsPage } from './options.page';
import { ModalService } from '../../core/services/modal/modal.service';

describe('OptionsPage', () => {
  let page: OptionsPage;
  let storageService: StorageService;
  let modalService: ModalService;

  beforeEach(() => {
    storageService = MockService(StorageService);
    modalService = MockService(ModalService);
    page = new OptionsPage(storageService, modalService);
  });

  it('should clear storage', () => {
    jest.spyOn(storageService, 'clear').mockReturnValue(of(undefined));

    page['clear']();

    expect(storageService.clear).toHaveBeenCalled();
  });
});
