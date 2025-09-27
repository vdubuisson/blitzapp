import { ModalManager } from '@/layout/modal/modal-manager';
import { signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MockService } from 'ng-mocks';
import { firstValueFrom, Observable, of } from 'rxjs';
import { confirmNewGameGuard } from './confirm-new-game-guard';
import { GameOrchestrator } from '@/current-game/orchestrator/game-orchestrator';

describe('confirmNewGameGuard', () => {
  let gameOrchestrator: GameOrchestrator;
  let modalManager: ModalManager;
  let isGameInProgress: WritableSignal<boolean>;

  beforeEach(() => {
    isGameInProgress = signal(false);
    gameOrchestrator = {
      isGameInProgress: isGameInProgress.asReadonly(),
    } as GameOrchestrator;
    modalManager = MockService(ModalManager);

    TestBed.configureTestingModule({
      providers: [
        confirmNewGameGuard,
        { provide: GameOrchestrator, useValue: gameOrchestrator },
        { provide: ModalManager, useValue: modalManager },
      ],
    });
  });

  it('should return true if no game in progress', () => {
    const result = TestBed.runInInjectionContext<Observable<boolean> | boolean>(
      () => confirmNewGameGuard(),
    );
    expect(result).toBe(true);
  });

  it('should return true if game in progress and confirm', async () => {
    isGameInProgress.set(true);

    jest.spyOn(modalManager, 'showTextModal').mockReturnValue(of(true));

    const result = await TestBed.runInInjectionContext(async () =>
      firstValueFrom(confirmNewGameGuard() as Observable<boolean>),
    );
    expect(result).toBe(true);
  });

  it('should return false if game in progress and cancel', async () => {
    isGameInProgress.set(true);

    jest.spyOn(modalManager, 'showTextModal').mockReturnValue(of(false));

    const result = await TestBed.runInInjectionContext(async () =>
      firstValueFrom(confirmNewGameGuard() as Observable<boolean>),
    );
    expect(result).toBe(false);
  });
});
