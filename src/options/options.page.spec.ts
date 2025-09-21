import { Storage } from '@/storage/storage';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { of } from 'rxjs';
import OptionsPage from './options.page';

describe('OptionsPage', () => {
  let page: OptionsPage;

  beforeAll(() => MockBuilder(OptionsPage).mock(Storage));

  beforeAll(() => {
    MockInstance(Storage, () => ({
      clear: jest.fn().mockReturnValue(of(undefined)),
    }));
  });

  beforeAll(() => {
    page = MockRender(OptionsPage).point.componentInstance;
  });

  it('should clear storage', () => {
    const storage = ngMocks.get(Storage);

    page['clear']();

    expect(storage.clear).toHaveBeenCalled();
  });

  afterAll(MockReset);
});
