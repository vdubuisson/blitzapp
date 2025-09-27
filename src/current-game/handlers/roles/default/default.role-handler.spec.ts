import { RoleMetadata } from '@/config/role-metadata';
import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { Round } from '@/types/round';
import { Victory } from '@/types/victory';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { VictoryHandlersManager } from '@/game-handlers/victories/victory-handlers-manager';
import { TestBed } from '@angular/core/testing';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { DefaultRoleHandler } from './default.role-handler';

describe('DefaultRoleHandler', () => {
  let handler: DefaultRoleHandler;
  let roundHandlersManager: RoundHandlersManager;
  let statusHandlersManager: StatusHandlersManager;
  let victoryHandlersManager: VictoryHandlersManager;

  let players: Player[];
  let testRounds: Round[];
  let testStatuses: PlayerStatus[];
  let testVictories: Victory[];

  ngMocks.faster();

  beforeAll(() => {
    roundHandlersManager = MockService(RoundHandlersManager, {
      createRoundHandler: jest.fn(),
      removeHandler: jest.fn(),
    });
    statusHandlersManager = MockService(StatusHandlersManager, {
      createStatusHandler: jest.fn(),
    });
    victoryHandlersManager = MockService(VictoryHandlersManager, {
      createVictoryHandler: jest.fn(),
    });

    testRounds = [Round.LOUP_GAROU, Round.VOYANTE];
    testStatuses = [
      PlayerStatus.WOLF_TARGET,
      PlayerStatus.DEVOURED,
      PlayerStatus.NO_POWER,
    ];
    testVictories = [Victory.VILLAGEOIS];

    TestBed.configureTestingModule({
      providers: [
        { provide: RoundHandlersManager, useValue: roundHandlersManager },
        { provide: StatusHandlersManager, useValue: statusHandlersManager },
        { provide: VictoryHandlersManager, useValue: victoryHandlersManager },
      ],
    });

    TestBed.runInInjectionContext(
      () =>
        (handler = new DefaultRoleHandler(PlayerRole.VILLAGEOIS, {
          rounds: testRounds,
          statuses: testStatuses,
          victories: testVictories,
        } as RoleMetadata)),
    );

    players = [
      { id: 1, name: 'Player 1', role: PlayerRole.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRole.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRole.VILLAGEOIS);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create round handlers for all configured rounds', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        testRounds[0],
      );
      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        testRounds[1],
      );
      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledTimes(
        testRounds.length,
      );
    });

    it('should create status handlers for all configured statuses', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        testStatuses[0],
      );
      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        testStatuses[1],
      );
      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        testStatuses[2],
      );
      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledTimes(
        testStatuses.length,
      );
    });

    it('should create victory handlers for all configured victories', () => {
      handler.prepareNewGame(players);

      expect(victoryHandlersManager.createVictoryHandler).toHaveBeenCalledWith(
        testVictories[0],
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove round handlers for all configured rounds', () => {
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        testRounds[0],
      );
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        testRounds[1],
      );
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledTimes(
        testRounds.length,
      );
    });
  });

  describe('cleanStatusesAfterDay', () => {
    it('should return players unchanged', () => {
      const result = handler.cleanStatusesAfterDay(players);
      expect(result).toBe(players);
    });
  });
});
