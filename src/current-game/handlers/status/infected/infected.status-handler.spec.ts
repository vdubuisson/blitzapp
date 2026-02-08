import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import * as statusUtils from '@/utils/status.utils';
import { InfectedStatusHandler } from './infected.status-handler';

describe('InfectedStatusHandler', () => {
  let handler: InfectedStatusHandler;

  beforeAll(() => {
    handler = new InfectedStatusHandler();
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
    it('should add INJURED status to player with INFECTED status and ANCIEN role', () => {
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
          statuses: new Set([PlayerStatusEnum.INFECTED]),
          isDead: false,
        },
      ];
      const expectedPlayer = { ...mockPlayers[1] };
      jest
        .spyOn(statusUtils, 'removeStatusFromPlayer')
        .mockReturnValue(expectedPlayer);
      jest
        .spyOn(statusUtils, 'addStatusToPlayer')
        .mockReturnValue(expectedPlayer);

      const newPlayers = handler.triggerAction(mockPlayers);

      expect(newPlayers[1]).toBe(expectedPlayer);
      expect(statusUtils.addStatusToPlayer).toHaveBeenCalledWith(
        mockPlayers[1],
        PlayerStatusEnum.INJURED,
      );
      expect(statusUtils.removeStatusFromPlayer).toHaveBeenCalledWith(
        mockPlayers[1],
        PlayerStatusEnum.INFECTED,
      );
    });

    it('should keep INFECTED status to player with INFECTED and INJURED statuses and ANCIEN role', () => {
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
            PlayerStatusEnum.INFECTED,
            PlayerStatusEnum.INJURED,
          ]),
          isDead: false,
        },
      ];

      const newPlayers = handler.triggerAction(mockPlayers);

      expect(newPlayers[1].statuses.has(PlayerStatusEnum.INFECTED)).toEqual(
        true,
      );
    });
  });
});
