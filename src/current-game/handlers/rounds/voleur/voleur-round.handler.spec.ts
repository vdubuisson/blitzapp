import { GameCardsManager } from '@/current-game/cards/game-cards-manager';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { CardList } from '@/shared/types/card-list';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { RoundEnum } from '@/types/round';
import {
  createInjectionContextFactory,
  SpectatorInjectionContext,
  SpyObject,
} from '@ngneat/spectator/vitest';
import { firstValueFrom } from 'rxjs';
import { VoleurRoundHandler } from './voleur-round.handler';

describe('VoleurRoundHandler', () => {
  let roundHandler: VoleurRoundHandler;
  let spectator: SpectatorInjectionContext;

  let gameCardsManager: SpyObject<GameCardsManager>;

  const createContext = createInjectionContextFactory({
    mocks: [GameCardsManager],
  });

  beforeEach(() => {
    spectator = createContext();
    roundHandler = spectator.runInInjectionContext(
      () => new VoleurRoundHandler(),
    );
    gameCardsManager = spectator.inject(GameCardsManager);
    gameCardsManager.getNotPlayedCards.mockReturnValue([
      PlayerRoleEnum.VILLAGEOIS,
      PlayerRoleEnum.VILLAGEOIS,
    ]);
  });

  it('should be only once', () => {
    expect(roundHandler.isOnlyOnce).toEqual(true);
  });

  it('should not be during day', () => {
    expect(roundHandler.isDuringDay).toEqual(false);
  });

  it('should return not during day', () => {
    const roundConfig = roundHandler.getRoundConfig([], {
      villageois: 2,
      loupGarou: 0,
      selectedRoles: new Set(),
      playersNumber: 0,
    });

    expect(roundConfig.isDuringDay).toEqual(false);
  });

  it('should be ROLES type', () => {
    expect(roundHandler.type).toEqual(RoundTypeEnum.ROLES);
  });

  it('should return ROLES type', () => {
    const roundConfig = roundHandler.getRoundConfig([], {
      villageois: 2,
      loupGarou: 0,
      selectedRoles: new Set(),
      playersNumber: 0,
    });

    expect(roundConfig.type).toEqual(RoundTypeEnum.ROLES);
  });

  it('should set selected role to VOLEUR', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VOLEUR,
        card: PlayerRoleEnum.VOLEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [], PlayerRoleEnum.CUPIDON),
    );
    expect(newPlayers[0].role).toBe(PlayerRoleEnum.CUPIDON);
    expect(newPlayers[0].card).toBe(PlayerRoleEnum.CUPIDON);
  });

  it('should return not played roles as selectable roles', () => {
    const cardList: CardList = {
      villageois: 0,
      loupGarou: 0,
      selectedRoles: new Set([
        PlayerRoleEnum.VOYANTE,
        PlayerRoleEnum.CORBEAU,
        PlayerRoleEnum.JOUEUR_FLUTE,
        PlayerRoleEnum.VOLEUR,
      ]),
      playersNumber: 2,
    };
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VOLEUR,
        card: PlayerRoleEnum.VOLEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.CORBEAU,
        card: PlayerRoleEnum.CORBEAU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    gameCardsManager.getNotPlayedCards.mockReturnValue([
      PlayerRoleEnum.VOYANTE,
      PlayerRoleEnum.JOUEUR_FLUTE,
    ]);

    const roundConfig = roundHandler.getRoundConfig(players, cardList);

    expect(roundConfig.selectableRoles?.includes(PlayerRoleEnum.VOYANTE)).toBe(
      true,
    );
    expect(
      roundConfig.selectableRoles?.includes(PlayerRoleEnum.JOUEUR_FLUTE),
    ).toBe(true);
    expect(gameCardsManager.getNotPlayedCards).toHaveBeenCalledWith(
      players,
      cardList,
    );
  });

  it('should return VOLEUR as selectable roles', () => {
    const cardList: CardList = {
      villageois: 0,
      loupGarou: 0,
      selectedRoles: new Set([
        PlayerRoleEnum.VOYANTE,
        PlayerRoleEnum.CORBEAU,
        PlayerRoleEnum.JOUEUR_FLUTE,
        PlayerRoleEnum.VOLEUR,
      ]),
      playersNumber: 2,
    };
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VOLEUR,
        card: PlayerRoleEnum.VOLEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.CORBEAU,
        card: PlayerRoleEnum.CORBEAU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    gameCardsManager.getNotPlayedCards.mockReturnValue([
      PlayerRoleEnum.VOYANTE,
      PlayerRoleEnum.JOUEUR_FLUTE,
    ]);

    const roundConfig = roundHandler.getRoundConfig(players, cardList);

    expect(roundConfig.selectableRoles?.includes(PlayerRoleEnum.VOLEUR)).toBe(
      true,
    );
  });

  it('should not return VOLEUR as selectable roles if only loup-garou', () => {
    const cardList: CardList = {
      villageois: 0,
      loupGarou: 1,
      selectedRoles: new Set([
        PlayerRoleEnum.LOUP_BLANC,
        PlayerRoleEnum.CORBEAU,
        PlayerRoleEnum.VOLEUR,
      ]),
      playersNumber: 2,
    };
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VOLEUR,
        card: PlayerRoleEnum.VOLEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.CORBEAU,
        card: PlayerRoleEnum.CORBEAU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    gameCardsManager.getNotPlayedCards.mockReturnValue([
      PlayerRoleEnum.LOUP_GAROU,
      PlayerRoleEnum.LOUP_BLANC,
    ]);

    const roundConfig = roundHandler.getRoundConfig(players, cardList);

    expect(roundConfig.selectableRoles?.includes(PlayerRoleEnum.VOLEUR)).toBe(
      false,
    );
  });

  it('should return VOLEUR as round role', () => {
    const roundConfig = roundHandler.getRoundConfig([], {
      villageois: 2,
      loupGarou: 0,
      selectedRoles: new Set(),
      playersNumber: 0,
    });

    expect(roundConfig.round).toEqual(RoundEnum.VOLEUR);
  });

  it('should return 1 as maxSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([], {
      villageois: 2,
      loupGarou: 0,
      selectedRoles: new Set(),
      playersNumber: 0,
    });

    expect(roundConfig.maxSelectable).toEqual(1);
  });

  it('should return 1 as minSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([], {
      villageois: 2,
      loupGarou: 0,
      selectedRoles: new Set(),
      playersNumber: 0,
    });

    expect(roundConfig.minSelectable).toEqual(1);
  });
});
