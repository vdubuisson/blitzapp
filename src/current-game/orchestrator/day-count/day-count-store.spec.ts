import { Storage } from '@/storage/storage';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/vitest';
import { of } from 'rxjs';
import { DayCountStore } from './day-count-store';

describe('DayCountStore', () => {
  let spectator: SpectatorService<DayCountStore>;

  const mockState = 2;

  const createService = createServiceFactory({
    service: DayCountStore,
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

    it('should init state with default value 1', () => {
      expect(spectator.service.state()).toEqual(1);
    });

    it('should store new value to storage', () => {
      spectator.service.state.set(mockState);

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(expect.anything(), mockState);
    });

    it('should store new value to storage with storage key store.dayCount', () => {
      spectator.service.state.set(3);

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(
        'store.dayCount',
        expect.anything(),
      );
    });
  });

  describe('with storage init', () => {
    beforeEach(() => {
      spectator = createService({
        providers: [
          mockProvider(Storage, {
            get: vi.fn().mockReturnValue(of(mockState)),
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
