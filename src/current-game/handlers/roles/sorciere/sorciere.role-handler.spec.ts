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
  SpyObject,
} from '@ngneat/spectator/vitest';
import { SorciereRoleHandler } from './sorciere.role-handler';

describe('SorciereRoleHandler', () => {
  let handler: SorciereRoleHandler;
  let spectator: SpectatorInjectionContext;
  let players: Player[];

  let playersStatusUtility: SpyObject<PlayersStatusUtility>;

  const createContext = createInjectionContextFactory({
    mocks: [RoundHandlersManager, StatusHandlersManager, PlayersStatusUtility],
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

    playersStatusUtility = spectator.inject(PlayersStatusUtility);
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.SORCIERE);
  });

  describe('prepareNewGame', () => {
    it('should add HEALTH_POTION status to SORCIERE', () => {
      const expectedPlayers = [...players];
      playersStatusUtility.addStatusToPlayersById.mockReturnValue(
        expectedPlayers,
      );

      const result = handler.prepareNewGame(players);

      expect(result).toBe(expectedPlayers);
      expect(playersStatusUtility.addStatusToPlayersById).toHaveBeenCalledWith(
        players,
        PlayerStatusEnum.HEALTH_POTION,
        [1],
      );
    });

    it('should add DEATH_POTION status to SORCIERE', () => {
      const expectedPlayers = [...players];
      playersStatusUtility.addStatusToPlayersById.mockReturnValue(
        expectedPlayers,
      );

      const result = handler.prepareNewGame(players);

      expect(result).toBe(expectedPlayers);
      expect(playersStatusUtility.addStatusToPlayersById).toHaveBeenCalledWith(
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
