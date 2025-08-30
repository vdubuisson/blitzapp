import { GameService } from '@/services/game/game.service';
import { ModalService } from '@/services/modal/modal.service';
import { signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MockService } from 'ng-mocks';
import { firstValueFrom, Observable, of } from 'rxjs';
import { confirmNewGameGuard } from './confirm-new-game.guard';

describe('confirmNewGameGuard', () => {
  let gameService: GameService;
  let modalService: ModalService;
  let isGameInProgress: WritableSignal<boolean>;

  beforeEach(() => {
    isGameInProgress = signal(false);
    gameService = {
      isGameInProgress: isGameInProgress.asReadonly(),
    } as GameService;
    modalService = MockService(ModalService);

    TestBed.configureTestingModule({
      providers: [
        confirmNewGameGuard,
        { provide: GameService, useValue: gameService },
        { provide: ModalService, useValue: modalService },
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

    jest.spyOn(modalService, 'showTextModal').mockReturnValue(of(true));

    const result = await TestBed.runInInjectionContext(async () =>
      firstValueFrom(confirmNewGameGuard() as Observable<boolean>),
    );
    expect(result).toBe(true);
  });

  it('should return false if game in progress and cancel', async () => {
    isGameInProgress.set(true);

    jest.spyOn(modalService, 'showTextModal').mockReturnValue(of(false));

    const result = await TestBed.runInInjectionContext(async () =>
      firstValueFrom(confirmNewGameGuard() as Observable<boolean>),
    );
    expect(result).toBe(false);
  });
});
