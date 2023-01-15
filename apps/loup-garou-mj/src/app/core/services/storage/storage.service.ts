import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject, filter, from, Observable, switchMap } from 'rxjs';

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
  private _storage: Storage | undefined;
  private isInitialized = new BehaviorSubject(false);

  private actionQueue: StorageAction[] = [];
  private actionInProgress = false;

  constructor(private storage: Storage) {
    this.init();
  }

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
    return this.isInitialized.pipe(
      filter((isInitialized) => isInitialized),
      switchMap(() => from((this._storage as Storage).get(key)))
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
    return from((this._storage as Storage).clear());
  }

  private async init() {
    this._storage = await this.storage.create();
    this.isInitialized.next(true);
  }

  private async handleNextAction(): Promise<void> {
    this.actionInProgress = true;
    const action = this.actionQueue.shift();
    if (action !== undefined) {
      if (action.type === StorageActionEnum.SET) {
        await this._storage?.set(action.key, action.value);
      } else {
        await this._storage?.remove(action.key);
      }
    }
    if (this.actionQueue.length > 0) {
      this.handleNextAction();
    } else {
      this.actionInProgress = false;
    }
  }
}
