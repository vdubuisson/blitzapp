import { Storage } from '@/storage/storage';
import {
  effect,
  inject,
  Injector,
  signal,
  WritableSignal,
} from '@angular/core';
import { first, Subject } from 'rxjs';

export abstract class AbstractStore<StateType, StoredType> {
  private readonly storage = inject(Storage);
  private readonly injector = inject(Injector);

  readonly state: WritableSignal<StateType>;

  private readonly initializedSubject = new Subject<void>();
  readonly initialized$ = this.initializedSubject.asObservable();

  constructor(
    private readonly storageKey: string,
    private readonly defaultValue: StateType,
  ) {
    this.state = signal(this.defaultValue);
    this.initFromStorage();
  }

  protected convertStateToStored(state: StateType): StoredType {
    return state as unknown as StoredType;
  }

  protected convertStoredToState(state: StoredType): StateType {
    return state as unknown as StateType;
  }

  private initFromStorage(): void {
    this.storage
      .get<StoredType>(this.storageKey)
      .pipe(first())
      .subscribe((state) => {
        if (state !== null && state !== undefined) {
          this.state.set(this.convertStoredToState(state));
        }
        this.initStorageSync();
        this.initializedSubject.next();
        this.initializedSubject.complete();
      });
  }

  private initStorageSync(): void {
    effect(
      () =>
        this.storage.set(
          this.storageKey,
          this.convertStateToStored(this.state()),
        ),
      { injector: this.injector },
    );
  }
}
