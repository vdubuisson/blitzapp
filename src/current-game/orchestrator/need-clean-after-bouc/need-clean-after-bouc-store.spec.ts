import { Storage } from '@/storage/storage';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/jest';
import { of } from 'rxjs';
import { NeedCleanAfterBoucStore } from './need-clean-after-bouc-store';

describe('NeedCleanAfterBoucStore', () => {
  let spectator: SpectatorService<NeedCleanAfterBoucStore>;

  const mockState = true;

  const createService = createServiceFactory({
    service: NeedCleanAfterBoucStore,
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

    it('should init state with default value false', () => {
      expect(spectator.service.state()).toEqual(false);
    });

    it('should store new value to storage', () => {
      spectator.service.state.set(mockState);

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(expect.anything(), mockState);
    });

    it('should store new value to storage with storage key store.needCleanAfterBouc', () => {
      spectator.service.state.set(false);

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(
        'store.needCleanAfterBouc',
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
