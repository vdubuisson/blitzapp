import { PlayerRoleEnum } from '@/types/player-role';
import { RoundEnum } from '@/types/round';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { CupidonRoleHandler } from './cupidon.role-handler';
import { PlayerStatusEnum } from '@/types/player-status';
import { VictoryHandlersManager } from '@/game-handlers/victories/victory-handlers-manager';
import { VictoryEnum } from '@/types/victory';
import {
  createInjectionContextFactory,
  SpectatorInjectionContext,
} from '@ngneat/spectator/jest';

describe('CupidonRoleHandler', () => {
  let handler: CupidonRoleHandler;
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
    handler = spectator.runInInjectionContext(() => new CupidonRoleHandler());
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.CUPIDON);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create CUPIDON round handler', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);

      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.CUPIDON,
      );
    });

    it('should create AMOUREUX round handler', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);

      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.AMOUREUX,
      );
    });

    it('should create LOVER status handler', () => {
      const statusHandlersManager = spectator.inject(StatusHandlersManager);

      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.LOVER,
      );
    });

    it('should create AMOUREUX victory handler', () => {
      const victoryHandlersManager = spectator.inject(VictoryHandlersManager);

      handler.prepareNewGame(players);

      expect(victoryHandlersManager.createVictoryHandler).toHaveBeenCalledWith(
        VictoryEnum.AMOUREUX,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove CUPIDON round handler', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        RoundEnum.CUPIDON,
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
