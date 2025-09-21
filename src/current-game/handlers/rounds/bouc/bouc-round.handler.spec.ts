import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import * as statusUtils from '@/utils/status.utils';
import { firstValueFrom } from 'rxjs';
import { BoucRoundHandler } from './bouc-round.handler';

describe('BoucRoundHandler', () => {
  let roundHandler: BoucRoundHandler;

  beforeAll(() => {
    roundHandler = new BoucRoundHandler();
  });

  it('should be only once', () => {
    expect(roundHandler.isOnlyOnce).toEqual(true);
  });

  it('should be during day', () => {
    expect(roundHandler.isDuringDay).toEqual(true);
  });

  it('should return during day', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.isDuringDay).toEqual(true);
  });

  it('should be PLAYERS type', () => {
    expect(roundHandler.type).toEqual(RoundType.PLAYERS);
  });

  it('should return PLAYERS type', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.type).toEqual(RoundType.PLAYERS);
  });

  it('should add NO_VOTE to not selected alive players', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
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

    const expectedPlayers = [...players];
    jest
      .spyOn(statusUtils, 'addStatusToPlayersById')
      .mockReturnValue(expectedPlayers);

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [2]),
    );

    expect(newPlayers).toBe(expectedPlayers);
    expect(statusUtils.addStatusToPlayersById).toHaveBeenCalledWith(
      players,
      PlayerStatus.NO_VOTE,
      [1, 3],
    );
  });

  it('should return all players alive as selectable players', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
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

    expect(roundConfig.selectablePlayers).toEqual([1, 2, 3]);
  });

  it('should return BOUC as round role', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.round).toEqual(Round.BOUC);
  });

  it('should return alivePlayers length as maxSelectable players', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
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

  it('should return 0 as minSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.minSelectable).toEqual(0);
  });
});
