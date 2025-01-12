import { TextModalData } from '@/models/text-modal-data.model';
import { Injectable } from '@angular/core';
import { AbstractStore } from '../abstract-store';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementsQueueStore extends AbstractStore<
  TextModalData[],
  TextModalData[]
> {
  constructor() {
    super('store.announcementsQueue', []);
  }
}
