import { PlayerRole } from '@/types/player-role';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { firstValueFrom } from 'rxjs';
import { ChienLoupRoundHandler } from './chien-loup-round.handler';

describe('ChienLoupRoundHandler', () => {
  let roundHandler: ChienLoupRoundHandler;

  beforeAll(() => {
    roundHandler = new ChienLoupRoundHandler();
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

  it('should be ROLES type', () => {
    expect(roundHandler.type).toEqual(RoundType.ROLES);
  });

  it('should return ROLES type', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.type).toEqual(RoundType.ROLES);
  });

  it('should set selected role to CHIEN_LOUP', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.CHIEN_LOUP,
        card: PlayerRole.CHIEN_LOUP,
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
    ];

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [], PlayerRole.LOUP_GAROU),
    );

    expect(newPlayers[0].role).toEqual(PlayerRole.LOUP_GAROU);
    expect(newPlayers[0]).not.toBe(players[0]);
  });

  it('should return LOUP_GAROU and VILLAGEOIS as selectable roles', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.selectableRoles).toEqual([
      PlayerRole.VILLAGEOIS,
      PlayerRole.LOUP_GAROU,
    ]);
  });

  it('should return CHIEN_LOUP as selectable player', () => {
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
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.CHIEN_LOUP,
        card: PlayerRole.CHIEN_LOUP,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers).toEqual([2]);
  });

  it('should return CHIEN_LOUP as round role', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.round).toEqual(Round.CHIEN_LOUP);
  });

  it('should return 1 as maxSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.maxSelectable).toEqual(1);
  });

  it('should return 1 as minSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.minSelectable).toEqual(1);
  });
});
