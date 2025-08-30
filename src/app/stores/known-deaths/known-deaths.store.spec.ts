import { StorageService } from '@/services/storage/storage.service';
import { TestBed } from '@angular/core/testing';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { of } from 'rxjs';
import { KnownDeathsStore } from './known-deaths.store';

describe('KnownDeathsStore without storage', () => {
  let service: KnownDeathsStore;
  const mockState = new Set<number>([1, 2, 3]);

  const mockStateStored = [1, 2, 3];

  ngMocks.faster();

  beforeAll(() => MockBuilder(KnownDeathsStore).mock(StorageService));

  beforeAll(() => {
    MockInstance(
      StorageService,
      () =>
        ({
          get: (_: string) => of(null),
          set: jest.fn(),
        }) as Partial<StorageService>,
    );
  });

  beforeAll(
    () => (service = MockRender(KnownDeathsStore).point.componentInstance),
  );

  it('should init state with default value', () => {
    expect(service.state()).toEqual(new Set());
  });

  it('should store new value to storage', () => {
    service.state.set(mockState);

    TestBed.tick();

    const storageService = ngMocks.get(StorageService);
    expect(storageService.set).toHaveBeenCalledWith(
      expect.anything(),
      mockStateStored,
    );
  });

  it('should store new value to storage with storage key store.knownDeaths', () => {
    service.state.set(new Set(mockState));

    TestBed.tick();

    const storageService = ngMocks.get(StorageService);
    expect(storageService.set).toHaveBeenCalledWith(
      'store.knownDeaths',
      expect.anything(),
    );
  });

  afterAll(MockReset);
});

describe('KnownDeathsStore with storage init', () => {
  let service: KnownDeathsStore;

  const mockState = new Set<number>([1, 2, 3]);

  const mockStateStored = [1, 2, 3];

  ngMocks.faster();

  beforeAll(() => MockBuilder(KnownDeathsStore).mock(StorageService));

  beforeAll(() => {
    MockInstance(
      StorageService,
      () =>
        ({
          get: (_: string) => of(mockStateStored),
        }) as Partial<StorageService>,
    );
  });

  beforeAll(
    () => (service = MockRender(KnownDeathsStore).point.componentInstance),
  );

  it('should init state with storage value', () => {
    expect(service.state()).toEqual(mockState);
  });

  afterAll(MockReset);
});
