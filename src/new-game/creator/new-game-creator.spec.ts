import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { Player } from '@/shared/types/player';
import { Router } from '@angular/router';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';

import { CurrentPlayersStore } from '@/current-game/current-players-store/current-players-store';
import { signal, WritableSignal } from '@angular/core';
import { NewGameCreator } from './new-game-creator';
import { GameOrchestrator } from '@/current-game/orchestrator/game-orchestrator';

describe('NewGameCreator', () => {
  let service: NewGameCreator;
  let currentPlayers: WritableSignal<Player[]>;

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(NewGameCreator)
      .mock(GameOrchestrator)
      .mock(Router)
      .mock(CurrentPlayersStore),
  );

  beforeAll(() => {
    currentPlayers = signal([]);
    MockInstance(GameOrchestrator, () => ({
      createGame: jest.fn(),
    }));
    MockInstance(CurrentPlayersStore, 'state', currentPlayers);
    MockInstance(Router, () => ({
      navigate: jest.fn(),
    }));
  });

  beforeAll(() => {
    service = MockRender(NewGameCreator).point.componentInstance;
  });

  it('should return players', async () => {
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
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    service['players'].set(mockPlayers);

    expect(service.currentPlayers()).toEqual(mockPlayers);
  });

  it('should add player', () => {
    service['players'].set([]);

    service.addPlayer('player0');

    expect(service['players']()).toEqual([
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.NOT_SELECTED,
        card: PlayerRole.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
    ]);
  });

  it('should remove player', () => {
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
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    service['players'].set(mockPlayers);

    service.removePlayer(1);

    expect(service['players']()).toEqual([
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ]);
  });

  it('should reorder players', () => {
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
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
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
    service['players'].set(mockPlayers);

    service.reorderPlayers(0, 2);

    expect(service['players']()).toEqual([
      {
        id: 0,
        name: 'player1',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player2',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player0',
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
    ]);
  });

  it('should get previous players on replay', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set([PlayerStatus.CAPTAIN]),
        isDead: false,
      },
    ];

    currentPlayers.set(mockPlayers);

    service.replay();

    expect(service['players']()).toEqual([
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.NOT_SELECTED,
        card: PlayerRole.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.NOT_SELECTED,
        card: PlayerRole.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
    ]);
  });

  it('should navigate to /roles-choice on replay', () => {
    const router = ngMocks.get(Router);

    service.replay();

    expect(router.navigate).toHaveBeenCalledWith(['roles-choice']);
  });

  it('should change role', () => {
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
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    service['players'].set(mockPlayers);

    service.changeRole(0, PlayerRole.SORCIERE);

    expect(service['players']()).toEqual([
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.SORCIERE,
        card: PlayerRole.SORCIERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ]);
  });

  it('should call GameOrchestrator.createGame on create game', () => {
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
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    service['players'].set(mockPlayers);

    service.createGame();

    const gameOrchestrator = ngMocks.get(GameOrchestrator);
    expect(gameOrchestrator.createGame).toHaveBeenCalledWith(mockPlayers);
  });

  it('should reset players on create game', () => {
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
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    service['players'].set(mockPlayers);

    service.createGame();

    expect(service['players']()).toEqual([]);
  });

  afterAll(MockReset);
});
