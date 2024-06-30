import { waitForAsync } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    service = new StorageService();
    service['_storage']?.clear();
  });

  it('should set value to storage', () => {
    service.set('mockKey', 'mockValue');

    const value = JSON.parse(service['_storage']?.getItem('mockKey') as string);

    expect(value).toEqual('mockValue');
  });

  it('should remove key from storage', () => {
    service['_storage']?.setItem('mockKey', 'mockValue');

    service.remove('mockKey');

    expect(service['_storage']?.getItem('mockKey')).toBeNull();
  });

  it('should get value from storage', waitForAsync(() => {
    service['_storage']?.setItem('mockKey', JSON.stringify('mockValue'));

    service.get('mockKey').subscribe((value) => {
      expect(value).toEqual('mockValue');
    });
  }));

  it('should clear storage', waitForAsync(() => {
    service['_storage']?.setItem('mockKey', 'mockValue');

    service.clear().subscribe(() => {
      expect(service['_storage']?.getItem('mockKey')).toBeNull();
    });
  }));
});
