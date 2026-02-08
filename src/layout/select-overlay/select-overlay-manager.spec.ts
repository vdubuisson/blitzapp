import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { SelectOverlayManager } from './select-overlay-manager';

describe('SelectOverlayManager', () => {
  let spectator: SpectatorService<SelectOverlayManager>;
  const createService = createServiceFactory({
    service: SelectOverlayManager,
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
