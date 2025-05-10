import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { JoueurFluteRoleHandler } from './joueur-flute.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { TestBed } from '@angular/core/testing';

describe('JoueurFluteRoleHandler', () => {
  let handler: JoueurFluteRoleHandler;
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

    TestBed.runInInjectionContext(
      () => (handler = new JoueurFluteRoleHandler()),
    );

    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.JOUEUR_FLUTE);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create JOUEUR_FLUTE round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersService.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.JOUEUR_FLUTE,
      );
    });

    it('should create CHARMED round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersService.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.CHARMED,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove JOUEUR_FLUTE round handlers', () => {
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersService.removeHandler).toHaveBeenCalledWith(
        RoundEnum.JOUEUR_FLUTE,
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
