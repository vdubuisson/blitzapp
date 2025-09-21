import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { DefaultRoundHandlersStore } from './default-round-handlers-store';
import { Storage } from '@/storage/storage';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { Round } from '@/types/round';

describe('DefaultRoundHandlersStore without storage', () => {
  let service: DefaultRoundHandlersStore;
  const mockState = new Set([
    Round.VILLAGEOIS,
    Round.LOUP_GAROU,
    Round.CAPITAINE,
  ]);
  const mockStored = [Round.VILLAGEOIS, Round.LOUP_GAROU, Round.CAPITAINE];

  ngMocks.faster();

  beforeAll(() => MockBuilder(DefaultRoundHandlersStore).mock(Storage));

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
    () =>
      (service = MockRender(DefaultRoundHandlersStore).point.componentInstance),
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

  it('should store new value to storage with storage key store.defaultRoundHandlers', () => {
    service.state.set(new Set());

    TestBed.tick();

    const storage = ngMocks.get(Storage);
    expect(storage.set).toHaveBeenCalledWith(
      'store.defaultRoundHandlers',
      expect.anything(),
    );
  });

  afterAll(MockReset);
});

describe('DefaultRoundHandlersStore with storage init', () => {
  let service: DefaultRoundHandlersStore;

  const mockState = new Set([
    Round.VILLAGEOIS,
    Round.LOUP_GAROU,
    Round.CAPITAINE,
  ]);
  const mockStored = [Round.VILLAGEOIS, Round.LOUP_GAROU, Round.CAPITAINE];

  ngMocks.faster();

  beforeAll(() => MockBuilder(DefaultRoundHandlersStore).mock(Storage));

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
    () =>
      (service = MockRender(DefaultRoundHandlersStore).point.componentInstance),
  );

  it('should init state with storage value', () => {
    expect(service.state()).toEqual(mockState);
  });

  afterAll(MockReset);
});
