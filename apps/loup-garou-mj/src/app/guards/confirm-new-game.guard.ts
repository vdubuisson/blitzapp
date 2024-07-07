import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TextModalData } from '../models/text-modal-data.model';
import { GameService } from '../services/game/game.service';
import { ModalService } from '../services/modal/modal.service';

export const confirmNewGameGuard = (): Observable<boolean> | boolean => {
  const gameService = inject(GameService);
  if (gameService.isGameInProgress()) {
    const modalService = inject(ModalService);
    const modalData: TextModalData = {
      header: 'Partie en cours',
      message:
        '<p>Une partie est déjà en cours. Êtes-vous sûr de vouloir en créer une nouvelle ?</p>',
      confirmText: 'Nouvelle partie',
    };
    return modalService.showTextModal(modalData);
  } else {
    return true;
  }
};
