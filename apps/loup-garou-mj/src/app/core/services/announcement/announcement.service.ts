import { Injectable } from '@angular/core';
import { AlertController, AlertOptions } from '@ionic/angular';
import { Player } from '../../models/player.model';
import { StorageService } from '../storage/storage.service';
import { AnnouncementEnum } from '../../enums/announcement.enum';
import { announcements } from '../../values/announcements';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  private announcementsQueue: AlertOptions[] = [];
  private isPresenting = false;

  private readonly QUEUE_KEY = 'AnnouncementService_announcementsQueue';

  constructor(
    private alertController: AlertController,
    private storageService: StorageService,
  ) {
    this.storageService
      .get<AlertOptions[]>(this.QUEUE_KEY)
      .subscribe((queue) => {
        if (queue !== null && queue.length > 0) {
          this.announcementsQueue = queue;
          this.showNextAnnouncement();
        }
      });
  }

  announceDeaths(players: Player[]): void {
    const message = players.map((player) => `<p>${player.name}</p>`).join('');
    const announcement: AlertOptions = {
      header: 'Morts à annoncer',
      message,
    };
    this.addAnnouncementToQueue(announcement);
  }

  announce(type: AnnouncementEnum): void {
    const announcement: AlertOptions = { ...announcements[type] };
    this.addAnnouncementToQueue(announcement);
  }

  private addAnnouncementToQueue(announcement: AlertOptions): void {
    this.announcementsQueue.push({
      ...announcement,
      buttons: ['OK'],
    });

    this.storageService.set(this.QUEUE_KEY, this.announcementsQueue);

    if (!this.isPresenting) {
      this.showNextAnnouncement();
    }
  }

  private async showNextAnnouncement(): Promise<void> {
    this.isPresenting = true;
    const alert = await this.alertController.create(
      this.announcementsQueue.shift(),
    );
    alert.onDidDismiss().then(() => {
      if (this.announcementsQueue.length > 0) {
        this.showNextAnnouncement();
      } else {
        this.isPresenting = false;
      }
    });
    await alert.present();
    this.storageService.set(this.QUEUE_KEY, this.announcementsQueue);
  }
}
