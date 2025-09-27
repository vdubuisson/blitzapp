import { CardList } from '@/shared/types/card-list';
import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { getNotPlayedCards } from './cards.utils';

describe('getNotPlayedCards', () => {
  it('should return not played unique role', () => {
    const cardList: CardList = {
      selectedRoles: new Set([PlayerRole.CUPIDON, PlayerRole.VOYANTE]),
      loupGarou: 0,
      villageois: 0,
      playersNumber: 1,
    };
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.CUPIDON,
        card: PlayerRole.CUPIDON,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const notPlayedCards = getNotPlayedCards(players, cardList);

    expect(notPlayedCards.includes(PlayerRole.VOYANTE)).toBe(true);
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
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const notPlayedVillageoisCount = getNotPlayedCards(
      players,
      cardList,
    ).filter((c) => c === PlayerRole.VILLAGEOIS).length;

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
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const notPlayedLoupGarouCount = getNotPlayedCards(players, cardList).filter(
      (c) => c === PlayerRole.LOUP_GAROU,
    ).length;

    expect(notPlayedLoupGarouCount).toEqual(2);
  });

  it('should return not played SOEUR count', () => {
    const cardList: CardList = {
      selectedRoles: new Set([PlayerRole.SOEUR]),
      loupGarou: 0,
      villageois: 1,
      playersNumber: 1,
    };
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const notPlayedSoeurCount = getNotPlayedCards(players, cardList).filter(
      (c) => c === PlayerRole.SOEUR,
    ).length;

    expect(notPlayedSoeurCount).toEqual(2);
  });

  it('should return not played FRERE count', () => {
    const cardList: CardList = {
      selectedRoles: new Set([PlayerRole.FRERE]),
      loupGarou: 0,
      villageois: 0,
      playersNumber: 1,
    };
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.FRERE,
        card: PlayerRole.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const notPlayedFrereCount = getNotPlayedCards(players, cardList).filter(
      (c) => c === PlayerRole.FRERE,
    ).length;

    expect(notPlayedFrereCount).toEqual(2);
  });
});
