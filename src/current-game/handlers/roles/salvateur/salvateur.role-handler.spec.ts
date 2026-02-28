import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import {
  createInjectionContextFactory,
  SpectatorInjectionContext,
} from '@ngneat/spectator/vitest';
import { SalvateurRoleHandler } from './salvateur.role-handler';

describe('SalvateurRoleHandler', () => {
  let handler: SalvateurRoleHandler;
  let spectator: SpectatorInjectionContext;
  let players: Player[];

  const createContext = createInjectionContextFactory({
    mocks: [RoundHandlersManager, StatusHandlersManager, PlayersStatusUtility],
  });

  beforeEach(() => {
    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];

    spectator = createContext();
    handler = spectator.runInInjectionContext(() => new SalvateurRoleHandler());
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.SALVATEUR);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create SALVATEUR round handler', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);

      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.SALVATEUR,
      );
    });

    it('should create PROTECTED status handler for each player', () => {
      const statusHandlersManager = spectator.inject(StatusHandlersManager);

      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.PROTECTED,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove SALVATEUR round handlers', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        RoundEnum.SALVATEUR,
      );
    });
  });

  describe('cleanStatusesAfterDay', () => {
    it('should remove PROTECTED status from players if SALVATEUR is dead', () => {
      const testPlayers = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set([PlayerStatusEnum.PROTECTED]),
        } as Player,
        {
          id: 2,
          name: 'Player 2',
          role: PlayerRoleEnum.SALVATEUR,
          isDead: true,
        } as Player,
      ];

      const expectedPlayers = [...testPlayers];
      const playersStatusUtility = spectator.inject(PlayersStatusUtility);
      playersStatusUtility.removeStatusFromPlayersById.mockReturnValue(
        expectedPlayers,
      );

      const result = handler.cleanStatusesAfterDay(testPlayers);
      expect(result).toBe(expectedPlayers);
      expect(
        playersStatusUtility.removeStatusFromPlayersById,
      ).toHaveBeenCalledWith(testPlayers, PlayerStatusEnum.PROTECTED, [1]);
    });

    it('should not remove PROTECTED status from players if SALVATEUR is alive', () => {
      const testPlayers = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set([PlayerStatusEnum.PROTECTED]),
        } as Player,
        {
          id: 2,
          name: 'Player 2',
          role: PlayerRoleEnum.SALVATEUR,
          isDead: false,
        } as Player,
      ];

      const result = handler.cleanStatusesAfterDay(testPlayers);
      expect(result[0].statuses.has(PlayerStatusEnum.PROTECTED)).toBe(true);
    });
  });
});
