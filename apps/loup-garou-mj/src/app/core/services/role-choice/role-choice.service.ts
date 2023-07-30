import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, first } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { RoleList, StoredRoleList } from '../../models/role-list.model';

@Injectable({
  providedIn: 'root',
})
export class RoleChoiceService {
  private roles = new BehaviorSubject<RoleList | undefined>(
    undefined
  );

  private readonly ROLES_KEY = 'RoleChoiceService_roles';

  constructor(private storageService: StorageService) {
    this.initFromStorage();
  }

  getCurrentChosenRoles(): Observable<RoleList> {
    return this.roles
      .asObservable()
      .pipe(first((roles) => roles !== undefined)) as Observable<RoleList>;
  }

  setRoles(roles: RoleList): void {
    this.roles.next(roles);
    const storedRoleList: StoredRoleList = {
      ...roles,
      selectedRoles: Array.from(roles.selectedRoles)
    };
    this.storageService.set(this.ROLES_KEY, storedRoleList);
  }

  private initFromStorage(): void {
    this.storageService
      .get<StoredRoleList>(this.ROLES_KEY)
      .subscribe((storedRoles) => {
        if (storedRoles) {
          const roleList: RoleList = {
            ...storedRoles,
            selectedRoles: new Set(storedRoles.selectedRoles)
          };
          this.roles.next(roleList);
        } else {
          this.roles.next({
            villageois: 0,
            loupGarou: 0,
            playersNumber: 0,
            selectedRoles: new Set()
          });
        }
      });
  }
}
