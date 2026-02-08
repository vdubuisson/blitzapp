import { PlayerRoleEnum } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { SoeurRoleHandler } from './soeur.role-handler';
import { RoundEnum } from '@/types/round';
import {
  createInjectionContextFactory,
  SpectatorInjectionContext,
} from '@ngneat/spectator/jest';

describe('SoeurRoleHandler', () => {
  let handler: SoeurRoleHandler;
  let spectator: SpectatorInjectionContext;
  let players: Player[];

  const createContext = createInjectionContextFactory({
    mocks: [RoundHandlersManager],
  });

  beforeEach(() => {
    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];

    spectator = createContext();
    handler = spectator.runInInjectionContext(() => new SoeurRoleHandler());
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.SOEUR);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create SOEURS round handler', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);

      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.SOEURS,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove SOEURS round handler if all SOEUR are dead', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);
      const players: Player[] = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRoleEnum.SOEUR,
          isDead: true,
        } as Player,
        {
          id: 2,
          name: 'Player 2',
          role: PlayerRoleEnum.SOEUR,
          isDead: true,
        } as Player,
        { id: 3, name: 'Player 3', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      ];

      const result = handler.handleDeath(players, players[0]);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        RoundEnum.SOEURS,
      );
    });

    it('should not remove SOEURS round handler if not all SOEUR are dead', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);
      const players: Player[] = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRoleEnum.SOEUR,
          isDead: true,
        } as Player,
        {
          id: 2,
          name: 'Player 2',
          role: PlayerRoleEnum.SOEUR,
          isDead: false,
        } as Player,
        { id: 3, name: 'Player 3', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      ];

      const result = handler.handleDeath(players, players[0]);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).not.toHaveBeenCalled();
    });
  });

  describe('cleanStatusesAfterDay', () => {
    it('should return players unchanged', () => {
      const result = handler.cleanStatusesAfterDay(players);
      expect(result).toBe(players);
    });
  });
});
