import { ModalManager } from '@/layout/modal/modal-manager';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { AnnouncementsQueueStore } from './announcements-queue/announcements-queue-store';
import { Announcer } from './announcer';

describe('Announcer', () => {
  let spectator: SpectatorService<Announcer>;

  const createService = createServiceFactory({
    service: Announcer,
    mocks: [ModalManager, AnnouncementsQueueStore],
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
