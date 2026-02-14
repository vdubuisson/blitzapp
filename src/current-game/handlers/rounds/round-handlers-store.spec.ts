import { Storage } from '@/storage/storage';
import { RoundEnum } from '@/types/round';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/vitest';
import { of } from 'rxjs';
import { RoundHandlersStore } from './round-handlers-store';

describe('RoundHandlersStore', () => {
  let spectator: SpectatorService<RoundHandlersStore>;

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
    service: RoundHandlersStore,
  });

  describe('without storage', () => {
    beforeEach(() => {
      spectator = createService({
        providers: [
          mockProvider(Storage, {
            get: vi.fn().mockReturnValue(of(null)),
            set: vi.fn(),
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

    it('should store new value to storage with storage key store.roundHandlers', () => {
      spectator.service.state.set(new Set());

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(
        'store.roundHandlers',
        expect.anything(),
      );
    });
  });

  describe('with storage init', () => {
    beforeEach(() => {
      spectator = createService({
        providers: [
          mockProvider(Storage, {
            get: vi.fn().mockReturnValue(of(mockStored)),
            set: vi.fn(),
          }),
        ],
      });
    });

    it('should init state with storage value', () => {
      expect(spectator.service.state()).toEqual(mockState);
    });
  });
});
