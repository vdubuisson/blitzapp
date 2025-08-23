import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { ChildModelStatusHandler } from './child-model.status-handler';

describe('ChildModelStatusHandler', () => {
  let handler: ChildModelStatusHandler;

  beforeAll(() => {
    handler = new ChildModelStatusHandler();
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
  });

  describe('handleDeath', () => {
    it('should change alive ENFANT_SAUVAGE to LOUP_GAROU on CHILD_MODEL death', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.ENFANT_SAUVAGE,
          card: PlayerRoleEnum.ENFANT_SAUVAGE,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 2,
          name: 'player2',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set([PlayerStatusEnum.CHILD_MODEL]),
          isDead: true,
        },
      ];

      const newPlayers = handler.handleDeath(mockPlayers, mockPlayers[2]);

      expect(newPlayers[1].role).toEqual(PlayerRoleEnum.LOUP_GAROU);
      expect(newPlayers[1]).not.toBe(mockPlayers[1]);
    });

    it('should not change dead ENFANT_SAUVAGE to LOUP_GAROU on CHILD_MODEL death', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRoleEnum.ENFANT_SAUVAGE,
          card: PlayerRoleEnum.ENFANT_SAUVAGE,
          statuses: new Set(),
          isDead: true,
        },
        {
          id: 2,
          name: 'player2',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set([PlayerStatusEnum.CHILD_MODEL]),
          isDead: true,
        },
      ];

      const newPlayers = handler.handleDeath(mockPlayers, mockPlayers[2]);

      expect(newPlayers[1].role).toEqual(PlayerRoleEnum.ENFANT_SAUVAGE);
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
