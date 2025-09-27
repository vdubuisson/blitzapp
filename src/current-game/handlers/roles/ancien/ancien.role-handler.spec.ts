import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { AncienRoleHandler } from './ancien.role-handler';
import { TestBed } from '@angular/core/testing';
import * as rolesUtils from '@/utils/roles.utils';
import { INNOCENTS_POWER_REMOVAL_ROLES } from '@/config/innocents-power-removal-roles';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { PlayerStatus } from '@/types/player-status';

describe('AncienRoleHandler', () => {
  let handler: AncienRoleHandler;
  let roundHandlersManager: RoundHandlersManager;
  let statusHandlersManager: StatusHandlersManager;
  let isKilledByInnocents: jest.SpyInstance;
  let removePowersFromInnocents: jest.SpyInstance;
  let players: Player[];

  ngMocks.faster();

  beforeAll(() => {
    roundHandlersManager = MockService(RoundHandlersManager, {
      createRoundHandler: jest.fn(),
      removeHandler: jest.fn(),
      removeHandlersByRoles: jest.fn(),
    });
    statusHandlersManager = MockService(StatusHandlersManager, {
      createStatusHandler: jest.fn(),
    });

    isKilledByInnocents = jest.spyOn(rolesUtils, 'isKilledByInnocents');
    removePowersFromInnocents = jest.spyOn(
      rolesUtils,
      'removePowersFromInnocents',
    );

    TestBed.configureTestingModule({
      providers: [
        { provide: RoundHandlersManager, useValue: roundHandlersManager },
        { provide: StatusHandlersManager, useValue: statusHandlersManager },
      ],
    });

    TestBed.runInInjectionContext(() => (handler = new AncienRoleHandler()));

    players = [
      { id: 1, name: 'Player 1', role: PlayerRole.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRole.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRole.ANCIEN);
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

    it('should create INJURED status handler', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatus.INJURED,
      );
    });
  });

  describe('handleDeath', () => {
    it('should call removePowersFromInnocents if killed by innocents', () => {
      const deadPlayer = players[0];
      isKilledByInnocents.mockReturnValue(true);
      removePowersFromInnocents.mockReturnValue(players);

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(removePowersFromInnocents).toHaveBeenCalledWith(players);
    });

    it('should remove handlers of innocents if killed by innocents', () => {
      const deadPlayer = players[0];
      isKilledByInnocents.mockReturnValue(true);
      removePowersFromInnocents.mockReturnValue(players);

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandlersByRoles).toHaveBeenCalledWith(
        INNOCENTS_POWER_REMOVAL_ROLES,
      );
    });

    it('should return players unchanged if not killed by innocents', () => {
      const deadPlayer = players[0];
      isKilledByInnocents.mockReturnValue(false);

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(removePowersFromInnocents).not.toHaveBeenCalled();
    });

    it('should not remove handlers of innocents if not killed by innocents', () => {
      const deadPlayer = players[0];
      isKilledByInnocents.mockReturnValue(false);

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandlersByRoles).not.toHaveBeenCalled();
    });
  });

  describe('cleanStatusesAfterDay', () => {
    it('should return players unchanged', () => {
      const result = handler.cleanStatusesAfterDay(players);
      expect(result).toBe(players);
    });
  });
});
