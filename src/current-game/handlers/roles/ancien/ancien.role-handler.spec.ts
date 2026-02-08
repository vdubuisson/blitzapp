import { INNOCENTS_POWER_REMOVAL_ROLES } from '@/config/innocents-power-removal-roles';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import * as rolesUtils from '@/utils/roles.utils';
import {
  createInjectionContextFactory,
  SpectatorInjectionContext,
} from '@ngneat/spectator/jest';
import { AncienRoleHandler } from './ancien.role-handler';

describe('AncienRoleHandler', () => {
  let handler: AncienRoleHandler;
  let spectator: SpectatorInjectionContext;

  let isKilledByInnocents: jest.SpyInstance;
  let removePowersFromInnocents: jest.SpyInstance;
  let players: Player[];

  const createContext = createInjectionContextFactory({
    mocks: [RoundHandlersManager, StatusHandlersManager],
  });

  beforeAll(() => {
    isKilledByInnocents = jest.spyOn(rolesUtils, 'isKilledByInnocents');
    removePowersFromInnocents = jest.spyOn(
      rolesUtils,
      'removePowersFromInnocents',
    );
  });

  beforeEach(() => {
    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];

    spectator = createContext();
    handler = spectator.runInInjectionContext(() => new AncienRoleHandler());
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.ANCIEN);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create no round handlers', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);

      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).not.toHaveBeenCalled();
    });

    it('should create INJURED status handler', () => {
      const statusHandlersManager = spectator.inject(StatusHandlersManager);

      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.INJURED,
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
      const roundHandlersManager = spectator.inject(RoundHandlersManager);

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
      const roundHandlersManager = spectator.inject(RoundHandlersManager);

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
