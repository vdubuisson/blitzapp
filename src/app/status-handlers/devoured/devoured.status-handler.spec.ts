import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { DevouredStatusHandler } from './devoured.status-handler';
import { PlayerRoleEnum } from '@/enums/player-role.enum';

describe('DevouredStatusHandler', () => {
  let handler: DevouredStatusHandler;

  beforeAll(() => {
    handler = new DevouredStatusHandler();
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

      const newPlayers = handler.triggerAction(mockPlayers);

      expect(newPlayers[1].isDead).toEqual(true);
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

      const newPlayers = handler.triggerAction(mockPlayers);

      expect(newPlayers[1].statuses.has(PlayerStatusEnum.DEVOURED)).toEqual(
        false,
      );
    });
  });
});
