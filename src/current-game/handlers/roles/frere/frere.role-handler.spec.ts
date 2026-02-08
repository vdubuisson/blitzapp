import { PlayerRoleEnum } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { FrereRoleHandler } from './frere.role-handler';
import { RoundEnum } from '@/types/round';
import {
  createInjectionContextFactory,
  SpectatorInjectionContext,
} from '@ngneat/spectator/jest';

describe('FrereRoleHandler', () => {
  let handler: FrereRoleHandler;
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
    handler = spectator.runInInjectionContext(() => new FrereRoleHandler());
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.FRERE);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create FRERES round handler', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);

      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.FRERES,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove FRERES round handler if all FRERE are dead', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);
      const players: Player[] = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRoleEnum.FRERE,
          isDead: true,
        } as Player,
        {
          id: 2,
          name: 'Player 2',
          role: PlayerRoleEnum.FRERE,
          isDead: true,
        } as Player,
        { id: 3, name: 'Player 3', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      ];
      const result = handler.handleDeath(players, players[0]);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        RoundEnum.FRERES,
      );
    });

    it('should not remove FRERES round handler if not all FRERE are dead', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);
      const players: Player[] = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRoleEnum.FRERE,
          isDead: true,
        } as Player,
        {
          id: 2,
          name: 'Player 2',
          role: PlayerRoleEnum.FRERE,
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
