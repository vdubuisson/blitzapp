import { ModalManager } from '@/layout/modal/modal-manager';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/vitest';
import { AnnouncementsQueueStore } from './announcements-queue/announcements-queue-store';
import { Announcer } from './announcer';
import { signal } from '@angular/core';

describe('Announcer', () => {
  let spectator: SpectatorService<Announcer>;

  const createService = createServiceFactory({
    service: Announcer,
    mocks: [ModalManager],
    providers: [mockProvider(AnnouncementsQueueStore, { state: signal([]) })],
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
