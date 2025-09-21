import { PlayerRole } from '@/types/player-role';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { firstValueFrom } from 'rxjs';
import { CharmedRoundHandler } from './charmed-round.handler';

describe('CharmedRoundHandler', () => {
  let roundHandler: CharmedRoundHandler;

  beforeAll(() => {
    roundHandler = new CharmedRoundHandler();
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

  it('should be DEFAULT type', () => {
    expect(roundHandler.type).toEqual(RoundType.DEFAULT);
  });

  it('should return DEFAULT type', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.type).toEqual(RoundType.DEFAULT);
  });

  it('should return players without change', async () => {
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

  it('should return CHARMED as round role', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.round).toEqual(Round.CHARMED);
  });

  it('should return 0 as maxSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.maxSelectable).toEqual(0);
  });

  it('should return 0 as minSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.minSelectable).toEqual(0);
  });
});
