import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import {
  createInjectionContextFactory,
  SpectatorInjectionContext,
} from '@ngneat/spectator/vitest';
import { firstValueFrom } from 'rxjs';
import { SalvateurRoundHandler } from './salvateur-round.handler';

describe('SalvateurRoundHandler', () => {
  let roundHandler: SalvateurRoundHandler;
  let spectator: SpectatorInjectionContext;

  const createInjectionContext = createInjectionContextFactory({
    mocks: [PlayersStatusUtility],
  });

  beforeEach(() => {
    spectator = createInjectionContext();
    roundHandler = spectator.runInInjectionContext(
      () => new SalvateurRoundHandler(),
    );
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

  it('should move PROTECTED status to selected player', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.PROTECTED]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SALVATEUR,
        card: PlayerRoleEnum.SALVATEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const expectedAddedPlayer = { ...players[2] };
    const expectedRemovedPlayer = { ...players[0] };
    const playersStatusUtility = spectator.inject(PlayersStatusUtility);
    playersStatusUtility.addStatusToPlayer.mockReturnValue(expectedAddedPlayer);
    playersStatusUtility.removeStatusFromPlayer.mockReturnValue(
      expectedRemovedPlayer,
    );

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [2]),
    );
    expect(newPlayers[0]).toBe(expectedRemovedPlayer);
    expect(playersStatusUtility.removeStatusFromPlayer).toHaveBeenCalledWith(
      players[0],
      PlayerStatusEnum.PROTECTED,
    );
    expect(newPlayers[2]).toBe(expectedAddedPlayer);
    expect(playersStatusUtility.addStatusToPlayer).toHaveBeenCalledWith(
      players[2],
      PlayerStatusEnum.PROTECTED,
    );
  });

  it('should return alive player as selectable', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SALVATEUR,
        card: PlayerRoleEnum.SALVATEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers.includes(0)).toEqual(true);
  });

  it('should not return dead player as selectable', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SALVATEUR,
        card: PlayerRoleEnum.SALVATEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers.includes(0)).toEqual(false);
  });

  it('should not return PROTECTED player as selectable', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.PROTECTED]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SALVATEUR,
        card: PlayerRoleEnum.SALVATEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers.includes(0)).toEqual(false);
  });

  it('should return SALVATEUR as role round', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.round).toEqual(RoundEnum.SALVATEUR);
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
