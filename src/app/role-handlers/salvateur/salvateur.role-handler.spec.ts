import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { SalvateurRoleHandler } from './salvateur.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { TestBed } from '@angular/core/testing';
import { StatusHandlersService } from '@/services/status-handlers/status-handlers.service';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

describe('SalvateurRoleHandler', () => {
  let handler: SalvateurRoleHandler;
  let roundHandlersService: RoundHandlersService;
  let statusHandlersService: StatusHandlersService;
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

    TestBed.configureTestingModule({
      providers: [
        { provide: RoundHandlersService, useValue: roundHandlersService },
        { provide: StatusHandlersService, useValue: statusHandlersService },
      ],
    });

    TestBed.runInInjectionContext(() => (handler = new SalvateurRoleHandler()));

    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.SALVATEUR);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create SALVATEUR round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersService.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.SALVATEUR,
      );
    });

    it('should create PROTECTED status handler for each player', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersService.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.PROTECTED,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove SALVATEUR round handlers', () => {
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersService.removeHandler).toHaveBeenCalledWith(
        RoundEnum.SALVATEUR,
      );
    });
  });

  describe('cleanStatusesAfterDay', () => {
    it('should remove PROTECTED status from players if SALVATEUR is dead', () => {
      const testPlayers = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set([PlayerStatusEnum.PROTECTED]),
        } as Player,
        {
          id: 2,
          name: 'Player 2',
          role: PlayerRoleEnum.SALVATEUR,
          isDead: true,
        } as Player,
      ];

      const result = handler.cleanStatusesAfterDay(testPlayers);
      expect(result[0].statuses.has(PlayerStatusEnum.PROTECTED)).toBe(false);
    });

    it('should not remove PROTECTED status from players if SALVATEUR is alive', () => {
      const testPlayers = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set([PlayerStatusEnum.PROTECTED]),
        } as Player,
        {
          id: 2,
          name: 'Player 2',
          role: PlayerRoleEnum.SALVATEUR,
          isDead: false,
        } as Player,
      ];

      const result = handler.cleanStatusesAfterDay(testPlayers);
      expect(result[0].statuses.has(PlayerStatusEnum.PROTECTED)).toBe(true);
    });
  });
});
