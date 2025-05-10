import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { VoleurRoleHandler } from './voleur.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { TestBed } from '@angular/core/testing';

describe('VoleurRoleHandler', () => {
  let handler: VoleurRoleHandler;
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

    TestBed.runInInjectionContext(() => (handler = new VoleurRoleHandler()));

    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.VOLEUR);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create VOLEUR round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersService.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.VOLEUR,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove VOLEUR round handlers', () => {
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersService.removeHandler).toHaveBeenCalledWith(
        RoundEnum.VOLEUR,
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
