import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import * as statusUtils from '@/utils/status.utils';
import { firstValueFrom } from 'rxjs';
import { SorciereHealthRoundHandler } from './sorciere-health-round.handler';

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
    expect(roundHandler.type).toEqual(RoundType.PLAYERS);
  });

  it('should return PLAYERS type', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.type).toEqual(RoundType.PLAYERS);
  });

  it('should remove DEVOURED status to selected player', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set([PlayerStatus.DEVOURED]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.SORCIERE,
        card: PlayerRole.SORCIERE,
        statuses: new Set([PlayerStatus.HEALTH_POTION]),
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

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0]),
    );
    expect(newPlayers[0]).toBe(expectedPlayer1);
    expect(statusUtils.removeStatusFromPlayer).toHaveBeenCalledWith(
      players[0],
      PlayerStatus.DEVOURED,
    );
  });

  it('should remove killedBy to selected player', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set([PlayerStatus.DEVOURED]),
        isDead: false,
        killedBy: PlayerRole.LOUP_GAROU,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.SORCIERE,
        card: PlayerRole.SORCIERE,
        statuses: new Set([PlayerStatus.HEALTH_POTION]),
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

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0]),
    );
    expect(newPlayers[0].killedBy).toBeUndefined();
  });

  it('should remove HEALTH_POTION status to SORCIERE player', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set([PlayerStatus.DEVOURED]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.SORCIERE,
        card: PlayerRole.SORCIERE,
        statuses: new Set([PlayerStatus.HEALTH_POTION]),
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

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0]),
    );
    expect(newPlayers[1]).toBe(expectedPlayer2);
    expect(statusUtils.removeStatusFromPlayer).toHaveBeenCalledWith(
      players[1],
      PlayerStatus.HEALTH_POTION,
    );
  });

  it('should not remove HEALTH_POTION status to SORCIERE player if no player selected', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set([PlayerStatus.DEVOURED]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.SORCIERE,
        card: PlayerRole.SORCIERE,
        statuses: new Set([PlayerStatus.HEALTH_POTION]),
        isDead: false,
      },
    ];

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, []),
    );
    expect(newPlayers[1].statuses.has(PlayerStatus.HEALTH_POTION)).toEqual(
      true,
    );
  });

  it('should return player with DEVOURED status as selectable players if SORCIERE has HEALTH_POTION', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set([PlayerStatus.DEVOURED]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.SORCIERE,
        card: PlayerRole.SORCIERE,
        statuses: new Set([PlayerStatus.HEALTH_POTION]),
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
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set([PlayerStatus.DEVOURED]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.SORCIERE,
        card: PlayerRole.SORCIERE,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers).toEqual([]);
  });

  it('should return SORCIERE_HEALTH as round role', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.round).toEqual(Round.SORCIERE_HEALTH);
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
