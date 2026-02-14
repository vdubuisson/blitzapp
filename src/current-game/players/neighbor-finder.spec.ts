import { LOUPS_GAROUS_ROLES } from '@/config/loups-garous-roles';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/shared/types/player-role';
import { PlayerStatusEnum } from '@/shared/types/player-status';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/vitest';
import { NeighborFinder } from './neighbor-finder';
import { PlayersRoleUtility } from './players-role-utility';

describe('NeighborFinder', () => {
  let spectator: SpectatorService<NeighborFinder>;

  const createService = createServiceFactory({
    service: NeighborFinder,
    providers: [
      mockProvider(PlayersRoleUtility, {
        isLoupGarou: vi.fn(
          (player) =>
            LOUPS_GAROUS_ROLES.includes(player.role) ||
            player.statuses.has(PlayerStatusEnum.INFECTED),
        ),
      }),
    ],
  });

  beforeEach(() => {
    spectator = createService();
  });

  describe('spectator.service.findLeftNeighbor', () => {
    it('should return direct left neighbor', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 2,
          name: 'player2',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
      ];

      const leftNeighbor = spectator.service.findLeftNeighbor(mockPlayers, 1);

      expect(leftNeighbor).toEqual({
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      });
    });

    it('should find left neighbor at the beginning of list', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 2,
          name: 'player2',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
      ];

      const leftNeighbor = spectator.service.findLeftNeighbor(mockPlayers, 2);

      expect(leftNeighbor).toEqual({
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      });
    });

    it('should ignore dead players to find left neighbor', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 2,
          name: 'player2',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: true,
        },
        {
          id: 3,
          name: 'player3',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
      ];

      const leftNeighbor = spectator.service.findLeftNeighbor(mockPlayers, 1);

      expect(leftNeighbor).toEqual({
        id: 3,
        name: 'player3',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      });
    });

    it('should find left neighbor with only loup-garou', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 2,
          name: 'player2',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 3,
          name: 'player3',
          role: PlayerRoleEnum.LOUP_GAROU,
          card: PlayerRoleEnum.LOUP_GAROU,
          statuses: new Set(),
          isDead: false,
        },
      ];

      const leftNeighbor = spectator.service.findLeftNeighbor(
        mockPlayers,
        1,
        true,
      );

      expect(leftNeighbor).toEqual({
        id: 3,
        name: 'player3',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      });
    });
  });

  describe('spectator.service.findRightNeighbor', () => {
    it('should return direct right neighbor', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 2,
          name: 'player2',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
      ];

      const rightNeighbor = spectator.service.findRightNeighbor(mockPlayers, 1);

      expect(rightNeighbor).toEqual({
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      });
    });

    it('should find right neighbor at the end of list', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 2,
          name: 'player2',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
      ];

      const rightNeighbor = spectator.service.findRightNeighbor(mockPlayers, 0);

      expect(rightNeighbor).toEqual({
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      });
    });

    it('should ignore dead players to find right neighbor', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 2,
          name: 'player2',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: true,
        },
        {
          id: 3,
          name: 'player3',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
      ];

      const rightNeighbor = spectator.service.findRightNeighbor(mockPlayers, 3);

      expect(rightNeighbor).toEqual({
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      });
    });
  });
});
