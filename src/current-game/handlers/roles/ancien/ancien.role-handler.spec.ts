import { INNOCENTS_POWER_REMOVAL_ROLES } from '@/config/innocents-power-removal-roles';
import { LOUPS_GAROUS_ROLES } from '@/config/loups-garous-roles';
import { PlayersRoleUtility } from '@/current-game/players/players-role-utility';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import {
  createInjectionContextFactory,
  mockProvider,
  SpectatorInjectionContext,
  SpyObject,
} from '@ngneat/spectator/vitest';
import { AncienRoleHandler } from './ancien.role-handler';

describe('AncienRoleHandler', () => {
  let handler: AncienRoleHandler;
  let spectator: SpectatorInjectionContext;

  let playersRoleUtility: SpyObject<PlayersRoleUtility>;

  let players: Player[];

  const createContext = createInjectionContextFactory({
    mocks: [RoundHandlersManager, StatusHandlersManager],
    providers: [
      mockProvider(PlayersRoleUtility, {
        isLoupGarou: vi.fn(
          (player) =>
            LOUPS_GAROUS_ROLES.includes(player.role) ||
            player.statuses.has(PlayerStatusEnum.INFECTED),
        ),
      }),
    ],
  });

  beforeEach(() => {
    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];

    spectator = createContext();
    handler = spectator.runInInjectionContext(() => new AncienRoleHandler());
    playersRoleUtility = spectator.inject(PlayersRoleUtility);
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
      playersRoleUtility.isKilledByInnocents.mockReturnValue(true);
      playersRoleUtility.removePowersFromInnocents.mockReturnValue(players);

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(playersRoleUtility.removePowersFromInnocents).toHaveBeenCalledWith(
        players,
      );
    });

    it('should remove handlers of innocents if killed by innocents', () => {
      const deadPlayer = players[0];
      playersRoleUtility.isKilledByInnocents.mockReturnValue(true);
      playersRoleUtility.removePowersFromInnocents.mockReturnValue(players);
      const roundHandlersManager = spectator.inject(RoundHandlersManager);

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandlersByRoles).toHaveBeenCalledWith(
        INNOCENTS_POWER_REMOVAL_ROLES,
      );
    });

    it('should return players unchanged if not killed by innocents', () => {
      const deadPlayer = players[0];
      playersRoleUtility.isKilledByInnocents.mockReturnValue(false);

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(
        playersRoleUtility.removePowersFromInnocents,
      ).not.toHaveBeenCalled();
    });

    it('should not remove handlers of innocents if not killed by innocents', () => {
      const deadPlayer = players[0];
      playersRoleUtility.isKilledByInnocents.mockReturnValue(false);
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
