import { Storage } from '@/storage/storage';
import { RoundEnum } from '@/types/round';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/jest';
import { of } from 'rxjs';
import { UniqueRoundsPassedStore } from './unique-rounds-passed-store';

describe('UniqueRoundsPassedStore', () => {
  let spectator: SpectatorService<UniqueRoundsPassedStore>;

  const mockState = new Set([
    RoundEnum.VILLAGEOIS,
    RoundEnum.LOUP_GAROU,
    RoundEnum.CAPITAINE,
  ]);
  const mockStored = [
    RoundEnum.VILLAGEOIS,
    RoundEnum.LOUP_GAROU,
    RoundEnum.CAPITAINE,
  ];

  const createService = createServiceFactory({
    service: UniqueRoundsPassedStore,
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
      expect(storage.set).toHaveBeenCalledWith(expect.anything(), mockStored);
    });

    it('should store new value to storage with storage key store.uniqueRoundsPassed', () => {
      spectator.service.state.set(new Set());

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(
        'store.uniqueRoundsPassed',
        expect.anything(),
      );
    });
  });

  describe('with storage init', () => {
    beforeEach(() => {
      spectator = createService({
        providers: [
          mockProvider(Storage, {
            get: jest.fn().mockReturnValue(of(mockStored)),
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
