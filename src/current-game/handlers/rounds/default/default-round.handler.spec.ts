import { PlayerRole } from '@/types/player-role';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { firstValueFrom } from 'rxjs';
import { DefaultRoundHandler } from './default-round.handler';

describe('DefaultRoundHandler', () => {
  let roundHandler: DefaultRoundHandler;

  it('should be only once if set', () => {
    roundHandler = new DefaultRoundHandler(Round.CUPIDON, true, true);
    expect(roundHandler.isOnlyOnce).toEqual(true);
  });

  it('should not be only once if set', () => {
    roundHandler = new DefaultRoundHandler(Round.VILLAGEOIS, false, true);
    expect(roundHandler.isOnlyOnce).toEqual(false);
  });

  it('should be during day if set', () => {
    roundHandler = new DefaultRoundHandler(Round.VILLAGEOIS, false, true);
    expect(roundHandler.isDuringDay).toEqual(true);
  });

  it('should not be during day if set', () => {
    roundHandler = new DefaultRoundHandler(Round.LOUP_GAROU, false, false);
    expect(roundHandler.isDuringDay).toEqual(false);
  });

  it('should return during day if set', () => {
    roundHandler = new DefaultRoundHandler(Round.VILLAGEOIS, false, true);
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.isDuringDay).toEqual(true);
  });

  it('should return not during day if set', () => {
    roundHandler = new DefaultRoundHandler(Round.LOUP_GAROU, false, false);
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.isDuringDay).toEqual(false);
  });

  it('should be DEFAULT type', () => {
    roundHandler = new DefaultRoundHandler(Round.CUPIDON, true, false);
    expect(roundHandler.type).toEqual(RoundType.DEFAULT);
  });

  it('should return DEFAULT type', () => {
    roundHandler = new DefaultRoundHandler(Round.CUPIDON, true, false);
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.type).toEqual(RoundType.DEFAULT);
  });

  it('should return players without change', async () => {
    roundHandler = new DefaultRoundHandler(Round.CUPIDON, true, false);
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
    ];

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, []),
    );
    expect(newPlayers).toEqual(players);
  });

  it('should return no players as selectable players', () => {
    roundHandler = new DefaultRoundHandler(Round.CUPIDON, true, false);
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
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers).toEqual([]);
  });

  it('should return set role as round role', () => {
    roundHandler = new DefaultRoundHandler(Round.CUPIDON, true, false);
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.round).toEqual(Round.CUPIDON);
  });

  it('should return 0 as maxSelectable players', () => {
    roundHandler = new DefaultRoundHandler(Round.CUPIDON, true, false);
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.maxSelectable).toEqual(0);
  });

  it('should return 0 as minSelectable players', () => {
    roundHandler = new DefaultRoundHandler(Round.CUPIDON, true, false);
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.minSelectable).toEqual(0);
  });
});
