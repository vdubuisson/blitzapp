import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, of } from 'rxjs';

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

  constructor() {
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
      map(() => (this._storage as Storage).getItem(key)),
      map((value) => (value ? JSON.parse(value) : null)),
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
    return of((this._storage as Storage).clear());
  }

  private init() {
    this._storage = localStorage;
    this.isInitialized.next(true);
  }

  private handleNextAction(): void {
    this.actionInProgress = true;
    const action = this.actionQueue.shift();
    if (action !== undefined) {
      if (action.type === StorageActionEnum.SET) {
        const jsonValue = JSON.stringify(action.value);
        this._storage?.setItem(action.key, jsonValue);
      } else {
        this._storage?.removeItem(action.key);
      }
    }
    if (this.actionQueue.length > 0) {
      this.handleNextAction();
    } else {
      this.actionInProgress = false;
    }
  }
}
