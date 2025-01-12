import { RoundEnum } from '@/enums/round.enum';
import { Injectable } from '@angular/core';
import { AbstractStore } from '../abstract-store';

@Injectable({
  providedIn: 'root',
})
export class BeforeDeathRoundStore extends AbstractStore<
  RoundEnum | null,
  RoundEnum | null
> {
  constructor() {
    super('store.beforeDeathRound', null);
  }
}
