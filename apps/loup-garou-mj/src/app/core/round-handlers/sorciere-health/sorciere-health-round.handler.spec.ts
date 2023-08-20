import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { SorciereHealthRoundHandler } from './sorciere-health-round.handler';
import { waitForAsync } from '@angular/core/testing';

describe('SorciereHealthRoundHandler', () => {
  let roundHandler: SorciereHealthRoundHandler;

  beforeEach(() => {
    roundHandler = new SorciereHealthRoundHandler();
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

  it('should remove WOLF_TARGET status to selected player', waitForAsync(() => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SORCIERE,
        card: PlayerRoleEnum.SORCIERE,
        statuses: new Set([PlayerStatusEnum.HEALTH_POTION]),
        isDead: false,
      },
    ];

    roundHandler
      .handleAction(players, [0])
      .subscribe((newPlayers) =>
        expect(
          newPlayers[0].statuses.has(PlayerStatusEnum.WOLF_TARGET)
        ).toEqual(false)
      );
  }));

  it('should remove HEALTH_POTION status to SORCIERE player', waitForAsync(() => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SORCIERE,
        card: PlayerRoleEnum.SORCIERE,
        statuses: new Set([PlayerStatusEnum.HEALTH_POTION]),
        isDead: false,
      },
    ];

    roundHandler
      .handleAction(players, [0])
      .subscribe((newPlayers) =>
        expect(
          newPlayers[1].statuses.has(PlayerStatusEnum.HEALTH_POTION)
        ).toEqual(false)
      );
  }));

  it('should not remove HEALTH_POTION status to SORCIERE player if no player selected', waitForAsync(() => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SORCIERE,
        card: PlayerRoleEnum.SORCIERE,
        statuses: new Set([PlayerStatusEnum.HEALTH_POTION]),
        isDead: false,
      },
    ];

    roundHandler
      .handleAction(players, [])
      .subscribe((newPlayers) =>
        expect(
          newPlayers[1].statuses.has(PlayerStatusEnum.HEALTH_POTION)
        ).toEqual(true)
      );
  }));

  it('should return player with WOLF_TARGET status as selectable players if SORCIERE has HEALTH_POTION', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SORCIERE,
        card: PlayerRoleEnum.SORCIERE,
        statuses: new Set([PlayerStatusEnum.HEALTH_POTION]),
        isDead: false,
      },
    ];

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers).toEqual([0]);
  });

  it('should not return player with WOLF_TARGET and PROTECTED status as selectable players', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([
          PlayerStatusEnum.WOLF_TARGET,
          PlayerStatusEnum.PROTECTED,
        ]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SORCIERE,
        card: PlayerRoleEnum.SORCIERE,
        statuses: new Set([PlayerStatusEnum.HEALTH_POTION]),
        isDead: false,
      },
    ];

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers).toEqual([]);
  });

  it('should return PETITE_FILLE with WOLF_TARGET and PROTECTED status as selectable players', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.PETITE_FILLE,
        card: PlayerRoleEnum.PETITE_FILLE,
        statuses: new Set([
          PlayerStatusEnum.WOLF_TARGET,
          PlayerStatusEnum.PROTECTED,
        ]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SORCIERE,
        card: PlayerRoleEnum.SORCIERE,
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
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SORCIERE,
        card: PlayerRoleEnum.SORCIERE,
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
