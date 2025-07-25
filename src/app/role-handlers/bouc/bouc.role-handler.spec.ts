import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { BoucRoleHandler } from './bouc.role-handler';
import { RoundEnum } from '@/enums/round.enum';
import { TestBed } from '@angular/core/testing';
import { AfterDeathRoundQueueStore } from '@/stores/after-death-round-queue/after-death-round-queue.store';
import { signal } from '@angular/core';
import { StatusHandlersService } from '@/services/status-handlers/status-handlers.service';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { NeedCleanAfterBoucStore } from '@/stores/need-clean-after-bouc/need-clean-after-bouc.store';

describe('BoucRoleHandler', () => {
  let handler: BoucRoleHandler;
  let roundHandlersService: RoundHandlersService;
  let statusHandlersService: StatusHandlersService;
  let afterDeathRoundQueue: AfterDeathRoundQueueStore;
  let needCleanAfterBouc: NeedCleanAfterBoucStore;
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

    needCleanAfterBouc = MockService(NeedCleanAfterBoucStore, {
      state: signal<boolean>(false),
    });

    statusHandlersService = MockService(StatusHandlersService, {
      createStatusHandler: jest.fn(),
    });

    TestBed.configureTestingModule({
      providers: [
        { provide: RoundHandlersService, useValue: roundHandlersService },
        { provide: AfterDeathRoundQueueStore, useValue: afterDeathRoundQueue },
        { provide: NeedCleanAfterBoucStore, useValue: needCleanAfterBouc },
        { provide: StatusHandlersService, useValue: statusHandlersService },
      ],
    });

    TestBed.runInInjectionContext(() => (handler = new BoucRoleHandler()));

    players = [
      {
        id: 1,
        name: 'Player 1',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
      } as Player,
      {
        id: 2,
        name: 'Player 2',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
      } as Player,
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

    it('should create NO_VOTE status handler', () => {
      handler.prepareNewGame(players);

      expect(statusHandlersService.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.NO_VOTE,
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
    it('should return players unchanged if no need to clean', () => {
      needCleanAfterBouc.state.set(false);

      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set([PlayerStatusEnum.NO_VOTE]),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.IDIOT,
          card: PlayerRoleEnum.IDIOT,
          statuses: new Set([PlayerStatusEnum.NO_VOTE]),
          isDead: false,
        },
      ];
      const result = handler.cleanStatusesAfterDay(mockPlayers);
      expect(result).toBe(mockPlayers);
    });

    it('should remove NO_VOTE status from player', () => {
      needCleanAfterBouc.state.set(true);

      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set([PlayerStatusEnum.NO_VOTE]),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.IDIOT,
          card: PlayerRoleEnum.IDIOT,
          statuses: new Set([PlayerStatusEnum.NO_VOTE]),
          isDead: false,
        },
      ];

      const newPlayers = handler.cleanStatusesAfterDay(mockPlayers);

      expect(newPlayers[0].statuses.has(PlayerStatusEnum.NO_VOTE)).toEqual(
        false,
      );
      expect(newPlayers[1].statuses.has(PlayerStatusEnum.NO_VOTE)).toEqual(
        false,
      );
    });

    it('should set needCleanAfterBouc to false after cleaning', () => {
      needCleanAfterBouc.state.set(true);
      handler.cleanStatusesAfterDay(players);
      expect(needCleanAfterBouc.state()).toEqual(false);
    });

    it('should not remove NO_VOTE status from IDIOT killedBy', () => {
      needCleanAfterBouc.state.set(true);

      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set([PlayerStatusEnum.NO_VOTE]),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.IDIOT,
          card: PlayerRoleEnum.IDIOT,
          statuses: new Set([PlayerStatusEnum.NO_VOTE]),
          isDead: false,
          killedBy: PlayerRoleEnum.VILLAGEOIS,
        },
      ];

      const newPlayers = handler.cleanStatusesAfterDay(mockPlayers);

      expect(newPlayers[1].statuses.has(PlayerStatusEnum.NO_VOTE)).toEqual(
        true,
      );
    });
  });
});
