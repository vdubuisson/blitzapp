import { Storage } from '@/storage/storage';
import { effect, inject, Injectable, Injector, Signal, signal } from '@angular/core';
import { first } from 'rxjs';
import { v7 as uuid } from 'uuid';
import { PlayersGroup } from './players-group';

@Injectable({
  providedIn: 'root',
})
export class PlayersGroupStorage {
  private readonly storage = inject(Storage);
  private readonly injector = inject(Injector);

  private readonly storageKey = 'playersGroups';

  private readonly currentGroups = signal<PlayersGroup[]>([]);

  constructor() {
    this.storage.get<PlayersGroup[]>(this.storageKey).pipe(first()).subscribe((groups) => {
      if (groups) {
        this.currentGroups.set(groups);
      }
      effect(() => this.storage.set(this.storageKey, this.currentGroups()), { injector: this.injector });
    });
  }

  getGroups(): Signal<PlayersGroup[]> {
    return this.currentGroups.asReadonly();
  }

  addGroup(group: PlayersGroup): void {
    const groupWithId = { ...group, id: uuid() };
    this.currentGroups.update((groups) => [...groups, groupWithId]);
  }

  deleteGroup(groupId: string): void {
    this.currentGroups.update((groups) => groups.filter((group) => group.id !== groupId));
  }

  renameGroup(groupId: string, newName: string): void {
    this.currentGroups.update((groups) =>
      groups.map((group) =>
        group.id === groupId ? { ...group, name: newName } : group,
      ),
    );
  }
}
