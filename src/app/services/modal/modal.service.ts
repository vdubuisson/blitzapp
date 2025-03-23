import { Dialog } from '@angular/cdk/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { PlayerCardModalComponent } from '@/components/player-card-modal/player-card-modal.component';
import { TextModalComponent } from '@/components/text-modal/text-modal.component';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { TextModalData } from '@/models/text-modal-data.model';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private readonly dialog = inject(Dialog);

  /**
   * Opens a modal showing a player card.
   * @param card - The player card to show.
   * @returns An observable that emits when the modal is closed.
   */
  showPlayerCard(card: PlayerRoleEnum): Observable<void> {
    return this.showModal<void>(
      PlayerCardModalComponent,
      card,
    ) as Observable<void>;
  }

  /**
   * Opens a modal showing text.
   * @param data - The data to display in the text modal.
   * @returns An observable that emits true if the modal was confirmed, false otherwise.
   */
  showTextModal(data: TextModalData): Observable<boolean> {
    return this.showModal<boolean>(TextModalComponent, data).pipe(
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
