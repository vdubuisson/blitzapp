import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { SorciereRoleHandler } from './sorciere.role-handler';
import { Round } from '@/types/round';
import { TestBed } from '@angular/core/testing';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { PlayerStatus } from '@/types/player-status';
import * as statusUtils from '@/utils/status.utils';

describe('SorciereRoleHandler', () => {
  let handler: SorciereRoleHandler;
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

    TestBed.runInInjectionContext(() => (handler = new SorciereRoleHandler()));

    players = [
      {
        id: 1,
        name: 'Player 1',
        role: PlayerRole.SORCIERE,
        statuses: new Set(),
      } as Player,
      { id: 2, name: 'Player 2', role: PlayerRole.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRole.SORCIERE);
  });

  describe('prepareNewGame', () => {
    it('should add HEALTH_POTION status to SORCIERE', () => {
      const expectedPlayers = [...players];
      jest
        .spyOn(statusUtils, 'addStatusToPlayersById')
        .mockReturnValue(expectedPlayers);

      const result = handler.prepareNewGame(players);

      expect(result).toBe(expectedPlayers);
      expect(statusUtils.addStatusToPlayersById).toHaveBeenCalledWith(
        players,
        PlayerStatus.HEALTH_POTION,
        [1],
      );
    });

    it('should add DEATH_POTION status to SORCIERE', () => {
      const expectedPlayers = [...players];
      jest
        .spyOn(statusUtils, 'addStatusToPlayersById')
        .mockReturnValue(expectedPlayers);

      const result = handler.prepareNewGame(players);

      expect(result).toBe(expectedPlayers);
      expect(statusUtils.addStatusToPlayersById).toHaveBeenCalledWith(
        players,
        PlayerStatus.DEATH_POTION,
        [1],
      );
    });

    it('should create SORCIERE_HEALTH round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        Round.SORCIERE_HEALTH,
      );
    });

    it('should create SORCIERE_KILL round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        Round.SORCIERE_KILL,
      );
    });

    it('should create HEALTH_POTION status handler', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatus.HEALTH_POTION,
      );
    });

    it('should create DEATH_POTION status handler', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatus.DEATH_POTION,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove SORCIERE_HEALTH round handlers', () => {
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        Round.SORCIERE_HEALTH,
      );
    });

    it('should remove SORCIERE_KILL round handlers', () => {
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        Round.SORCIERE_KILL,
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
