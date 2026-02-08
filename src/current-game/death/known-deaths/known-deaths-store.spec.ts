import { Storage } from '@/storage/storage';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/jest';
import { of } from 'rxjs';
import { KnownDeathsStore } from './known-deaths-store';

describe('KnownDeathsStore', () => {
  let spectator: SpectatorService<KnownDeathsStore>;

  const mockState = new Set<number>([1, 2, 3]);
  const mockStateStored = [1, 2, 3];

  const createService = createServiceFactory({
    service: KnownDeathsStore,
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
      expect(spectator.service.state()).toEqual(new Set());
    });

    it('should store new value to storage', () => {
      spectator.service.state.set(mockState);

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(
        expect.anything(),
        mockStateStored,
      );
    });

    it('should store new value to storage with storage key store.knownDeaths', () => {
      spectator.service.state.set(new Set(mockState));

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(
        'store.knownDeaths',
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
