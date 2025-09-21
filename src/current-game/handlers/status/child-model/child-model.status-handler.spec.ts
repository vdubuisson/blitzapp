import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { Player } from '@/shared/types/player';
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
          role: PlayerRole.VILLAGEOIS,
          card: PlayerRole.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRole.ENFANT_SAUVAGE,
          card: PlayerRole.ENFANT_SAUVAGE,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 2,
          name: 'player2',
          role: PlayerRole.VILLAGEOIS,
          card: PlayerRole.VILLAGEOIS,
          statuses: new Set([PlayerStatus.CHILD_MODEL]),
          isDead: true,
        },
      ];

      const newPlayers = handler.handleDeath(mockPlayers, mockPlayers[2]);

      expect(newPlayers[1].role).toEqual(PlayerRole.LOUP_GAROU);
      expect(newPlayers[1]).not.toBe(mockPlayers[1]);
    });

    it('should not change dead ENFANT_SAUVAGE to LOUP_GAROU on CHILD_MODEL death', () => {
      const mockPlayers: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRole.VILLAGEOIS,
          card: PlayerRole.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
        {
          id: 1,
          name: 'player1',
          role: PlayerRole.ENFANT_SAUVAGE,
          card: PlayerRole.ENFANT_SAUVAGE,
          statuses: new Set(),
          isDead: true,
        },
        {
          id: 2,
          name: 'player2',
          role: PlayerRole.VILLAGEOIS,
          card: PlayerRole.VILLAGEOIS,
          statuses: new Set([PlayerStatus.CHILD_MODEL]),
          isDead: true,
        },
      ];

      const newPlayers = handler.handleDeath(mockPlayers, mockPlayers[2]);

      expect(newPlayers[1].role).toEqual(PlayerRole.ENFANT_SAUVAGE);
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
