import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { Player } from '../../models/player.model';
import { NoneVictoryHandler } from './none-victory.handler';

describe('NoneVictoryHandler', () => {
  let victoryHandler: NoneVictoryHandler;

  beforeEach(() => {
    victoryHandler = new NoneVictoryHandler();
  });

  it('should be victorious if no players are alive', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.SORCIERE,
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
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.SORCIERE,
        statuses: new Set(),
        isDead: true,
      },
    ];

    expect(victoryHandler.isVictorious(players)).toEqual(false);
  });
});
