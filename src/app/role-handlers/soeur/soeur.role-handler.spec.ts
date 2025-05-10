import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { SoeurRoleHandler } from './soeur.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { TestBed } from '@angular/core/testing';

describe('SoeurRoleHandler', () => {
  let handler: SoeurRoleHandler;
  let roundHandlersService: RoundHandlersService;
  let players: Player[];

  ngMocks.faster();

  beforeAll(() => {
    roundHandlersService = MockService(RoundHandlersService, {
      createRoundHandler: jest.fn(),
      removeHandler: jest.fn(),
    });

    TestBed.configureTestingModule({
      providers: [
        { provide: RoundHandlersService, useValue: roundHandlersService },
      ],
    });

    TestBed.runInInjectionContext(() => (handler = new SoeurRoleHandler()));

    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.SOEUR);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create SOEURS round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersService.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.SOEURS,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove SOEURS round handler if all SOEUR are dead', () => {
      const players: Player[] = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRoleEnum.SOEUR,
          isDead: true,
        } as Player,
        {
          id: 2,
          name: 'Player 2',
          role: PlayerRoleEnum.SOEUR,
          isDead: true,
        } as Player,
        { id: 3, name: 'Player 3', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      ];

      const result = handler.handleDeath(players, players[0]);

      expect(result).toBe(players);
      expect(roundHandlersService.removeHandler).toHaveBeenCalledWith(
        RoundEnum.SOEURS,
      );
    });

    it('should not remove SOEURS round handler if not all SOEUR are dead', () => {
      const players: Player[] = [
        {
          id: 1,
          name: 'Player 1',
          role: PlayerRoleEnum.SOEUR,
          isDead: true,
        } as Player,
        {
          id: 2,
          name: 'Player 2',
          role: PlayerRoleEnum.SOEUR,
          isDead: false,
        } as Player,
        { id: 3, name: 'Player 3', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      ];

      const result = handler.handleDeath(players, players[0]);

      expect(result).toBe(players);
      expect(roundHandlersService.removeHandler).not.toHaveBeenCalled();
    });
  });

  describe('cleanStatusesAfterDay', () => {
    it('should return players unchanged', () => {
      const result = handler.cleanStatusesAfterDay(players);
      expect(result).toBe(players);
    });
  });
});
