import { PlayerRoleEnum } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { PereLoupsRoleHandler } from './pere-loups.role-handler';
import { RoundEnum } from '@/types/round';
import { TestBed } from '@angular/core/testing';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { PlayerStatusEnum } from '@/types/player-status';
import { VictoryHandlersManager } from '@/game-handlers/victories/victory-handlers-manager';
import { VictoryEnum } from '@/types/victory';

describe('PereLoupsRoleHandler', () => {
  let handler: PereLoupsRoleHandler;
  let roundHandlersManager: RoundHandlersManager;
  let statusHandlersManager: StatusHandlersManager;
  let victoryHandlersManager: VictoryHandlersManager;
  let players: Player[];

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

    TestBed.configureTestingModule({
      providers: [
        { provide: RoundHandlersManager, useValue: roundHandlersManager },
        { provide: StatusHandlersManager, useValue: statusHandlersManager },
        { provide: VictoryHandlersManager, useValue: victoryHandlersManager },
      ],
    });

    TestBed.runInInjectionContext(() => (handler = new PereLoupsRoleHandler()));

    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.PERE_LOUPS);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create PERE_LOUPS round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.PERE_LOUPS,
      );
    });

    it('should create WOLF_TARGET status handler', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.WOLF_TARGET,
      );
    });

    it('should create NO_POWER status handler', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.NO_POWER,
      );
    });

    it('should create INFECTED status handler', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.INFECTED,
      );
    });

    it('should create DEVOURED status handler', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.DEVOURED,
      );
    });

    it('should create LOUP_GAROU victory handler', () => {
      handler.prepareNewGame(players);

      expect(victoryHandlersManager.createVictoryHandler).toHaveBeenCalledWith(
        VictoryEnum.LOUP_GAROU,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove PERE_LOUPS round handlers', () => {
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        RoundEnum.PERE_LOUPS,
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
