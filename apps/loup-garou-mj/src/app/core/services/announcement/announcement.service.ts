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

  announceBearGrowl(): void {
    const announcement: AlertOptions = {
      header: "Grognement de l'ours",
      message: "L'ours du montreur d'ours grogne",
    };
    this.addAnnouncementToQueue(announcement);
  }

  announceFoxSuccess(): void {
    const announcement: AlertOptions = {
      header: 'Reniflement du renard',
      message:
        '<p>Oui, ce groupe contient un loup-garou.</p><p>Le renard garde son pouvoir.</p>',
    };
    this.addAnnouncementToQueue(announcement);
  }

  announceFoxFail(): void {
    const announcement: AlertOptions = {
      header: 'Reniflement du renard',
      message:
        '<p>Non, ce groupe ne contient aucun loup-garou.</p><p>Le renard perd son pouvoir.</p>',
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
