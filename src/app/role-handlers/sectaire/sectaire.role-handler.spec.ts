import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { SectaireRoleHandler } from './sectaire.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { TestBed } from '@angular/core/testing';
import { StatusHandlersService } from '@/services/status-handlers/status-handlers.service';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { VictoryHandlersService } from '@/services/victory-handlers/victory-handlers.service';
import { VictoryEnum } from '@/enums/victory.enum';

describe('SectaireRoleHandler', () => {
  let handler: SectaireRoleHandler;
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

    TestBed.runInInjectionContext(() => (handler = new SectaireRoleHandler()));

    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.SECTAIRE);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create SECTAIRE round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersService.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.SECTAIRE,
      );
    });

    it('should create BLUE_TEAM status handler', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersService.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.BLUE_TEAM,
      );
    });

    it('should create RED_TEAM status handler', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersService.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.RED_TEAM,
      );
    });

    it('should create SECTAIRE victory handler', () => {
      handler.prepareNewGame(players);

      expect(victoryHandlersService.createVictoryHandler).toHaveBeenCalledWith(
        VictoryEnum.SECTAIRE,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove SECTAIRE round handlers', () => {
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersService.removeHandler).toHaveBeenCalledWith(
        RoundEnum.SECTAIRE,
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
