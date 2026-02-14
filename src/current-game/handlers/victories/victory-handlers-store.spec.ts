import { Storage } from '@/storage/storage';
import { VictoryEnum } from '@/types/victory';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/vitest';
import { of } from 'rxjs';
import { VictoryHandlersStore } from './victory-handlers-store';

describe('VictoryHandlersStore', () => {
  let spectator: SpectatorService<VictoryHandlersStore>;

  const mockState = new Set([VictoryEnum.VILLAGEOIS, VictoryEnum.LOUP_GAROU]);
  const mockStored = [VictoryEnum.VILLAGEOIS, VictoryEnum.LOUP_GAROU];

  const createService = createServiceFactory({
    service: VictoryHandlersStore,
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

    it('should store new value to storage with storage key store.victoryHandlers', () => {
      spectator.service.state.set(new Set());

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(
        'store.victoryHandlers',
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
