import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { Player, StoredPlayer } from '@/shared/types/player';
import { Storage } from '@/storage/storage';
import { TestBed } from '@angular/core/testing';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { of } from 'rxjs';
import { DeathsToAnnounceStore } from './deaths-to-announce-store';

describe('DeathsToAnnounceStore without storage', () => {
  let service: DeathsToAnnounceStore;
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

  beforeAll(() => MockBuilder(DeathsToAnnounceStore).mock(Storage));

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
    () => (service = MockRender(DeathsToAnnounceStore).point.componentInstance),
  );

  it('should init state with default value', () => {
    expect(service.state()).toEqual([]);
  });

  it('should store new value to storage', () => {
    service.state.set([...mockState]);

    TestBed.tick();

    const storage = ngMocks.get(Storage);
    expect(storage.set).toHaveBeenCalledWith(
      expect.anything(),
      mockStateStored,
    );
  });

  it('should store new value to storage with storage key store.deathsToAnnounce', () => {
    service.state.set([...mockState]);

    TestBed.tick();

    const storage = ngMocks.get(Storage);
    expect(storage.set).toHaveBeenCalledWith(
      'store.deathsToAnnounce',
      expect.anything(),
    );
  });

  afterAll(MockReset);
});

describe('DeathsToAnnounceStore with storage init', () => {
  let service: DeathsToAnnounceStore;

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

  beforeAll(() => MockBuilder(DeathsToAnnounceStore).mock(Storage));

  beforeAll(() => {
    MockInstance(
      Storage,
      () =>
        ({
          get: (_: string) => of(mockStateStored),
        }) as Partial<Storage>,
    );
  });

  beforeAll(
    () => (service = MockRender(DeathsToAnnounceStore).point.componentInstance),
  );

  it('should init state with storage value', () => {
    expect(service.state()).toEqual(mockState);
  });

  afterAll(MockReset);
});
