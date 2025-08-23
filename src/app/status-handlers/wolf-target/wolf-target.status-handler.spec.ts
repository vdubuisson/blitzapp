import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { MockReset } from 'ng-mocks';
import { WolfTargetStatusHandler } from './wolf-target.status-handler';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
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
          statuses: new Set(PlayerStatusEnum.WOLF_TARGET),
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
          statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
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
        PlayerStatusEnum.DEVOURED,
      );
    });

    it('should not add DEVOURED status to players with WOLF_TARGET status and PROTECTED status', () => {
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
          statuses: new Set([
            PlayerStatusEnum.WOLF_TARGET,
            PlayerStatusEnum.PROTECTED,
          ]),
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
        PlayerStatusEnum.DEVOURED,
      );
    });

    it('should remove killedBy on players with WOLF_TARGET status and PROTECTED status', () => {
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
          statuses: new Set([
            PlayerStatusEnum.WOLF_TARGET,
            PlayerStatusEnum.PROTECTED,
          ]),
          isDead: false,
          killedBy: PlayerRoleEnum.LOUP_GAROU,
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
          role: PlayerRoleEnum.LOUP_GAROU,
          card: PlayerRoleEnum.LOUP_GAROU,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.PETITE_FILLE,
          card: PlayerRoleEnum.PETITE_FILLE,
          statuses: new Set([
            PlayerStatusEnum.WOLF_TARGET,
            PlayerStatusEnum.PROTECTED,
          ]),
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
        PlayerStatusEnum.DEVOURED,
      );
    });

    it('should add INJURED status to player with WOLF_TARGET status and ANCIEN role', () => {
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
          role: PlayerRoleEnum.ANCIEN,
          card: PlayerRoleEnum.ANCIEN,
          statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
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
        PlayerStatusEnum.INJURED,
      );
      expect(statusUtils.addStatusToPlayer).not.toHaveBeenCalledWith(
        expectedPlayer,
        PlayerStatusEnum.DEVOURED,
      );
    });

    it('should add DEVOURED status to player with WOLF_TARGET and INJURED statuses and ANCIEN role', () => {
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
          role: PlayerRoleEnum.ANCIEN,
          card: PlayerRoleEnum.ANCIEN,
          statuses: new Set([
            PlayerStatusEnum.WOLF_TARGET,
            PlayerStatusEnum.INJURED,
          ]),
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
        PlayerStatusEnum.DEVOURED,
      );
    });

    it('should remove WOLF_TARGET status to players with WOLF_TARGET status', () => {
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
          statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
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
        PlayerStatusEnum.WOLF_TARGET,
      );
    });
  });
});
