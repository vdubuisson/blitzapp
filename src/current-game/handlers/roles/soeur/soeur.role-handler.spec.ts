import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { SoeurRoleHandler } from './soeur.role-handler';
import { Round } from '@/types/round';
import { TestBed } from '@angular/core/testing';

describe('SoeurRoleHandler', () => {
  let handler: SoeurRoleHandler;
  let roundHandlersManager: RoundHandlersManager;
  let players: Player[];

  ngMocks.faster();

  beforeAll(() => {
    roundHandlersManager = MockService(RoundHandlersManager, {
      createRoundHandler: jest.fn(),
      removeHandler: jest.fn(),
    });

    TestBed.configureTestingModule({
      providers: [
        { provide: RoundHandlersManager, useValue: roundHandlersManager },
      ],
    });

    TestBed.runInInjectionContext(() => (handler = new SoeurRoleHandler()));

    players = [
      { id: 1, name: 'Player 1', role: PlayerRole.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRole.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRole.SOEUR);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create SOEURS round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        Round.SOEURS,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove SOEURS round handler if all SOEUR are dead', () => {
      const players: Player[] = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRole.SOEUR,
          isDead: true,
        } as Player,
        {
          id: 2,
          name: 'Player 2',
          role: PlayerRole.SOEUR,
          isDead: true,
        } as Player,
        { id: 3, name: 'Player 3', role: PlayerRole.VILLAGEOIS } as Player,
      ];

      const result = handler.handleDeath(players, players[0]);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        Round.SOEURS,
      );
    });

    it('should not remove SOEURS round handler if not all SOEUR are dead', () => {
      const players: Player[] = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRole.SOEUR,
          isDead: true,
        } as Player,
        {
          id: 2,
          name: 'Player 2',
          role: PlayerRole.SOEUR,
          isDead: false,
        } as Player,
        { id: 3, name: 'Player 3', role: PlayerRole.VILLAGEOIS } as Player,
      ];

      const result = handler.handleDeath(players, players[0]);

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
