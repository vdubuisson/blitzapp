import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { RoundHandlersStore } from './round-handlers.store';
import { StorageService } from '@/services/storage/storage.service';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { RoundEnum } from '@/enums/round.enum';

describe('RoundHandlersStore without storage', () => {
  let service: RoundHandlersStore;
  const mockState = new Set([
    RoundEnum.VILLAGEOIS,
    RoundEnum.LOUP_GAROU,
    RoundEnum.CAPITAINE,
  ]);
  const mockStored = [
    RoundEnum.VILLAGEOIS,
    RoundEnum.LOUP_GAROU,
    RoundEnum.CAPITAINE,
  ];

  ngMocks.faster();

  beforeAll(() => MockBuilder(RoundHandlersStore).mock(StorageService));

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
    () => (service = MockRender(RoundHandlersStore).point.componentInstance),
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
      mockStored,
    );
  });

  it('should store new value to storage with storage key store.roundHandlers', () => {
    service.state.set(new Set());

    TestBed.tick();

    const storageService = ngMocks.get(StorageService);
    expect(storageService.set).toHaveBeenCalledWith(
      'store.roundHandlers',
      expect.anything(),
    );
  });

  afterAll(MockReset);
});

describe('RoundHandlersStore with storage init', () => {
  let service: RoundHandlersStore;

  const mockState = new Set([
    RoundEnum.VILLAGEOIS,
    RoundEnum.LOUP_GAROU,
    RoundEnum.CAPITAINE,
  ]);
  const mockStored = [
    RoundEnum.VILLAGEOIS,
    RoundEnum.LOUP_GAROU,
    RoundEnum.CAPITAINE,
  ];

  ngMocks.faster();

  beforeAll(() => MockBuilder(RoundHandlersStore).mock(StorageService));

  beforeAll(() => {
    MockInstance(
      StorageService,
      () =>
        ({
          get: (_: string) => of(mockStored),
        }) as Partial<StorageService>,
    );
  });

  beforeAll(
    () => (service = MockRender(RoundHandlersStore).point.componentInstance),
  );

  it('should init state with storage value', () => {
    expect(service.state()).toEqual(mockState);
  });

  afterAll(MockReset);
});
