import { Player, StoredPlayer } from '@/shared/types/player';
import { Storage } from '@/storage/storage';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/jest';
import { of } from 'rxjs';
import { DeathsToAnnounceStore } from './deaths-to-announce-store';

describe('DeathsToAnnounceStore', () => {
  let spectator: SpectatorService<DeathsToAnnounceStore>;

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

  const createService = createServiceFactory({
    service: DeathsToAnnounceStore,
  });

  describe('without storage', () => {
    beforeEach(() => {
      spectator = createService({
        providers: [
          mockProvider(Storage, {
            get: jest.fn().mockReturnValue(of(null)),
            set: jest.fn(),
          }),
        ],
      });
    });

    it('should init state with default value', () => {
      expect(spectator.service.state()).toEqual([]);
    });

    it('should store new value to storage', () => {
      spectator.service.state.set([...mockState]);

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(
        expect.anything(),
        mockStateStored,
      );
    });

    it('should store new value to storage with storage key store.deathsToAnnounce', () => {
      spectator.service.state.set([...mockState]);

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(
        'store.deathsToAnnounce',
        expect.anything(),
      );
    });
  });

  describe('with storage init', () => {
    beforeEach(() => {
      spectator = createService({
        providers: [
          mockProvider(Storage, {
            get: jest.fn().mockReturnValue(of(mockStateStored)),
            set: jest.fn(),
          }),
        ],
      });
    });

    it('should init state with storage value', () => {
      expect(spectator.service.state()).toEqual(mockState);
    });
  });
});
