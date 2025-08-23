import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { SorciereHealthRoundHandler } from './sorciere-health-round.handler';
import { waitForAsync } from '@angular/core/testing';
import * as statusUtils from '@/utils/status.utils';

describe('SorciereHealthRoundHandler', () => {
  let roundHandler: SorciereHealthRoundHandler;

  beforeAll(() => {
    roundHandler = new SorciereHealthRoundHandler();
  });

  it('should not be only once', () => {
    expect(roundHandler.isOnlyOnce).toEqual(false);
  });

  it('should not be during day', () => {
    expect(roundHandler.isDuringDay).toEqual(false);
  });

  it('should return not during day', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.isDuringDay).toEqual(false);
  });

  it('should be PLAYERS type', () => {
    expect(roundHandler.type).toEqual(RoundTypeEnum.PLAYERS);
  });

  it('should return PLAYERS type', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.type).toEqual(RoundTypeEnum.PLAYERS);
  });

  it('should remove DEVOURED status to selected player', waitForAsync(() => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.DEVOURED]),
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

    const expectedPlayer1 = { ...players[0] };
    const expectedPlayer2 = { ...players[1] };
    jest
      .spyOn(statusUtils, 'removeStatusFromPlayer')
      .mockImplementation((player) =>
        player.id === 0 ? expectedPlayer1 : expectedPlayer2,
      );

    roundHandler.handleAction(players, [0]).subscribe((newPlayers) => {
      expect(newPlayers[0]).toBe(expectedPlayer1);
      expect(statusUtils.removeStatusFromPlayer).toHaveBeenCalledWith(
        players[0],
        PlayerStatusEnum.DEVOURED,
      );
    });
  }));

  it('should remove killedBy to selected player', waitForAsync(() => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.DEVOURED]),
        isDead: false,
        killedBy: PlayerRoleEnum.LOUP_GAROU,
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

    const expectedPlayer1 = { ...players[0] };
    const expectedPlayer2 = { ...players[1] };
    jest
      .spyOn(statusUtils, 'removeStatusFromPlayer')
      .mockImplementation((player) =>
        player.id === 0 ? expectedPlayer1 : expectedPlayer2,
      );

    roundHandler.handleAction(players, [0]).subscribe((newPlayers) => {
      expect(newPlayers[0].killedBy).toBeUndefined();
    });
  }));

  it('should remove HEALTH_POTION status to SORCIERE player', waitForAsync(() => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.DEVOURED]),
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

    const expectedPlayer1 = { ...players[0] };
    const expectedPlayer2 = { ...players[1] };
    jest
      .spyOn(statusUtils, 'removeStatusFromPlayer')
      .mockImplementation((player) =>
        player.id === 0 ? expectedPlayer1 : expectedPlayer2,
      );

    roundHandler.handleAction(players, [0]).subscribe((newPlayers) => {
      expect(newPlayers[1]).toBe(expectedPlayer2);
      expect(statusUtils.removeStatusFromPlayer).toHaveBeenCalledWith(
        players[1],
        PlayerStatusEnum.HEALTH_POTION,
      );
    });
  }));

  it('should not remove HEALTH_POTION status to SORCIERE player if no player selected', waitForAsync(() => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.DEVOURED]),
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
          newPlayers[1].statuses.has(PlayerStatusEnum.HEALTH_POTION),
        ).toEqual(true),
      );
  }));

  it('should return player with DEVOURED status as selectable players if SORCIERE has HEALTH_POTION', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.DEVOURED]),
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

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers).toEqual([0]);
  });

  it('should return empty array as selectable players if SORCIERE has not HEALTH_POTION', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.DEVOURED]),
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

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers).toEqual([]);
  });

  it('should return SORCIERE_HEALTH as round role', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.round).toEqual(RoundEnum.SORCIERE_HEALTH);
  });

  it('should return 1 as maxSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.maxSelectable).toEqual(1);
  });

  it('should return 0 as minSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.minSelectable).toEqual(0);
  });
});
