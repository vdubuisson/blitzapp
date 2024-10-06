import { waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { GameService } from '@/services/game/game.service';

import { NewGameService } from './new-game.service';
import { CardChoiceService } from '@/services/card-choice/card-choice.service';
import { CardList } from '@/models/card-list.model';
import { signal, WritableSignal } from '@angular/core';

describe('NewGameService', () => {
  let service: NewGameService;
  let currentCards: WritableSignal<CardList>;
  let currentPlayers: WritableSignal<Player[]>;

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(NewGameService)
      .mock(GameService)
      .mock(CardChoiceService)
      .mock(Router),
  );

  beforeAll(() => {
    currentPlayers = signal([]);
    MockInstance(GameService, () => ({
      currentPlayers: currentPlayers.asReadonly(),
      createGame: jest.fn(),
    }));
    currentCards = signal({
      villageois: 0,
      loupGarou: 0,
      playersNumber: 0,
      selectedRoles: new Set(),
    });
    MockInstance(CardChoiceService, () => ({
      currentChosenCards: currentCards.asReadonly(),
    }));
    MockInstance(Router, () => ({
      navigate: jest.fn(),
    }));
  });

  beforeAll(() => {
    service = MockRender(NewGameService).point.componentInstance;
  });

  it('should return players', waitForAsync(() => {
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

    service['players'].set(mockPlayers);

    expect(service.currentPlayers()).toEqual(mockPlayers);
  }));

  it('should add player', () => {
    service['players'].set([]);

    service.addPlayer('player0');

    expect(service['players']()).toEqual([
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
    service['players'].set(mockPlayers);

    service.removePlayer(1);

    expect(service['players']()).toEqual([
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
    service['players'].set(mockPlayers);

    service.reorderPlayers(0, 2);

    expect(service['players']()).toEqual([
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

    service.replay();

    expect(service['players']()).toEqual([
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
    const router = ngMocks.get(Router);

    service.replay();

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
    service['players'].set(mockPlayers);

    service.changeRole(0, PlayerRoleEnum.SORCIERE);

    expect(service['players']()).toEqual([
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

  it('should call GameService.createGame on create game', () => {
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
    const mockCardList: CardList = {
      selectedRoles: new Set(),
      loupGarou: 1,
      villageois: 1,
      playersNumber: 2,
    };

    service['players'].set(mockPlayers);
    currentCards.set(mockCardList);

    service.createGame();

    const gameService = ngMocks.get(GameService);
    expect(gameService.createGame).toHaveBeenCalledWith(
      mockPlayers,
      mockCardList,
    );
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
    const mockCardList: CardList = {
      selectedRoles: new Set(),
      loupGarou: 1,
      villageois: 1,
      playersNumber: 2,
    };

    service['players'].set(mockPlayers);
    currentCards.set(mockCardList);

    service.createGame();

    expect(service['players']()).toEqual([]);
  });

  afterAll(MockReset);
});
