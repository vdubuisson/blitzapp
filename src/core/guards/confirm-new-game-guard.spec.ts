import { GameOrchestrator } from '@/current-game/orchestrator/game-orchestrator';
import { ModalManager } from '@/layout/modal/modal-manager';
import { signal } from '@angular/core';
import {
  createInjectionContextFactory,
  mockProvider,
  SpectatorInjectionContext,
} from '@ngneat/spectator/vitest';
import { firstValueFrom, Observable, of } from 'rxjs';
import { confirmNewGameGuard } from './confirm-new-game-guard';

describe('confirmNewGameGuard', () => {
  let spectator: SpectatorInjectionContext;
  const isGameInProgress = signal(false);
  const createContext = createInjectionContextFactory({
    providers: [mockProvider(GameOrchestrator, { isGameInProgress })],
    mocks: [ModalManager],
  });

  beforeEach(() => {
    spectator = createContext();
  });

  it('should return true if no game in progress', () => {
    isGameInProgress.set(false);
    const result = spectator.runInInjectionContext(confirmNewGameGuard);
    expect(result).toBe(true);
  });

  it('should return true if game in progress and confirm', async () => {
    isGameInProgress.set(true);

    const modalManager = spectator.inject(ModalManager);
    modalManager.showTextModal.mockReturnValue(of(true));

    const result = await firstValueFrom(
      spectator.runInInjectionContext(
        confirmNewGameGuard,
      ) as Observable<boolean>,
    );
    expect(result).toBe(true);
  });

  it('should return false if game in progress and cancel', async () => {
    isGameInProgress.set(true);

    const modalManager = spectator.inject(ModalManager);
    modalManager.showTextModal.mockReturnValue(of(false));

    const result = await firstValueFrom(
      spectator.runInInjectionContext(
        confirmNewGameGuard,
      ) as Observable<boolean>,
    );
    expect(result).toBe(false);
  });
});
