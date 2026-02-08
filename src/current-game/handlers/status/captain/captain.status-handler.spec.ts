import { AfterDeathRoundQueueStore } from '@/current-game/death/after-death-round-queue/after-death-round-queue-store';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { Round, RoundEnum } from '@/types/round';
import * as statusUtils from '@/utils/status.utils';
import { signal } from '@angular/core';
import {
  createInjectionContextFactory,
  mockProvider,
  SpectatorInjectionContext,
} from '@ngneat/spectator/jest';
import { CaptainStatusHandler } from './captain.status-handler';

describe('CaptainStatusHandler', () => {
  let handler: CaptainStatusHandler;
  let spectator: SpectatorInjectionContext;

  const createContext = createInjectionContextFactory({
    providers: [
      mockProvider(AfterDeathRoundQueueStore, {
        state: signal<Round[]>([RoundEnum.VILLAGEOIS]),
      }),
    ],
  });

  beforeEach(() => {
    spectator = createContext();

    handler = spectator.runInInjectionContext(() => new CaptainStatusHandler());
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
  });

  describe('handleDeath', () => {
    it('should remove CAPTAIN status to player with CAPTAIN status', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.LOUP_GAROU,
          card: PlayerRoleEnum.LOUP_GAROU,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set([PlayerStatusEnum.CAPTAIN]),
          isDead: true,
        },
      ];
      const expectedPlayers = [...mockPlayers];
      jest
        .spyOn(statusUtils, 'removeStatusFromPlayersById')
        .mockReturnValue(expectedPlayers);

      const newPlayers = handler.handleDeath(mockPlayers, mockPlayers[1]);

      expect(newPlayers).not.toBe(mockPlayers);
      expect(statusUtils.removeStatusFromPlayersById).toHaveBeenCalledWith(
        mockPlayers,
        PlayerStatusEnum.CAPTAIN,
        [1],
      );
    });

    it('should add CAPITAINE round to after-death rounds', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.LOUP_GAROU,
          card: PlayerRoleEnum.LOUP_GAROU,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set([PlayerStatusEnum.CAPTAIN]),
          isDead: true,
        },
      ];
      const afterDeathRoundQueue = spectator.inject(AfterDeathRoundQueueStore);
      afterDeathRoundQueue.state.set([]);

      handler.handleDeath(mockPlayers, mockPlayers[1]);

      expect(
        afterDeathRoundQueue.state().includes(RoundEnum.CAPITAINE),
      ).toEqual(true);
    });

    it('should not add CAPITAINE round to after-death rounds if it was IDIOT role', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.LOUP_GAROU,
          card: PlayerRoleEnum.LOUP_GAROU,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.IDIOT,
          card: PlayerRoleEnum.IDIOT,
          statuses: new Set([PlayerStatusEnum.CAPTAIN]),
          isDead: true,
        },
      ];
      const afterDeathRoundQueue = spectator.inject(AfterDeathRoundQueueStore);
      afterDeathRoundQueue.state.set([]);

      handler.handleDeath(mockPlayers, mockPlayers[1]);

      expect(
        afterDeathRoundQueue.state().includes(RoundEnum.CAPITAINE),
      ).toEqual(false);
    });
  });

  describe('triggerAction', () => {
    it('should return players unchanged', () => {
      const mockPlayers: Player[] = [
        { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      ];
      const result = handler.triggerAction(mockPlayers);
      expect(result).toBe(mockPlayers);
    });
  });
});
