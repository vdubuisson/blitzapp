import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { Player } from '../../models/player.model';
import { AmoureuxVictoryHandler } from './amoureux-victory.handler';

describe('AmoureuxVictoryHandler', () => {
  let victoryHandler: AmoureuxVictoryHandler;

  beforeEach(() => {
    victoryHandler = new AmoureuxVictoryHandler();
  });

  it('should be victorious if only Lovers are alive', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
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
        isDead: false,
      },
    ];

    expect(victoryHandler.isVictorious(players)).toEqual(true);
  });

  it('should not be victorious if some Lovers are dead', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.LOVER]),
        isDead: true,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.LOVER]),
        isDead: false,
      },
    ];

    expect(victoryHandler.isVictorious(players)).toEqual(false);
  });

  it('should not be victorious if other players are alive', () => {
    const players: Player[] = [
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
        isDead: false,
      },
    ];

    expect(victoryHandler.isVictorious(players)).toEqual(false);
  });
});
