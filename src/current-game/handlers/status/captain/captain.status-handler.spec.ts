import { PlayerStatus } from '@/types/player-status';
import { Player } from '@/shared/types/player';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { CaptainStatusHandler } from './captain.status-handler';
import { PlayerRole } from '@/types/player-role';
import { AfterDeathRoundQueueStore } from '@/current-game/death/after-death-round-queue/after-death-round-queue-store';
import { Round } from '@/types/round';
import { TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import * as statusUtils from '@/utils/status.utils';

describe('CaptainStatusHandler', () => {
  let handler: CaptainStatusHandler;
  let afterDeathRoundQueue: AfterDeathRoundQueueStore;
  ngMocks.faster();

  beforeAll(() => {
    afterDeathRoundQueue = MockService(AfterDeathRoundQueueStore, {
      state: signal<Round[]>([Round.VILLAGEOIS]),
    });

    TestBed.configureTestingModule({
      providers: [
        { provide: AfterDeathRoundQueueStore, useValue: afterDeathRoundQueue },
      ],
    });

    TestBed.runInInjectionContext(() => (handler = new CaptainStatusHandler()));
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
  });

  describe('handleDeath', () => {
    it('should remove CAPTAIN status to player with CAPTAIN status', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRole.LOUP_GAROU,
          card: PlayerRole.LOUP_GAROU,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRole.VILLAGEOIS,
          card: PlayerRole.VILLAGEOIS,
          statuses: new Set([PlayerStatus.CAPTAIN]),
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
        PlayerStatus.CAPTAIN,
        [1],
      );
    });

    it('should add CAPITAINE round to after-death rounds', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRole.LOUP_GAROU,
          card: PlayerRole.LOUP_GAROU,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRole.VILLAGEOIS,
          card: PlayerRole.VILLAGEOIS,
          statuses: new Set([PlayerStatus.CAPTAIN]),
          isDead: true,
        },
      ];
      afterDeathRoundQueue.state.set([]);

      handler.handleDeath(mockPlayers, mockPlayers[1]);

      expect(afterDeathRoundQueue.state().includes(Round.CAPITAINE)).toEqual(
        true,
      );
    });

    it('should not add CAPITAINE round to after-death rounds if it was IDIOT role', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRole.LOUP_GAROU,
          card: PlayerRole.LOUP_GAROU,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRole.IDIOT,
          card: PlayerRole.IDIOT,
          statuses: new Set([PlayerStatus.CAPTAIN]),
          isDead: true,
        },
      ];
      afterDeathRoundQueue.state.set([]);

      handler.handleDeath(mockPlayers, mockPlayers[1]);

      expect(afterDeathRoundQueue.state().includes(Round.CAPITAINE)).toEqual(
        false,
      );
    });
  });

  describe('triggerAction', () => {
    it('should return players unchanged', () => {
      const mockPlayers: Player[] = [
        { id: 1, name: 'Player 1', role: PlayerRole.VILLAGEOIS } as Player,
      ];
      const result = handler.triggerAction(mockPlayers);
      expect(result).toBe(mockPlayers);
    });
  });
});
