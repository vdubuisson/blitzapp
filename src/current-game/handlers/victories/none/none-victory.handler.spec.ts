import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { NoneVictoryHandler } from './none-victory.handler';

describe('NoneVictoryHandler', () => {
  let victoryHandler: NoneVictoryHandler;

  beforeAll(() => {
    victoryHandler = new NoneVictoryHandler();
  });

  it('should be victorious if no players are alive', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.SORCIERE,
        card: PlayerRole.SORCIERE,
        statuses: new Set(),
        isDead: true,
      },
    ];

    expect(victoryHandler.isVictorious(players)).toEqual(true);
  });

  it('should not be victorious if some players are alive', () => {
    const players: Player[] = [
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
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.SORCIERE,
        card: PlayerRole.SORCIERE,
        statuses: new Set(),
        isDead: true,
      },
    ];

    expect(victoryHandler.isVictorious(players)).toEqual(false);
  });
});
