import {
  createServiceFactory,
  SpectatorService,
} from '@ngneat/spectator/vitest';
import { GameCardsManager } from './game-cards-manager';
import { CardList } from '@/shared/types/card-list';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/shared/types/player-role';

describe('GameCardsManager', () => {
  let spectator: SpectatorService<GameCardsManager>;

  const createService = createServiceFactory({
    service: GameCardsManager,
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

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

    const notPlayedCards = spectator.service.getNotPlayedCards(
      players,
      cardList,
    );

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

    const notPlayedVillageoisCount = spectator.service
      .getNotPlayedCards(players, cardList)
      .filter((c) => c === PlayerRoleEnum.VILLAGEOIS).length;

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

    const notPlayedLoupGarouCount = spectator.service
      .getNotPlayedCards(players, cardList)
      .filter((c) => c === PlayerRoleEnum.LOUP_GAROU).length;

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

    const notPlayedSoeurCount = spectator.service
      .getNotPlayedCards(players, cardList)
      .filter((c) => c === PlayerRoleEnum.SOEUR).length;

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

    const notPlayedFrereCount = spectator.service
      .getNotPlayedCards(players, cardList)
      .filter((c) => c === PlayerRoleEnum.FRERE).length;

    expect(notPlayedFrereCount).toEqual(2);
  });
});
