import { MockService } from 'ng-mocks';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { AnnouncementService } from '../../services/announcement/announcement.service';
import { MontreurOursRoundHandler } from './montreur-ours-round.handler';

describe('MontreurOursRoundHandler', () => {
  let roundHandler: MontreurOursRoundHandler;
  let announcementService: AnnouncementService;

  beforeEach(() => {
    announcementService = MockService(AnnouncementService);
    roundHandler = new MontreurOursRoundHandler(announcementService);
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

  it('should return players without change', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = roundHandler.handleAction(players, []);

    expect(newPlayers).toEqual(players);
  });

  it('should return no players as selectable players', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
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

  it('should announce bear growl if left neighbor is LOUP_GAROU', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.MONTREUR_OURS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    jest.spyOn(announcementService, 'announceBearGrowl');

    roundHandler.handleAction(mockPlayers, []);

    expect(announcementService.announceBearGrowl).toBeCalled();
  });

  it('should announce bear growl if right neighbor is LOUP_GAROU', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.MONTREUR_OURS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    jest.spyOn(announcementService, 'announceBearGrowl');

    roundHandler.handleAction(mockPlayers, []);

    expect(announcementService.announceBearGrowl).toBeCalled();
  });

  it('should not announce bear growl if no neighbor is LOUP_GAROU', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.MONTREUR_OURS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    jest.spyOn(announcementService, 'announceBearGrowl');

    roundHandler.handleAction(mockPlayers, []);

    expect(announcementService.announceBearGrowl).toBeCalledTimes(0);
  });

  it('should find right neighbor at the end of list', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.MONTREUR_OURS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    jest.spyOn(announcementService, 'announceBearGrowl');

    roundHandler.handleAction(mockPlayers, []);

    expect(announcementService.announceBearGrowl).toBeCalled();
  });

  it('should find left neighbor at the beginning of list', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.MONTREUR_OURS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    jest.spyOn(announcementService, 'announceBearGrowl');

    roundHandler.handleAction(mockPlayers, []);

    expect(announcementService.announceBearGrowl).toBeCalled();
  });

  it('should ignore dead players to find left neighbor', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.MONTREUR_OURS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 3,
        name: 'player3',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    jest.spyOn(announcementService, 'announceBearGrowl');

    roundHandler.handleAction(mockPlayers, []);

    expect(announcementService.announceBearGrowl).toBeCalled();
  });

  it('should ignore dead players to find right neighbor', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.MONTREUR_OURS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 3,
        name: 'player3',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    jest.spyOn(announcementService, 'announceBearGrowl');

    roundHandler.handleAction(mockPlayers, []);

    expect(announcementService.announceBearGrowl).toBeCalled();
  });
});
