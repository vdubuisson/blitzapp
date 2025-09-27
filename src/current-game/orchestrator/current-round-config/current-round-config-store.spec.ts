import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { CurrentRoundConfigStore } from './current-round-config-store';
import { Storage } from '@/storage/storage';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { RoundConfig } from '@/shared/types/round-config';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';

describe('CurrentRoundConfigStore without storage', () => {
  let service: CurrentRoundConfigStore;
  const mockState: RoundConfig = {
    round: Round.VOLEUR,
    selectablePlayers: [],
    maxSelectable: 0,
    minSelectable: 0,
    isDuringDay: false,
    type: RoundType.DEFAULT,
  };

  ngMocks.faster();

  beforeAll(() => MockBuilder(CurrentRoundConfigStore).mock(Storage));

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
      (service = MockRender(CurrentRoundConfigStore).point.componentInstance),
  );

  it('should init state with default value null', () => {
    expect(service.state()).toEqual(null);
  });

  it('should store new value to storage', () => {
    service.state.set(mockState);

    TestBed.tick();

    const storage = ngMocks.get(Storage);
    expect(storage.set).toHaveBeenCalledWith(expect.anything(), mockState);
  });

  it('should store new value to storage with storage key store.currentRoundConfig', () => {
    service.state.set({} as RoundConfig);

    TestBed.tick();

    const storage = ngMocks.get(Storage);
    expect(storage.set).toHaveBeenCalledWith(
      'store.currentRoundConfig',
      expect.anything(),
    );
  });

  afterAll(MockReset);
});

describe('CurrentRoundConfigStore with storage init', () => {
  let service: CurrentRoundConfigStore;

  const mockState: RoundConfig = {
    round: Round.VOLEUR,
    selectablePlayers: [],
    maxSelectable: 0,
    minSelectable: 0,
    isDuringDay: false,
    type: RoundType.DEFAULT,
  };

  ngMocks.faster();

  beforeAll(() => MockBuilder(CurrentRoundConfigStore).mock(Storage));

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
    () =>
      (service = MockRender(CurrentRoundConfigStore).point.componentInstance),
  );

  it('should init state with storage value', () => {
    expect(service.state()).toEqual(mockState);
  });

  afterAll(MockReset);
});
