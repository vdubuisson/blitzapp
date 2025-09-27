import { Injectable } from '@angular/core';
import { AbstractStore } from '../../../core/storage/abstract-store';

@Injectable({
  providedIn: 'root',
})
export class DayCountStore extends AbstractStore<number, number> {
  constructor() {
    super('store.dayCount', 1);
  }
}
