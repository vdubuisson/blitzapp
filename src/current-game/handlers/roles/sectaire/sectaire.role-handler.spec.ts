import { PlayerRoleEnum } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { SectaireRoleHandler } from './sectaire.role-handler';
import { RoundEnum } from '@/types/round';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { PlayerStatusEnum } from '@/types/player-status';
import { VictoryHandlersManager } from '@/game-handlers/victories/victory-handlers-manager';
import { VictoryEnum } from '@/types/victory';
import {
  createInjectionContextFactory,
  SpectatorInjectionContext,
} from '@ngneat/spectator/vitest';

describe('SectaireRoleHandler', () => {
  let handler: SectaireRoleHandler;
  let spectator: SpectatorInjectionContext;
  let players: Player[];

  const createContext = createInjectionContextFactory({
    mocks: [
      RoundHandlersManager,
      StatusHandlersManager,
      VictoryHandlersManager,
    ],
  });

  beforeEach(() => {
    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];

    spectator = createContext();
    handler = spectator.runInInjectionContext(() => new SectaireRoleHandler());
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.SECTAIRE);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create SECTAIRE round handler', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);

      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.SECTAIRE,
      );
    });

    it('should create BLUE_TEAM status handler', () => {
      const statusHandlersManager = spectator.inject(StatusHandlersManager);

      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.BLUE_TEAM,
      );
    });

    it('should create RED_TEAM status handler', () => {
      const statusHandlersManager = spectator.inject(StatusHandlersManager);

      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.RED_TEAM,
      );
    });

    it('should create SECTAIRE victory handler', () => {
      const victoryHandlersManager = spectator.inject(VictoryHandlersManager);

      handler.prepareNewGame(players);

      expect(victoryHandlersManager.createVictoryHandler).toHaveBeenCalledWith(
        VictoryEnum.SECTAIRE,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove SECTAIRE round handlers', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        RoundEnum.SECTAIRE,
      );
    });

    it('should remove SECTAIRE victory handler', () => {
      const victoryHandlersManager = spectator.inject(VictoryHandlersManager);
      const deadPlayer = players[0];

      handler.handleDeath(players, deadPlayer);

      expect(victoryHandlersManager.removeHandler).toHaveBeenCalledWith(
        VictoryEnum.SECTAIRE,
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
