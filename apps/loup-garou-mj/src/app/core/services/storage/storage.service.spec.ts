import { StorageService } from './storage.service';
import { Storage } from '@ionic/storage-angular';
import { MockService } from 'ng-mocks';
import { waitForAsync } from '@angular/core/testing';
import { when } from 'jest-when';

describe('StorageService', () => {
  let service: StorageService;
  let storage: Storage;
  let mockStorage: Storage;

  beforeEach(() => {
    storage = MockService(Storage);
    mockStorage = MockService(Storage);
    jest.spyOn(storage, 'create').mockResolvedValue(mockStorage);
    service = new StorageService(storage);
  });

  it('should create storage', () => {
    expect(storage.create).toBeCalled();
  });

  it('should set value to storage', () => {
    jest.spyOn(mockStorage, 'set');

    service.set('mockKey', 'mockValue');

    expect(mockStorage.set).toBeCalledWith('mockKey', 'mockValue');
  });

  it('should remove key from storage', () => {
    jest.spyOn(mockStorage, 'remove');

    service.remove('mockKey');

    expect(mockStorage.remove).toBeCalledWith('mockKey');
  });

  it('should get value from storage', waitForAsync(() => {
    when(jest.spyOn(mockStorage, 'get'))
      .calledWith('mockKey')
      .mockResolvedValue('mockValue');

    service.get('mockKey').subscribe((value) => {
      expect(value).toEqual('mockValue');
    });
  }));
});
