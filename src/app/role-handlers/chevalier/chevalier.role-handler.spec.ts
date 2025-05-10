import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { ChevalierRoleHandler } from './chevalier.role-handler';
import { TestBed } from '@angular/core/testing';
import * as neighborUtils from '@/utils/neighbor.utils';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

describe('ChevalierRoleHandler', () => {
  let handler: ChevalierRoleHandler;
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

    TestBed.runInInjectionContext(() => (handler = new ChevalierRoleHandler()));

    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
      {
        id: 3,
        name: 'Player 3',
        role: PlayerRoleEnum.GRAND_MECHANT_LOUP,
        statuses: new Set(),
      } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.CHEVALIER);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create no round handlers', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersService.createRoundHandler).not.toHaveBeenCalled();
    });
  });

  describe('handleDeath', () => {
    it('should add RUSTY_SWORD status to the GRAND_MECHANT_LOUP if killed by GRAND_MECHANT_LOUP', () => {
      const deadPlayer = {
        ...players[0],
        killedBy: PlayerRoleEnum.GRAND_MECHANT_LOUP,
      };
      const result = handler.handleDeath(players, deadPlayer);

      expect(result[2].statuses.has(PlayerStatusEnum.RUSTY_SWORD)).toBe(true);
    });

    it('should add RUSTY_SWORD status to the left neighbor if killed by LOUP_GAROU', () => {
      const deadPlayer = { ...players[0], killedBy: PlayerRoleEnum.LOUP_GAROU };
      const leftNeighbor = { ...players[1], statuses: new Set() };
      jest
        .spyOn(neighborUtils, 'findLeftNeighbor')
        .mockReturnValue(leftNeighbor as Player);

      const result = handler.handleDeath(players, deadPlayer);

      expect(leftNeighbor.statuses.has(PlayerStatusEnum.RUSTY_SWORD)).toBe(
        true,
      );
    });

    it('should return players unchanged if not killed by LOUP_GAROU or GRAND_MECHANT_LOUP', () => {
      const deadPlayer = { ...players[0], killedBy: PlayerRoleEnum.VILLAGEOIS };
      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toEqual(players);
    });
  });

  describe('cleanStatusesAfterDay', () => {
    it('should return players unchanged', () => {
      const result = handler.cleanStatusesAfterDay(players);
      expect(result).toBe(players);
    });
  });
});
