import { TextModalData } from '@/layout/modal/text/text-modal-data';
import { Injectable } from '@angular/core';
import { AbstractStore } from '../../../core/storage/abstract-store';

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
