import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { PlayerCardModalComponent } from '../../components/player-card-modal/player-card-modal.component';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { map, Observable, switchMap } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modalCtrl: ModalController) {}

  showPlayerCard(card: PlayerRoleEnum): Observable<void> {
    return fromPromise(
      this.modalCtrl.create({
        component: PlayerCardModalComponent,
        componentProps: { card },
      }),
    ).pipe(
      switchMap((modal) =>
        fromPromise(modal.present().then(() => modal.onDidDismiss())),
      ),
      map((_) => {
        return;
      }),
    );
  }
}
