import { signal, WritableSignal } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockService } from 'ng-mocks';
import { Observable, of } from 'rxjs';
import { GameService } from '@/services/game/game.service';
import { ModalService } from '@/services/modal/modal.service';
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

  it('should return true if game in progress and confirm', waitForAsync(() => {
    isGameInProgress.set(true);

    jest.spyOn(modalService, 'showTextModal').mockReturnValue(of(true));

    (
      TestBed.runInInjectionContext<Observable<boolean> | boolean>(() =>
        confirmNewGameGuard(),
      ) as Observable<boolean>
    ).subscribe((result) => {
      expect(result).toBe(true);
    });
  }));

  it('should return false if game in progress and cancel', waitForAsync(() => {
    isGameInProgress.set(true);

    jest.spyOn(modalService, 'showTextModal').mockReturnValue(of(false));

    (
      TestBed.runInInjectionContext<Observable<boolean> | boolean>(() =>
        confirmNewGameGuard(),
      ) as Observable<boolean>
    ).subscribe((result) => {
      expect(result).toBe(false);
    });
  }));
});
