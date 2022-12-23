import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { GrandMechantLoupRoundHandler } from './grand-mechant-loup-round.handler';

describe('LoupGarouRoundHandler', () => {
  let roundHandler: GrandMechantLoupRoundHandler;

  beforeEach(() => {
    roundHandler = new GrandMechantLoupRoundHandler();
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

  it('should add WOLF_TARGET status to selected player', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.GRAND_MECHANT_LOUP,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = roundHandler.handleAction(players, [0]);

    expect(newPlayers[0].statuses.has(PlayerStatusEnum.WOLF_TARGET)).toEqual(
      true
    );
  });

  it('should return alive players as selectable', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
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
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
      },
    ];

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers.includes(0)).toEqual(false);
  });

  it('should not return LOUP_GAROU players as selectable', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers.includes(0)).toEqual(false);
  });

  it('should not return GRAND_MECHANT_LOUP player as selectable', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.GRAND_MECHANT_LOUP,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers.includes(0)).toEqual(false);
  });

  it('should not return WOLF_TARGET player as selectable', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
    ];

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers.includes(0)).toEqual(false);
  });

  it('should return GRAND_MECHANT_LOUP as role round', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.role).toEqual(RoundEnum.GRAND_MECHANT_LOUP);
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
