import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { LoverStatusHandler } from './lover.status-handler';

describe('LoverStatusHandler', () => {
  let handler: LoverStatusHandler;

  beforeAll(() => {
    handler = new LoverStatusHandler();
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
  });

  describe('handleDeath', () => {
    it('should kill the other LOVER', () => {
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
          statuses: new Set([PlayerStatusEnum.LOVER]),
          isDead: false,
        },
        {
          id: 2,
          name: 'player2',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set([PlayerStatusEnum.LOVER]),
          isDead: true,
        },
      ];

      const newPlayers = handler.handleDeath(mockPlayers, mockPlayers[2]);

      expect(newPlayers[1].isDead).toEqual(true);
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
