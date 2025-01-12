import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { CurrentRoundStore } from './current-round.store';
import { StorageService } from '@/services/storage/storage.service';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { Round } from '@/models/round.model';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';

describe('CurrentRoundStore without storage', () => {
  let service: CurrentRoundStore;
  const mockState: Round = {
    role: RoundEnum.VOLEUR,
    selectablePlayers: [],
    maxSelectable: 0,
    minSelectable: 0,
    isDuringDay: false,
    type: RoundTypeEnum.DEFAULT,
  };

  ngMocks.faster();

  beforeAll(() => MockBuilder(CurrentRoundStore).mock(StorageService));

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
    () => (service = MockRender(CurrentRoundStore).point.componentInstance),
  );

  it('should init state with default value null', () => {
    expect(service.state()).toEqual(null);
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

  it('should store new value to storage with storage key store.currentRound', () => {
    service.state.set({} as Round);

    TestBed.flushEffects();

    const storageService = ngMocks.get(StorageService);
    expect(storageService.set).toHaveBeenCalledWith(
      'store.currentRound',
      expect.anything(),
    );
  });

  afterAll(MockReset);
});

describe('CurrentRoundStore with storage init', () => {
  let service: CurrentRoundStore;

  const mockState: Round = {
    role: RoundEnum.VOLEUR,
    selectablePlayers: [],
    maxSelectable: 0,
    minSelectable: 0,
    isDuringDay: false,
    type: RoundTypeEnum.DEFAULT,
  };

  ngMocks.faster();

  beforeAll(() => MockBuilder(CurrentRoundStore).mock(StorageService));

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
    () => (service = MockRender(CurrentRoundStore).point.componentInstance),
  );

  it('should init state with storage value', () => {
    expect(service.state()).toEqual(mockState);
  });

  afterAll(MockReset);
});
