import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
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
import { CurrentPlayersStore } from './current-players-store';

describe('CurrentPlayersStore without storage', () => {
  let service: CurrentPlayersStore;
  const mockState: Player[] = [
    {
      id: 0,
      name: 'player0',
      role: PlayerRole.VILLAGEOIS,
      card: PlayerRole.VILLAGEOIS,
      statuses: new Set([PlayerStatus.WOLF_TARGET]),
      isDead: true,
    },
  ];

  const mockStateStored: StoredPlayer[] = [
    {
      id: 0,
      name: 'player0',
      role: PlayerRole.VILLAGEOIS,
      card: PlayerRole.VILLAGEOIS,
      statuses: [PlayerStatus.WOLF_TARGET],
      isDead: true,
    },
  ];

  ngMocks.faster();

  beforeAll(() => MockBuilder(CurrentPlayersStore).mock(Storage));

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
    () => (service = MockRender(CurrentPlayersStore).point.componentInstance),
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

  it('should store new value to storage with storage key store.currentPlayers', () => {
    service.state.set([...mockState]);

    TestBed.tick();

    const storage = ngMocks.get(Storage);
    expect(storage.set).toHaveBeenCalledWith(
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
      role: PlayerRole.VILLAGEOIS,
      card: PlayerRole.VILLAGEOIS,
      statuses: new Set([PlayerStatus.WOLF_TARGET]),
      isDead: true,
    },
  ];

  const mockStateStored: StoredPlayer[] = [
    {
      id: 0,
      name: 'player0',
      role: PlayerRole.VILLAGEOIS,
      card: PlayerRole.VILLAGEOIS,
      statuses: [PlayerStatus.WOLF_TARGET],
      isDead: true,
    },
  ];

  ngMocks.faster();

  beforeAll(() => MockBuilder(CurrentPlayersStore).mock(Storage));

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
    () => (service = MockRender(CurrentPlayersStore).point.componentInstance),
  );

  it('should init state with storage value', () => {
    expect(service.state()).toEqual(mockState);
  });

  afterAll(MockReset);
});
