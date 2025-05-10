import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { EnfantSauvageRoleHandler } from './enfant-sauvage.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { TestBed } from '@angular/core/testing';

describe('EnfantSauvageRoleHandler', () => {
  let handler: EnfantSauvageRoleHandler;
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
      () => (handler = new EnfantSauvageRoleHandler()),
    );

    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.ENFANT_SAUVAGE);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create ENFANT_SAUVAGE round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersService.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.ENFANT_SAUVAGE,
      );
    });
  });

  describe('handleDeath', () => {
    it('should remove ENFANT_SAUVAGE round handlers', () => {
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersService.removeHandler).toHaveBeenCalledWith(
        RoundEnum.ENFANT_SAUVAGE,
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
