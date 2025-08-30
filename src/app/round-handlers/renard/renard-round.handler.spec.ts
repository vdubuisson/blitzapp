import { AnnouncementEnum } from '@/enums/announcement.enum';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { AnnouncementService } from '@/services/announcement/announcement.service';
import * as neighborUtils from '@/utils/neighbor.utils';
import * as statusUtils from '@/utils/status.utils';
import { TestBed } from '@angular/core/testing';
import { MockService } from 'ng-mocks';
import { firstValueFrom } from 'rxjs';
import { RenardRoundHandler } from './renard-round.handler';

describe('RenardRoundHandler', () => {
  let roundHandler: RenardRoundHandler;
  let announcementService: AnnouncementService;

  beforeAll(() => {
    announcementService = MockService(AnnouncementService);
    TestBed.configureTestingModule({
      providers: [
        { provide: AnnouncementService, useValue: announcementService },
      ],
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
    expect(roundHandler.type).toEqual(RoundTypeEnum.PLAYERS);
  });

  it('should return PLAYERS type', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.type).toEqual(RoundTypeEnum.PLAYERS);
  });

  it('should return players without change if no selected player', async () => {
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
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
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
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    jest.spyOn(announcementService, 'announce');

    await firstValueFrom(roundHandler.handleAction(players, []));
    expect(announcementService.announce).not.toHaveBeenCalled();
  });

  it('should not announce fail if no selected player', async () => {
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
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    jest.spyOn(announcementService, 'announce');

    await firstValueFrom(roundHandler.handleAction(players, []));
    expect(announcementService.announce).not.toHaveBeenCalled();
  });

  it('should return players without change if selected player is LOUP_GAROU', async () => {
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
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
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
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    jest.spyOn(announcementService, 'announce');

    await firstValueFrom(roundHandler.handleAction(players, [1]));
    expect(announcementService.announce).toHaveBeenCalledWith(
      AnnouncementEnum.FOX_SUCCESS,
    );
  });

  it('should return players without change if left neighbor is LOUP_GAROU', async () => {
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
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
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
    jest.spyOn(neighborUtils, 'findLeftNeighbor').mockReturnValue({
      id: 2,
      name: 'player2',
      role: PlayerRoleEnum.LOUP_GAROU,
      card: PlayerRoleEnum.LOUP_GAROU,
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
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
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
    jest.spyOn(neighborUtils, 'findLeftNeighbor').mockReturnValue({
      id: 2,
      name: 'player2',
      role: PlayerRoleEnum.LOUP_GAROU,
      card: PlayerRoleEnum.LOUP_GAROU,
      statuses: new Set(),
      isDead: false,
    });
    jest.spyOn(announcementService, 'announce');

    await firstValueFrom(roundHandler.handleAction(players, [1]));
    expect(announcementService.announce).toHaveBeenCalledWith(
      AnnouncementEnum.FOX_SUCCESS,
    );
  });

  it('should return players without change if right neighbor is LOUP_GAROU', async () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    jest.spyOn(neighborUtils, 'findLeftNeighbor').mockReturnValue({
      id: 2,
      name: 'player2',
      role: PlayerRoleEnum.VILLAGEOIS,
      card: PlayerRoleEnum.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });
    jest.spyOn(neighborUtils, 'findRightNeighbor').mockReturnValue({
      id: 0,
      name: 'player0',
      role: PlayerRoleEnum.LOUP_GAROU,
      card: PlayerRoleEnum.LOUP_GAROU,
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
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    jest.spyOn(neighborUtils, 'findLeftNeighbor').mockReturnValue({
      id: 2,
      name: 'player2',
      role: PlayerRoleEnum.VILLAGEOIS,
      card: PlayerRoleEnum.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });
    jest.spyOn(neighborUtils, 'findRightNeighbor').mockReturnValue({
      id: 0,
      name: 'player0',
      role: PlayerRoleEnum.LOUP_GAROU,
      card: PlayerRoleEnum.LOUP_GAROU,
      statuses: new Set(),
      isDead: false,
    });

    jest.spyOn(announcementService, 'announce');

    await firstValueFrom(roundHandler.handleAction(players, [1]));
    expect(announcementService.announce).toHaveBeenCalledWith(
      AnnouncementEnum.FOX_SUCCESS,
    );
  });

  it('should add NO_POWER status to RENARD if no LOUP_GAROU selected', async () => {
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
        role: PlayerRoleEnum.RENARD,
        card: PlayerRoleEnum.RENARD,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    jest.spyOn(neighborUtils, 'findLeftNeighbor').mockReturnValue({
      id: 2,
      name: 'player2',
      role: PlayerRoleEnum.VILLAGEOIS,
      card: PlayerRoleEnum.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });
    jest.spyOn(neighborUtils, 'findRightNeighbor').mockReturnValue({
      id: 0,
      name: 'player0',
      role: PlayerRoleEnum.VILLAGEOIS,
      card: PlayerRoleEnum.VILLAGEOIS,
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
      PlayerStatusEnum.NO_POWER,
    );
  });

  it('should announce fail if no LOUP_GAROU selected', async () => {
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
        role: PlayerRoleEnum.RENARD,
        card: PlayerRoleEnum.RENARD,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    jest.spyOn(neighborUtils, 'findLeftNeighbor').mockReturnValue({
      id: 2,
      name: 'player2',
      role: PlayerRoleEnum.VILLAGEOIS,
      card: PlayerRoleEnum.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });
    jest.spyOn(neighborUtils, 'findRightNeighbor').mockReturnValue({
      id: 0,
      name: 'player0',
      role: PlayerRoleEnum.VILLAGEOIS,
      card: PlayerRoleEnum.VILLAGEOIS,
      statuses: new Set(),
      isDead: false,
    });

    jest.spyOn(announcementService, 'announce');

    await firstValueFrom(roundHandler.handleAction(players, [1]));
    expect(announcementService.announce).toHaveBeenCalledWith(
      AnnouncementEnum.FOX_FAIL,
    );
  });

  it('should return alive players as selectable players', () => {
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
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers).toEqual([1, 2]);
  });

  it('should return RENARD as round role', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.round).toEqual(RoundEnum.RENARD);
  });

  it('should return 0 as maxSelectable players if NO_POWER', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.RENARD,
        card: PlayerRoleEnum.RENARD,
        statuses: new Set([PlayerStatusEnum.NO_POWER]),
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
        role: PlayerRoleEnum.RENARD,
        card: PlayerRoleEnum.RENARD,
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
