import { PlayerRoleEnum } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { BoucRoleHandler } from './bouc.role-handler';
import { RoundEnum, Round } from '@/types/round';
import { AfterDeathRoundQueueStore } from '@/current-game/death/after-death-round-queue/after-death-round-queue-store';
import { signal } from '@angular/core';
import { StatusHandlersManager } from '@/game-handlers/status/status-handlers-manager';
import { PlayerStatusEnum } from '@/types/player-status';
import { NeedCleanAfterBoucStore } from '@/current-game/orchestrator/need-clean-after-bouc/need-clean-after-bouc-store';
import * as statusUtils from '@/utils/status.utils';
import {
  createInjectionContextFactory,
  SpectatorInjectionContext,
} from '@ngneat/spectator/jest';

describe('BoucRoleHandler', () => {
  let handler: BoucRoleHandler;
  let spectator: SpectatorInjectionContext;
  let players: Player[];

  const createContext = createInjectionContextFactory({
    mocks: [RoundHandlersManager, StatusHandlersManager],
    providers: [
      {
        provide: AfterDeathRoundQueueStore,
        useValue: { state: signal<Round[]>([RoundEnum.VILLAGEOIS]) },
      },
      {
        provide: NeedCleanAfterBoucStore,
        useValue: { state: signal<boolean>(false) },
      },
    ],
  });

  beforeEach(() => {
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

    spectator = createContext();
    handler = spectator.runInInjectionContext(() => new BoucRoleHandler());
  });

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
      const roundHandlersManager = spectator.inject(RoundHandlersManager);

      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.BOUC,
      );
    });

    it('should create NO_VOTE status handler', () => {
      const statusHandlersManager = spectator.inject(StatusHandlersManager);

      handler.prepareNewGame(players);

      expect(statusHandlersManager.createStatusHandler).toHaveBeenCalledWith(
        PlayerStatusEnum.NO_VOTE,
      );
    });
  });

  describe('handleDeath', () => {
    it('should add BOUC round to the afterDeathRoundQueue if killed by no one', () => {
      const deadPlayer = { ...players[0], killedBy: undefined };
      const afterDeathRoundQueue = spectator.inject(AfterDeathRoundQueueStore);

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(afterDeathRoundQueue.state()).toEqual([
        RoundEnum.VILLAGEOIS,
        RoundEnum.BOUC,
      ]);
    });

    it('should remove BOUC round handler if killed by someone', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);
      const deadPlayer = { ...players[0], killedBy: PlayerRoleEnum.LOUP_GAROU };

      const result = handler.handleDeath(players, deadPlayer);

      expect(result).toBe(players);
      expect(roundHandlersManager.removeHandler).toHaveBeenCalledWith(
        RoundEnum.BOUC,
      );
    });
  });

  describe('cleanStatusesAfterDay', () => {
    it('should return players unchanged if no need to clean', () => {
      const needCleanAfterBouc = spectator.inject(NeedCleanAfterBoucStore);
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
      const needCleanAfterBouc = spectator.inject(NeedCleanAfterBoucStore);
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
      const expectedPlayers = [...mockPlayers];
      jest
        .spyOn(statusUtils, 'removeStatusFromPlayersById')
        .mockReturnValue(expectedPlayers);

      const newPlayers = handler.cleanStatusesAfterDay(mockPlayers);

      expect(newPlayers).toBe(expectedPlayers);
      expect(statusUtils.removeStatusFromPlayersById).toHaveBeenCalledWith(
        mockPlayers,
        PlayerStatusEnum.NO_VOTE,
        [0, 1],
      );
    });

    it('should set needCleanAfterBouc to false after cleaning', () => {
      const needCleanAfterBouc = spectator.inject(NeedCleanAfterBoucStore);
      needCleanAfterBouc.state.set(true);
      handler.cleanStatusesAfterDay(players);
      expect(needCleanAfterBouc.state()).toEqual(false);
    });

    it('should not remove NO_VOTE status from IDIOT killedBy', () => {
      const needCleanAfterBouc = spectator.inject(NeedCleanAfterBoucStore);
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
      const expectedPlayers = [...mockPlayers];
      jest
        .spyOn(statusUtils, 'removeStatusFromPlayersById')
        .mockReturnValue(expectedPlayers);

      const newPlayers = handler.cleanStatusesAfterDay(mockPlayers);

      expect(newPlayers).toBe(expectedPlayers);
      expect(statusUtils.removeStatusFromPlayersById).toHaveBeenCalledWith(
        mockPlayers,
        PlayerStatusEnum.NO_VOTE,
        [0],
      );
    });
  });
});
