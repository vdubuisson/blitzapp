import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { SectaireVictoryHandler } from './sectaire-victory.handler';

describe('SectaireVictoryHandler', () => {
  let victoryHandler: SectaireVictoryHandler;

  beforeEach(() => {
    victoryHandler = new SectaireVictoryHandler();
  });

  it('should be victorious if only SECTAIRE and his team are alive', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SECTAIRE,
        card: PlayerRoleEnum.SECTAIRE,
        statuses: new Set([PlayerStatusEnum.BLUE_TEAM]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.BLUE_TEAM]),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.RED_TEAM]),
        isDead: true,
      },
    ];

    expect(victoryHandler.isVictorious(players)).toEqual(true);
  });

  it('should not be victorious if SECTAIRE is dead', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SECTAIRE,
        card: PlayerRoleEnum.SECTAIRE,
        statuses: new Set([PlayerStatusEnum.BLUE_TEAM]),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.BLUE_TEAM]),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.RED_TEAM]),
        isDead: true,
      },
    ];

    expect(victoryHandler.isVictorious(players)).toEqual(false);
  });

  it('should not be victorious if other team is alive', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SECTAIRE,
        card: PlayerRoleEnum.SECTAIRE,
        statuses: new Set([PlayerStatusEnum.BLUE_TEAM]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.BLUE_TEAM]),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.RED_TEAM]),
        isDead: false,
      },
    ];

    expect(victoryHandler.isVictorious(players)).toEqual(false);
  });

  it('should not be victorious if no SECTAIRE', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.BLUE_TEAM]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.BLUE_TEAM]),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.RED_TEAM]),
        isDead: false,
      },
    ];

    expect(victoryHandler.isVictorious(players)).toEqual(false);
  });
});
