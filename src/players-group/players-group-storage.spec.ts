import { Storage } from '@/storage/storage';
import { TestBed } from '@angular/core/testing';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/vitest';
import { of } from 'rxjs';
import { PlayersGroup } from './players-group';
import { PlayersGroupStorage } from './players-group-storage';

describe('PlayersGroupStorage', () => {
  let spectator: SpectatorService<PlayersGroupStorage>;

  const mockGroups: PlayersGroup[] = [
    { id: 'group-1', name: 'Group 1', playersNames: ['Alice', 'Bob'] },
    { id: 'group-2', name: 'Group 2', playersNames: ['Charlie'] },
  ];

  describe('without storage', () => {
    const createService = createServiceFactory({
      service: PlayersGroupStorage,
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

    it('should init state with empty array', () => {
      expect(spectator.service.getGroups()()).toEqual([]);
    });

    it('should add a group with a generated id', () => {
      const group: PlayersGroup = { name: 'New Group', playersNames: ['Alice'] };

      spectator.service.addGroup(group);

      const groups = spectator.service.getGroups()();
      expect(groups).toHaveLength(1);
      expect(groups[0]).toEqual({ id: expect.any(String), ...group });
    });

    it('should store updated groups to storage when a group is added', () => {
      spectator.service.addGroup({ name: 'Group', playersNames: ['Alice'] });

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(
        'playersGroups',
        [{ id: expect.any(String), name: 'Group', playersNames: ['Alice'] }],
      );
    });
  });

  describe('with storage init', () => {
    const createService = createServiceFactory({
      service: PlayersGroupStorage,
      providers: [
        mockProvider(Storage, {
          get: vi.fn().mockReturnValue(of(mockGroups)),
          set: vi.fn(),
        }),
      ],
    });

    beforeEach(() => {
      spectator = createService();
    });

    it('should init state with storage value', () => {
      expect(spectator.service.getGroups()()).toEqual(mockGroups);
    });

    it('should read from storage with key playersGroups', () => {
      const storage = spectator.inject(Storage);
      expect(storage.get).toHaveBeenCalledWith('playersGroups');
    });

    it('should add a group to existing groups from storage', () => {
      spectator.service.addGroup({ name: 'New Group', playersNames: [] });

      expect(spectator.service.getGroups()()).toHaveLength(3);
    });

    it('should delete a group from existing groups loaded from storage', () => {
      spectator.service.deleteGroup('group-1');

      const groups = spectator.service.getGroups()();
      expect(groups).toHaveLength(1);
      expect(groups[0].id).toBe('group-2');
    });

    it('should save updated groups to storage when a group is deleted', () => {
      spectator.service.deleteGroup('group-1');

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(
        'playersGroups',
        [{ id: 'group-2', name: 'Group 2', playersNames: ['Charlie'] }],
      );
    });

    it('should rename a group loaded from storage', () => {
      spectator.service.renameGroup('group-1', 'Renamed Group');

      expect(spectator.service.getGroups()()[0].name).toBe('Renamed Group');
    });

    it('should save updated groups to storage when a group is renamed', () => {
      spectator.service.renameGroup('group-1', 'Renamed Group');

      spectator.flushEffects();

      const storage = spectator.inject(Storage);
      expect(storage.set).toHaveBeenCalledWith(
        'playersGroups',
        [
          { id: 'group-1', name: 'Renamed Group', playersNames: ['Alice', 'Bob'] },
          { id: 'group-2', name: 'Group 2', playersNames: ['Charlie'] },
        ],
      );
    });
  });
});
