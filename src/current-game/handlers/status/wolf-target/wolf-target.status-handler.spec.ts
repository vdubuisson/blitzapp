import { PlayerStatus } from '@/types/player-status';
import { Player } from '@/shared/types/player';
import { MockReset } from 'ng-mocks';
import { WolfTargetStatusHandler } from './wolf-target.status-handler';
import { PlayerRole } from '@/types/player-role';
import * as statusUtils from '@/utils/status.utils';

describe('WolfTargetStatusHandler', () => {
  let handler: WolfTargetStatusHandler;

  beforeAll(() => {
    handler = new WolfTargetStatusHandler();
  });

  afterAll(MockReset);

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
  });

  describe('handleDeath', () => {
    it('should return players unchanged', () => {
      const mockPlayers: Player[] = [
        {
          id: 1,
          name: 'Player 1',
          statuses: new Set(PlayerStatus.WOLF_TARGET),
        } as Player,
        { id: 2, name: 'Player 2' } as Player,
      ];
      const result = handler.handleDeath(mockPlayers, mockPlayers[0]);
      expect(result).toBe(mockPlayers);
    });
  });

  describe('triggerAction', () => {
    it('should add DEVOURED status to players with WOLF_TARGET status', () => {
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
          statuses: new Set([PlayerStatus.WOLF_TARGET]),
          isDead: false,
        },
      ];
      const expectedPlayer = { ...mockPlayers[1] };
      jest
        .spyOn(statusUtils, 'addStatusToPlayer')
        .mockReturnValue(expectedPlayer);
      jest
        .spyOn(statusUtils, 'removeStatusFromPlayer')
        .mockReturnValue(expectedPlayer);

      const newPlayers = handler.triggerAction(mockPlayers);

      expect(newPlayers[1]).toBe(expectedPlayer);
      expect(statusUtils.addStatusToPlayer).toHaveBeenCalledWith(
        expectedPlayer,
        PlayerStatus.DEVOURED,
      );
    });

    it('should not add DEVOURED status to players with WOLF_TARGET status and PROTECTED status', () => {
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
          statuses: new Set([PlayerStatus.WOLF_TARGET, PlayerStatus.PROTECTED]),
          isDead: false,
        },
      ];
      const expectedPlayer = { ...mockPlayers[1] };
      jest
        .spyOn(statusUtils, 'addStatusToPlayer')
        .mockReturnValue(expectedPlayer);
      jest
        .spyOn(statusUtils, 'removeStatusFromPlayer')
        .mockReturnValue(expectedPlayer);

      const newPlayers = handler.triggerAction(mockPlayers);

      expect(newPlayers[1]).toBe(expectedPlayer);
      expect(statusUtils.addStatusToPlayer).not.toHaveBeenCalledWith(
        expectedPlayer,
        PlayerStatus.DEVOURED,
      );
    });

    it('should remove killedBy on players with WOLF_TARGET status and PROTECTED status', () => {
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
          statuses: new Set([PlayerStatus.WOLF_TARGET, PlayerStatus.PROTECTED]),
          isDead: false,
          killedBy: PlayerRole.LOUP_GAROU,
        },
      ];
      const expectedPlayer = { ...mockPlayers[1] };
      jest
        .spyOn(statusUtils, 'addStatusToPlayer')
        .mockReturnValue(expectedPlayer);
      jest
        .spyOn(statusUtils, 'removeStatusFromPlayer')
        .mockReturnValue(expectedPlayer);

      const newPlayers = handler.triggerAction(mockPlayers);

      expect(newPlayers[1]).toBe(expectedPlayer);
      expect(newPlayers[1].killedBy).toBeUndefined();
    });

    it('should add DEVOURED status to PETITE_FILLE with WOLF_TARGET status and PROTECTED status', () => {
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
          role: PlayerRole.PETITE_FILLE,
          card: PlayerRole.PETITE_FILLE,
          statuses: new Set([PlayerStatus.WOLF_TARGET, PlayerStatus.PROTECTED]),
          isDead: false,
        },
      ];
      const expectedPlayer = { ...mockPlayers[1] };
      jest
        .spyOn(statusUtils, 'addStatusToPlayer')
        .mockReturnValue(expectedPlayer);
      jest
        .spyOn(statusUtils, 'removeStatusFromPlayer')
        .mockReturnValue(expectedPlayer);

      const newPlayers = handler.triggerAction(mockPlayers);

      expect(newPlayers[1]).toBe(expectedPlayer);
      expect(statusUtils.addStatusToPlayer).toHaveBeenCalledWith(
        expectedPlayer,
        PlayerStatus.DEVOURED,
      );
    });

    it('should add INJURED status to player with WOLF_TARGET status and ANCIEN role', () => {
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
          role: PlayerRole.ANCIEN,
          card: PlayerRole.ANCIEN,
          statuses: new Set([PlayerStatus.WOLF_TARGET]),
          isDead: false,
        },
      ];
      const expectedPlayer = { ...mockPlayers[1] };
      jest
        .spyOn(statusUtils, 'addStatusToPlayer')
        .mockReturnValue(expectedPlayer);
      jest
        .spyOn(statusUtils, 'removeStatusFromPlayer')
        .mockReturnValue(expectedPlayer);

      const newPlayers = handler.triggerAction(mockPlayers);

      expect(newPlayers[1]).toBe(expectedPlayer);
      expect(statusUtils.addStatusToPlayer).toHaveBeenCalledWith(
        expectedPlayer,
        PlayerStatus.INJURED,
      );
      expect(statusUtils.addStatusToPlayer).not.toHaveBeenCalledWith(
        expectedPlayer,
        PlayerStatus.DEVOURED,
      );
    });

    it('should add DEVOURED status to player with WOLF_TARGET and INJURED statuses and ANCIEN role', () => {
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
          role: PlayerRole.ANCIEN,
          card: PlayerRole.ANCIEN,
          statuses: new Set([PlayerStatus.WOLF_TARGET, PlayerStatus.INJURED]),
          isDead: false,
        },
      ];
      const expectedPlayer = { ...mockPlayers[1] };
      jest
        .spyOn(statusUtils, 'addStatusToPlayer')
        .mockReturnValue(expectedPlayer);
      jest
        .spyOn(statusUtils, 'removeStatusFromPlayer')
        .mockReturnValue(expectedPlayer);

      const newPlayers = handler.triggerAction(mockPlayers);

      expect(newPlayers[1]).toBe(expectedPlayer);
      expect(statusUtils.addStatusToPlayer).toHaveBeenCalledWith(
        expectedPlayer,
        PlayerStatus.DEVOURED,
      );
    });

    it('should remove WOLF_TARGET status to players with WOLF_TARGET status', () => {
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
          statuses: new Set([PlayerStatus.WOLF_TARGET]),
          isDead: false,
        },
      ];
      const expectedPlayer = { ...mockPlayers[1] };
      jest
        .spyOn(statusUtils, 'addStatusToPlayer')
        .mockReturnValue(expectedPlayer);
      jest
        .spyOn(statusUtils, 'removeStatusFromPlayer')
        .mockReturnValue(expectedPlayer);

      const newPlayers = handler.triggerAction(mockPlayers);

      expect(newPlayers[1]).toBe(expectedPlayer);
      expect(statusUtils.removeStatusFromPlayer).toHaveBeenCalledWith(
        expectedPlayer,
        PlayerStatus.WOLF_TARGET,
      );
    });
  });
});
