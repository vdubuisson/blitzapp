import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { CurrentRoundConfigStore } from './current-round-config.store';
import { StorageService } from '@/services/storage/storage.service';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { RoundConfig } from '@/models/round-config.model';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';

describe('CurrentRoundConfigStore without storage', () => {
  let service: CurrentRoundConfigStore;
  const mockState: RoundConfig = {
    round: RoundEnum.VOLEUR,
    selectablePlayers: [],
    maxSelectable: 0,
    minSelectable: 0,
    isDuringDay: false,
    type: RoundTypeEnum.DEFAULT,
  };

  ngMocks.faster();

  beforeAll(() => MockBuilder(CurrentRoundConfigStore).mock(StorageService));

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
      (service = MockRender(CurrentRoundConfigStore).point.componentInstance),
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

  it('should store new value to storage with storage key store.currentRoundConfig', () => {
    service.state.set({} as RoundConfig);

    TestBed.flushEffects();

    const storageService = ngMocks.get(StorageService);
    expect(storageService.set).toHaveBeenCalledWith(
      'store.currentRoundConfig',
      expect.anything(),
    );
  });

  afterAll(MockReset);
});

describe('CurrentRoundConfigStore with storage init', () => {
  let service: CurrentRoundConfigStore;

  const mockState: RoundConfig = {
    round: RoundEnum.VOLEUR,
    selectablePlayers: [],
    maxSelectable: 0,
    minSelectable: 0,
    isDuringDay: false,
    type: RoundTypeEnum.DEFAULT,
  };

  ngMocks.faster();

  beforeAll(() => MockBuilder(CurrentRoundConfigStore).mock(StorageService));

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
      (service = MockRender(CurrentRoundConfigStore).point.componentInstance),
  );

  it('should init state with storage value', () => {
    expect(service.state()).toEqual(mockState);
  });

  afterAll(MockReset);
});
