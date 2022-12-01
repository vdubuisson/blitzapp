import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { SorciereHealthRoundHandler } from './sorciere-health-round.handler';

describe('SorciereHealthRoundHandler', () => {
  let roundHandler: SorciereHealthRoundHandler;

  beforeEach(() => {
    roundHandler = new SorciereHealthRoundHandler();
  });

  it('should not be only once', () => {
    expect(roundHandler.isOnlyOnce).toEqual(false);
  });

  it('should remove WOLF_TARGET status to selected player', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SORCIERE,
        statuses: new Set([PlayerStatusEnum.HEALTH_POTION]),
        isDead: false,
      },
    ];

    const newPlayers = roundHandler.handleAction(players, [0]);

    expect(newPlayers[0].statuses.has(PlayerStatusEnum.WOLF_TARGET)).toEqual(
      false
    );
  });

  it('should remove HEALTH_POTION status to SORCIERE player', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SORCIERE,
        statuses: new Set([PlayerStatusEnum.HEALTH_POTION]),
        isDead: false,
      },
    ];

    const newPlayers = roundHandler.handleAction(players, [0]);

    expect(newPlayers[1].statuses.has(PlayerStatusEnum.HEALTH_POTION)).toEqual(
      false
    );
  });

  it('should not remove HEALTH_POTION status to SORCIERE player if no player selected', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SORCIERE,
        statuses: new Set([PlayerStatusEnum.HEALTH_POTION]),
        isDead: false,
      },
    ];

    const newPlayers = roundHandler.handleAction(players, []);

    expect(newPlayers[1].statuses.has(PlayerStatusEnum.HEALTH_POTION)).toEqual(
      true
    );
  });

  it('should return player with WOLF_TARGET status as selectable players if SORCIERE has HEALTH_POTION', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SORCIERE,
        statuses: new Set([PlayerStatusEnum.HEALTH_POTION]),
        isDead: false,
      },
    ];

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers).toEqual([0]);
  });

  it('should return empty array as selectable players if SORCIERE has not HEALTH_POTION', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SORCIERE,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers).toEqual([]);
  });

  it('should return SORCIERE_HEALTH as round role', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.role).toEqual(RoundEnum.SORCIERE_HEALTH);
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
