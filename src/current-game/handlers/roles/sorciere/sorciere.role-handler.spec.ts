import { PlayerRoleEnum } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { SorciereRoleHandler } from './sorciere.role-handler';
import { RoundEnum } from '@/types/round';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { PlayerStatusEnum } from '@/types/player-status';
import * as statusUtils from '@/utils/status.utils';
import {
  createInjectionContextFactory,
  SpectatorInjectionContext,
} from '@ngneat/spectator/jest';

describe('SorciereRoleHandler', () => {
  let handler: SorciereRoleHandler;
  let spectator: SpectatorInjectionContext;
  let players: Player[];

  const createContext = createInjectionContextFactory({
    mocks: [RoundHandlersManager, StatusHandlersManager],
  });

  beforeEach(() => {
    players = [
      {
        id: 1,
        name: 'Player 1',
        role: PlayerRoleEnum.SORCIERE,
        statuses: new Set(),
      } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];

    spectator = createContext();
    handler = spectator.runInInjectionContext(() => new SorciereRoleHandler());
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.SORCIERE);
  });

  describe('prepareNewGame', () => {
    it('should add HEALTH_POTION status to SORCIERE', () => {
      const expectedPlayers = [...players];
      jest
        .spyOn(statusUtils, 'addStatusToPlayersById')
        .mockReturnValue(expectedPlayers);

      const result = handler.prepareNewGame(players);

      expect(result).toBe(expectedPlayers);
      expect(statusUtils.addStatusToPlayersById).toHaveBeenCalledWith(
        players,
        PlayerStatusEnum.HEALTH_POTION,
        [1],
      );
    });

    it('should add DEATH_POTION status to SORCIERE', () => {
      const expectedPlayers = [...players];
      jest
        .spyOn(statusUtils, 'addStatusToPlayersById')
        .mockReturnValue(expectedPlayers);

      const result = handler.prepareNewGame(players);

      expect(result).toBe(expectedPlayers);
      expect(statusUtils.addStatusToPlayersById).toHaveBeenCalledWith(
        players,
        PlayerStatusEnum.DEATH_POTION,
        [1],
      );
    });

    it('should create SORCIERE_HEALTH round handler', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);

      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.SORCIERE_HEALTH,
      );
    });

    it('should create SORCIERE_KILL round handler', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);

      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.SORCIERE_KILL,
      );
    });

    it('should create HEALTH_POTION status handler', () => {
      const statusHandlersManager = spectator.inject(StatusHandlersManager);

      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.HEALTH_POTION,
      );
    });

    it('should create DEATH_POTION status handler', () => {
      const statusHandlersManager = spectator.inject(StatusHandlersManager);

      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.DEATH_POTION,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove SORCIERE_HEALTH round handlers', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        RoundEnum.SORCIERE_HEALTH,
      );
    });

    it('should remove SORCIERE_KILL round handlers', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        RoundEnum.SORCIERE_KILL,
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
