import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { AfterDeathRoundQueueStore } from './after-death-round-queue.store';
import { StorageService } from '@/services/storage/storage.service';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { RoundEnum } from '@/enums/round.enum';

describe('AfterDeathRoundQueueStore without storage', () => {
  let service: AfterDeathRoundQueueStore;
  const mockState = [RoundEnum.CHASSEUR];

  ngMocks.faster();

  beforeAll(() => MockBuilder(AfterDeathRoundQueueStore).mock(StorageService));

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
    () =>
      (service = MockRender(AfterDeathRoundQueueStore).point.componentInstance),
  );

  it('should init state with default value', () => {
    expect(service.state()).toEqual([]);
  });

  it('should store new value to storage', () => {
    service.state.set(mockState);

    TestBed.tick();

    const storageService = ngMocks.get(StorageService);
    expect(storageService.set).toHaveBeenCalledWith(
      expect.anything(),
      mockState,
    );
  });

  it('should store new value to storage with storage key store.afterDeathRoundQueue', () => {
    service.state.set([]);

    TestBed.tick();

    const storageService = ngMocks.get(StorageService);
    expect(storageService.set).toHaveBeenCalledWith(
      'store.afterDeathRoundQueue',
      expect.anything(),
    );
  });

  afterAll(MockReset);
});

describe('AfterDeathRoundQueueStore with storage init', () => {
  let service: AfterDeathRoundQueueStore;

  const mockState = [RoundEnum.CHASSEUR];

  ngMocks.faster();

  beforeAll(() => MockBuilder(AfterDeathRoundQueueStore).mock(StorageService));

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
    () =>
      (service = MockRender(AfterDeathRoundQueueStore).point.componentInstance),
  );

  it('should init state with storage value', () => {
    expect(service.state()).toEqual(mockState);
  });

  afterAll(MockReset);
});
