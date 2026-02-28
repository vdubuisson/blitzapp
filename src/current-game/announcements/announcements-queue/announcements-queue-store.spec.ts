import { Storage } from '@/storage/storage';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/vitest';
import { of } from 'rxjs';
import { AnnouncementsQueueStore } from './announcements-queue-store';

describe('AnnouncementsQueueStore', () => {
  let spectator: SpectatorService<AnnouncementsQueueStore>;
  const mockState = [
    {
      header: 'header',
      message: 'message',
      confirmText: 'confirmText',
    },
  ];

  const createService = createServiceFactory({
    service: AnnouncementsQueueStore,
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

    it('should init state with default value []', () => {
      expect(spectator.service.state()).toEqual([]);
    });

    it('should store new value to storage', () => {
      spectator.service.state.set(mockState);

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(expect.anything(), mockState);
    });

    it('should store new value to storage with storage key store.announcementsQueue', () => {
      spectator.service.state.set([]);

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(
        'store.announcementsQueue',
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
