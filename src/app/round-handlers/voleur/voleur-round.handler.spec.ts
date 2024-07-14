import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { VoleurRoundHandler } from './voleur-round.handler';
import { CardList } from '@/models/card-list.model';
import { waitForAsync } from '@angular/core/testing';

describe('VoleurRoundHandler', () => {
  let roundHandler: VoleurRoundHandler;

  beforeEach(() => {
    roundHandler = new VoleurRoundHandler();
  });

  it('should be only once', () => {
    expect(roundHandler.isOnlyOnce).toEqual(true);
  });

  it('should not be during day', () => {
    expect(roundHandler.isDuringDay).toEqual(false);
  });

  it('should return not during day', () => {
    const round = roundHandler.getRoundConfig([], {
      villageois: 2,
      loupGarou: 0,
      selectedRoles: new Set(),
      playersNumber: 0,
    });

    expect(round.isDuringDay).toEqual(false);
  });

  it('should be ROLES type', () => {
    expect(roundHandler.type).toEqual(RoundTypeEnum.ROLES);
  });

  it('should return ROLES type', () => {
    const round = roundHandler.getRoundConfig([], {
      villageois: 2,
      loupGarou: 0,
      selectedRoles: new Set(),
      playersNumber: 0,
    });

    expect(round.type).toEqual(RoundTypeEnum.ROLES);
  });

  it('should set selected role to VOLEUR', waitForAsync(() => {
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

    roundHandler
      .handleAction(players, [], PlayerRoleEnum.CUPIDON)
      .subscribe((newPlayers) => {
        expect(newPlayers[0].role).toBe(PlayerRoleEnum.CUPIDON);
        expect(newPlayers[0].card).toBe(PlayerRoleEnum.CUPIDON);
      });
  }));

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

    const round = roundHandler.getRoundConfig(players, cardList);

    expect(round.selectableRoles?.includes(PlayerRoleEnum.VOYANTE)).toBe(true);
    expect(round.selectableRoles?.includes(PlayerRoleEnum.JOUEUR_FLUTE)).toBe(
      true,
    );
  });

  it('should not return played roles as selectable roles', () => {
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

    const round = roundHandler.getRoundConfig(players, cardList);

    expect(round.selectableRoles?.includes(PlayerRoleEnum.CORBEAU)).toBe(false);
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

    const round = roundHandler.getRoundConfig(players, cardList);

    expect(round.selectableRoles?.includes(PlayerRoleEnum.VOLEUR)).toBe(true);
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

    const round = roundHandler.getRoundConfig(players, cardList);

    expect(round.selectableRoles?.includes(PlayerRoleEnum.VOLEUR)).toBe(false);
  });

  it('should return missing villlageois as selectable roles', () => {
    const cardList: CardList = {
      villageois: 1,
      loupGarou: 0,
      selectedRoles: new Set([
        PlayerRoleEnum.VOYANTE,
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

    const round = roundHandler.getRoundConfig(players, cardList);

    expect(
      round.selectableRoles?.filter(
        (role) => role === PlayerRoleEnum.VILLAGEOIS,
      ).length,
    ).toBe(1);
  });

  it('should return missing loupGarou as selectable roles', () => {
    const cardList: CardList = {
      villageois: 0,
      loupGarou: 1,
      selectedRoles: new Set([
        PlayerRoleEnum.VOYANTE,
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

    const round = roundHandler.getRoundConfig(players, cardList);

    expect(
      round.selectableRoles?.filter(
        (role) => role === PlayerRoleEnum.LOUP_GAROU,
      ).length,
    ).toBe(1);
  });

  it('should return missing SOEUR as selectable roles', () => {
    const cardList: CardList = {
      villageois: 0,
      loupGarou: 0,
      selectedRoles: new Set([
        PlayerRoleEnum.SOEUR,
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
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const round = roundHandler.getRoundConfig(players, cardList);

    expect(round.selectableRoles?.includes(PlayerRoleEnum.SOEUR)).toBe(true);
  });

  it('should return missing FRERE as selectable roles', () => {
    const cardList: CardList = {
      villageois: 0,
      loupGarou: 0,
      selectedRoles: new Set([
        PlayerRoleEnum.FRERE,
        PlayerRoleEnum.CORBEAU,
        PlayerRoleEnum.VOLEUR,
      ]),
      playersNumber: 3,
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
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const round = roundHandler.getRoundConfig(players, cardList);

    expect(round.selectableRoles?.includes(PlayerRoleEnum.FRERE)).toBe(true);
  });

  it('should return VOLEUR as round role', () => {
    const round = roundHandler.getRoundConfig([], {
      villageois: 2,
      loupGarou: 0,
      selectedRoles: new Set(),
      playersNumber: 0,
    });

    expect(round.role).toEqual(RoundEnum.VOLEUR);
  });

  it('should return 1 as maxSelectable players', () => {
    const round = roundHandler.getRoundConfig([], {
      villageois: 2,
      loupGarou: 0,
      selectedRoles: new Set(),
      playersNumber: 0,
    });

    expect(round.maxSelectable).toEqual(1);
  });

  it('should return 1 as minSelectable players', () => {
    const round = roundHandler.getRoundConfig([], {
      villageois: 2,
      loupGarou: 0,
      selectedRoles: new Set(),
      playersNumber: 0,
    });

    expect(round.minSelectable).toEqual(1);
  });
});
