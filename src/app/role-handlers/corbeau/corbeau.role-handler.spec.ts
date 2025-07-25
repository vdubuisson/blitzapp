import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { CorbeauRoleHandler } from './corbeau.role-handler';
import { TestBed } from '@angular/core/testing';
import { RoundEnum } from '@/enums/round.enum';
import { StatusHandlersService } from '@/services/status-handlers/status-handlers.service';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

describe('CorbeauRoleHandler', () => {
  let handler: CorbeauRoleHandler;
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

    TestBed.runInInjectionContext(() => (handler = new CorbeauRoleHandler()));

    players = [
      {
        id: 1,
        name: 'Player 1',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.RAVEN]),
      } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.CORBEAU);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create CORBEAU round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersService.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.CORBEAU,
      );
    });

    it('should create RAVEN status handler', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersService.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.RAVEN,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove CORBEAU round handlers', () => {
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersService.removeHandler).toHaveBeenCalledWith(
        RoundEnum.CORBEAU,
      );
    });
  });

  describe('cleanStatusesAfterDay', () => {
    it('should remove RAVEN status from players', () => {
      const testPlayers = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set([PlayerStatusEnum.RAVEN]),
        } as Player,
        { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
      ];

      const result = handler.cleanStatusesAfterDay(testPlayers);
      expect(result[0].statuses.has(PlayerStatusEnum.RAVEN)).toBe(false);
    });
  });
});
