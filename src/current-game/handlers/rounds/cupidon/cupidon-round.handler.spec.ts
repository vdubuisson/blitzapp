import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import * as statusUtils from '@/utils/status.utils';
import { firstValueFrom } from 'rxjs';
import { CupidonRoundHandler } from './cupidon-round.handler';

describe('CupidonRoundHandler', () => {
  let roundHandler: CupidonRoundHandler;

  beforeAll(() => {
    roundHandler = new CupidonRoundHandler();
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

  it('should add LOVER status to selected players', async () => {
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
        role: PlayerRole.CUPIDON,
        card: PlayerRole.CUPIDON,
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
    ];

    const expectedPlayer1 = { ...players[0] };
    const expectedPlayer2 = { ...players[2] };
    jest
      .spyOn(statusUtils, 'addStatusToPlayer')
      .mockImplementation((player: Player) =>
        player.id === 0 ? expectedPlayer1 : expectedPlayer2,
      );

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0, 2]),
    );
    expect(newPlayers[0]).toBe(expectedPlayer1);
    expect(statusUtils.addStatusToPlayer).toHaveBeenCalledWith(
      players[0],
      PlayerStatus.LOVER,
    );
    expect(newPlayers[2]).toBe(expectedPlayer2);
    expect(statusUtils.addStatusToPlayer).toHaveBeenCalledWith(
      players[2],
      PlayerStatus.LOVER,
    );
  });

  it('should return all players as selectable', () => {
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
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.CUPIDON,
        card: PlayerRole.CUPIDON,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers).toEqual([0, 1, 2]);
  });

  it('should return CUPIDON as role round', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.round).toEqual(Round.CUPIDON);
  });

  it('should return 2 as maxSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.maxSelectable).toEqual(2);
  });

  it('should return 2 as minSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.minSelectable).toEqual(2);
  });
});
