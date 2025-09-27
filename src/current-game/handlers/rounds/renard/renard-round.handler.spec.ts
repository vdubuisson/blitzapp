import { AnnouncementTypes } from '@/current-game/announcements/announcement-types';
import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import * as neighborUtils from '@/utils/neighbor.utils';
import * as statusUtils from '@/utils/status.utils';
import { TestBed } from '@angular/core/testing';
import { MockService } from 'ng-mocks';
import { firstValueFrom } from 'rxjs';
import { RenardRoundHandler } from './renard-round.handler';
import { Announcer } from '@/current-game/announcements/announcer';

describe('RenardRoundHandler', () => {
  let roundHandler: RenardRoundHandler;
  let announcer: Announcer;

  beforeAll(() => {
    announcer = MockService(Announcer);
    TestBed.configureTestingModule({
      providers: [{ provide: Announcer, useValue: announcer }],
    });
    TestBed.runInInjectionContext(
      () => (roundHandler = new RenardRoundHandler()),
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
    expect(roundHandler.type).toEqual(RoundType.PLAYERS);
  });

  it('should return PLAYERS type', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.type).toEqual(RoundType.PLAYERS);
  });

  it('should return players without change if no selected player', async () => {
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
    ];

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, []),
    );
    expect(newPlayers).toEqual(players);
  });

  it('should not announce success if no selected player', async () => {
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
    ];
    jest.spyOn(announcer, 'announce');

    await firstValueFrom(roundHandler.handleAction(players, []));
    expect(announcer.announce).not.toHaveBeenCalled();
  });

  it('should not announce fail if no selected player', async () => {
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
    ];
    jest.spyOn(announcer, 'announce');

    await firstValueFrom(roundHandler.handleAction(players, []));
    expect(announcer.announce).not.toHaveBeenCalled();
  });

  it('should return players without change if selected player is LOUP_GAROU', async () => {
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
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [1]),
    );
    expect(newPlayers).toEqual(players);
  });

  it('should announce success if selected player is LOUP_GAROU', async () => {
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
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    jest.spyOn(announcer, 'announce');

    await firstValueFrom(roundHandler.handleAction(players, [1]));
    expect(announcer.announce).toHaveBeenCalledWith(
      AnnouncementTypes.FOX_SUCCESS,
    );
  });

  it('should return players without change if left neighbor is LOUP_GAROU', async () => {
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
    ];
    jest.spyOn(neighborUtils, 'findLeftNeighbor').mockReturnValue({
      id: 2,
      name: 'player2',
      role: PlayerRole.LOUP_GAROU,
      card: PlayerRole.LOUP_GAROU,
      statuses: new Set(),
      isDead: false,
    });

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [1]),
    );
    expect(newPlayers).toEqual(players);
  });

  it('should announce success if left neighbor is LOUP_GAROU', async () => {
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
    ];
    jest.spyOn(neighborUtils, 'findLeftNeighbor').mockReturnValue({
      id: 2,
      name: 'player2',
      role: PlayerRole.LOUP_GAROU,
      card: PlayerRole.LOUP_GAROU,
      statuses: new Set(),
      isDead: false,
    });
    jest.spyOn(announcer, 'announce');

    await firstValueFrom(roundHandler.handleAction(players, [1]));
    expect(announcer.announce).toHaveBeenCalledWith(
      AnnouncementTypes.FOX_SUCCESS,
    );
  });

  it('should return players without change if right neighbor is LOUP_GAROU', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
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
    ];
    jest.spyOn(neighborUtils, 'findLeftNeighbor').mockReturnValue({
      id: 2,
      name: 'player2',
      role: PlayerRole.VILLAGEOIS,
      card: PlayerRole.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });
    jest.spyOn(neighborUtils, 'findRightNeighbor').mockReturnValue({
      id: 0,
      name: 'player0',
      role: PlayerRole.LOUP_GAROU,
      card: PlayerRole.LOUP_GAROU,
      statuses: new Set(),
      isDead: false,
    });

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [1]),
    );
    expect(newPlayers).toEqual(players);
  });

  it('should announce success if right neighbor is LOUP_GAROU', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
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
    ];
    jest.spyOn(neighborUtils, 'findLeftNeighbor').mockReturnValue({
      id: 2,
      name: 'player2',
      role: PlayerRole.VILLAGEOIS,
      card: PlayerRole.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });
    jest.spyOn(neighborUtils, 'findRightNeighbor').mockReturnValue({
      id: 0,
      name: 'player0',
      role: PlayerRole.LOUP_GAROU,
      card: PlayerRole.LOUP_GAROU,
      statuses: new Set(),
      isDead: false,
    });

    jest.spyOn(announcer, 'announce');

    await firstValueFrom(roundHandler.handleAction(players, [1]));
    expect(announcer.announce).toHaveBeenCalledWith(
      AnnouncementTypes.FOX_SUCCESS,
    );
  });

  it('should add NO_POWER status to RENARD if no LOUP_GAROU selected', async () => {
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
        role: PlayerRole.RENARD,
        card: PlayerRole.RENARD,
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
    jest.spyOn(neighborUtils, 'findLeftNeighbor').mockReturnValue({
      id: 2,
      name: 'player2',
      role: PlayerRole.VILLAGEOIS,
      card: PlayerRole.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });
    jest.spyOn(neighborUtils, 'findRightNeighbor').mockReturnValue({
      id: 0,
      name: 'player0',
      role: PlayerRole.VILLAGEOIS,
      card: PlayerRole.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });
    const expectedPlayer = { ...players[1] };
    jest
      .spyOn(statusUtils, 'addStatusToPlayer')
      .mockReturnValue(expectedPlayer);

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [1]),
    );
    expect(newPlayers[1]).toBe(expectedPlayer);
    expect(statusUtils.addStatusToPlayer).toHaveBeenCalledWith(
      newPlayers[1],
      PlayerStatus.NO_POWER,
    );
  });

  it('should announce fail if no LOUP_GAROU selected', async () => {
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
        role: PlayerRole.RENARD,
        card: PlayerRole.RENARD,
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
    jest.spyOn(neighborUtils, 'findLeftNeighbor').mockReturnValue({
      id: 2,
      name: 'player2',
      role: PlayerRole.VILLAGEOIS,
      card: PlayerRole.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });
    jest.spyOn(neighborUtils, 'findRightNeighbor').mockReturnValue({
      id: 0,
      name: 'player0',
      role: PlayerRole.VILLAGEOIS,
      card: PlayerRole.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });

    jest.spyOn(announcer, 'announce');

    await firstValueFrom(roundHandler.handleAction(players, [1]));
    expect(announcer.announce).toHaveBeenCalledWith(AnnouncementTypes.FOX_FAIL);
  });

  it('should return alive players as selectable players', () => {
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

    expect(roundConfig.selectablePlayers).toEqual([1, 2]);
  });

  it('should return RENARD as round role', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.round).toEqual(Round.RENARD);
  });

  it('should return 0 as maxSelectable players if NO_POWER', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.RENARD,
        card: PlayerRole.RENARD,
        statuses: new Set([PlayerStatus.NO_POWER]),
        isDead: false,
      },
    ];
    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.maxSelectable).toEqual(0);
  });

  it('should return 1 as maxSelectable players', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.RENARD,
        card: PlayerRole.RENARD,
        statuses: new Set(),
        isDead: false,
      },
    ];
    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.maxSelectable).toEqual(1);
  });

  it('should return 0 as minSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.minSelectable).toEqual(0);
  });
});
