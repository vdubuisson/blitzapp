import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TextModalData } from '@/layout/modal/text/text-modal-data';
import { GameOrchestrator } from '@/current-game/orchestrator/game-orchestrator';
import { ModalManager } from '@/layout/modal/modal-manager';

export const confirmNewGameGuard = (): Observable<boolean> | boolean => {
  const gameOrchestrator = inject(GameOrchestrator);
  if (gameOrchestrator.isGameInProgress()) {
    const modalManager = inject(ModalManager);
    const modalData: TextModalData = {
      header: 'Partie en cours',
      message:
        '<p>Une partie est déjà en cours. Êtes-vous sûr de vouloir en créer une nouvelle ?</p>',
      confirmText: 'Nouvelle partie',
    };
    return modalManager.showTextModal(modalData);
  } else {
    return true;
  }
};
