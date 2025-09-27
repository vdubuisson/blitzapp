import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { AngeRoleHandler } from './ange.role-handler';
import { TestBed } from '@angular/core/testing';
import { VictoryHandlersManager } from '@/game-handlers/victories/victory-handlers-manager';
import { Victory } from '@/types/victory';
import { RoundOrchestrator } from '@/current-game/orchestrator/round-orchestrator';

describe('AngeRoleHandler', () => {
  let handler: AngeRoleHandler;
  let roundHandlersManager: RoundHandlersManager;
  let victoryHandlersManager: VictoryHandlersManager;
  let roundOrchestrator: RoundOrchestrator;
  let players: Player[];

  ngMocks.faster();

  beforeAll(() => {
    roundHandlersManager = MockService(RoundHandlersManager, {
      createRoundHandler: jest.fn(),
      removeHandler: jest.fn(),
    });

    victoryHandlersManager = MockService(VictoryHandlersManager, {
      createVictoryHandler: jest.fn(),
    });

    roundOrchestrator = MockService(RoundOrchestrator, {
      setVillageoisFirst: jest.fn(),
    });

    TestBed.configureTestingModule({
      providers: [
        { provide: RoundHandlersManager, useValue: roundHandlersManager },
        { provide: VictoryHandlersManager, useValue: victoryHandlersManager },
        {
          provide: RoundOrchestrator,
          useValue: roundOrchestrator,
        },
      ],
    });

    TestBed.runInInjectionContext(() => (handler = new AngeRoleHandler()));

    players = [
      { id: 1, name: 'Player 1', role: PlayerRole.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRole.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRole.ANGE);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create no round handlers', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).not.toHaveBeenCalled();
    });

    it('should create a victory handler for ANGE', () => {
      handler.prepareNewGame(players);

      expect(victoryHandlersManager.createVictoryHandler).toHaveBeenCalledWith(
        Victory.ANGE,
      );
    });

    it('should set villageois round first', () => {
      handler.prepareNewGame(players);

      expect(roundOrchestrator.setVillageoisFirst).toHaveBeenCalled();
    });
  });

  describe('handleDeath', () => {
    it('should remove no round handlers', () => {
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).not.toHaveBeenCalled();
    });
  });

  describe('cleanStatusesAfterDay', () => {
    it('should return players unchanged', () => {
      const result = handler.cleanStatusesAfterDay(players);
      expect(result).toBe(players);
    });
  });
});
