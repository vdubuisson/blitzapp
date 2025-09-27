import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { SalvateurRoleHandler } from './salvateur.role-handler';
import { Round } from '@/types/round';
import { TestBed } from '@angular/core/testing';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { PlayerStatus } from '@/types/player-status';
import * as statusUtils from '@/utils/status.utils';

describe('SalvateurRoleHandler', () => {
  let handler: SalvateurRoleHandler;
  let roundHandlersManager: RoundHandlersManager;
  let statusHandlersManager: StatusHandlersManager;
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

    TestBed.configureTestingModule({
      providers: [
        { provide: RoundHandlersManager, useValue: roundHandlersManager },
        { provide: StatusHandlersManager, useValue: statusHandlersManager },
      ],
    });

    TestBed.runInInjectionContext(() => (handler = new SalvateurRoleHandler()));

    players = [
      { id: 1, name: 'Player 1', role: PlayerRole.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRole.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRole.SALVATEUR);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create SALVATEUR round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        Round.SALVATEUR,
      );
    });

    it('should create PROTECTED status handler for each player', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatus.PROTECTED,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove SALVATEUR round handlers', () => {
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        Round.SALVATEUR,
      );
    });
  });

  describe('cleanStatusesAfterDay', () => {
    it('should remove PROTECTED status from players if SALVATEUR is dead', () => {
      const testPlayers = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRole.VILLAGEOIS,
          statuses: new Set([PlayerStatus.PROTECTED]),
        } as Player,
        {
          id: 2,
          name: 'Player 2',
          role: PlayerRole.SALVATEUR,
          isDead: true,
        } as Player,
      ];

      const expectedPlayers = [...testPlayers];
      jest
        .spyOn(statusUtils, 'removeStatusFromPlayersById')
        .mockReturnValue(expectedPlayers);

      const result = handler.cleanStatusesAfterDay(testPlayers);
      expect(result).toBe(expectedPlayers);
      expect(statusUtils.removeStatusFromPlayersById).toHaveBeenCalledWith(
        testPlayers,
        PlayerStatus.PROTECTED,
        [1],
      );
    });

    it('should not remove PROTECTED status from players if SALVATEUR is alive', () => {
      const testPlayers = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRole.VILLAGEOIS,
          statuses: new Set([PlayerStatus.PROTECTED]),
        } as Player,
        {
          id: 2,
          name: 'Player 2',
          role: PlayerRole.SALVATEUR,
          isDead: false,
        } as Player,
      ];

      const result = handler.cleanStatusesAfterDay(testPlayers);
      expect(result[0].statuses.has(PlayerStatus.PROTECTED)).toBe(true);
    });
  });
});
