import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { RoundHandlersStore } from './round-handlers-store';
import { Storage } from '@/storage/storage';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { Round } from '@/types/round';

describe('RoundHandlersStore without storage', () => {
  let service: RoundHandlersStore;
  const mockState = new Set([
    Round.VILLAGEOIS,
    Round.LOUP_GAROU,
    Round.CAPITAINE,
  ]);
  const mockStored = [Round.VILLAGEOIS, Round.LOUP_GAROU, Round.CAPITAINE];

  ngMocks.faster();

  beforeAll(() => MockBuilder(RoundHandlersStore).mock(Storage));

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
    () => (service = MockRender(RoundHandlersStore).point.componentInstance),
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

  it('should store new value to storage with storage key store.roundHandlers', () => {
    service.state.set(new Set());

    TestBed.tick();

    const storage = ngMocks.get(Storage);
    expect(storage.set).toHaveBeenCalledWith(
      'store.roundHandlers',
      expect.anything(),
    );
  });

  afterAll(MockReset);
});

describe('RoundHandlersStore with storage init', () => {
  let service: RoundHandlersStore;

  const mockState = new Set([
    Round.VILLAGEOIS,
    Round.LOUP_GAROU,
    Round.CAPITAINE,
  ]);
  const mockStored = [Round.VILLAGEOIS, Round.LOUP_GAROU, Round.CAPITAINE];

  ngMocks.faster();

  beforeAll(() => MockBuilder(RoundHandlersStore).mock(Storage));

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
    () => (service = MockRender(RoundHandlersStore).point.componentInstance),
  );

  it('should init state with storage value', () => {
    expect(service.state()).toEqual(mockState);
  });

  afterAll(MockReset);
});
