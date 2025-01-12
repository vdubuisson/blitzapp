import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { DayCountStore } from './day-count.store';
import { StorageService } from '@/services/storage/storage.service';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';

describe('DayCountStore without storage', () => {
  let service: DayCountStore;
  const mockState = 2;

  ngMocks.faster();

  beforeAll(() => MockBuilder(DayCountStore).mock(StorageService));

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
    () => (service = MockRender(DayCountStore).point.componentInstance),
  );

  it('should init state with default value 1', () => {
    expect(service.state()).toEqual(1);
  });

  it('should store new value to storage', () => {
    service.state.set(mockState);

    TestBed.flushEffects();

    const storageService = ngMocks.get(StorageService);
    expect(storageService.set).toHaveBeenCalledWith(
      expect.anything(),
      mockState,
    );
  });

  it('should store new value to storage with storage key store.dayCount', () => {
    service.state.set(3);

    TestBed.flushEffects();

    const storageService = ngMocks.get(StorageService);
    expect(storageService.set).toHaveBeenCalledWith(
      'store.dayCount',
      expect.anything(),
    );
  });

  afterAll(MockReset);
});

describe('DayCountStore with storage init', () => {
  let service: DayCountStore;

  const mockState = 2;

  ngMocks.faster();

  beforeAll(() => MockBuilder(DayCountStore).mock(StorageService));

  beforeAll(() => {
    MockInstance(
      StorageService,
      () =>
        ({
          get: (_: string) => of(mockState),
        }) as Partial<StorageService>,
    );
  });

  beforeAll(
    () => (service = MockRender(DayCountStore).point.componentInstance),
  );

  it('should init state with storage value', () => {
    expect(service.state()).toEqual(mockState);
  });

  afterAll(MockReset);
});
