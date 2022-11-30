import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { SorciereKillRoundHandler } from './sorciere-kill-round.handler';

describe('SorciereKillRoundHandler', () => {
  let roundHandler: SorciereKillRoundHandler;

  beforeEach(() => {
    roundHandler = new SorciereKillRoundHandler();
  });

  it('should not be only first night', () => {
    expect(roundHandler.isOnlyFirstNight).toEqual(false);
  });

  it('should kill selected player', () => {
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
        role: PlayerRoleEnum.SORCIERE,
        statuses: new Set([PlayerStatusEnum.DEATH_POTION]),
        isDead: false,
      },
    ];

    const newPlayers = roundHandler.handleAction(players, [0]);

    expect(newPlayers[0].isDead).toEqual(true);
  });

  it('should remove DEATH_POTION status to SORCIERE player', () => {
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
        role: PlayerRoleEnum.SORCIERE,
        statuses: new Set([PlayerStatusEnum.DEATH_POTION]),
        isDead: false,
      },
    ];

    const newPlayers = roundHandler.handleAction(players, [0]);

    expect(newPlayers[1].statuses.has(PlayerStatusEnum.DEATH_POTION)).toEqual(
      false
    );
  });

  it('should return all players alive except SORCIERE as selectable players if SORCIERE has DEATH_POTION', () => {
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
        role: PlayerRoleEnum.SORCIERE,
        statuses: new Set([PlayerStatusEnum.DEATH_POTION]),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 3,
        name: 'player3',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers).toEqual([2, 3]);
  });

  it('should return empty array as selectable players if SORCIERE has not DEATH_POTION', () => {
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
        role: PlayerRoleEnum.SORCIERE,
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
      {
        id: 3,
        name: 'player3',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers).toEqual([]);
  });

  it('should return SORCIERE_KILL as round role', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.role).toEqual(RoundEnum.SORCIERE_KILL);
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
