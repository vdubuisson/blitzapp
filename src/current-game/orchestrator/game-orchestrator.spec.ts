import { DeathHandler } from '@/current-game/death/death-handler';
import { RoundHandler } from '@/game-handlers/rounds/round-handler.interface';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { Player } from '@/shared/types/player';
import { RoundConfig } from '@/shared/types/round-config';
import { PlayerRole, PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import { VictoryEnum } from '@/types/victory';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { LOUPS_GAROUS_ROLES } from '@/config/loups-garous-roles';
import { CurrentPlayersStore } from '@/current-game/current-players-store/current-players-store';
import { CurrentRoundConfigStore } from '@/current-game/orchestrator/current-round-config/current-round-config-store';
import { NeedCleanAfterBoucStore } from '@/current-game/orchestrator/need-clean-after-bouc/need-clean-after-bouc-store';
import { RoleHandler } from '@/game-handlers/roles/role-handler.interface';
import { RoleHandlersManager } from '@/game-handlers/roles/role-handlers-manager';
import { StatusHandler } from '@/game-handlers/status/status-handler.interface';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { VictoryHandlersManager } from '@/game-handlers/victories/victory-handlers-manager';
import { CardChoiceStore } from '@/new-game/card-choice-store/card-choice-store';
import { CardList } from '@/shared/types/card-list';
import { signal, WritableSignal } from '@angular/core';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
  SpyObject,
} from '@ngneat/spectator/vitest';
import { PlayersRoleUtility } from '../players/players-role-utility';
import { DayCountStore } from './day-count/day-count-store';
import { GameOrchestrator } from './game-orchestrator';
import { RoundOrchestrator } from './round-orchestrator';

class MockRoleHandler implements RoleHandler {
  role = PlayerRoleEnum.VILLAGEOIS;

  prepareNewGame = vi.fn((players: Player[]) => players);
  handleDeath = vi.fn((players: Player[]) => players);
  cleanStatusesAfterDay = vi.fn((players: Player[]) => players);
}

class MockRoundHandler implements RoundHandler {
  isOnlyOnce = false;
  isDuringDay = false;
  type = RoundTypeEnum.DEFAULT;

  handleAction(players: Player[], _: number[]): Observable<Player[]> {
    return of(players);
  }

  getRoundConfig(_: Player[]): RoundConfig {
    return {} as RoundConfig;
  }
}

class MockStatusHandler implements StatusHandler {
  handleDeath = vi.fn((players: Player[]): Player[] => {
    return players;
  });

  triggerAction = vi.fn((players: Player[]): Player[] => {
    return players;
  });
}

describe('GameOrchestrator', () => {
  let spectator: SpectatorService<GameOrchestrator>;

  let roundHandlersManager: SpyObject<RoundHandlersManager>;
  let victoryHandlersManager: SpyObject<VictoryHandlersManager>;
  let roundOrchestrator: SpyObject<RoundOrchestrator>;
  let deathHandler: SpyObject<DeathHandler>;
  let statusHandlersManager: SpyObject<StatusHandlersManager>;
  let roleHandlersManager: SpyObject<RoleHandlersManager>;
  let playersRoleUtility: SpyObject<PlayersRoleUtility>;

  let currentPlayersState: WritableSignal<Player[]>;
  let currentRoundConfigState: WritableSignal<RoundConfig | null>;
  let dayCountState: WritableSignal<number>;
  let needCleanAfterBoucState: WritableSignal<boolean>;
  let cardChoiceState: WritableSignal<CardList>;

  let mockPlayers: Player[];

  const createService = createServiceFactory({
    service: GameOrchestrator,
    mocks: [
      Router,
      RoundHandlersManager,
      VictoryHandlersManager,
      RoundOrchestrator,
      DeathHandler,
      StatusHandlersManager,
      RoleHandlersManager,
    ],
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
    currentPlayersState = signal([]);
    currentRoundConfigState = signal(null);
    dayCountState = signal(1);
    needCleanAfterBoucState = signal(false);
    cardChoiceState = signal({
      selectedRoles: new Set([PlayerRoleEnum.SORCIERE, PlayerRoleEnum.VOLEUR]),
      loupGarou: 1,
      villageois: 1,
      playersNumber: 3,
    });

    spectator = createService({
      providers: [
        mockProvider(CurrentPlayersStore, { state: currentPlayersState }),
        mockProvider(CurrentRoundConfigStore, {
          state: currentRoundConfigState,
        }),
        mockProvider(DayCountStore, { state: dayCountState }),
        mockProvider(NeedCleanAfterBoucStore, {
          state: needCleanAfterBoucState,
        }),
        mockProvider(CardChoiceStore, { state: cardChoiceState }),
      ],
    });

    roundHandlersManager = spectator.inject(RoundHandlersManager);
    victoryHandlersManager = spectator.inject(VictoryHandlersManager);
    roundOrchestrator = spectator.inject(RoundOrchestrator);
    deathHandler = spectator.inject(DeathHandler);
    statusHandlersManager = spectator.inject(StatusHandlersManager);
    roleHandlersManager = spectator.inject(RoleHandlersManager);
    playersRoleUtility = spectator.inject(PlayersRoleUtility);

    mockPlayers = [
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
        role: PlayerRoleEnum.SORCIERE,
        card: PlayerRoleEnum.SORCIERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  describe('on victory', () => {
    beforeEach(() => {
      const mockCurrentRoundHandler = new MockRoundHandler();
      mockCurrentRoundHandler.isDuringDay = true;
      const mockNextRoundHandler = new MockRoundHandler();
      mockNextRoundHandler.isDuringDay = true;
      mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

      currentRoundConfigState.set({
        round: RoundEnum.CAPITAINE,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 1,
        isDuringDay: false,
        type: RoundTypeEnum.DEFAULT,
      });

      vi.spyOn(roundHandlersManager, 'getHandler').mockImplementation(
        (round) => {
          switch (round) {
            case RoundEnum.CAPITAINE:
              return mockCurrentRoundHandler;
            case RoundEnum.VILLAGEOIS:
              return mockNextRoundHandler;
            default:
              return new MockRoundHandler();
          }
        },
      );

      vi.spyOn(victoryHandlersManager, 'getVictory').mockReturnValue(
        VictoryEnum.LOUP_GAROU,
      );
      vi.spyOn(roundOrchestrator, 'getNextRound').mockReturnValue(
        RoundEnum.VILLAGEOIS,
      );
      vi.spyOn(deathHandler, 'handleNewDeaths').mockReturnValue([]);
    });

    it('should reset rounds on victory', () => {
      spectator.service.submitRoundAction([]);

      expect(roundOrchestrator.resetRounds).toHaveBeenCalled();
    });

    it('should reset deaths on victory', () => {
      spectator.service.submitRoundAction([]);

      expect(deathHandler.reset).toHaveBeenCalled();
    });

    it('should clear round handlers on victory', () => {
      spectator.service.submitRoundAction([]);

      expect(roundHandlersManager.clearHandlers).toHaveBeenCalled();
    });

    it('should clear victory handlers on victory', () => {
      spectator.service.submitRoundAction([]);

      expect(victoryHandlersManager.clearHandlers).toHaveBeenCalled();
    });

    it('should reset round config on victory', () => {
      spectator.service.submitRoundAction([]);

      expect(currentRoundConfigState()).toBeNull();
    });

    it('should navigate to victory screen on victory', () => {
      const router = spectator.inject(Router);
      spectator.service.submitRoundAction([]);
      expect(router.navigate).toHaveBeenCalledWith(['victory'], {
        queryParams: { victory: VictoryEnum.LOUP_GAROU },
      });
    });
  });

  describe('on game creation', () => {
    beforeEach(() => {
      vi.spyOn(roleHandlersManager, 'getHandlers').mockReturnValue([]);
    });

    it('should init round handlers on game creation', () => {
      spectator.service.createGame([]);

      expect(roundHandlersManager.clearHandlers).toHaveBeenCalled();
      expect(roundHandlersManager.initRequiredHandlers).toHaveBeenCalled();
    });

    it('should init victory handlers on game creation', () => {
      spectator.service.createGame([]);

      expect(victoryHandlersManager.clearHandlers).toHaveBeenCalled();
      expect(victoryHandlersManager.initRequiredHandlers).toHaveBeenCalled();
    });

    it('should init not played roles as default handlers on game creation', () => {
      const notPlayedRoles: PlayerRole[] = [
        PlayerRoleEnum.VOLEUR,
        PlayerRoleEnum.CHASSEUR,
      ];
      playersRoleUtility.getNotPlayedRoles.mockReturnValue(notPlayedRoles);

      spectator.service.createGame([]);

      expect(roundHandlersManager.initAsDefaultHandlers).toHaveBeenCalledWith(
        notPlayedRoles,
      );
    });

    it('should init role handlers on game creation', () => {
      spectator.service.createGame(mockPlayers);

      expect(roleHandlersManager.clearHandlers).toHaveBeenCalled();
      expect(roleHandlersManager.initHandlers).toHaveBeenCalledWith(
        mockPlayers,
      );
    });

    it('should init status handlers on game creation', () => {
      spectator.service.createGame(mockPlayers);

      expect(statusHandlersManager.clearHandlers).toHaveBeenCalled();
      expect(statusHandlersManager.initHandlers).toHaveBeenCalledWith(
        mockPlayers,
      );
    });

    it('should reset rounds order on game creation', () => {
      spectator.service.createGame(mockPlayers);

      expect(roundOrchestrator.resetRoundsOrder).toHaveBeenCalled();
    });

    it('should call prepareNewGame of each role handler on game creation', () => {
      const mockRoleHandler = new MockRoleHandler();
      vi.spyOn(roleHandlersManager, 'getHandlers').mockReturnValue([
        mockRoleHandler,
      ]);

      spectator.service.createGame(mockPlayers);

      expect(mockRoleHandler.prepareNewGame).toHaveBeenCalledWith(mockPlayers);
    });

    it('should set players on game creation', () => {
      spectator.service.createGame(mockPlayers);

      expect(currentPlayersState()).toEqual(mockPlayers);
    });

    it('should set day count to 1 on game creation if no Ange', () => {
      dayCountState.set(2);

      spectator.service.createGame(mockPlayers);

      expect(dayCountState()).toEqual(1);
    });

    it('should set day count to 0 on game creation if Ange', () => {
      dayCountState.set(2);
      const newMockPlayers: Player[] = [
        ...mockPlayers,
        {
          id: 3,
          name: 'player3',
          role: PlayerRoleEnum.ANGE,
          card: PlayerRoleEnum.ANGE,
          statuses: new Set(),
          isDead: false,
        },
      ];

      spectator.service.createGame(newMockPlayers);

      expect(dayCountState()).toEqual(0);
    });

    it('should navigate to /current-game on game creation', () => {
      const router = spectator.inject(Router);

      spectator.service.createGame(mockPlayers);

      expect(router.navigate).toHaveBeenCalledWith(['current-game']);
    });

    it('should set first round on game creation using RoundOrchestrator', () => {
      const mockRoundConfig: RoundConfig = {
        round: RoundEnum.LOUP_GAROU,
        selectablePlayers: [0, 2],
        maxSelectable: 1,
        minSelectable: 1,
        isDuringDay: false,
        type: RoundTypeEnum.DEFAULT,
      };
      const mockRoundHandler = new MockRoundHandler();
      mockRoundHandler.getRoundConfig = () => mockRoundConfig;
      vi.spyOn(roundHandlersManager, 'getHandler').mockReturnValue(
        mockRoundHandler,
      );
      vi.spyOn(roundOrchestrator, 'getFirstRound').mockReturnValue(
        RoundEnum.LOUP_GAROU,
      );

      spectator.service.createGame(mockPlayers);

      expect(currentRoundConfigState()).toEqual(mockRoundConfig);
    });
  });

  describe('during game', () => {
    let mockRoundHandler: MockRoundHandler;

    beforeEach(() => {
      mockRoundHandler = new MockRoundHandler();
      vi.spyOn(roundHandlersManager, 'getHandler').mockReturnValue(
        mockRoundHandler,
      );
      vi.spyOn(deathHandler, 'handleNewDeaths').mockReturnValue(mockPlayers);
    });

    it('should update players with handler action on submit', () => {
      vi.spyOn(mockRoundHandler, 'handleAction').mockReturnValue(
        of(mockPlayers),
      );
      const mockRoundConfig: RoundConfig = {
        round: RoundEnum.LOUP_GAROU,
        selectablePlayers: [0, 2],
        maxSelectable: 1,
        minSelectable: 1,
        isDuringDay: false,
        type: RoundTypeEnum.DEFAULT,
      };
      currentRoundConfigState.set(mockRoundConfig);

      expect(currentPlayersState()).toEqual([]);

      spectator.service.submitRoundAction([]);

      expect(currentPlayersState()).toEqual(mockPlayers);
    });

    it('should set next round on submit', () => {
      const mockRoundConfig: RoundConfig = {
        round: RoundEnum.LOUP_GAROU,
        selectablePlayers: [0, 2],
        maxSelectable: 1,
        minSelectable: 1,
        isDuringDay: false,
        type: RoundTypeEnum.DEFAULT,
      };
      const mockNextRoundConfig: RoundConfig = {
        round: RoundEnum.SORCIERE_HEALTH,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: false,
        type: RoundTypeEnum.DEFAULT,
      };
      currentRoundConfigState.set(mockRoundConfig);
      currentPlayersState.set(mockPlayers);
      vi.spyOn(mockRoundHandler, 'getRoundConfig').mockReturnValue(
        mockNextRoundConfig,
      );
      vi.spyOn(roundOrchestrator, 'getNextRound').mockReturnValue(
        RoundEnum.SORCIERE_HEALTH,
      );

      expect(currentRoundConfigState()).toEqual(mockRoundConfig);

      spectator.service.submitRoundAction([]);

      expect(currentRoundConfigState()).toEqual(mockNextRoundConfig);
    });

    it('should clear and reinit handlers after VOLEUR round', async () => {
      const mockCurrentRoundConfig: RoundConfig = {
        round: RoundEnum.VOLEUR,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: false,
        type: RoundTypeEnum.ROLES,
      };
      const mockNewPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.SORCIERE,
          card: PlayerRoleEnum.VOLEUR,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.CUPIDON,
          card: PlayerRoleEnum.CUPIDON,
          statuses: new Set(),
          isDead: false,
        },
      ];
      const mockCurrentRoundHandler = new MockRoundHandler();
      mockCurrentRoundHandler.isDuringDay = false;
      const mockNextRoundHandler = new MockRoundHandler();
      mockNextRoundHandler.isDuringDay = false;
      mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

      currentPlayersState.set(mockNewPlayers);

      vi.spyOn(roundHandlersManager, 'getHandler').mockImplementation(
        (round) => {
          switch (round) {
            case RoundEnum.VOLEUR:
              return mockCurrentRoundHandler;
            case RoundEnum.VOYANTE:
              return mockNextRoundHandler;
            default:
              return new MockRoundHandler();
          }
        },
      );
      vi.spyOn(roundOrchestrator, 'getNextRound').mockReturnValue(
        RoundEnum.VOYANTE,
      );

      currentRoundConfigState.set(mockCurrentRoundConfig);
      cardChoiceState.set({
        selectedRoles: new Set([
          PlayerRoleEnum.SORCIERE,
          PlayerRoleEnum.VOLEUR,
        ]),
        loupGarou: 1,
        villageois: 1,
        playersNumber: 3,
      });
      const notPlayedRoles: PlayerRole[] = [
        PlayerRoleEnum.VOLEUR,
        PlayerRoleEnum.CHASSEUR,
      ];
      playersRoleUtility.getNotPlayedRoles.mockReturnValue(notPlayedRoles);
      const mockRoleHandler = new MockRoleHandler();
      vi.spyOn(roleHandlersManager, 'getHandlers').mockReturnValue([
        mockRoleHandler,
      ]);

      spectator.service.submitRoundAction([]);

      expect(roundHandlersManager.clearHandlers).toHaveBeenCalled();
      expect(roundHandlersManager.initRequiredHandlers).toHaveBeenCalled();
      expect(victoryHandlersManager.clearHandlers).toHaveBeenCalled();
      expect(victoryHandlersManager.initRequiredHandlers).toHaveBeenCalled();
      expect(roundHandlersManager.initAsDefaultHandlers).toHaveBeenCalledWith(
        notPlayedRoles,
      );
      expect(roleHandlersManager.clearHandlers).toHaveBeenCalled();
      expect(roleHandlersManager.initHandlers).toHaveBeenCalledWith(
        mockNewPlayers,
      );
      expect(statusHandlersManager.clearHandlers).toHaveBeenCalled();
      expect(statusHandlersManager.initHandlers).toHaveBeenCalledWith(
        mockNewPlayers,
      );
      expect(roundOrchestrator.resetRoundsOrder).toHaveBeenCalled();
      expect(mockRoleHandler.prepareNewGame).toHaveBeenCalledWith(
        mockNewPlayers,
      );
      expect(currentPlayersState()).toEqual(mockNewPlayers);
    });

    it('should remove JOUEUR_FLUTE handlers if JOUEUR_FLUTE has become LOUP_GAROU after PERE_LOUPS round', async () => {
      const mockCurrentRoundConfig: RoundConfig = {
        round: RoundEnum.PERE_LOUPS,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: false,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockNewPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.LOUP_GAROU,
          card: PlayerRoleEnum.JOUEUR_FLUTE,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.PERE_LOUPS,
          card: PlayerRoleEnum.PERE_LOUPS,
          statuses: new Set(),
          isDead: false,
        },
      ];
      const mockCurrentRoundHandler = new MockRoundHandler();
      mockCurrentRoundHandler.isDuringDay = false;
      mockCurrentRoundHandler.handleAction = () => of(mockNewPlayers);
      const mockNextRoundHandler = new MockRoundHandler();
      mockNextRoundHandler.isDuringDay = false;
      mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

      vi.spyOn(roundHandlersManager, 'getHandler').mockImplementation(
        (round) => {
          switch (round) {
            case RoundEnum.PERE_LOUPS:
              return mockCurrentRoundHandler;
            case RoundEnum.VOYANTE:
              return mockNextRoundHandler;
            default:
              return new MockRoundHandler();
          }
        },
      );
      vi.spyOn(roundOrchestrator, 'getNextRound').mockReturnValue(
        RoundEnum.VOYANTE,
      );

      currentRoundConfigState.set(mockCurrentRoundConfig);
      cardChoiceState.set({
        selectedRoles: new Set<PlayerRole>([PlayerRoleEnum.JOUEUR_FLUTE]),
        loupGarou: 1,
        villageois: 1,
        playersNumber: 3,
      });

      spectator.service.submitRoundAction([]);

      expect(roundHandlersManager.removeHandlersByRoles).toHaveBeenCalledWith([
        PlayerRoleEnum.JOUEUR_FLUTE,
      ]);
      expect(victoryHandlersManager.removeHandler).toHaveBeenCalledWith(
        VictoryEnum.JOUEUR_FLUTE,
      );
    });

    it('should not remove JOUEUR_FLUTE handlers if JOUEUR_FLUTE has not become LOUP_GAROU after PERE_LOUPS round', async () => {
      const mockCurrentRoundConfig: RoundConfig = {
        round: RoundEnum.PERE_LOUPS,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: false,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockNewPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.JOUEUR_FLUTE,
          card: PlayerRoleEnum.JOUEUR_FLUTE,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.PERE_LOUPS,
          card: PlayerRoleEnum.PERE_LOUPS,
          statuses: new Set(),
          isDead: false,
        },
      ];
      const mockCurrentRoundHandler = new MockRoundHandler();
      mockCurrentRoundHandler.isDuringDay = false;
      mockCurrentRoundHandler.handleAction = () => of(mockNewPlayers);
      const mockNextRoundHandler = new MockRoundHandler();
      mockNextRoundHandler.isDuringDay = false;
      mockNextRoundHandler.getRoundConfig = () => ({}) as RoundConfig;

      vi.spyOn(roundHandlersManager, 'getHandler').mockImplementation(
        (round) => {
          switch (round) {
            case RoundEnum.PERE_LOUPS:
              return mockCurrentRoundHandler;
            case RoundEnum.VOYANTE:
              return mockNextRoundHandler;
            default:
              return new MockRoundHandler();
          }
        },
      );
      vi.spyOn(roundOrchestrator, 'getNextRound').mockReturnValue(
        RoundEnum.VOYANTE,
      );

      currentRoundConfigState.set(mockCurrentRoundConfig);
      cardChoiceState.set({
        selectedRoles: new Set<PlayerRole>([PlayerRoleEnum.JOUEUR_FLUTE]),
        loupGarou: 1,
        villageois: 1,
        playersNumber: 3,
      });

      spectator.service.submitRoundAction([]);

      expect(roundHandlersManager.removeHandlersByRoles).not.toHaveBeenCalled();
      expect(victoryHandlersManager.removeHandler).not.toHaveBeenCalled();
    });

    it('should handle daytime deaths if current round is during day', () => {
      const mockCurrentRoundConfig: RoundConfig = {
        round: RoundEnum.VILLAGEOIS,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: true,
        type: RoundTypeEnum.PLAYERS,
      };
      currentRoundConfigState.set(mockCurrentRoundConfig);
      const mockCurrentRoundHandler = new MockRoundHandler();
      mockCurrentRoundHandler.isDuringDay = true;
      vi.spyOn(roundHandlersManager, 'getHandler').mockReturnValue(
        mockCurrentRoundHandler,
      );

      const mockNewPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.JOUEUR_FLUTE,
          card: PlayerRoleEnum.JOUEUR_FLUTE,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.PERE_LOUPS,
          card: PlayerRoleEnum.PERE_LOUPS,
          statuses: new Set(),
          isDead: false,
        },
      ];
      vi.spyOn(deathHandler, 'handleNewDeaths').mockReturnValue(mockNewPlayers);
      currentPlayersState.set(mockPlayers);

      spectator.service.submitRoundAction([]);

      expect(deathHandler.handleNewDeaths).toHaveBeenCalledWith(mockPlayers);
      expect(currentPlayersState()).toEqual(mockNewPlayers);
    });

    it('should check victory if no next round', () => {
      const mockCurrentRoundConfig: RoundConfig = {
        round: RoundEnum.VILLAGEOIS,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: true,
        type: RoundTypeEnum.PLAYERS,
      };
      currentRoundConfigState.set(mockCurrentRoundConfig);

      vi.spyOn(roundOrchestrator, 'getNextRound').mockImplementation(() => {
        throw new Error('No next round');
      });
      vi.spyOn(victoryHandlersManager, 'getVictory').mockReturnValue(
        VictoryEnum.NONE,
      );

      spectator.service.submitRoundAction([]);

      expect(victoryHandlersManager.getVictory).toHaveBeenCalled();
    });

    it('should trigger WOLF_TARGET status after LOUP_GAROU round', () => {
      const mockCurrentRoundConfig: RoundConfig = {
        round: RoundEnum.LOUP_GAROU,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: false,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockNewPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.JOUEUR_FLUTE,
          card: PlayerRoleEnum.JOUEUR_FLUTE,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.PERE_LOUPS,
          card: PlayerRoleEnum.PERE_LOUPS,
          statuses: new Set(),
          isDead: false,
        },
      ];
      const mockCurrentRoundHandler = new MockRoundHandler();
      mockCurrentRoundHandler.isDuringDay = false;
      const mockNextRoundConfig: RoundConfig = {
        round: RoundEnum.VILLAGEOIS,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: true,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockNextRoundHandler = new MockRoundHandler();
      mockNextRoundHandler.isDuringDay = true;
      mockNextRoundHandler.getRoundConfig = () => mockNextRoundConfig;

      const mockStatusHandler = new MockStatusHandler();
      vi.spyOn(mockStatusHandler, 'triggerAction').mockReturnValue(
        mockNewPlayers,
      );

      currentRoundConfigState.set(mockCurrentRoundConfig);
      roundOrchestrator.getNextRound.mockReturnValue(RoundEnum.VILLAGEOIS);
      vi.spyOn(roundHandlersManager, 'getHandler').mockImplementation(
        (round) => {
          switch (round) {
            case RoundEnum.LOUP_GAROU:
              return mockCurrentRoundHandler;
            case RoundEnum.VILLAGEOIS:
              return mockNextRoundHandler;
            default:
              return new MockRoundHandler();
          }
        },
      );
      vi.spyOn(statusHandlersManager, 'getHandler').mockReturnValue(
        mockStatusHandler,
      );

      mockPlayers[0].statuses.add(PlayerStatusEnum.WOLF_TARGET);
      currentPlayersState.set(mockPlayers);

      spectator.service.submitRoundAction([]);

      expect(mockStatusHandler.triggerAction).toHaveBeenCalledWith(mockPlayers);
      expect(statusHandlersManager.getHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.WOLF_TARGET,
      );
    });

    it('should trigger INFECTED status after LOUP_GAROU round', () => {
      const mockCurrentRoundConfig: RoundConfig = {
        round: RoundEnum.LOUP_GAROU,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: false,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockNewPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.JOUEUR_FLUTE,
          card: PlayerRoleEnum.JOUEUR_FLUTE,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.PERE_LOUPS,
          card: PlayerRoleEnum.PERE_LOUPS,
          statuses: new Set(),
          isDead: false,
        },
      ];
      const mockCurrentRoundHandler = new MockRoundHandler();
      mockCurrentRoundHandler.isDuringDay = false;
      const mockNextRoundConfig: RoundConfig = {
        round: RoundEnum.VILLAGEOIS,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: true,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockNextRoundHandler = new MockRoundHandler();
      mockNextRoundHandler.isDuringDay = true;
      mockNextRoundHandler.getRoundConfig = () => mockNextRoundConfig;

      const mockStatusHandler = new MockStatusHandler();
      vi.spyOn(mockStatusHandler, 'triggerAction').mockReturnValue(
        mockNewPlayers,
      );

      currentRoundConfigState.set(mockCurrentRoundConfig);
      roundOrchestrator.getNextRound.mockReturnValue(RoundEnum.VILLAGEOIS);
      vi.spyOn(roundHandlersManager, 'getHandler').mockImplementation(
        (round) => {
          switch (round) {
            case RoundEnum.LOUP_GAROU:
              return mockCurrentRoundHandler;
            case RoundEnum.VILLAGEOIS:
              return mockNextRoundHandler;
            default:
              return new MockRoundHandler();
          }
        },
      );
      vi.spyOn(statusHandlersManager, 'getHandler').mockReturnValue(
        mockStatusHandler,
      );

      mockPlayers[0].statuses.add(PlayerStatusEnum.INFECTED);
      currentPlayersState.set(mockPlayers);

      spectator.service.submitRoundAction([]);

      expect(mockStatusHandler.triggerAction).toHaveBeenCalledWith(mockPlayers);
      expect(statusHandlersManager.getHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.INFECTED,
      );
    });

    it('should handle new deaths after night', () => {
      const mockCurrentRoundConfig: RoundConfig = {
        round: RoundEnum.VOYANTE,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: false,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockNewPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.JOUEUR_FLUTE,
          card: PlayerRoleEnum.JOUEUR_FLUTE,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.PERE_LOUPS,
          card: PlayerRoleEnum.PERE_LOUPS,
          statuses: new Set(),
          isDead: false,
        },
      ];
      const mockCurrentRoundHandler = new MockRoundHandler();
      mockCurrentRoundHandler.isDuringDay = false;
      const mockNextRoundConfig: RoundConfig = {
        round: RoundEnum.VILLAGEOIS,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: true,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockNextRoundHandler = new MockRoundHandler();
      mockNextRoundHandler.isDuringDay = true;
      mockNextRoundHandler.getRoundConfig = () => mockNextRoundConfig;

      currentRoundConfigState.set(mockCurrentRoundConfig);
      roundOrchestrator.getNextRound.mockReturnValue(RoundEnum.VILLAGEOIS);
      vi.spyOn(roundHandlersManager, 'getHandler').mockImplementation(
        (round) => {
          switch (round) {
            case RoundEnum.VOYANTE:
              return mockCurrentRoundHandler;
            case RoundEnum.VILLAGEOIS:
              return mockNextRoundHandler;
            default:
              return new MockRoundHandler();
          }
        },
      );
      deathHandler.handleNewDeaths.mockReturnValue(mockNewPlayers);
      currentPlayersState.set(mockPlayers);

      spectator.service.submitRoundAction([]);

      expect(deathHandler.handleNewDeaths).toHaveBeenCalledWith(mockPlayers);
      expect(currentPlayersState()).toEqual(mockNewPlayers);
      expect(roundOrchestrator.getNextRound).toHaveBeenCalledTimes(2);
    });

    it('should announce deaths if next round is during day', () => {
      const mockCurrentRoundConfig: RoundConfig = {
        round: RoundEnum.VOYANTE,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: false,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockCurrentRoundHandler = new MockRoundHandler();
      mockCurrentRoundHandler.isDuringDay = false;
      const mockNextRoundConfig: RoundConfig = {
        round: RoundEnum.VILLAGEOIS,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: true,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockNextRoundHandler = new MockRoundHandler();
      mockNextRoundHandler.isDuringDay = true;
      mockNextRoundHandler.getRoundConfig = () => mockNextRoundConfig;

      currentRoundConfigState.set(mockCurrentRoundConfig);
      roundOrchestrator.getNextRound.mockReturnValue(RoundEnum.VILLAGEOIS);
      vi.spyOn(roundHandlersManager, 'getHandler').mockImplementation(
        (round) => {
          switch (round) {
            case RoundEnum.VOYANTE:
              return mockCurrentRoundHandler;
            case RoundEnum.VILLAGEOIS:
              return mockNextRoundHandler;
            default:
              return new MockRoundHandler();
          }
        },
      );
      deathHandler.handleNewDeaths.mockReturnValue([]);
      currentPlayersState.set(mockPlayers);

      spectator.service.submitRoundAction([]);

      expect(deathHandler.announceDeaths).toHaveBeenCalled();
    });

    it('should announce deaths if current round is during day', () => {
      const mockCurrentRoundConfig: RoundConfig = {
        round: RoundEnum.VILLAGEOIS,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: true,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockCurrentRoundHandler = new MockRoundHandler();
      mockCurrentRoundHandler.isDuringDay = true;
      const mockNextRoundConfig: RoundConfig = {
        round: RoundEnum.VOYANTE,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: false,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockNextRoundHandler = new MockRoundHandler();
      mockNextRoundHandler.isDuringDay = false;
      mockNextRoundHandler.getRoundConfig = () => mockNextRoundConfig;

      currentRoundConfigState.set(mockCurrentRoundConfig);
      roundOrchestrator.getNextRound.mockReturnValue(RoundEnum.VOYANTE);
      vi.spyOn(roundHandlersManager, 'getHandler').mockImplementation(
        (round) => {
          switch (round) {
            case RoundEnum.VILLAGEOIS:
              return mockCurrentRoundHandler;
            case RoundEnum.VOYANTE:
              return mockNextRoundHandler;
            default:
              return new MockRoundHandler();
          }
        },
      );
      const mockRoleHandler = new MockRoleHandler();
      mockRoleHandler.cleanStatusesAfterDay.mockReturnValue(mockPlayers);
      roleHandlersManager.getHandler.mockReturnValue(mockRoleHandler);

      currentPlayersState.set(mockPlayers);

      spectator.service.submitRoundAction([]);

      expect(deathHandler.announceDeaths).toHaveBeenCalled();
    });

    it('should clean statuses after day', () => {
      const mockCurrentRoundConfig: RoundConfig = {
        round: RoundEnum.VILLAGEOIS,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: true,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockCurrentRoundHandler = new MockRoundHandler();
      mockCurrentRoundHandler.isDuringDay = true;
      const mockNextRoundConfig: RoundConfig = {
        round: RoundEnum.VOYANTE,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: false,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockNextRoundHandler = new MockRoundHandler();
      mockNextRoundHandler.isDuringDay = false;
      mockNextRoundHandler.getRoundConfig = () => mockNextRoundConfig;
      const mockNewPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.JOUEUR_FLUTE,
          card: PlayerRoleEnum.JOUEUR_FLUTE,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.PERE_LOUPS,
          card: PlayerRoleEnum.PERE_LOUPS,
          statuses: new Set(),
          isDead: false,
        },
      ];
      const mockRoleHandler = new MockRoleHandler();
      mockRoleHandler.cleanStatusesAfterDay.mockReturnValue(mockNewPlayers);

      currentRoundConfigState.set(mockCurrentRoundConfig);
      roundOrchestrator.getNextRound.mockReturnValue(RoundEnum.VOYANTE);
      vi.spyOn(roundHandlersManager, 'getHandler').mockImplementation(
        (round) => {
          switch (round) {
            case RoundEnum.VILLAGEOIS:
              return mockCurrentRoundHandler;
            case RoundEnum.VOYANTE:
              return mockNextRoundHandler;
            default:
              return new MockRoundHandler();
          }
        },
      );
      roleHandlersManager.getHandler.mockReturnValue(mockRoleHandler);

      currentPlayersState.set(mockPlayers);

      spectator.service.submitRoundAction([]);

      expect(mockRoleHandler.cleanStatusesAfterDay).toHaveBeenCalledWith(
        mockPlayers,
      );
      expect(currentPlayersState()).toEqual(mockNewPlayers);
    });

    it('should increment day count after day', () => {
      const mockCurrentRoundConfig: RoundConfig = {
        round: RoundEnum.VILLAGEOIS,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: true,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockCurrentRoundHandler = new MockRoundHandler();
      mockCurrentRoundHandler.isDuringDay = true;
      const mockNextRoundConfig: RoundConfig = {
        round: RoundEnum.VOYANTE,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: false,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockNextRoundHandler = new MockRoundHandler();
      mockNextRoundHandler.isDuringDay = false;
      mockNextRoundHandler.getRoundConfig = () => mockNextRoundConfig;

      currentRoundConfigState.set(mockCurrentRoundConfig);
      roundOrchestrator.getNextRound.mockReturnValue(RoundEnum.VOYANTE);
      vi.spyOn(roundHandlersManager, 'getHandler').mockImplementation(
        (round) => {
          switch (round) {
            case RoundEnum.VILLAGEOIS:
              return mockCurrentRoundHandler;
            case RoundEnum.VOYANTE:
              return mockNextRoundHandler;
            default:
              return new MockRoundHandler();
          }
        },
      );
      currentPlayersState.set([]);
      deathHandler.handleNewDeaths.mockReturnValue([]);

      expect(dayCountState()).toEqual(1);

      spectator.service.submitRoundAction([]);

      expect(dayCountState()).toEqual(2);
    });

    it('should set needCleanAfterBouc on BOUC round', () => {
      const mockCurrentRoundConfig: RoundConfig = {
        round: RoundEnum.BOUC,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: true,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockCurrentRoundHandler = new MockRoundHandler();
      mockCurrentRoundHandler.isDuringDay = true;
      const mockNextRoundConfig: RoundConfig = {
        round: RoundEnum.VOYANTE,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: false,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockNextRoundHandler = new MockRoundHandler();
      mockNextRoundHandler.isDuringDay = false;
      mockNextRoundHandler.getRoundConfig = () => mockNextRoundConfig;

      currentRoundConfigState.set(mockCurrentRoundConfig);
      roundOrchestrator.getNextRound.mockReturnValue(RoundEnum.VOYANTE);
      vi.spyOn(roundHandlersManager, 'getHandler').mockImplementation(
        (round) => {
          switch (round) {
            case RoundEnum.BOUC:
              return mockCurrentRoundHandler;
            case RoundEnum.VOYANTE:
              return mockNextRoundHandler;
            default:
              return new MockRoundHandler();
          }
        },
      );
      currentPlayersState.set([]);
      deathHandler.handleNewDeaths.mockReturnValue([]);

      spectator.service.submitRoundAction([]);

      expect(needCleanAfterBoucState()).toBe(true);
    });

    it('should set next round', () => {
      const mockCurrentRoundConfig: RoundConfig = {
        round: RoundEnum.BOUC,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: true,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockCurrentRoundHandler = new MockRoundHandler();
      mockCurrentRoundHandler.isDuringDay = true;
      const mockNextRoundConfig: RoundConfig = {
        round: RoundEnum.VOYANTE,
        selectablePlayers: [0],
        maxSelectable: 1,
        minSelectable: 0,
        isDuringDay: false,
        type: RoundTypeEnum.PLAYERS,
      };
      const mockNextRoundHandler = new MockRoundHandler();
      mockNextRoundHandler.isDuringDay = false;
      mockNextRoundHandler.getRoundConfig = () => mockNextRoundConfig;

      currentRoundConfigState.set(mockCurrentRoundConfig);
      roundOrchestrator.getNextRound.mockReturnValue(RoundEnum.VOYANTE);
      vi.spyOn(roundHandlersManager, 'getHandler').mockImplementation(
        (round) => {
          switch (round) {
            case RoundEnum.BOUC:
              return mockCurrentRoundHandler;
            case RoundEnum.VOYANTE:
              return mockNextRoundHandler;
            default:
              return new MockRoundHandler();
          }
        },
      );
      deathHandler.handleNewDeaths.mockReturnValue([]);
      currentPlayersState.set([]);

      spectator.service.submitRoundAction([]);

      expect(currentRoundConfigState()).toEqual(mockNextRoundConfig);
    });
  });
});
