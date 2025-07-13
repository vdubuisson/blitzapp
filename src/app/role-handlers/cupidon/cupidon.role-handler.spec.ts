import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { StatusHandlersService } from '@/services/status-handlers/status-handlers.service';
import { TestBed } from '@angular/core/testing';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { CupidonRoleHandler } from './cupidon.role-handler';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { VictoryHandlersService } from '@/services/victory-handlers/victory-handlers.service';
import { VictoryEnum } from '@/enums/victory.enum';

describe('CupidonRoleHandler', () => {
  let handler: CupidonRoleHandler;
  let roundHandlersService: RoundHandlersService;
  let statusHandlersService: StatusHandlersService;
  let victoryHandlersService: VictoryHandlersService;
  let players: Player[];

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

    TestBed.configureTestingModule({
      providers: [
        { provide: RoundHandlersService, useValue: roundHandlersService },
        { provide: StatusHandlersService, useValue: statusHandlersService },
        { provide: VictoryHandlersService, useValue: victoryHandlersService },
      ],
    });

    TestBed.runInInjectionContext(() => (handler = new CupidonRoleHandler()));

    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.CUPIDON);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create CUPIDON round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersService.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.CUPIDON,
      );
    });

    it('should create AMOUREUX round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersService.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.AMOUREUX,
      );
    });

    it('should create LOVER status handler', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersService.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.LOVER,
      );
    });

    it('should create AMOUREUX victory handler', () => {
      handler.prepareNewGame(players);

      expect(victoryHandlersService.createVictoryHandler).toHaveBeenCalledWith(
        VictoryEnum.AMOUREUX,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove CUPIDON round handler', () => {
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersService.removeHandler).toHaveBeenCalledWith(
        RoundEnum.CUPIDON,
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
