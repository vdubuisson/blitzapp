import { Preferences } from '@capacitor/preferences';
import { firstValueFrom } from 'rxjs';
import { StorageService } from './storage.service';

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

  it('should get value from storage', async () => {
    Preferences.set({ key: 'mockKey', value: JSON.stringify('mockValue') });

    const value = await firstValueFrom(service.get('mockKey'));

    expect(value).toEqual('mockValue');
  });

  it('should clear storage', async () => {
    Preferences.set({ key: 'mockKey', value: JSON.stringify('mockValue') });

    await firstValueFrom(service.clear());

    const value = (await Preferences.get({ key: 'mockKey' })).value;

    expect(value).toBeNull();
  });
});
