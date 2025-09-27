import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { AngeVictoryHandler } from './ange-victory.handler';

describe('AngeVictoryHandler', () => {
  let victoryHandler: AngeVictoryHandler;

  beforeAll(() => {
    victoryHandler = new AngeVictoryHandler();
  });

  it('should be victorious if Ange is dead and isFirstDayOrNight', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.ANGE,
        card: PlayerRole.ANGE,
        statuses: new Set(),
        isDead: true,
      },
    ];

    expect(victoryHandler.isVictorious(players, true)).toEqual(true);
  });

  it('should not be victorious if Ange is alive', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.ANGE,
        card: PlayerRole.ANGE,
        statuses: new Set(),
        isDead: false,
      },
    ];

    expect(victoryHandler.isVictorious(players, true)).toEqual(false);
  });

  it('should not be victorious if Ange dead but not isFirstDayOrNight', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.ANGE,
        card: PlayerRole.ANGE,
        statuses: new Set(),
        isDead: true,
      },
    ];

    expect(victoryHandler.isVictorious(players, false)).toEqual(false);
  });
});
