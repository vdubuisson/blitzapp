import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { CorbeauRoundHandler } from './corbeau-round.handler';

describe('CorbeauRoundHandler', () => {
  let roundHandler: CorbeauRoundHandler;

  beforeEach(() => {
    roundHandler = new CorbeauRoundHandler();
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

  it('should add RAVEN status to selected player', () => {
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
        role: PlayerRoleEnum.CORBEAU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const testPlayers: Player[] = [
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
        role: PlayerRoleEnum.CORBEAU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set([PlayerStatusEnum.RAVEN]),
        isDead: false,
      },
    ];

    const newPlayers = roundHandler.handleAction(players, [2]);

    expect(newPlayers).toEqual(testPlayers);
  });

  it('should return all alive players except CORBEAU as selectable', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.CORBEAU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers).toEqual([1]);
  });

  it('should return CORBEAU as role round', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.role).toEqual(RoundEnum.CORBEAU);
  });

  it('should return 1 as maxSelectable players', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.maxSelectable).toEqual(1);
  });

  it('should return 1 as minSelectable players', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.minSelectable).toEqual(1);
  });
});
