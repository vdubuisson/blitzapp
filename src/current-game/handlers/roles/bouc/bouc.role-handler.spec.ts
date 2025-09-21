import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { BoucRoleHandler } from './bouc.role-handler';
import { Round } from '@/types/round';
import { TestBed } from '@angular/core/testing';
import { AfterDeathRoundQueueStore } from '@/current-game/death/after-death-round-queue/after-death-round-queue-store';
import { signal } from '@angular/core';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { PlayerStatus } from '@/types/player-status';
import { NeedCleanAfterBoucStore } from '@/current-game/orchestrator/need-clean-after-bouc/need-clean-after-bouc-store';
import * as statusUtils from '@/utils/status.utils';

describe('BoucRoleHandler', () => {
  let handler: BoucRoleHandler;
  let roundHandlersManager: RoundHandlersManager;
  let statusHandlersManager: StatusHandlersManager;
  let afterDeathRoundQueue: AfterDeathRoundQueueStore;
  let needCleanAfterBouc: NeedCleanAfterBoucStore;
  let players: Player[];

  ngMocks.faster();

  beforeAll(() => {
    roundHandlersManager = MockService(RoundHandlersManager, {
      createRoundHandler: jest.fn(),
      removeHandler: jest.fn(),
    });

    afterDeathRoundQueue = MockService(AfterDeathRoundQueueStore, {
      state: signal<Round[]>([Round.VILLAGEOIS]),
    });

    needCleanAfterBouc = MockService(NeedCleanAfterBoucStore, {
      state: signal<boolean>(false),
    });

    statusHandlersManager = MockService(StatusHandlersManager, {
      createStatusHandler: jest.fn(),
    });

    TestBed.configureTestingModule({
      providers: [
        { provide: RoundHandlersManager, useValue: roundHandlersManager },
        { provide: AfterDeathRoundQueueStore, useValue: afterDeathRoundQueue },
        { provide: NeedCleanAfterBoucStore, useValue: needCleanAfterBouc },
        { provide: StatusHandlersManager, useValue: statusHandlersManager },
      ],
    });

    TestBed.runInInjectionContext(() => (handler = new BoucRoleHandler()));

    players = [
      {
        id: 1,
        name: 'Player 1',
        role: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
      } as Player,
      {
        id: 2,
        name: 'Player 2',
        role: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
      } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRole.BOUC);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create BOUC round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        Round.BOUC,
      );
    });

    it('should create NO_VOTE status handler', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatus.NO_VOTE,
      );
    });
  });

  describe('handleDeath', () => {
    it('should add BOUC round to the afterDeathRoundQueue if killed by no one', () => {
      const deadPlayer = { ...players[0], killedBy: undefined };

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(afterDeathRoundQueue.state()).toEqual([
        Round.VILLAGEOIS,
        Round.BOUC,
      ]);
    });

    it('should remove BOUC round handler if killed by someone', () => {
      const deadPlayer = { ...players[0], killedBy: PlayerRole.LOUP_GAROU };

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        Round.BOUC,
      );
    });
  });

  describe('cleanStatusesAfterDay', () => {
    it('should return players unchanged if no need to clean', () => {
      needCleanAfterBouc.state.set(false);

      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRole.VILLAGEOIS,
          card: PlayerRole.VILLAGEOIS,
          statuses: new Set([PlayerStatus.NO_VOTE]),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRole.IDIOT,
          card: PlayerRole.IDIOT,
          statuses: new Set([PlayerStatus.NO_VOTE]),
          isDead: false,
        },
      ];
      const result = handler.cleanStatusesAfterDay(mockPlayers);
      expect(result).toBe(mockPlayers);
    });

    it('should remove NO_VOTE status from player', () => {
      needCleanAfterBouc.state.set(true);

      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRole.VILLAGEOIS,
          card: PlayerRole.VILLAGEOIS,
          statuses: new Set([PlayerStatus.NO_VOTE]),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRole.IDIOT,
          card: PlayerRole.IDIOT,
          statuses: new Set([PlayerStatus.NO_VOTE]),
          isDead: false,
        },
      ];
      const expectedPlayers = [...mockPlayers];
      jest
        .spyOn(statusUtils, 'removeStatusFromPlayersById')
        .mockReturnValue(expectedPlayers);

      const newPlayers = handler.cleanStatusesAfterDay(mockPlayers);

      expect(newPlayers).toBe(expectedPlayers);
      expect(statusUtils.removeStatusFromPlayersById).toHaveBeenCalledWith(
        mockPlayers,
        PlayerStatus.NO_VOTE,
        [0, 1],
      );
    });

    it('should set needCleanAfterBouc to false after cleaning', () => {
      needCleanAfterBouc.state.set(true);
      handler.cleanStatusesAfterDay(players);
      expect(needCleanAfterBouc.state()).toEqual(false);
    });

    it('should not remove NO_VOTE status from IDIOT killedBy', () => {
      needCleanAfterBouc.state.set(true);

      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRole.VILLAGEOIS,
          card: PlayerRole.VILLAGEOIS,
          statuses: new Set([PlayerStatus.NO_VOTE]),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRole.IDIOT,
          card: PlayerRole.IDIOT,
          statuses: new Set([PlayerStatus.NO_VOTE]),
          isDead: false,
          killedBy: PlayerRole.VILLAGEOIS,
        },
      ];
      const expectedPlayers = [...mockPlayers];
      jest
        .spyOn(statusUtils, 'removeStatusFromPlayersById')
        .mockReturnValue(expectedPlayers);

      const newPlayers = handler.cleanStatusesAfterDay(mockPlayers);

      expect(newPlayers).toBe(expectedPlayers);
      expect(statusUtils.removeStatusFromPlayersById).toHaveBeenCalledWith(
        mockPlayers,
        PlayerStatus.NO_VOTE,
        [0],
      );
    });
  });
});
