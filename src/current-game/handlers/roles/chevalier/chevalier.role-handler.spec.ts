import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { ChevalierRoleHandler } from './chevalier.role-handler';
import { TestBed } from '@angular/core/testing';
import * as neighborUtils from '@/utils/neighbor.utils';
import * as statusUtils from '@/utils/status.utils';
import { PlayerStatus } from '@/types/player-status';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { RustySwordStatusHandler } from '@/game-handlers/status/rusty-sword/rusty-sword.status-handler';

describe('ChevalierRoleHandler', () => {
  let handler: ChevalierRoleHandler;
  let roundHandlersManager: RoundHandlersManager;
  let statusHandlersManager: StatusHandlersManager;
  let rustySwordHandler: RustySwordStatusHandler;
  let players: Player[];

  ngMocks.faster();

  beforeAll(() => {
    rustySwordHandler = MockService(RustySwordStatusHandler, {
      triggerAction: jest.fn(),
    });

    roundHandlersManager = MockService(RoundHandlersManager, {
      createRoundHandler: jest.fn(),
      removeHandler: jest.fn(),
    });

    statusHandlersManager = MockService(StatusHandlersManager, {
      createStatusHandler: jest.fn(),
    });

    TestBed.configureTestingModule({
      providers: [
        { provide: RoundHandlersManager, useValue: roundHandlersManager },
        { provide: StatusHandlersManager, useValue: statusHandlersManager },
      ],
    });

    TestBed.runInInjectionContext(() => (handler = new ChevalierRoleHandler()));

    players = [
      {
        id: 1,
        name: 'Player 1',
        role: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
      } as Player,
      {
        id: 2,
        name: 'Player 2',
        role: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
      } as Player,
      {
        id: 3,
        name: 'Player 3',
        role: PlayerRole.GRAND_MECHANT_LOUP,
        statuses: new Set(),
      } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRole.CHEVALIER);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create no round handlers', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).not.toHaveBeenCalled();
    });

    it('should create RUSTY_SWORD status handler', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatus.RUSTY_SWORD,
      );
    });
  });

  describe('handleDeath', () => {
    it('should add RUSTY_SWORD status to the GRAND_MECHANT_LOUP if killed by GRAND_MECHANT_LOUP', () => {
      const deadPlayer = {
        ...players[0],
        killedBy: PlayerRole.GRAND_MECHANT_LOUP,
      };

      const expectedPlayers = { ...players };

      jest
        .spyOn(statusUtils, 'addStatusToPlayersById')
        .mockReturnValue(expectedPlayers);

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toEqual(expectedPlayers);
      expect(statusUtils.addStatusToPlayersById).toHaveBeenCalledWith(
        players,
        PlayerStatus.RUSTY_SWORD,
        [3],
      );
    });

    it('should add RUSTY_SWORD status to the left neighbor if killed by LOUP_GAROU', () => {
      const deadPlayer = { ...players[0], killedBy: PlayerRole.LOUP_GAROU };
      const leftNeighbor = players[1];
      jest
        .spyOn(neighborUtils, 'findLeftNeighbor')
        .mockReturnValue(leftNeighbor as Player);

      const expectedPlayers = { ...players };
      jest
        .spyOn(statusUtils, 'addStatusToPlayersById')
        .mockReturnValue(expectedPlayers);

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toEqual(expectedPlayers);
      expect(statusUtils.addStatusToPlayersById).toHaveBeenCalledWith(
        players,
        PlayerStatus.RUSTY_SWORD,
        [2],
      );
    });

    it('should return players unchanged if not killed by LOUP_GAROU or GRAND_MECHANT_LOUP', () => {
      const deadPlayer = { ...players[0], killedBy: PlayerRole.VILLAGEOIS };
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
          role: PlayerRole.CHEVALIER,
          isDead: false,
        } as Player,
        { id: 2, name: 'Player 2', role: PlayerRole.LOUP_GAROU } as Player,
      ];

      const result = handler.cleanStatusesAfterDay(testPlayers);
      expect(result).toBe(testPlayers);
    });

    it('should trigger RUSTY_SWORD status if CHEVALIER is dead', () => {
      const testPlayers = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRole.CHEVALIER,
          isDead: true,
        } as Player,
        {
          id: 2,
          name: 'Player 2',
          role: PlayerRole.LOUP_GAROU,
          statuses: new Set([PlayerStatus.RUSTY_SWORD]),
        } as Player,
      ];

      const expectedPlayers = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRole.CHEVALIER,
          isDead: true,
        } as Player,
        {
          id: 2,
          name: 'Player 2',
          role: PlayerRole.LOUP_GAROU,
          isDead: true,
          statuses: new Set(),
        } as Player,
      ];

      jest
        .spyOn(statusHandlersManager, 'getHandler')
        .mockReturnValue(rustySwordHandler);
      jest
        .spyOn(rustySwordHandler, 'triggerAction')
        .mockReturnValue(expectedPlayers);

      const result = handler.cleanStatusesAfterDay(testPlayers);
      expect(result).toEqual(expectedPlayers);
      expect(statusHandlersManager.getHandler).toHaveBeenCalledWith(
        PlayerStatus.RUSTY_SWORD,
      );
      expect(rustySwordHandler.triggerAction).toHaveBeenCalledWith(testPlayers);
    });
  });
});
