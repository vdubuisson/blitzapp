import { RoundConfig } from '@/shared/types/round-config';
import { Storage } from '@/storage/storage';
import { RoundEnum } from '@/types/round';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/vitest';
import { of } from 'rxjs';
import { CurrentRoundConfigStore } from './current-round-config-store';

describe('CurrentRoundConfigStore', () => {
  let spectator: SpectatorService<CurrentRoundConfigStore>;

  const mockState: RoundConfig = {
    round: RoundEnum.VOLEUR,
    selectablePlayers: [],
    maxSelectable: 0,
    minSelectable: 0,
    isDuringDay: false,
    type: RoundTypeEnum.DEFAULT,
  };

  const createService = createServiceFactory({
    service: CurrentRoundConfigStore,
  });

  describe('without storage', () => {
    beforeEach(() => {
      spectator = createService({
        providers: [
          mockProvider(Storage, {
            get: vi.fn().mockReturnValue(of(null)),
            set: vi.fn(),
          }),
        ],
      });
    });

    it('should init state with default value null', () => {
      expect(spectator.service.state()).toEqual(null);
    });

    it('should store new value to storage', () => {
      spectator.service.state.set(mockState);

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(expect.anything(), mockState);
    });

    it('should store new value to storage with storage key store.currentRoundConfig', () => {
      spectator.service.state.set({} as RoundConfig);

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(
        'store.currentRoundConfig',
        expect.anything(),
      );
    });
  });

  describe('with storage init', () => {
    beforeEach(() => {
      spectator = createService({
        providers: [
          mockProvider(Storage, {
            get: vi.fn().mockReturnValue(of(mockState)),
            set: vi.fn(),
          }),
        ],
      });
    });

    it('should init state with storage value', () => {
      expect(spectator.service.state()).toEqual(mockState);
    });
  });
});
