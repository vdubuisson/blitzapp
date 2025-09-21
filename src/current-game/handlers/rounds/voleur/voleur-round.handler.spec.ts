import { PlayerRole } from '@/types/player-role';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { CardList } from '@/shared/types/card-list';
import { Player } from '@/shared/types/player';
import { firstValueFrom } from 'rxjs';
import { VoleurRoundHandler } from './voleur-round.handler';

describe('VoleurRoundHandler', () => {
  let roundHandler: VoleurRoundHandler;

  beforeAll(() => {
    roundHandler = new VoleurRoundHandler();
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
    expect(roundHandler.type).toEqual(RoundType.ROLES);
  });

  it('should return ROLES type', () => {
    const roundConfig = roundHandler.getRoundConfig([], {
      villageois: 2,
      loupGarou: 0,
      selectedRoles: new Set(),
      playersNumber: 0,
    });

    expect(roundConfig.type).toEqual(RoundType.ROLES);
  });

  it('should set selected role to VOLEUR', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VOLEUR,
        card: PlayerRole.VOLEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [], PlayerRole.CUPIDON),
    );
    expect(newPlayers[0].role).toBe(PlayerRole.CUPIDON);
    expect(newPlayers[0].card).toBe(PlayerRole.CUPIDON);
  });

  it('should return not played roles as selectable roles', () => {
    const cardList: CardList = {
      villageois: 0,
      loupGarou: 0,
      selectedRoles: new Set([
        PlayerRole.VOYANTE,
        PlayerRole.CORBEAU,
        PlayerRole.JOUEUR_FLUTE,
        PlayerRole.VOLEUR,
      ]),
      playersNumber: 2,
    };
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VOLEUR,
        card: PlayerRole.VOLEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.CORBEAU,
        card: PlayerRole.CORBEAU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players, cardList);

    expect(roundConfig.selectableRoles?.includes(PlayerRole.VOYANTE)).toBe(
      true,
    );
    expect(roundConfig.selectableRoles?.includes(PlayerRole.JOUEUR_FLUTE)).toBe(
      true,
    );
  });

  it('should not return played roles as selectable roles', () => {
    const cardList: CardList = {
      villageois: 0,
      loupGarou: 0,
      selectedRoles: new Set([
        PlayerRole.VOYANTE,
        PlayerRole.CORBEAU,
        PlayerRole.JOUEUR_FLUTE,
        PlayerRole.VOLEUR,
      ]),
      playersNumber: 2,
    };
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VOLEUR,
        card: PlayerRole.VOLEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.CORBEAU,
        card: PlayerRole.CORBEAU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players, cardList);

    expect(roundConfig.selectableRoles?.includes(PlayerRole.CORBEAU)).toBe(
      false,
    );
  });

  it('should return VOLEUR as selectable roles', () => {
    const cardList: CardList = {
      villageois: 0,
      loupGarou: 0,
      selectedRoles: new Set([
        PlayerRole.VOYANTE,
        PlayerRole.CORBEAU,
        PlayerRole.JOUEUR_FLUTE,
        PlayerRole.VOLEUR,
      ]),
      playersNumber: 2,
    };
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VOLEUR,
        card: PlayerRole.VOLEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.CORBEAU,
        card: PlayerRole.CORBEAU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players, cardList);

    expect(roundConfig.selectableRoles?.includes(PlayerRole.VOLEUR)).toBe(true);
  });

  it('should not return VOLEUR as selectable roles if only loup-garou', () => {
    const cardList: CardList = {
      villageois: 0,
      loupGarou: 1,
      selectedRoles: new Set([
        PlayerRole.LOUP_BLANC,
        PlayerRole.CORBEAU,
        PlayerRole.VOLEUR,
      ]),
      playersNumber: 2,
    };
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VOLEUR,
        card: PlayerRole.VOLEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.CORBEAU,
        card: PlayerRole.CORBEAU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players, cardList);

    expect(roundConfig.selectableRoles?.includes(PlayerRole.VOLEUR)).toBe(
      false,
    );
  });

  it('should return missing villlageois as selectable roles', () => {
    const cardList: CardList = {
      villageois: 1,
      loupGarou: 0,
      selectedRoles: new Set([
        PlayerRole.VOYANTE,
        PlayerRole.CORBEAU,
        PlayerRole.VOLEUR,
      ]),
      playersNumber: 2,
    };
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VOLEUR,
        card: PlayerRole.VOLEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.CORBEAU,
        card: PlayerRole.CORBEAU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players, cardList);

    expect(
      roundConfig.selectableRoles?.filter(
        (role) => role === PlayerRole.VILLAGEOIS,
      ).length,
    ).toBe(1);
  });

  it('should return missing loupGarou as selectable roles', () => {
    const cardList: CardList = {
      villageois: 0,
      loupGarou: 1,
      selectedRoles: new Set([
        PlayerRole.VOYANTE,
        PlayerRole.CORBEAU,
        PlayerRole.VOLEUR,
      ]),
      playersNumber: 2,
    };
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VOLEUR,
        card: PlayerRole.VOLEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.CORBEAU,
        card: PlayerRole.CORBEAU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players, cardList);

    expect(
      roundConfig.selectableRoles?.filter(
        (role) => role === PlayerRole.LOUP_GAROU,
      ).length,
    ).toBe(1);
  });

  it('should return missing SOEUR as selectable roles', () => {
    const cardList: CardList = {
      villageois: 0,
      loupGarou: 0,
      selectedRoles: new Set([
        PlayerRole.SOEUR,
        PlayerRole.CORBEAU,
        PlayerRole.VOLEUR,
      ]),
      playersNumber: 2,
    };
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VOLEUR,
        card: PlayerRole.VOLEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.SOEUR,
        card: PlayerRole.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players, cardList);

    expect(roundConfig.selectableRoles?.includes(PlayerRole.SOEUR)).toBe(true);
  });

  it('should return missing FRERE as selectable roles', () => {
    const cardList: CardList = {
      villageois: 0,
      loupGarou: 0,
      selectedRoles: new Set([
        PlayerRole.FRERE,
        PlayerRole.CORBEAU,
        PlayerRole.VOLEUR,
      ]),
      playersNumber: 3,
    };
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VOLEUR,
        card: PlayerRole.VOLEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.FRERE,
        card: PlayerRole.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.FRERE,
        card: PlayerRole.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players, cardList);

    expect(roundConfig.selectableRoles?.includes(PlayerRole.FRERE)).toBe(true);
  });

  it('should return VOLEUR as round role', () => {
    const roundConfig = roundHandler.getRoundConfig([], {
      villageois: 2,
      loupGarou: 0,
      selectedRoles: new Set(),
      playersNumber: 0,
    });

    expect(roundConfig.round).toEqual(Round.VOLEUR);
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
