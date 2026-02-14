import { NeighborFinder } from '@/current-game/players/neighbor-finder';
import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { RustySwordStatusHandler } from '@/game-handlers/status/rusty-sword/rusty-sword.status-handler';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import {
  createInjectionContextFactory,
  SpectatorInjectionContext,
  SpyObject,
} from '@ngneat/spectator/vitest';
import { ChevalierRoleHandler } from './chevalier.role-handler';

describe('ChevalierRoleHandler', () => {
  let handler: ChevalierRoleHandler;
  let spectator: SpectatorInjectionContext;
  let players: Player[];

  let playersStatusUtility: SpyObject<PlayersStatusUtility>;

  const createContext = createInjectionContextFactory({
    mocks: [
      RoundHandlersManager,
      StatusHandlersManager,
      RustySwordStatusHandler,
      NeighborFinder,
      PlayersStatusUtility,
    ],
  });

  beforeEach(() => {
    players = [
      {
        id: 1,
        name: 'Player 1',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
      } as Player,
      {
        id: 2,
        name: 'Player 2',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
      } as Player,
      {
        id: 3,
        name: 'Player 3',
        role: PlayerRoleEnum.GRAND_MECHANT_LOUP,
        statuses: new Set(),
      } as Player,
    ];

    spectator = createContext();
    handler = spectator.runInInjectionContext(() => new ChevalierRoleHandler());

    playersStatusUtility = spectator.inject(PlayersStatusUtility);
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.CHEVALIER);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create no round handlers', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);

      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).not.toHaveBeenCalled();
    });

    it('should create RUSTY_SWORD status handler', () => {
      const statusHandlersManager = spectator.inject(StatusHandlersManager);

      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.RUSTY_SWORD,
      );
    });
  });

  describe('handleDeath', () => {
    it('should add RUSTY_SWORD status to the GRAND_MECHANT_LOUP if killed by GRAND_MECHANT_LOUP', () => {
      const deadPlayer = {
        ...players[0],
        killedBy: PlayerRoleEnum.GRAND_MECHANT_LOUP,
      };

      const expectedPlayers = { ...players };

      playersStatusUtility.addStatusToPlayersById.mockReturnValue(
        expectedPlayers,
      );

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toEqual(expectedPlayers);
      expect(playersStatusUtility.addStatusToPlayersById).toHaveBeenCalledWith(
        players,
        PlayerStatusEnum.RUSTY_SWORD,
        [3],
      );
    });

    it('should add RUSTY_SWORD status to the left neighbor if killed by LOUP_GAROU', () => {
      const deadPlayer = { ...players[0], killedBy: PlayerRoleEnum.LOUP_GAROU };

      const neighborFinder = spectator.inject(NeighborFinder);
      neighborFinder.findLeftNeighbor.mockReturnValue(players[1]);

      const expectedPlayers = { ...players };
      playersStatusUtility.addStatusToPlayersById.mockReturnValue(
        expectedPlayers,
      );

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toEqual(expectedPlayers);
      expect(playersStatusUtility.addStatusToPlayersById).toHaveBeenCalledWith(
        players,
        PlayerStatusEnum.RUSTY_SWORD,
        [2],
      );
    });

    it('should return players unchanged if not killed by LOUP_GAROU or GRAND_MECHANT_LOUP', () => {
      const deadPlayer = { ...players[0], killedBy: PlayerRoleEnum.VILLAGEOIS };
      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toEqual(players);
    });
  });

  describe('cleanStatusesAfterDay', () => {
    it('should return players unchanged if CHEVALIER is not dead', () => {
      const testPlayers = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRoleEnum.CHEVALIER,
          isDead: false,
        } as Player,
        { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
      ];

      const result = handler.cleanStatusesAfterDay(testPlayers);
      expect(result).toBe(testPlayers);
    });

    it('should trigger RUSTY_SWORD status if CHEVALIER is dead', () => {
      const statusHandlersManager = spectator.inject(StatusHandlersManager);
      const rustySwordHandler = {
        triggerAction: vi.fn(),
      } as unknown as RustySwordStatusHandler;
      const testPlayers = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRoleEnum.CHEVALIER,
          isDead: true,
        } as Player,
        {
          id: 2,
          name: 'Player 2',
          role: PlayerRoleEnum.LOUP_GAROU,
          statuses: new Set([PlayerStatusEnum.RUSTY_SWORD]),
        } as Player,
      ];

      const expectedPlayers = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRoleEnum.CHEVALIER,
          isDead: true,
        } as Player,
        {
          id: 2,
          name: 'Player 2',
          role: PlayerRoleEnum.LOUP_GAROU,
          isDead: true,
          statuses: new Set(),
        } as Player,
      ];

      vi.spyOn(statusHandlersManager, 'getHandler').mockReturnValue(
        rustySwordHandler,
      );
      vi.spyOn(rustySwordHandler, 'triggerAction').mockReturnValue(
        expectedPlayers,
      );

      const result = handler.cleanStatusesAfterDay(testPlayers);
      expect(result).toEqual(expectedPlayers);
      expect(statusHandlersManager.getHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.RUSTY_SWORD,
      );
      expect(rustySwordHandler.triggerAction).toHaveBeenCalledWith(testPlayers);
    });
  });
});
