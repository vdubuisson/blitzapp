import { GameService } from '../services/game/game.service';
import { AlertController } from '@ionic/angular/standalone';
import { MockService } from 'ng-mocks';
import { signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { confirmNewGameGuard } from './confirm-new-game.guard';

describe('confirmNewGameGuard', () => {
  let gameService: GameService;
  let alertController: AlertController;
  let isGameInProgress: WritableSignal<boolean>;

  beforeEach(() => {
    isGameInProgress = signal(false);
    gameService = {
      isGameInProgress: isGameInProgress.asReadonly(),
    } as GameService;
    alertController = MockService(AlertController);

    TestBed.configureTestingModule({
      providers: [
        confirmNewGameGuard,
        { provide: GameService, useValue: gameService },
        { provide: AlertController, useValue: alertController },
      ],
    });
  });

  it('should return true if no game in progress', async () => {
    const result = await TestBed.runInInjectionContext(() =>
      confirmNewGameGuard(),
    );
    expect(result).toBe(true);
  });

  it('should return true if game in progress and confirm', async () => {
    isGameInProgress.set(true);

    const alert = {
      present: () => Promise.resolve(),
      onDidDismiss: () => Promise.resolve({ role: 'confirm' }),
    } as HTMLIonAlertElement;

    jest
      .spyOn(alertController, 'create')
      .mockReturnValue(Promise.resolve(alert));

    const result = await TestBed.runInInjectionContext(() =>
      confirmNewGameGuard(),
    );
    expect(result).toBe(true);
  });

  it('should return false if game in progress and cancel', async () => {
    isGameInProgress.set(true);

    const alert = {
      present: () => Promise.resolve(),
      onDidDismiss: () => Promise.resolve({ role: 'cancel' }),
    } as HTMLIonAlertElement;

    jest
      .spyOn(alertController, 'create')
      .mockReturnValue(Promise.resolve(alert));

    const result = await TestBed.runInInjectionContext(() =>
      confirmNewGameGuard(),
    );
    expect(result).toBe(false);
  });
});
