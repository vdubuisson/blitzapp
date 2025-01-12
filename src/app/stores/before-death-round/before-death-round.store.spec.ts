import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { BeforeDeathRoundStore } from './before-death-round.store';
import { StorageService } from '@/services/storage/storage.service';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { RoundEnum } from '@/enums/round.enum';

describe('BeforeDeathRoundStore without storage', () => {
  let service: BeforeDeathRoundStore;
  const mockState = RoundEnum.VILLAGEOIS;

  ngMocks.faster();

  beforeAll(() => MockBuilder(BeforeDeathRoundStore).mock(StorageService));

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
    () => (service = MockRender(BeforeDeathRoundStore).point.componentInstance),
  );

  it('should init state with default value undefined', () => {
    expect(service.state()).toEqual(undefined);
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

  it('should store new value to storage with storage key store.beforeDeathRound', () => {
    service.state.set(RoundEnum.LOUP_GAROU);

    TestBed.flushEffects();

    const storageService = ngMocks.get(StorageService);
    expect(storageService.set).toHaveBeenCalledWith(
      'store.beforeDeathRound',
      expect.anything(),
    );
  });

  afterAll(MockReset);
});

describe('BeforeDeathRoundStore with storage init', () => {
  let service: BeforeDeathRoundStore;

  const mockState = RoundEnum.VILLAGEOIS;

  ngMocks.faster();

  beforeAll(() => MockBuilder(BeforeDeathRoundStore).mock(StorageService));

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
    () => (service = MockRender(BeforeDeathRoundStore).point.componentInstance),
  );

  it('should init state with storage value', () => {
    expect(service.state()).toEqual(mockState);
  });

  afterAll(MockReset);
});
