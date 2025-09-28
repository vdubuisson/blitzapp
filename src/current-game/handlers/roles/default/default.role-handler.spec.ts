import { RoleMetadata } from '@/config/role-metadata';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import { VictoryEnum } from '@/types/victory';
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
  let testStatuses: PlayerStatusEnum[];
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

    testRounds = [RoundEnum.LOUP_GAROU, RoundEnum.VOYANTE];
    testStatuses = [
      PlayerStatusEnum.WOLF_TARGET,
      PlayerStatusEnum.DEVOURED,
      PlayerStatusEnum.NO_POWER,
    ];
    testVictories = [VictoryEnum.VILLAGEOIS];

    TestBed.configureTestingModule({
      providers: [
        { provide: RoundHandlersManager, useValue: roundHandlersManager },
        { provide: StatusHandlersManager, useValue: statusHandlersManager },
        { provide: VictoryHandlersManager, useValue: victoryHandlersManager },
      ],
    });

    TestBed.runInInjectionContext(
      () =>
        (handler = new DefaultRoleHandler(PlayerRoleEnum.VILLAGEOIS, {
          rounds: testRounds,
          statuses: testStatuses,
          victories: testVictories,
        } as RoleMetadata)),
    );

    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.VILLAGEOIS);
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
