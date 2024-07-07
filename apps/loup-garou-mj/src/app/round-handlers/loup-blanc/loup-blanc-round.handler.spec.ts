import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { LoupBlancRoundHandler } from './loup-blanc-round.handler';
import { waitForAsync } from '@angular/core/testing';

describe('LoupBlancRoundHandler', () => {
  let roundHandler: LoupBlancRoundHandler;

  beforeEach(() => {
    roundHandler = new LoupBlancRoundHandler();
  });

  it('should not be only once', () => {
    expect(roundHandler.isOnlyOnce).toEqual(false);
  });

  it('should not be during day', () => {
    expect(roundHandler.isDuringDay).toEqual(false);
  });

  it('should return not during day', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.isDuringDay).toEqual(false);
  });

  it('should be PLAYERS type', () => {
    expect(roundHandler.type).toEqual(RoundTypeEnum.PLAYERS);
  });

  it('should return PLAYERS type', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.type).toEqual(RoundTypeEnum.PLAYERS);
  });

  it('should kill selected player', waitForAsync(() => {
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
        role: PlayerRoleEnum.LOUP_BLANC,
        card: PlayerRoleEnum.LOUP_BLANC,
        statuses: new Set(),
        isDead: false,
      },
    ];

    roundHandler
      .handleAction(players, [0])
      .subscribe((newPlayers) => expect(newPlayers[0].isDead).toEqual(true));
  }));

  it('should set killedBy LOUP_BLANC on selected player', waitForAsync(() => {
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
        role: PlayerRoleEnum.LOUP_BLANC,
        card: PlayerRoleEnum.LOUP_BLANC,
        statuses: new Set(),
        isDead: false,
      },
    ];

    roundHandler
      .handleAction(players, [0])
      .subscribe((newPlayers) =>
        expect(newPlayers[0].killedBy).toEqual(PlayerRoleEnum.LOUP_BLANC),
      );
  }));

  it('should return alive players as selectable', () => {
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

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers.includes(0)).toEqual(true);
  });

  it('should return LOUP_GAROU players as selectable', () => {
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

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers.includes(0)).toEqual(true);
  });

  it('should return GRAND_MECHANT_LOUP player as selectable', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.GRAND_MECHANT_LOUP,
        card: PlayerRoleEnum.GRAND_MECHANT_LOUP,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers.includes(0)).toEqual(true);
  });

  it('should not return dead players as selectable', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: true,
      },
    ];

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers.includes(0)).toEqual(false);
  });

  it('should not return LOUP_BLANC player as selectable', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_BLANC,
        card: PlayerRoleEnum.LOUP_BLANC,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers.includes(0)).toEqual(false);
  });

  it('should not return VILLAGEOIS players as selectable', () => {
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

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers.includes(0)).toEqual(false);
  });

  it('should return LOUP_BLANC as role round', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.role).toEqual(RoundEnum.LOUP_BLANC);
  });

  it('should return 1 as maxSelectable players', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.maxSelectable).toEqual(1);
  });

  it('should return 0 as minSelectable players', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.minSelectable).toEqual(0);
  });
});
