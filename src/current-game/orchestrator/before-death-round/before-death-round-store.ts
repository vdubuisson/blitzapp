import { Round } from '@/types/round';
import { Injectable } from '@angular/core';
import { AbstractStore } from '../../../core/storage/abstract-store';

@Injectable({
  providedIn: 'root',
})
export class BeforeDeathRoundStore extends AbstractStore<
  Round | null,
  Round | null
> {
  constructor() {
    super('store.beforeDeathRound', null);
  }
}
