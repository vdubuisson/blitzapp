import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, first } from 'rxjs';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class RoleChoiceService {
  private roles = new BehaviorSubject<Set<PlayerRoleEnum> | undefined>(
    undefined
  );

  private readonly ROLES_KEY = 'RoleChoiceService_roles';

  constructor(private storageService: StorageService) {
    this.initFromStorage();
  }

  getCurrentChosenRoles(): Observable<Set<PlayerRoleEnum>> {
    return this.roles
      .asObservable()
      .pipe(first((roles) => roles !== undefined)) as Observable<
      Set<PlayerRoleEnum>
    >;
  }

  setRoles(roles: Set<PlayerRoleEnum>): void {
    this.roles.next(roles);
    this.storageService.set(this.ROLES_KEY, Array.from(roles));
  }

  private initFromStorage(): void {
    this.storageService
      .get<PlayerRoleEnum[]>(this.ROLES_KEY)
      .subscribe((storedRoles) => {
        this.roles.next(new Set(storedRoles));
      });
  }
}
