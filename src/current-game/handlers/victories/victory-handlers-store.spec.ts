import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { VictoryHandlersStore } from './victory-handlers-store';
import { Storage } from '@/storage/storage';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { Victory } from '@/types/victory';

describe('VictoryHandlersStore without storage', () => {
  let service: VictoryHandlersStore;
  const mockState = new Set([Victory.VILLAGEOIS, Victory.LOUP_GAROU]);
  const mockStored = [Victory.VILLAGEOIS, Victory.LOUP_GAROU];

  ngMocks.faster();

  beforeAll(() => MockBuilder(VictoryHandlersStore).mock(Storage));

  beforeAll(() => {
    MockInstance(
      Storage,
      () =>
        ({
          get: (_: string) => of(null),
          set: jest.fn(),
        }) as Partial<Storage>,
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

    const storage = ngMocks.get(Storage);
    expect(storage.set).toHaveBeenCalledWith(expect.anything(), mockStored);
  });

  it('should store new value to storage with storage key store.victoryHandlers', () => {
    service.state.set(new Set());

    TestBed.tick();

    const storage = ngMocks.get(Storage);
    expect(storage.set).toHaveBeenCalledWith(
      'store.victoryHandlers',
      expect.anything(),
    );
  });

  afterAll(MockReset);
});

describe('RoundHandlersStore with storage init', () => {
  let service: VictoryHandlersStore;

  const mockState = new Set([Victory.VILLAGEOIS, Victory.LOUP_GAROU]);
  const mockStored = [Victory.VILLAGEOIS, Victory.LOUP_GAROU];

  ngMocks.faster();

  beforeAll(() => MockBuilder(VictoryHandlersStore).mock(Storage));

  beforeAll(() => {
    MockInstance(
      Storage,
      () =>
        ({
          get: (_: string) => of(mockStored),
        }) as Partial<Storage>,
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
