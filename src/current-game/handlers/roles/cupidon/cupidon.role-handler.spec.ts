import { PlayerRoleEnum } from '@/types/player-role';
import { RoundEnum } from '@/types/round';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { TestBed } from '@angular/core/testing';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { CupidonRoleHandler } from './cupidon.role-handler';
import { PlayerStatusEnum } from '@/types/player-status';
import { VictoryHandlersManager } from '@/game-handlers/victories/victory-handlers-manager';
import { VictoryEnum } from '@/types/victory';

describe('CupidonRoleHandler', () => {
  let handler: CupidonRoleHandler;
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

    TestBed.runInInjectionContext(() => (handler = new CupidonRoleHandler()));

    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.CUPIDON);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create CUPIDON round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.CUPIDON,
      );
    });

    it('should create AMOUREUX round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.AMOUREUX,
      );
    });

    it('should create LOVER status handler', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.LOVER,
      );
    });

    it('should create AMOUREUX victory handler', () => {
      handler.prepareNewGame(players);

      expect(victoryHandlersManager.createVictoryHandler).toHaveBeenCalledWith(
        VictoryEnum.AMOUREUX,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove CUPIDON round handler', () => {
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        RoundEnum.CUPIDON,
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
