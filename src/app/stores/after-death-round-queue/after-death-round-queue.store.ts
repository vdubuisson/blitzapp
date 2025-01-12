import { RoundEnum } from '@/enums/round.enum';
import { Injectable } from '@angular/core';
import { AbstractStore } from '../abstract-store';

@Injectable({
  providedIn: 'root',
})
export class AfterDeathRoundQueueStore extends AbstractStore<
  RoundEnum[],
  RoundEnum[]
> {
  constructor() {
    super('store.afterDeathRoundQueue', []);
  }
}
