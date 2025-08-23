import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { MockReset } from 'ng-mocks';
import { RustySwordStatusHandler } from './rusty-sword.status-handler';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import * as statusUtils from '@/utils/status.utils';

describe('RustySwordStatusHandler', () => {
  let handler: RustySwordStatusHandler;

  beforeAll(() => {
    handler = new RustySwordStatusHandler();
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
          statuses: new Set(PlayerStatusEnum.INFECTED),
        } as Player,
        { id: 2, name: 'Player 2' } as Player,
      ];
      const result = handler.handleDeath(mockPlayers, mockPlayers[0]);
      expect(result).toBe(mockPlayers);
    });
  });

  describe('triggerAction', () => {
    it('should remove RUSTY_SWORD status', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.CHEVALIER,
          card: PlayerRoleEnum.CHEVALIER,
          statuses: new Set(),
          isDead: true,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.LOUP_GAROU,
          card: PlayerRoleEnum.LOUP_GAROU,
          statuses: new Set([PlayerStatusEnum.RUSTY_SWORD]),
          isDead: false,
        },
      ];
      const expectedPlayer = { ...mockPlayers[1] };
      jest
        .spyOn(statusUtils, 'removeStatusFromPlayer')
        .mockReturnValue(expectedPlayer);

      const newPlayers = handler.triggerAction(mockPlayers);

      expect(newPlayers[1]).toBe(expectedPlayer);
      expect(statusUtils.removeStatusFromPlayer).toHaveBeenCalledWith(
        mockPlayers[1],
        PlayerStatusEnum.RUSTY_SWORD,
      );
    });

    it('should kill player with RUSTY_SWORD status', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.CHEVALIER,
          card: PlayerRoleEnum.CHEVALIER,
          statuses: new Set(),
          isDead: true,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.LOUP_GAROU,
          card: PlayerRoleEnum.LOUP_GAROU,
          statuses: new Set([PlayerStatusEnum.RUSTY_SWORD]),
          isDead: false,
        },
      ];
      const expectedPlayer = { ...mockPlayers[1] };
      jest
        .spyOn(statusUtils, 'removeStatusFromPlayer')
        .mockReturnValue(expectedPlayer);

      const newPlayers = handler.triggerAction(mockPlayers);

      expect(newPlayers[1].isDead).toEqual(true);
    });

    it('should set killed by CHEVALIER on player with RUSTY_SWORD status', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.CHEVALIER,
          card: PlayerRoleEnum.CHEVALIER,
          statuses: new Set(),
          isDead: true,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.LOUP_GAROU,
          card: PlayerRoleEnum.LOUP_GAROU,
          statuses: new Set([PlayerStatusEnum.RUSTY_SWORD]),
          isDead: false,
        },
      ];
      const expectedPlayer = { ...mockPlayers[1] };
      jest
        .spyOn(statusUtils, 'removeStatusFromPlayer')
        .mockReturnValue(expectedPlayer);

      const newPlayers = handler.triggerAction(mockPlayers);

      expect(newPlayers[1].killedBy).toEqual(PlayerRoleEnum.CHEVALIER);
    });
  });
});
