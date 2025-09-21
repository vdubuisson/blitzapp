import { Round } from '@/types/round';
import { Injectable } from '@angular/core';
import { AbstractStore } from '../../../core/storage/abstract-store';

@Injectable({
  providedIn: 'root',
})
export class AfterDeathRoundQueueStore extends AbstractStore<Round[], Round[]> {
  constructor() {
    super('store.afterDeathRoundQueue', []);
  }
}
