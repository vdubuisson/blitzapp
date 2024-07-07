import { CardList } from '@/models/card-list.model';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import { getNotPlayedCards } from './cards.utils';

describe('getNotPlayedCards', () => {
  it('should return not played unique role', () => {
    const cardList: CardList = {
      selectedRoles: new Set([PlayerRoleEnum.CUPIDON, PlayerRoleEnum.VOYANTE]),
      loupGarou: 0,
      villageois: 0,
      playersNumber: 1,
    };
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CUPIDON,
        card: PlayerRoleEnum.CUPIDON,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const notPlayedCards = getNotPlayedCards(players, cardList);

    expect(notPlayedCards.includes(PlayerRoleEnum.VOYANTE)).toBe(true);
  });

  it('should return not played villageois count', () => {
    const cardList: CardList = {
      selectedRoles: new Set(),
      loupGarou: 0,
      villageois: 3,
      playersNumber: 1,
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
    ];

    const notPlayedVillageoisCount = getNotPlayedCards(
      players,
      cardList,
    ).filter((c) => c === PlayerRoleEnum.VILLAGEOIS).length;

    expect(notPlayedVillageoisCount).toEqual(2);
  });

  it('should return not played loupGarou count', () => {
    const cardList: CardList = {
      selectedRoles: new Set(),
      loupGarou: 3,
      villageois: 0,
      playersNumber: 1,
    };
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const notPlayedLoupGarouCount = getNotPlayedCards(players, cardList).filter(
      (c) => c === PlayerRoleEnum.LOUP_GAROU,
    ).length;

    expect(notPlayedLoupGarouCount).toEqual(2);
  });

  it('should return not played SOEUR count', () => {
    const cardList: CardList = {
      selectedRoles: new Set([PlayerRoleEnum.SOEUR]),
      loupGarou: 0,
      villageois: 1,
      playersNumber: 1,
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
    ];

    const notPlayedSoeurCount = getNotPlayedCards(players, cardList).filter(
      (c) => c === PlayerRoleEnum.SOEUR,
    ).length;

    expect(notPlayedSoeurCount).toEqual(2);
  });

  it('should return not played FRERE count', () => {
    const cardList: CardList = {
      selectedRoles: new Set([PlayerRoleEnum.FRERE]),
      loupGarou: 0,
      villageois: 0,
      playersNumber: 1,
    };
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const notPlayedFrereCount = getNotPlayedCards(players, cardList).filter(
      (c) => c === PlayerRoleEnum.FRERE,
    ).length;

    expect(notPlayedFrereCount).toEqual(2);
  });
});
