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

  showPlayerCard(card: PlayerRoleEnum): Observable<void> {
    return this.showModal<void>(
      PlayerCardModalComponent,
      card,
    ) as Observable<void>;
  }

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
