import { PlayerRoleEnum } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { MontreurOursRoleHandler } from './montreur-ours.role-handler';
import { RoundEnum } from '@/types/round';
import {
  createInjectionContextFactory,
  SpectatorInjectionContext,
} from '@ngneat/spectator/jest';

describe('MontreurOursRoleHandler', () => {
  let handler: MontreurOursRoleHandler;
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
    handler = spectator.runInInjectionContext(
      () => new MontreurOursRoleHandler(),
    );
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.MONTREUR_OURS);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create MONTREUR_OURS round handler', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);

      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.MONTREUR_OURS,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove MONTREUR_OURS round handlers', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        RoundEnum.MONTREUR_OURS,
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
