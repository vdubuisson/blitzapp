import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import * as statusUtils from '@/utils/status.utils';
import { firstValueFrom } from 'rxjs';
import { SectaireRoundHandler } from './sectaire-round.handler';

describe('SectaireRoundHandler', () => {
  let roundHandler: SectaireRoundHandler;

  beforeAll(() => {
    roundHandler = new SectaireRoundHandler();
  });

  it('should be only once', () => {
    expect(roundHandler.isOnlyOnce).toEqual(true);
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

  it('should add BLUE_TEAM to selected players', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
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
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 3,
        name: 'player3',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    jest
      .spyOn(statusUtils, 'addStatusToPlayer')
      .mockImplementation((player, status) => ({
        ...player,
        statuses: new Set([...(player.statuses || []), status]),
      }));

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0, 2]),
    );
    expect(newPlayers[0].statuses.has(PlayerStatus.BLUE_TEAM)).toEqual(true);
    expect(statusUtils.addStatusToPlayer).toHaveBeenCalledWith(
      players[0],
      PlayerStatus.BLUE_TEAM,
    );
    expect(newPlayers[2].statuses.has(PlayerStatus.BLUE_TEAM)).toEqual(true);
    expect(statusUtils.addStatusToPlayer).toHaveBeenCalledWith(
      players[2],
      PlayerStatus.BLUE_TEAM,
    );
  });

  it('should add RED_TEAM to not selected players', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
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
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 3,
        name: 'player3',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    jest
      .spyOn(statusUtils, 'addStatusToPlayer')
      .mockImplementation((player, status) => ({
        ...player,
        statuses: new Set([...(player.statuses || []), status]),
      }));

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0, 2]),
    );
    expect(newPlayers[1].statuses.has(PlayerStatus.RED_TEAM)).toEqual(true);
    expect(statusUtils.addStatusToPlayer).toHaveBeenCalledWith(
      players[1],
      PlayerStatus.RED_TEAM,
    );
    expect(newPlayers[3].statuses.has(PlayerStatus.RED_TEAM)).toEqual(true);
    expect(statusUtils.addStatusToPlayer).toHaveBeenCalledWith(
      players[3],
      PlayerStatus.RED_TEAM,
    );
  });

  it('should return all players as selectable players', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
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
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 3,
        name: 'player3',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers).toEqual([0, 1, 2, 3]);
  });

  it('should return SECTAIRE as round role', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.round).toEqual(Round.SECTAIRE);
  });

  it('should return players length minus 1 as maxSelectable players', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
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
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 3,
        name: 'player3',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.maxSelectable).toEqual(3);
  });

  it('should return 1 as minSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.minSelectable).toEqual(1);
  });
});
