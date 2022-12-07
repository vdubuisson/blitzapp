import { Injectable } from '@angular/core';
import { AlertController, AlertOptions } from '@ionic/angular';
import { Player } from '../../models/player.model';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  private announcementsQueue: AlertOptions[] = [];
  private isPresenting = false;

  constructor(private alertController: AlertController) {}

  announceDeaths(players: Player[]): void {
    const message = players.map((player) => `<p>${player.name}</p>`).join('');
    const announcement: AlertOptions = {
      header: 'Morts à annoncer',
      message,
    };
    this.addAnnouncementToQueue(announcement);
  }

  private addAnnouncementToQueue(announcement: AlertOptions): void {
    this.announcementsQueue.push({
      ...announcement,
      buttons: ['OK'],
    });

    if (!this.isPresenting) {
      this.showNextAnnouncement();
    }
  }

  private async showNextAnnouncement(): Promise<void> {
    this.isPresenting = true;
    const alert = await this.alertController.create(
      this.announcementsQueue.shift()
    );
    alert.onDidDismiss().then(() => {
      if (this.announcementsQueue.length > 0) {
        this.showNextAnnouncement();
      } else {
        this.isPresenting = false;
      }
    });
    await alert.present();
  }
}
