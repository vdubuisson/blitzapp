import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { GrandMechantLoupRoleHandler } from './grand-mechant-loup.role-handler';
import { Round } from '@/types/round';
import { TestBed } from '@angular/core/testing';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { PlayerStatus } from '@/types/player-status';
import { VictoryHandlersManager } from '@/game-handlers/victories/victory-handlers-manager';
import { Victory } from '@/types/victory';

describe('GrandMechantLoupRoleHandler', () => {
  let handler: GrandMechantLoupRoleHandler;
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

    TestBed.runInInjectionContext(
      () => (handler = new GrandMechantLoupRoleHandler()),
    );

    players = [
      { id: 1, name: 'Player 1', role: PlayerRole.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRole.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRole.GRAND_MECHANT_LOUP);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create GRAND_MECHANT_LOUP round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        Round.GRAND_MECHANT_LOUP,
      );
    });

    it('should create WOLF_TARGET status handler for each player', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatus.WOLF_TARGET,
      );
    });

    it('should create DEVOURED status handler for each player', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatus.DEVOURED,
      );
    });

    it('should create LOUP_GAROU victory handler', () => {
      handler.prepareNewGame(players);

      expect(victoryHandlersManager.createVictoryHandler).toHaveBeenCalledWith(
        Victory.LOUP_GAROU,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove GRAND_MECHANT_LOUP round handlers', () => {
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        Round.GRAND_MECHANT_LOUP,
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
