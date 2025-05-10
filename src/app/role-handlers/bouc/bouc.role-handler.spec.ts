import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { BoucRoleHandler } from './bouc.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { TestBed } from '@angular/core/testing';
import { AfterDeathRoundQueueStore } from '@/stores/after-death-round-queue/after-death-round-queue.store';
import { signal } from '@angular/core';

describe('BoucRoleHandler', () => {
  let handler: BoucRoleHandler;
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

    TestBed.runInInjectionContext(() => (handler = new BoucRoleHandler()));

    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.BOUC);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create BOUC round handler', () => {
      handler.prepareNewGame(players);

      expect(roundHandlersService.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.BOUC,
      );
    });
  });

  describe('handleDeath', () => {
    it('should add BOUC round to the afterDeathRoundQueue if killed by no one', () => {
      const deadPlayer = { ...players[0], killedBy: undefined };

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(afterDeathRoundQueue.state()).toEqual([
        RoundEnum.VILLAGEOIS,
        RoundEnum.BOUC,
      ]);
    });

    it('should remove BOUC round handler if killed by someone', () => {
      const deadPlayer = { ...players[0], killedBy: PlayerRoleEnum.LOUP_GAROU };

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersService.removeHandler).toHaveBeenCalledWith(
        RoundEnum.BOUC,
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
