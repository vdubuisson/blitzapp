import { Dialog } from '@angular/cdk/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { PlayerRoleModal } from '@/layout/modal/player-role/player-role-modal';
import { TextModal } from '@/layout/modal/text/text-modal';
import { PlayerRole } from '@/types/player-role';
import { TextModalData } from '@/layout/modal/text/text-modal-data';

@Injectable({
  providedIn: 'root',
})
export class ModalManager {
  private readonly dialog = inject(Dialog);

  /**
   * Opens a modal showing a player card.
   * @param card - The player card to show.
   * @returns An observable that emits when the modal is closed.
   */
  showPlayerCard(card: PlayerRole): Observable<void> {
    return this.showModal<void>(PlayerRoleModal, card) as Observable<void>;
  }

  /**
   * Opens a modal showing text.
   * @param data - The data to display in the text modal.
   * @returns An observable that emits true if the modal was confirmed, false otherwise.
   */
  showTextModal(data: TextModalData): Observable<boolean> {
    return this.showModal<boolean>(TextModal, data).pipe(
      map((result) => result === true),
    );
  }

  private showModal<R = unknown>(
    component: ComponentType<unknown>,
    data: unknown,
  ): Observable<R | undefined> {
    return this.dialog
      .open<R>(component, {
        data,
      })
      .closed.pipe(first());
  }
}
