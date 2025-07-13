import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import { RoundEnum } from '@/enums/round.enum';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { DefaultRoleHandler } from './default.role-handler';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { TestBed } from '@angular/core/testing';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { StatusHandlersService } from '@/services/status-handlers/status-handlers.service';
import { VictoryHandlersService } from '@/services/victory-handlers/victory-handlers.service';
import { VictoryEnum } from '@/enums/victory.enum';

describe('DefaultRoleHandler', () => {
  let handler: DefaultRoleHandler;
  let roundHandlersService: RoundHandlersService;
  let statusHandlersService: StatusHandlersService;
  let victoryHandlersService: VictoryHandlersService;

  let players: Player[];
  let testRounds: RoundEnum[];
  let testStatuses: PlayerStatusEnum[];
  let testVictories: VictoryEnum[];

  ngMocks.faster();

  beforeAll(() => {
    roundHandlersService = MockService(RoundHandlersService, {
      createRoundHandler: jest.fn(),
      removeHandler: jest.fn(),
    });
    statusHandlersService = MockService(StatusHandlersService, {
      createStatusHandler: jest.fn(),
    });
    victoryHandlersService = MockService(VictoryHandlersService, {
      createVictoryHandler: jest.fn(),
    });

    testRounds = [RoundEnum.LOUP_GAROU, RoundEnum.VOYANTE];
    testStatuses = [
      PlayerStatusEnum.WOLF_TARGET,
      PlayerStatusEnum.DEVOURED,
      PlayerStatusEnum.NO_POWER,
    ];
    testVictories = [VictoryEnum.VILLAGEOIS];

    TestBed.configureTestingModule({
      providers: [
        { provide: RoundHandlersService, useValue: roundHandlersService },
        { provide: StatusHandlersService, useValue: statusHandlersService },
        { provide: VictoryHandlersService, useValue: victoryHandlersService },
      ],
    });

    TestBed.runInInjectionContext(
      () =>
        (handler = new DefaultRoleHandler(
          PlayerRoleEnum.VILLAGEOIS,
          testRounds,
          testStatuses,
          testVictories,
        )),
    );

    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.VILLAGEOIS);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create round handlers for all configured rounds', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersService.createRoundHandler).toHaveBeenCalledWith(
        testRounds[0],
      );
      expect(roundHandlersService.createRoundHandler).toHaveBeenCalledWith(
        testRounds[1],
      );
      expect(roundHandlersService.createRoundHandler).toHaveBeenCalledTimes(
        testRounds.length,
      );
    });

    it('should create status handlers for all configured statuses', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersService.createStatusHandler).toHaveBeenCalledWith(
        testStatuses[0],
      );
      expect(statusHandlersService.createStatusHandler).toHaveBeenCalledWith(
        testStatuses[1],
      );
      expect(statusHandlersService.createStatusHandler).toHaveBeenCalledWith(
        testStatuses[2],
      );
      expect(statusHandlersService.createStatusHandler).toHaveBeenCalledTimes(
        testStatuses.length,
      );
    });

    it('should create victory handlers for all configured victories', () => {
      handler.prepareNewGame(players);

      expect(victoryHandlersService.createVictoryHandler).toHaveBeenCalledWith(
        testVictories[0],
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove round handlers for all configured rounds', () => {
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersService.removeHandler).toHaveBeenCalledWith(
        testRounds[0],
      );
      expect(roundHandlersService.removeHandler).toHaveBeenCalledWith(
        testRounds[1],
      );
      expect(roundHandlersService.removeHandler).toHaveBeenCalledTimes(
        testRounds.length,
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
