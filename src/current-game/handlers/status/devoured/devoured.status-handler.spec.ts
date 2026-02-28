import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import {
  createInjectionContextFactory,
  SpectatorInjectionContext,
  SpyObject,
} from '@ngneat/spectator/vitest';
import { DevouredStatusHandler } from './devoured.status-handler';

describe('DevouredStatusHandler', () => {
  let handler: DevouredStatusHandler;
  let spectator: SpectatorInjectionContext;

  let playersStatusUtility: SpyObject<PlayersStatusUtility>;

  const createInjectionContext = createInjectionContextFactory({
    mocks: [PlayersStatusUtility],
  });

  beforeEach(() => {
    spectator = createInjectionContext();
    handler = spectator.runInInjectionContext(
      () => new DevouredStatusHandler(),
    );
    playersStatusUtility = spectator.inject(PlayersStatusUtility);
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
  });

  describe('handleDeath', () => {
    it('should return players unchanged', () => {
      const mockPlayers: Player[] = [
        {
          id: 1,
          name: 'Player 1',
          statuses: new Set(PlayerStatusEnum.INFECTED),
        } as Player,
        { id: 2, name: 'Player 2' } as Player,
      ];
      const result = handler.handleDeath(mockPlayers, mockPlayers[0]);
      expect(result).toBe(mockPlayers);
    });
  });

  describe('triggerAction', () => {
    it('should kill players with DEVOURED status', () => {
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
          statuses: new Set([PlayerStatusEnum.DEVOURED]),
          isDead: false,
        },
      ];
      const expectedPlayer = { ...mockPlayers[1] };
      playersStatusUtility.removeStatusFromPlayer.mockReturnValue(
        expectedPlayer,
      );

      const newPlayers = handler.triggerAction(mockPlayers);

      expect(newPlayers[1].isDead).toEqual(true);
      expect(newPlayers[1]).not.toBe(mockPlayers[1]);
    });

    it('should remove DEVOURED status to players with DEVOURED status', () => {
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
          statuses: new Set([PlayerStatusEnum.DEVOURED]),
          isDead: false,
        },
      ];

      const expectedPlayer = { ...mockPlayers[1] };
      playersStatusUtility.removeStatusFromPlayer.mockReturnValue(
        expectedPlayer,
      );

      const newPlayers = handler.triggerAction(mockPlayers);

      expect(newPlayers[1]).toBe(expectedPlayer);
      expect(playersStatusUtility.removeStatusFromPlayer).toHaveBeenCalledWith(
        mockPlayers[1],
        PlayerStatusEnum.DEVOURED,
      );
    });
  });
});
