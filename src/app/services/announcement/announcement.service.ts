import { AnnouncementEnum } from '@/enums/announcement.enum';
import { Player } from '@/models/player.model';
import { TextModalData } from '@/models/text-modal-data.model';
import { ModalService } from '@/services/modal/modal.service';
import { AnnouncementsQueueStore } from '@/stores/announcements-queue/announcements-queue.store';
import { announcements } from '@/values/announcements';
import { DestroyRef, effect, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  private readonly destroyRef = inject(DestroyRef);
  private readonly modalService = inject(ModalService);

  private readonly announcementsQueue = inject(AnnouncementsQueueStore).state;

  private readonly isPresenting = signal(false);

  constructor() {
    effect(() => {
      if (this.announcementsQueue().length > 0 && !this.isPresenting()) {
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
    this.announcementsQueue.update((queue) => [...queue, announcement]);
  }

  private showNextAnnouncement(): void {
    this.isPresenting.set(true);
    const announcement = this.announcementsQueue()[0];

    if (announcement === undefined) {
      this.isPresenting.set(false);
      return;
    }

    this.announcementsQueue.update((queue) => queue.slice(1));

    this.modalService
      .showTextModal(announcement)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.isPresenting.set(false);
      });
  }
}
