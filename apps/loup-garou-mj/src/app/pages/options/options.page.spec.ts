import { ToastController } from '@ionic/angular';
import { MockService } from 'ng-mocks';
import { of } from 'rxjs';
import { StorageService } from '../../core/services/storage/storage.service';
import { OptionsPage } from './options.page';

describe('OptionsPage', () => {
  let page: OptionsPage;
  let storageService: StorageService;
  let toastController: ToastController;

  beforeEach(() => {
    storageService = MockService(StorageService);
    toastController = MockService(ToastController);
    page = new OptionsPage(storageService, toastController);
  });

  it('should clear storage', () => {
    jest.spyOn(storageService, 'clear').mockReturnValue(of(undefined));

    page['clear']();

    expect(storageService.clear).toHaveBeenCalled();
  });
});
