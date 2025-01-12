import { Round } from '@/models/round.model';
import { Injectable } from '@angular/core';
import { AbstractStore } from '../abstract-store';

@Injectable({
  providedIn: 'root',
})
export class CurrentRoundStore extends AbstractStore<
  Round | null,
  Round | null
> {
  constructor() {
    super('store.currentRound', null);
  }
}
