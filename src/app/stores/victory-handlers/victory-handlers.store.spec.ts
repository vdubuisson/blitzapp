import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { VictoryHandlersStore } from './victory-handlers.store';
import { StorageService } from '@/services/storage/storage.service';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { VictoryEnum } from '@/enums/victory.enum';

describe('VictoryHandlersStore without storage', () => {
  let service: VictoryHandlersStore;
  const mockState = new Set([VictoryEnum.VILLAGEOIS, VictoryEnum.LOUP_GAROU]);
  const mockStored = [VictoryEnum.VILLAGEOIS, VictoryEnum.LOUP_GAROU];

  ngMocks.faster();

  beforeAll(() => MockBuilder(VictoryHandlersStore).mock(StorageService));

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
    () => (service = MockRender(VictoryHandlersStore).point.componentInstance),
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

  it('should store new value to storage with storage key store.victoryHandlers', () => {
    service.state.set(new Set());

    TestBed.tick();

    const storageService = ngMocks.get(StorageService);
    expect(storageService.set).toHaveBeenCalledWith(
      'store.victoryHandlers',
      expect.anything(),
    );
  });

  afterAll(MockReset);
});

describe('RoundHandlersStore with storage init', () => {
  let service: VictoryHandlersStore;

  const mockState = new Set([VictoryEnum.VILLAGEOIS, VictoryEnum.LOUP_GAROU]);
  const mockStored = [VictoryEnum.VILLAGEOIS, VictoryEnum.LOUP_GAROU];

  ngMocks.faster();

  beforeAll(() => MockBuilder(VictoryHandlersStore).mock(StorageService));

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
    () => (service = MockRender(VictoryHandlersStore).point.componentInstance),
  );

  it('should init state with storage value', () => {
    expect(service.state()).toEqual(mockState);
  });

  afterAll(MockReset);
});
