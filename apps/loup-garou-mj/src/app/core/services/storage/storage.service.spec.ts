import { waitForAsync } from '@angular/core/testing';
import { StorageService } from './storage.service';
import { Preferences } from '@capacitor/preferences';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(async () => {
    service = new StorageService();
    await Preferences.clear();
  });

  it('should set value to storage', async () => {
    service.set('mockKey', 'mockValue');

    const value = JSON.parse(
      (await Preferences.get({ key: 'mockKey' })).value as string,
    );

    expect(value).toEqual('mockValue');
  });

  it('should remove key from storage', async () => {
    Preferences.set({ key: 'mockKey', value: 'mockValue' });

    service.remove('mockKey');

    const value = (await Preferences.get({ key: 'mockKey' })).value;

    expect(value).toBeNull();
  });

  it('should get value from storage', waitForAsync(() => {
    Preferences.set({ key: 'mockKey', value: JSON.stringify('mockValue') });

    service.get('mockKey').subscribe((value) => {
      expect(value).toEqual('mockValue');
    });
  }));

  it('should clear storage', waitForAsync(() => {
    Preferences.set({ key: 'mockKey', value: JSON.stringify('mockValue') });

    service.clear().subscribe(async () => {
      const value = (await Preferences.get({ key: 'mockKey' })).value;

      expect(value).toBeNull();
    });
  }));
});
