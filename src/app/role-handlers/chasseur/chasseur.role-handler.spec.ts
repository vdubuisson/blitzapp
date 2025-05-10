import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { AfterDeathRoundQueueStore } from '@/stores/after-death-round-queue/after-death-round-queue.store';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { ChasseurRoleHandler } from './chasseur.role-handler';

describe('ChasseurRoleHandler', () => {
  let handler: ChasseurRoleHandler;
  let roundHandlersService: RoundHandlersService;
  let afterDeathRoundQueue: AfterDeathRoundQueueStore;
  let players: Player[];

  ngMocks.faster();

  beforeAll(() => {
    roundHandlersService = MockService(RoundHandlersService, {
      createRoundHandler: jest.fn(),
      removeHandler: jest.fn(),
    });

    afterDeathRoundQueue = MockService(AfterDeathRoundQueueStore, {
      state: signal<RoundEnum[]>([RoundEnum.VILLAGEOIS]),
    });

    TestBed.configureTestingModule({
      providers: [
        { provide: RoundHandlersService, useValue: roundHandlersService },
        { provide: AfterDeathRoundQueueStore, useValue: afterDeathRoundQueue },
      ],
    });

    TestBed.runInInjectionContext(() => (handler = new ChasseurRoleHandler()));

    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.CHASSEUR);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create CHASSEUR round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersService.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.CHASSEUR,
      );
      expect(roundHandlersService.createRoundHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('handleDeath', () => {
    it('should add CHASSEUR round at the start of afterDeathRoundQueue', () => {
      const deadPlayer = players[0];

      const result = handler.handleDeath(players, deadPlayer);

      expect(afterDeathRoundQueue.state()[0]).toBe(RoundEnum.CHASSEUR);
    });
  });

  describe('cleanStatusesAfterDay', () => {
    it('should return players unchanged', () => {
      const result = handler.cleanStatusesAfterDay(players);
      expect(result).toBe(players);
    });
  });
});
