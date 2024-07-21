import { StorageService } from '@/services/storage/storage.service';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { of } from 'rxjs';
import { OptionsPage } from './options.page';

describe('OptionsPage', () => {
  let page: OptionsPage;

  beforeAll(() => MockBuilder(OptionsPage).mock(StorageService));

  beforeAll(() => {
    MockInstance(StorageService, () => ({
      clear: jest.fn().mockReturnValue(of(undefined)),
    }));
  });

  beforeAll(() => {
    page = MockRender(OptionsPage).point.componentInstance;
  });

  it('should clear storage', () => {
    const storageService = ngMocks.get(StorageService);

    page['clear']();

    expect(storageService.clear).toHaveBeenCalled();
  });

  afterAll(MockReset);
});
