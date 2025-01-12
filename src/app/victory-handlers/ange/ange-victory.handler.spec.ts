import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
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
        role: PlayerRoleEnum.ANGE,
        card: PlayerRoleEnum.ANGE,
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
        role: PlayerRoleEnum.ANGE,
        card: PlayerRoleEnum.ANGE,
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
        role: PlayerRoleEnum.ANGE,
        card: PlayerRoleEnum.ANGE,
        statuses: new Set(),
        isDead: true,
      },
    ];

    expect(victoryHandler.isVictorious(players, false)).toEqual(false);
  });
});
