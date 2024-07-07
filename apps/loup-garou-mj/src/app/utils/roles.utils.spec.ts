import { CardList } from '../models/card-list.model';
import { PlayerRoleEnum } from '../enums/player-role.enum';
import { Player } from '../models/player.model';
import { getNotPlayedRoles, isLoupGarou } from './roles.utils';
import { PlayerStatusEnum } from '../enums/player-status.enum';

describe('getNotPlayedRoles', () => {
  it('should return not played cards', () => {
    const cardList: CardList = {
      selectedRoles: new Set([
        PlayerRoleEnum.CUPIDON,
        PlayerRoleEnum.VOYANTE,
        PlayerRoleEnum.SOEUR,
      ]),
      loupGarou: 1,
      villageois: 1,
      playersNumber: 3,
    };

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
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const notPlayedRoles = getNotPlayedRoles(players, cardList);
    expect(notPlayedRoles).toEqual([
      PlayerRoleEnum.CUPIDON,
      PlayerRoleEnum.VOYANTE,
    ]);
  });
});

describe('isLoupGarou', () => {
  it('should return true if player has loup-garou role', () => {
    const result = isLoupGarou({
      role: PlayerRoleEnum.GRAND_MECHANT_LOUP,
    } as Player);
    expect(result).toEqual(true);
  });

  it('should return false if player has INFECTED status', () => {
    const result = isLoupGarou({
      role: PlayerRoleEnum.VILLAGEOIS,
      statuses: new Set([PlayerStatusEnum.INFECTED]),
    } as Player);
    expect(result).toEqual(true);
  });

  it('should return false if player has not INFECTED status', () => {
    const result = isLoupGarou({
      role: PlayerRoleEnum.VILLAGEOIS,
      statuses: new Set(),
    } as Player);
    expect(result).toEqual(false);
  });
});
