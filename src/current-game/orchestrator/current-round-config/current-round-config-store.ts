import { RoundConfig } from '@/shared/types/round-config';
import { Injectable } from '@angular/core';
import { AbstractStore } from '../../../core/storage/abstract-store';

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
