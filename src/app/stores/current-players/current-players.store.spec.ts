import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player, StoredPlayer } from '@/models/player.model';
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
import { CurrentPlayersStore } from './current-players.store';

describe('CurrentPlayersStore without storage', () => {
  let service: CurrentPlayersStore;
  const mockState: Player[] = [
    {
      id: 0,
      name: 'player0',
      role: PlayerRoleEnum.VILLAGEOIS,
      card: PlayerRoleEnum.VILLAGEOIS,
      statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
      isDead: true,
    },
  ];

  const mockStateStored: StoredPlayer[] = [
    {
      id: 0,
      name: 'player0',
      role: PlayerRoleEnum.VILLAGEOIS,
      card: PlayerRoleEnum.VILLAGEOIS,
      statuses: [PlayerStatusEnum.WOLF_TARGET],
      isDead: true,
    },
  ];

  ngMocks.faster();

  beforeAll(() => MockBuilder(CurrentPlayersStore).mock(StorageService));

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
    () => (service = MockRender(CurrentPlayersStore).point.componentInstance),
  );

  it('should init state with default value', () => {
    expect(service.state()).toEqual([]);
  });

  it('should store new value to storage', () => {
    service.state.set([...mockState]);

    TestBed.tick();

    const storageService = ngMocks.get(StorageService);
    expect(storageService.set).toHaveBeenCalledWith(
      expect.anything(),
      mockStateStored,
    );
  });

  it('should store new value to storage with storage key store.currentPlayers', () => {
    service.state.set([...mockState]);

    TestBed.tick();

    const storageService = ngMocks.get(StorageService);
    expect(storageService.set).toHaveBeenCalledWith(
      'store.currentPlayers',
      expect.anything(),
    );
  });

  afterAll(MockReset);
});

describe('CurrentPlayersStore with storage init', () => {
  let service: CurrentPlayersStore;

  const mockState: Player[] = [
    {
      id: 0,
      name: 'player0',
      role: PlayerRoleEnum.VILLAGEOIS,
      card: PlayerRoleEnum.VILLAGEOIS,
      statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
      isDead: true,
    },
  ];

  const mockStateStored: StoredPlayer[] = [
    {
      id: 0,
      name: 'player0',
      role: PlayerRoleEnum.VILLAGEOIS,
      card: PlayerRoleEnum.VILLAGEOIS,
      statuses: [PlayerStatusEnum.WOLF_TARGET],
      isDead: true,
    },
  ];

  ngMocks.faster();

  beforeAll(() => MockBuilder(CurrentPlayersStore).mock(StorageService));

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
    () => (service = MockRender(CurrentPlayersStore).point.componentInstance),
  );

  it('should init state with storage value', () => {
    expect(service.state()).toEqual(mockState);
  });

  afterAll(MockReset);
});
