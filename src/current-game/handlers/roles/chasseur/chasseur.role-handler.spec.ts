import { PlayerRole } from '@/types/player-role';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { AfterDeathRoundQueueStore } from '@/current-game/death/after-death-round-queue/after-death-round-queue-store';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { ChasseurRoleHandler } from './chasseur.role-handler';

describe('ChasseurRoleHandler', () => {
  let handler: ChasseurRoleHandler;
  let roundHandlersManager: RoundHandlersManager;
  let afterDeathRoundQueue: AfterDeathRoundQueueStore;
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

    TestBed.configureTestingModule({
      providers: [
        { provide: RoundHandlersManager, useValue: roundHandlersManager },
        { provide: AfterDeathRoundQueueStore, useValue: afterDeathRoundQueue },
      ],
    });

    TestBed.runInInjectionContext(() => (handler = new ChasseurRoleHandler()));

    players = [
      { id: 1, name: 'Player 1', role: PlayerRole.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRole.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRole.CHASSEUR);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create CHASSEUR round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        Round.CHASSEUR,
      );
      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('handleDeath', () => {
    it('should add CHASSEUR round at the start of afterDeathRoundQueue', () => {
      const deadPlayer = players[0];

      handler.handleDeath(players, deadPlayer);

      expect(afterDeathRoundQueue.state()[0]).toBe(Round.CHASSEUR);
    });
  });

  describe('cleanStatusesAfterDay', () => {
    it('should return players unchanged', () => {
      const result = handler.cleanStatusesAfterDay(players);
      expect(result).toBe(players);
    });
  });
});
