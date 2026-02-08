import { PlayerRoleEnum } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { VoleurRoleHandler } from './voleur.role-handler';
import { RoundEnum } from '@/types/round';
import {
  createInjectionContextFactory,
  SpectatorInjectionContext,
} from '@ngneat/spectator/jest';

describe('VoleurRoleHandler', () => {
  let handler: VoleurRoleHandler;
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
    handler = spectator.runInInjectionContext(() => new VoleurRoleHandler());
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.VOLEUR);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create VOLEUR round handler', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);

      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.VOLEUR,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove VOLEUR round handlers', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        RoundEnum.VOLEUR,
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
