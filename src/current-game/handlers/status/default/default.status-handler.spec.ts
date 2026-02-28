import { Player } from '@/shared/types/player';
import { PlayerStatusEnum } from '@/types/player-status';
import { DefaultStatusHandler } from './default.status-handler';

describe('DefaultStatusHandler', () => {
  let handler: DefaultStatusHandler;
  let players: Player[];

  beforeAll(() => {
    handler = new DefaultStatusHandler();
    players = [
      {
        id: 1,
        name: 'Player 1',
        statuses: new Set(PlayerStatusEnum.NO_POWER),
      } as Player,
      { id: 2, name: 'Player 2' } as Player,
    ];
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
  });

  describe('handleDeath', () => {
    it('should return players unchanged', () => {
      const result = handler.handleDeath(players, players[0]);
      expect(result).toBe(players);
    });
  });

  describe('triggerAction', () => {
    it('should return players unchanged', () => {
      const result = handler.triggerAction(players);
      expect(result).toBe(players);
    });
  });
});
