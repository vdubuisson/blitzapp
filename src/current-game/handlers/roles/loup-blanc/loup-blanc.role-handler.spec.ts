import { PlayerRoleEnum } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { LoupBlancRoleHandler } from './loup-blanc.role-handler';
import { RoundEnum } from '@/types/round';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { PlayerStatusEnum } from '@/types/player-status';
import { VictoryHandlersManager } from '@/game-handlers/victories/victory-handlers-manager';
import { VictoryEnum } from '@/types/victory';
import {
  createInjectionContextFactory,
  SpectatorInjectionContext,
} from '@ngneat/spectator/jest';

describe('LoupBlancRoleHandler', () => {
  let handler: LoupBlancRoleHandler;
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
    handler = spectator.runInInjectionContext(() => new LoupBlancRoleHandler());
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.LOUP_BLANC);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create LOUP_BLANC round handler', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);

      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.LOUP_BLANC,
      );
    });

    it('should create WOLF_TARGET status handler', () => {
      const statusHandlersManager = spectator.inject(StatusHandlersManager);

      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.WOLF_TARGET,
      );
    });

    it('should create DEVOURED status handler', () => {
      const statusHandlersManager = spectator.inject(StatusHandlersManager);

      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.DEVOURED,
      );
    });

    it('should create LOUP_BLANC victory handler', () => {
      const victoryHandlersManager = spectator.inject(VictoryHandlersManager);

      handler.prepareNewGame(players);

      expect(victoryHandlersManager.createVictoryHandler).toHaveBeenCalledWith(
        VictoryEnum.LOUP_BLANC,
      );
    });

    it('should create LOUP_GAROU victory handler', () => {
      const victoryHandlersManager = spectator.inject(VictoryHandlersManager);

      handler.prepareNewGame(players);

      expect(victoryHandlersManager.createVictoryHandler).toHaveBeenCalledWith(
        VictoryEnum.LOUP_GAROU,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove LOUP_BLANC round handlers', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        RoundEnum.LOUP_BLANC,
      );
    });

    it('should remove LOUP_BLANC victory handler', () => {
      const victoryHandlersManager = spectator.inject(VictoryHandlersManager);
      const deadPlayer = players[0];

      handler.handleDeath(players, deadPlayer);

      expect(victoryHandlersManager.removeHandler).toHaveBeenCalledWith(
        VictoryEnum.LOUP_BLANC,
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
