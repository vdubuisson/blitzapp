import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import { RoundEnum } from '@/enums/round.enum';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { DefaultRoleHandler } from './default.role-handler';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { TestBed } from '@angular/core/testing';

describe('DefaultRoleHandler', () => {
  let handler: DefaultRoleHandler;
  let roundHandlersService: RoundHandlersService;
  let players: Player[];
  let testRounds: RoundEnum[];

  ngMocks.faster();

  beforeAll(() => {
    roundHandlersService = MockService(RoundHandlersService, {
      createRoundHandler: jest.fn(),
      removeHandler: jest.fn(),
    });

    testRounds = [RoundEnum.LOUP_GAROU, RoundEnum.VOYANTE];

    TestBed.configureTestingModule({
      providers: [
        { provide: RoundHandlersService, useValue: roundHandlersService },
      ],
    });

    TestBed.runInInjectionContext(
      () =>
        (handler = new DefaultRoleHandler(
          PlayerRoleEnum.VILLAGEOIS,
          testRounds,
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
