import { Storage } from '@/storage/storage';
import { RoundEnum } from '@/types/round';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/jest';
import { of } from 'rxjs';
import { BeforeDeathRoundStore } from './before-death-round-store';

describe('BeforeDeathRoundStore', () => {
  let spectator: SpectatorService<BeforeDeathRoundStore>;

  const mockState = RoundEnum.VILLAGEOIS;

  const createService = createServiceFactory({
    service: BeforeDeathRoundStore,
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
      expect(spectator.service.state()).toEqual(null);
    });

    it('should store new value to storage', () => {
      spectator.service.state.set(mockState);

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(expect.anything(), mockState);
    });

    it('should store new value to storage with storage key store.beforeDeathRound', () => {
      spectator.service.state.set(RoundEnum.LOUP_GAROU);

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(
        'store.beforeDeathRound',
        expect.anything(),
      );
    });
  });

  describe('with storage init', () => {
    beforeEach(() => {
      spectator = createService({
        providers: [
          mockProvider(Storage, {
            get: jest.fn().mockReturnValue(of(mockState)),
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
