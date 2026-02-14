import { PlayerRole, PlayerRoleEnum } from '@/types/player-role';
import { CardList, StoredCardList } from '@/shared/types/card-list';
import { Storage } from '@/storage/storage';
import { TestBed } from '@angular/core/testing';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/vitest';
import { of } from 'rxjs';
import { CardChoiceStore } from './card-choice-store';

describe('CardChoiceStore', () => {
  let spectator: SpectatorService<CardChoiceStore>;
  const mockState: CardList = {
    selectedRoles: new Set<PlayerRole>([PlayerRoleEnum.SORCIERE]),
    villageois: 4,
    loupGarou: 1,
    playersNumber: 6,
  };

  const mockStateStored: StoredCardList = {
    selectedRoles: [PlayerRoleEnum.SORCIERE],
    villageois: 4,
    loupGarou: 1,
    playersNumber: 6,
  };

  describe('without storage', () => {
    const createService = createServiceFactory({
      service: CardChoiceStore,
      providers: [
        mockProvider(Storage, {
          get: vi.fn().mockReturnValue(of(null)),
          set: vi.fn(),
        }),
      ],
    });

    beforeEach(() => {
      spectator = createService();
    });

    it('should init state with default value', () => {
      expect(spectator.service.state()).toEqual({
        villageois: 0,
        loupGarou: 0,
        playersNumber: 0,
        selectedRoles: new Set(),
      });
    });

    it('should store new value to storage', () => {
      spectator.service.state.set({ ...mockState });

      TestBed.tick();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(
        expect.anything(),
        mockStateStored,
      );
    });

    it('should store new value to storage with storage key store.cardChoice', () => {
      spectator.service.state.set({ ...mockState });

      TestBed.tick();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(
        'store.cardChoice',
        expect.anything(),
      );
    });
  });

  describe('with storage init', () => {
    const createService = createServiceFactory({
      service: CardChoiceStore,
      providers: [
        mockProvider(Storage, {
          get: vi.fn().mockReturnValue(of(mockStateStored)),
        }),
      ],
    });

    beforeEach(() => {
      spectator = createService();
    });

    it('should init state with storage value', () => {
      expect(spectator.service.state()).toEqual(mockState);
    });
  });
});
