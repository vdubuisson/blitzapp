import { inject } from '@angular/core';
import { GameService } from '../services/game/game.service';
import { AlertController } from '@ionic/angular';

export const confirmNewGameGuard = async (): Promise<boolean> => {
  const gameService = inject(GameService);
  if (gameService.isGameInProgress()) {
    const alertController = inject(AlertController);
    const alert = await alertController.create({
      header: 'Partie en cours',
      message:
        '<p>Une partie est déjà en cours. Êtes-vous sûr de vouloir en créer une nouvelle ?</p>',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
        },
        {
          text: 'Nouvelle partie',
          role: 'confirm',
        },
      ],
    });
    await alert.present();
    return alert.onDidDismiss().then((event) => event.role === 'confirm');
  } else {
    return true;
  }
};
