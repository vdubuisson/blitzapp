import { Injectable } from '@angular/core';
import { AbstractStore } from '../abstract-store';

@Injectable({
  providedIn: 'root',
})
export class NeedCleanAfterBoucStore extends AbstractStore<boolean, boolean> {
  constructor() {
    super('store.needCleanAfterBouc', false);
  }
}
