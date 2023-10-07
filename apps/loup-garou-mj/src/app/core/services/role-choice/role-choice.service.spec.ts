import { MockService } from 'ng-mocks';
import { when } from 'jest-when';
import { RoleChoiceService } from './role-choice.service';
import { StorageService } from '../storage/storage.service';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { of } from 'rxjs';
import { waitForAsync } from '@angular/core/testing';
import { RoleList, StoredRoleList } from '../../models/role-list.model';

describe('RoleChoiceService', () => {
  let service: RoleChoiceService;

  let storageService: StorageService;
  const mockRoles: RoleList = {
    selectedRoles: new Set<PlayerRoleEnum>([PlayerRoleEnum.SORCIERE]),
    villageois: 4,
    loupGarou: 1,
    playersNumber: 6,
  };

  beforeEach(() => {
    storageService = MockService(StorageService);

    const storageGetSpy = jest.spyOn(storageService, 'get');
    when(storageGetSpy)
      .calledWith('RoleChoiceService_roles')
      .mockReturnValue(of(mockRoles));

    service = new RoleChoiceService(storageService);
  });

  it('should init from storage', () => {
    expect(service['roles'].value).toEqual(mockRoles);
  });

  it('should return roles', waitForAsync(() => {
    service.getCurrentChosenRoles().subscribe((chosenRoles) => {
      expect(chosenRoles).toEqual(mockRoles);
    });
  }));

  it('should set roles', () => {
    const newMockRoles: RoleList = {
      selectedRoles: new Set<PlayerRoleEnum>([
        PlayerRoleEnum.CHASSEUR,
        PlayerRoleEnum.CUPIDON,
      ]),
      villageois: 2,
      loupGarou: 1,
      playersNumber: 5,
    };

    service.setRoles(newMockRoles);

    expect(service['roles'].value).toEqual(newMockRoles);
  });

  it('should store new roles', () => {
    const newMockRoles: RoleList = {
      selectedRoles: new Set<PlayerRoleEnum>([
        PlayerRoleEnum.CHASSEUR,
        PlayerRoleEnum.CUPIDON,
      ]),
      villageois: 2,
      loupGarou: 1,
      playersNumber: 5,
    };

    const expectedRoles: StoredRoleList = {
      selectedRoles: [PlayerRoleEnum.CHASSEUR, PlayerRoleEnum.CUPIDON],
      villageois: 2,
      loupGarou: 1,
      playersNumber: 5,
    };
    jest.spyOn(storageService, 'set');

    service.setRoles(newMockRoles);

    expect(storageService.set).toHaveBeenCalledWith(
      'RoleChoiceService_roles',
      expectedRoles,
    );
  });
});
