import { MockService } from 'ng-mocks';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { AnnouncementService } from '@/services/announcement/announcement.service';
import { MontreurOursRoundHandler } from './montreur-ours-round.handler';
import * as neighborUtils from '@/utils/neighbor.utils';
import { waitForAsync } from '@angular/core/testing';
import { AnnouncementEnum } from '@/enums/announcement.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';

describe('MontreurOursRoundHandler', () => {
  let roundHandler: MontreurOursRoundHandler;
  let announcementService: AnnouncementService;

  beforeAll(() => {
    announcementService = MockService(AnnouncementService);
    roundHandler = new MontreurOursRoundHandler({ announcementService });
  });

  it('should not be only once', () => {
    expect(roundHandler.isOnlyOnce).toEqual(false);
  });

  it('should be during day', () => {
    expect(roundHandler.isDuringDay).toEqual(true);
  });

  it('should return during day', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.isDuringDay).toEqual(true);
  });

  it('should be AUTO type', () => {
    expect(roundHandler.type).toEqual(RoundTypeEnum.AUTO);
  });

  it('should return AUTO type', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.type).toEqual(RoundTypeEnum.AUTO);
  });

  it('should return players without change', waitForAsync(() => {
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
    ];

    roundHandler
      .handleAction(players, [])
      .subscribe((newPlayers) => expect(newPlayers).toEqual(players));
  }));

  it('should return no players as selectable players', () => {
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

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers).toEqual([]);
  });

  it('should return MONTREUR_OURS as round role', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.role).toEqual(RoundEnum.MONTREUR_OURS);
  });

  it('should return 0 as maxSelectable players', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.maxSelectable).toEqual(0);
  });

  it('should return 0 as minSelectable players', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.minSelectable).toEqual(0);
  });

  it('should announce bear growl if MONTREUR_OURS is INFECTED', waitForAsync(() => {
    const mockPlayers: Player[] = [
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
        role: PlayerRoleEnum.MONTREUR_OURS,
        card: PlayerRoleEnum.MONTREUR_OURS,
        statuses: new Set([PlayerStatusEnum.INFECTED]),
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

    roundHandler
      .handleAction(mockPlayers, [])
      .subscribe(() =>
        expect(announcementService.announce).toHaveBeenCalledWith(
          AnnouncementEnum.BEAR_GROWL,
        ),
      );
  }));

  it('should announce bear growl if left neighbor is LOUP_GAROU', waitForAsync(() => {
    const mockPlayers: Player[] = [
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
        role: PlayerRoleEnum.MONTREUR_OURS,
        card: PlayerRoleEnum.MONTREUR_OURS,
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
    jest.spyOn(announcementService, 'announce');
    jest.spyOn(neighborUtils, 'findLeftNeighbor').mockReturnValue({
      id: 2,
      name: 'player2',
      role: PlayerRoleEnum.LOUP_GAROU,
      card: PlayerRoleEnum.LOUP_GAROU,
      statuses: new Set(),
      isDead: false,
    });

    roundHandler
      .handleAction(mockPlayers, [])
      .subscribe(() =>
        expect(announcementService.announce).toHaveBeenCalledWith(
          AnnouncementEnum.BEAR_GROWL,
        ),
      );
  }));

  it('should announce bear growl if right neighbor is LOUP_GAROU', waitForAsync(() => {
    const mockPlayers: Player[] = [
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
        role: PlayerRoleEnum.MONTREUR_OURS,
        card: PlayerRoleEnum.MONTREUR_OURS,
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

    roundHandler
      .handleAction(mockPlayers, [])
      .subscribe(() =>
        expect(announcementService.announce).toHaveBeenCalledWith(
          AnnouncementEnum.BEAR_GROWL,
        ),
      );
  }));

  it('should not announce bear growl if no neighbor is LOUP_GAROU', waitForAsync(() => {
    const mockPlayers: Player[] = [
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
        role: PlayerRoleEnum.MONTREUR_OURS,
        card: PlayerRoleEnum.MONTREUR_OURS,
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

    roundHandler
      .handleAction(mockPlayers, [])
      .subscribe(() =>
        expect(announcementService.announce).toHaveBeenCalledTimes(0),
      );
  }));
});
