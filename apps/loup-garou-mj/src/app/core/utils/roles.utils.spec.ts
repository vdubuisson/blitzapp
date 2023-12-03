import { CardList } from '../models/card-list.model';
import { PlayerRoleEnum } from '../enums/player-role.enum';
import { Player } from '../models/player.model';
import { getNotPlayedRoles } from './roles.utils';

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
