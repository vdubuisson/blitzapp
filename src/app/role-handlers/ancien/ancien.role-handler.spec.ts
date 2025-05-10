import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { AncienRoleHandler } from './ancien.role-handler';
import { TestBed } from '@angular/core/testing';
import * as rolesUtils from '@/utils/roles.utils';
import { INNOCENTS_POWER_REMOVAL_ROLES } from '@/configs/innocents-power-removal-roles';

describe('AncienRoleHandler', () => {
  let handler: AncienRoleHandler;
  let roundHandlersService: RoundHandlersService;
  let isKilledByInnocents: jest.SpyInstance;
  let removePowersFromInnocents: jest.SpyInstance;
  let players: Player[];

  ngMocks.faster();

  beforeAll(() => {
    roundHandlersService = MockService(RoundHandlersService, {
      createRoundHandler: jest.fn(),
      removeHandler: jest.fn(),
      removeHandlersByRoles: jest.fn(),
    });

    isKilledByInnocents = jest.spyOn(rolesUtils, 'isKilledByInnocents');
    removePowersFromInnocents = jest.spyOn(
      rolesUtils,
      'removePowersFromInnocents',
    );

    TestBed.configureTestingModule({
      providers: [
        { provide: RoundHandlersService, useValue: roundHandlersService },
      ],
    });

    TestBed.runInInjectionContext(() => (handler = new AncienRoleHandler()));

    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.ANCIEN);
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
    it('should call removePowersFromInnocents if killed by innocents', () => {
      const deadPlayer = players[0];
      isKilledByInnocents.mockReturnValue(true);
      removePowersFromInnocents.mockReturnValue(players);

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(removePowersFromInnocents).toHaveBeenCalledWith(players);
    });

    it('should remove handlers of innocents if killed by innocents', () => {
      const deadPlayer = players[0];
      isKilledByInnocents.mockReturnValue(true);
      removePowersFromInnocents.mockReturnValue(players);

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersService.removeHandlersByRoles).toHaveBeenCalledWith(
        INNOCENTS_POWER_REMOVAL_ROLES,
      );
    });

    it('should return players unchanged if not killed by innocents', () => {
      const deadPlayer = players[0];
      isKilledByInnocents.mockReturnValue(false);

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(removePowersFromInnocents).not.toHaveBeenCalled();
    });

    it('should not remove handlers of innocents if not killed by innocents', () => {
      const deadPlayer = players[0];
      isKilledByInnocents.mockReturnValue(false);

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersService.removeHandlersByRoles).not.toHaveBeenCalled();
    });
  });

  describe('cleanStatusesAfterDay', () => {
    it('should return players unchanged', () => {
      const result = handler.cleanStatusesAfterDay(players);
      expect(result).toBe(players);
    });
  });
});
