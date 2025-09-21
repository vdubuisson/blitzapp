import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { BeforeDeathRoundStore } from './before-death-round-store';
import { Storage } from '@/storage/storage';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { Round } from '@/types/round';

describe('BeforeDeathRoundStore without storage', () => {
  let service: BeforeDeathRoundStore;
  const mockState = Round.VILLAGEOIS;

  ngMocks.faster();

  beforeAll(() => MockBuilder(BeforeDeathRoundStore).mock(Storage));

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
    () => (service = MockRender(BeforeDeathRoundStore).point.componentInstance),
  );

  it('should init state with default value', () => {
    expect(service.state()).toEqual(null);
  });

  it('should store new value to storage', () => {
    service.state.set(mockState);

    TestBed.tick();

    const storage = ngMocks.get(Storage);
    expect(storage.set).toHaveBeenCalledWith(expect.anything(), mockState);
  });

  it('should store new value to storage with storage key store.beforeDeathRound', () => {
    service.state.set(Round.LOUP_GAROU);

    TestBed.tick();

    const storage = ngMocks.get(Storage);
    expect(storage.set).toHaveBeenCalledWith(
      'store.beforeDeathRound',
      expect.anything(),
    );
  });

  afterAll(MockReset);
});

describe('BeforeDeathRoundStore with storage init', () => {
  let service: BeforeDeathRoundStore;

  const mockState = Round.VILLAGEOIS;

  ngMocks.faster();

  beforeAll(() => MockBuilder(BeforeDeathRoundStore).mock(Storage));

  beforeAll(() => {
    MockInstance(
      Storage,
      () =>
        ({
          get: (_: string) => of(mockState),
        }) as Partial<Storage>,
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
