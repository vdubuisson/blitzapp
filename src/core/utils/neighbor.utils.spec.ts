import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { findLeftNeighbor, findRightNeighbor } from './neighbor.utils';

describe('findLeftNeighbor', () => {
  it('should return direct left neighbor', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const leftNeighbor = findLeftNeighbor(mockPlayers, 1);

    expect(leftNeighbor).toEqual({
      id: 2,
      name: 'player2',
      role: PlayerRole.VILLAGEOIS,
      card: PlayerRole.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });
  });

  it('should find left neighbor at the beginning of list', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const leftNeighbor = findLeftNeighbor(mockPlayers, 2);

    expect(leftNeighbor).toEqual({
      id: 0,
      name: 'player0',
      role: PlayerRole.VILLAGEOIS,
      card: PlayerRole.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });
  });

  it('should ignore dead players to find left neighbor', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 3,
        name: 'player3',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const leftNeighbor = findLeftNeighbor(mockPlayers, 1);

    expect(leftNeighbor).toEqual({
      id: 3,
      name: 'player3',
      role: PlayerRole.VILLAGEOIS,
      card: PlayerRole.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });
  });

  it('should find left neighbor with only loup-garou', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 3,
        name: 'player3',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const leftNeighbor = findLeftNeighbor(mockPlayers, 1, true);

    expect(leftNeighbor).toEqual({
      id: 3,
      name: 'player3',
      role: PlayerRole.LOUP_GAROU,
      card: PlayerRole.LOUP_GAROU,
      statuses: new Set(),
      isDead: false,
    });
  });
});

describe('findRightNeighbor', () => {
  it('should return direct right neighbor', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const rightNeighbor = findRightNeighbor(mockPlayers, 1);

    expect(rightNeighbor).toEqual({
      id: 0,
      name: 'player0',
      role: PlayerRole.VILLAGEOIS,
      card: PlayerRole.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });
  });

  it('should find right neighbor at the end of list', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const rightNeighbor = findRightNeighbor(mockPlayers, 0);

    expect(rightNeighbor).toEqual({
      id: 2,
      name: 'player2',
      role: PlayerRole.VILLAGEOIS,
      card: PlayerRole.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });
  });

  it('should ignore dead players to find right neighbor', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 3,
        name: 'player3',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const rightNeighbor = findRightNeighbor(mockPlayers, 3);

    expect(rightNeighbor).toEqual({
      id: 1,
      name: 'player1',
      role: PlayerRole.VILLAGEOIS,
      card: PlayerRole.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });
  });
});
