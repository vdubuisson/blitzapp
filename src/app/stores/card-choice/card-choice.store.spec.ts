import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { CardList, StoredCardList } from '@/models/card-list.model';
import { StorageService } from '@/services/storage/storage.service';
import { TestBed } from '@angular/core/testing';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { of } from 'rxjs';
import { CardChoiceStore } from './card-choice.store';

describe('CardChoiceStore without storage', () => {
  let service: CardChoiceStore;
  const mockState: CardList = {
    selectedRoles: new Set<PlayerRoleEnum>([PlayerRoleEnum.SORCIERE]),
    villageois: 4,
    loupGarou: 1,
    playersNumber: 6,
  };

  const mockStateStored: StoredCardList = {
    selectedRoles: [PlayerRoleEnum.SORCIERE],
    villageois: 4,
    loupGarou: 1,
    playersNumber: 6,
  };

  ngMocks.faster();

  beforeAll(() => MockBuilder(CardChoiceStore).mock(StorageService));

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
    () => (service = MockRender(CardChoiceStore).point.componentInstance),
  );

  it('should init state with default value', () => {
    expect(service.state()).toEqual({
      villageois: 0,
      loupGarou: 0,
      playersNumber: 0,
      selectedRoles: new Set(),
    });
  });

  it('should store new value to storage', () => {
    service.state.set({ ...mockState });

    TestBed.flushEffects();

    const storageService = ngMocks.get(StorageService);
    expect(storageService.set).toHaveBeenCalledWith(
      expect.anything(),
      mockStateStored,
    );
  });

  it('should store new value to storage with storage key store.cardChoice', () => {
    service.state.set({ ...mockState });

    TestBed.flushEffects();

    const storageService = ngMocks.get(StorageService);
    expect(storageService.set).toHaveBeenCalledWith(
      'store.cardChoice',
      expect.anything(),
    );
  });

  afterAll(MockReset);
});

describe('CardChoiceStore with storage init', () => {
  let service: CardChoiceStore;

  const mockState: CardList = {
    selectedRoles: new Set<PlayerRoleEnum>([PlayerRoleEnum.SORCIERE]),
    villageois: 4,
    loupGarou: 1,
    playersNumber: 6,
  };

  const mockStateStored: StoredCardList = {
    selectedRoles: [PlayerRoleEnum.SORCIERE],
    villageois: 4,
    loupGarou: 1,
    playersNumber: 6,
  };

  ngMocks.faster();

  beforeAll(() => MockBuilder(CardChoiceStore).mock(StorageService));

  beforeAll(() => {
    MockInstance(
      StorageService,
      () =>
        ({
          get: (_: string) => of(mockStateStored),
        }) as Partial<StorageService>,
    );
  });

  beforeAll(
    () => (service = MockRender(CardChoiceStore).point.componentInstance),
  );

  it('should init state with storage value', () => {
    expect(service.state()).toEqual(mockState);
  });

  afterAll(MockReset);
});
