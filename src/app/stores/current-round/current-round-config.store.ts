import { RoundConfig } from '@/models/round-config.model';
import { Injectable } from '@angular/core';
import { AbstractStore } from '../abstract-store';

@Injectable({
  providedIn: 'root',
})
export class CurrentRoundConfigStore extends AbstractStore<
  RoundConfig | null,
  RoundConfig | null
> {
  constructor() {
    super('store.currentRoundConfig', null);
  }
}
