import { Injectable } from '@angular/core';
import { AnnouncementEnum } from '../../enums/announcement.enum';
import { Player } from '../../models/player.model';
import { TextModalData } from '../../models/text-modal-data.model';
import { announcements } from '../../values/announcements';
import { ModalService } from '../modal/modal.service';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  private announcementsQueue: TextModalData[] = [];
  private isPresenting = false;

  private readonly QUEUE_KEY = 'AnnouncementService_announcementsQueue';

  constructor(
    private storageService: StorageService,
    private modalService: ModalService,
  ) {
    this.storageService
      .get<TextModalData[]>(this.QUEUE_KEY)
      .subscribe((queue) => {
        if (queue !== null && queue.length > 0) {
          this.announcementsQueue = queue;
          this.showNextAnnouncement();
        }
      });
  }

  announceDeaths(players: Player[]): void {
    const playerNames = players
      .map((player) => `<li>${player.name}</li>`)
      .join('');
    const announcement: TextModalData = {
      header: 'Morts à annoncer',
      message: `<ul>${playerNames}</ul>`,
    };
    this.addAnnouncementToQueue(announcement);
  }

  announce(type: AnnouncementEnum, params?: Record<string, string>): void {
    let message = announcements[type].message;
    if (message !== undefined && params !== undefined) {
      Object.entries(params).forEach(([key, value]) => {
        const toReplace = `{{\\s*${key}\\s*}}`;
        const regex = new RegExp(toReplace, 'g');
        message = (message as string).replaceAll(regex, value);
      });
    }
    const announcement: TextModalData = {
      header: announcements[type].header,
      message,
    };
    this.addAnnouncementToQueue(announcement);
  }

  private addAnnouncementToQueue(announcement: TextModalData): void {
    this.announcementsQueue.push(announcement);

    this.storageService.set(this.QUEUE_KEY, this.announcementsQueue);

    if (!this.isPresenting) {
      this.showNextAnnouncement();
    }
  }

  private async showNextAnnouncement(): Promise<void> {
    this.isPresenting = true;
    const announcement = this.announcementsQueue.shift();

    if (announcement === undefined) {
      this.isPresenting = false;
      return;
    }

    this.modalService.showTextModal(announcement).subscribe(() => {
      if (this.announcementsQueue.length > 0) {
        this.showNextAnnouncement();
      } else {
        this.isPresenting = false;
      }
    });

    this.storageService.set(this.QUEUE_KEY, this.announcementsQueue);
  }
}
