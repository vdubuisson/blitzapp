import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { MockReset, MockService, ngMocks } from 'ng-mocks';
import { CaptainStatusHandler } from './captain.status-handler';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { AfterDeathRoundQueueStore } from '@/stores/after-death-round-queue/after-death-round-queue.store';
import { RoundEnum } from '@/enums/round.enum';
import { TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';

describe('CaptainStatusHandler', () => {
  let handler: CaptainStatusHandler;
  let afterDeathRoundQueue: AfterDeathRoundQueueStore;
  ngMocks.faster();

  beforeAll(() => {
    afterDeathRoundQueue = MockService(AfterDeathRoundQueueStore, {
      state: signal<RoundEnum[]>([RoundEnum.VILLAGEOIS]),
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

      const newPlayers = handler.handleDeath(mockPlayers, mockPlayers[1]);

      expect(newPlayers[1].statuses.has(PlayerStatusEnum.CAPTAIN)).toEqual(
        false,
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
