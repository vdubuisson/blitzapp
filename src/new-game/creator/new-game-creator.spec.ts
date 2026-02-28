import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { Player } from '@/shared/types/player';
import { Router } from '@angular/router';
import { CurrentPlayersStore } from '@/current-game/current-players-store/current-players-store';
import { signal, WritableSignal } from '@angular/core';
import { NewGameCreator } from './new-game-creator';
import { GameOrchestrator } from '@/current-game/orchestrator/game-orchestrator';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/vitest';

describe('NewGameCreator', () => {
  let spectator: SpectatorService<NewGameCreator>;
  let currentPlayers: WritableSignal<Player[]>;

  const createService = createServiceFactory({
    service: NewGameCreator,
    mocks: [GameOrchestrator, Router],
  });

  beforeEach(() => {
    currentPlayers = signal([]);
    spectator = createService({
      providers: [
        mockProvider(CurrentPlayersStore, {
          state: currentPlayers,
        }),
      ],
    });
  });

  it('should return players', () => {
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
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    spectator.service['players'].set(mockPlayers);

    expect(spectator.service.currentPlayers()).toEqual(mockPlayers);
  });

  it('should add player', () => {
    spectator.service['players'].set([]);

    spectator.service.addPlayer('player0');

    expect(spectator.service['players']()).toEqual([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.NOT_SELECTED,
        card: PlayerRoleEnum.NOT_SELECTED,
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
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    spectator.service['players'].set(mockPlayers);

    spectator.service.removePlayer(1);

    expect(spectator.service['players']()).toEqual([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
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
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
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
    spectator.service['players'].set(mockPlayers);

    spectator.service.reorderPlayers(0, 2);

    expect(spectator.service['players']()).toEqual([
      {
        id: 0,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player2',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player0',
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
    ]);
  });

  it('should get previous players on replay', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set([PlayerStatusEnum.CAPTAIN]),
        isDead: false,
      },
    ];

    currentPlayers.set(mockPlayers);

    spectator.service.replay();

    expect(spectator.service['players']()).toEqual([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.NOT_SELECTED,
        card: PlayerRoleEnum.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.NOT_SELECTED,
        card: PlayerRoleEnum.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
    ]);
  });

  it('should navigate to /roles-choice on replay', () => {
    const router = spectator.inject(Router);

    spectator.service.replay();

    expect(router.navigate).toHaveBeenCalledWith(['roles-choice']);
  });

  it('should change role', () => {
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
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    spectator.service['players'].set(mockPlayers);

    spectator.service.changeRole(0, PlayerRoleEnum.SORCIERE);

    expect(spectator.service['players']()).toEqual([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SORCIERE,
        card: PlayerRoleEnum.SORCIERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
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
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    spectator.service['players'].set(mockPlayers);

    spectator.service.createGame();

    const gameOrchestrator = spectator.inject(GameOrchestrator);
    expect(gameOrchestrator.createGame).toHaveBeenCalledWith(mockPlayers);
  });

  it('should reset players on create game', () => {
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
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    spectator.service['players'].set(mockPlayers);

    spectator.service.createGame();

    expect(spectator.service['players']()).toEqual([]);
  });
});
