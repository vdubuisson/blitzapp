import { Preferences } from '@capacitor/preferences';
import {
  createServiceFactory,
  SpectatorService,
} from '@ngneat/spectator/vitest';
import { firstValueFrom } from 'rxjs';
import { Storage } from './storage';

describe('Storage', () => {
  let spectator: SpectatorService<Storage>;
  const createService = createServiceFactory(Storage);

  beforeEach(async () => {
    await Preferences.clear();
    spectator = createService();
  });

  it('should set value to storage', async () => {
    spectator.service.set('mockKey', 'mockValue');

    const value = JSON.parse(
      (await Preferences.get({ key: 'mockKey' })).value as string,
    );

    expect(value).toEqual('mockValue');
  });

  it('should remove key from storage', async () => {
    Preferences.set({ key: 'mockKey', value: 'mockValue' });

    spectator.service.remove('mockKey');

    const value = (await Preferences.get({ key: 'mockKey' })).value;

    expect(value).toBeNull();
  });

  it('should get value from storage', async () => {
    Preferences.set({ key: 'mockKey', value: JSON.stringify('mockValue') });

    const value = await firstValueFrom(spectator.service.get('mockKey'));

    expect(value).toEqual('mockValue');
  });

  it('should clear storage', async () => {
    Preferences.set({ key: 'mockKey', value: JSON.stringify('mockValue') });

    await firstValueFrom(spectator.service.clear());

    const value = (await Preferences.get({ key: 'mockKey' })).value;

    expect(value).toBeNull();
  });
});
