import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { from, map, Observable } from 'rxjs';

enum StorageActionEnum {
  SET,
  REMOVE,
}

interface StorageAction {
  type: StorageActionEnum;
  key: string;
  value?: unknown;
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private actionQueue: StorageAction[] = [];
  private actionInProgress = false;

  constructor() {}

  set(key: string, value: unknown): void {
    this.actionQueue.push({
      type: StorageActionEnum.SET,
      key,
      value,
    });

    if (!this.actionInProgress) {
      this.handleNextAction();
    }
  }

  get<T>(key: string): Observable<T | null> {
    return from(Preferences.get({ key })).pipe(
      map(({ value }) => (value ? JSON.parse(value) : null)),
    );
  }

  remove(key: string): void {
    this.actionQueue.push({
      type: StorageActionEnum.REMOVE,
      key,
    });

    if (!this.actionInProgress) {
      this.handleNextAction();
    }
  }

  clear(): Observable<void> {
    return from(Preferences.clear());
  }

  private async handleNextAction(): Promise<void> {
    this.actionInProgress = true;
    const action = this.actionQueue.shift();
    if (action !== undefined) {
      if (action.type === StorageActionEnum.SET) {
        const jsonValue = JSON.stringify(action.value);
        await Preferences.set({ key: action.key, value: jsonValue });
      } else {
        await Preferences.remove({ key: action.key });
      }
    }
    if (this.actionQueue.length > 0) {
      await this.handleNextAction();
    } else {
      this.actionInProgress = false;
    }
  }
}
