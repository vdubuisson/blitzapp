import { VictoryHandlersManager } from '@/game-handlers/victories/victory-handlers-manager';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { VictoryEnum } from '@/types/victory';
import {
  createInjectionContextFactory,
  SpectatorInjectionContext,
} from '@ngneat/spectator/jest';
import { LoverStatusHandler } from './lover.status-handler';

describe('LoverStatusHandler', () => {
  let handler: LoverStatusHandler;
  let spectator: SpectatorInjectionContext;

  const createContext = createInjectionContextFactory({
    mocks: [VictoryHandlersManager],
  });

  beforeEach(() => {
    spectator = createContext();

    handler = spectator.runInInjectionContext(() => new LoverStatusHandler());
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
  });

  describe('handleDeath', () => {
    it('should kill the other LOVER', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.LOUP_GAROU,
          card: PlayerRoleEnum.LOUP_GAROU,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set([PlayerStatusEnum.LOVER]),
          isDead: false,
        },
        {
          id: 2,
          name: 'player2',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set([PlayerStatusEnum.LOVER]),
          isDead: true,
        },
      ];

      const newPlayers = handler.handleDeath(mockPlayers, mockPlayers[2]);

      expect(newPlayers[1].isDead).toEqual(true);
      expect(newPlayers[1]).not.toBe(mockPlayers[1]);
    });

    it('should remove AMOUREUX victory handler', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.LOUP_GAROU,
          card: PlayerRoleEnum.LOUP_GAROU,
          statuses: new Set([PlayerStatusEnum.LOVER]),
          isDead: false,
        },
      ];
      const victoryHandlersManager = spectator.inject(VictoryHandlersManager);

      handler.handleDeath(mockPlayers, mockPlayers[0]);

      expect(victoryHandlersManager.removeHandler).toHaveBeenCalledWith(
        VictoryEnum.AMOUREUX,
      );
    });
  });

  describe('triggerAction', () => {
    it('should return players unchanged', () => {
      const mockPlayers: Player[] = [
        { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      ];
      const result = handler.triggerAction(mockPlayers);
      expect(result).toBe(mockPlayers);
    });
  });
});
