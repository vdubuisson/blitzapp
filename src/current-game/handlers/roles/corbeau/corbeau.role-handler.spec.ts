import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { CorbeauRoleHandler } from './corbeau.role-handler';
import { TestBed } from '@angular/core/testing';
import { Round } from '@/types/round';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { PlayerStatus } from '@/types/player-status';
import * as statusUtils from '@/utils/status.utils';

describe('CorbeauRoleHandler', () => {
  let handler: CorbeauRoleHandler;
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

    TestBed.runInInjectionContext(() => (handler = new CorbeauRoleHandler()));

    players = [
      {
        id: 1,
        name: 'Player 1',
        role: PlayerRole.VILLAGEOIS,
        statuses: new Set([PlayerStatus.RAVEN]),
      } as Player,
      { id: 2, name: 'Player 2', role: PlayerRole.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRole.CORBEAU);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create CORBEAU round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        Round.CORBEAU,
      );
    });

    it('should create RAVEN status handler', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatus.RAVEN,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove CORBEAU round handlers', () => {
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        Round.CORBEAU,
      );
    });
  });

  describe('cleanStatusesAfterDay', () => {
    it('should remove RAVEN status from players', () => {
      const testPlayers = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRole.VILLAGEOIS,
          statuses: new Set([PlayerStatus.RAVEN]),
        } as Player,
        { id: 2, name: 'Player 2', role: PlayerRole.LOUP_GAROU } as Player,
      ];

      const expectedPlayers = [...testPlayers];
      jest
        .spyOn(statusUtils, 'removeStatusFromPlayersById')
        .mockReturnValue(expectedPlayers);

      const result = handler.cleanStatusesAfterDay(testPlayers);
      expect(result).toBe(expectedPlayers);
      expect(statusUtils.removeStatusFromPlayersById).toHaveBeenCalledWith(
        testPlayers,
        PlayerStatus.RAVEN,
        [1],
      );
    });
  });
});
