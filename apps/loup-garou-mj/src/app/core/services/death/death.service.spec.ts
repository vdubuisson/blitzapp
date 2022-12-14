import { MockService } from 'ng-mocks';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { AnnouncementService } from '../announcement/announcement.service';
import { RoundHandlersService } from '../round-handlers/round-handlers.service';
import { VictoryHandlersService } from '../victory-handlers/victory-handlers.service';
import { DeathService } from './death.service';

describe('DeathService', () => {
  let service: DeathService;
  let roundHandlersService: RoundHandlersService;
  let victoryHandlersService: VictoryHandlersService;
  let announcementService: AnnouncementService;

  beforeEach(() => {
    roundHandlersService = MockService(RoundHandlersService);
    victoryHandlersService = MockService(VictoryHandlersService);
    announcementService = MockService(AnnouncementService);
    service = new DeathService(
      roundHandlersService,
      victoryHandlersService,
      announcementService
    );
  });

  it('should return next after-death round', () => {
    service['afterDeathRoundQueue'] = [RoundEnum.CHASSEUR, RoundEnum.CAPITAINE];

    const nextAfterDeathRound = service.getNextAfterDeathRound();

    expect(nextAfterDeathRound).toEqual(RoundEnum.CHASSEUR);
    expect(service['afterDeathRoundQueue']).toEqual([RoundEnum.CAPITAINE]);
  });

  it('should clear known deaths on reset', () => {
    service['knownDeaths'] = new Set([0, 1]);

    service.reset();

    expect(service['knownDeaths'].size).toEqual(0);
  });

  it('should empty afterDeathRoundQueue on reset', () => {
    service['afterDeathRoundQueue'] = [RoundEnum.CHASSEUR];

    service.reset();

    expect(service['afterDeathRoundQueue'].length).toEqual(0);
  });

  it('should empty deathsToAnnounce on reset', () => {
    service['deathsToAnnounce'] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: true,
      },
    ];

    service.reset();

    expect(service['deathsToAnnounce'].length).toEqual(0);
  });

  it('should kill players with WOLF_TARGET status', () => {
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
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
    ];

    const newPlayers = service.handleNewDeaths(mockPlayers);

    expect(newPlayers[1].isDead).toEqual(true);
  });

  it('should remove WOLF_TARGET status to players with WOLF_TARGET status', () => {
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
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
    ];

    const newPlayers = service.handleNewDeaths(mockPlayers);

    expect(newPlayers[1].statuses.has(PlayerStatusEnum.WOLF_TARGET)).toEqual(
      false
    );
  });

  it('should add dead player id to known deaths', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
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
    ];

    service.handleNewDeaths(mockPlayers);

    expect(service['knownDeaths'].has(0)).toEqual(true);
  });

  it('should add dead player to deaths to announce', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
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
    ];

    service.handleNewDeaths(mockPlayers);

    expect(service['deathsToAnnounce']).toEqual([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: true,
      },
    ]);
  });

  it('should remove CAPTAIN status to player with CAPTAIN status', () => {
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
        statuses: new Set([PlayerStatusEnum.CAPTAIN]),
        isDead: true,
      },
    ];

    const newPlayers = service.handleNewDeaths(mockPlayers);

    expect(newPlayers[1].statuses.has(PlayerStatusEnum.CAPTAIN)).toEqual(false);
  });

  it('should add CAPITAINE round to after-death rounds', () => {
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
        statuses: new Set([PlayerStatusEnum.CAPTAIN]),
        isDead: true,
      },
    ];

    service.handleNewDeaths(mockPlayers);

    expect(
      service['afterDeathRoundQueue'].includes(RoundEnum.CAPITAINE)
    ).toEqual(true);
  });

  it('should kill the other LOVER', () => {
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
        statuses: new Set([PlayerStatusEnum.LOVER]),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.LOVER]),
        isDead: true,
      },
    ];

    const newPlayers = service.handleNewDeaths(mockPlayers);

    expect(newPlayers[1].isDead).toEqual(true);
  });

  it('should handle the other LOVER special death (ex: CHASSEUR)', () => {
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
        role: PlayerRoleEnum.CHASSEUR,
        statuses: new Set([PlayerStatusEnum.LOVER]),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.LOVER]),
        isDead: true,
      },
    ];

    service.handleNewDeaths(mockPlayers);

    expect(service['afterDeathRoundQueue'][0]).toEqual(RoundEnum.CHASSEUR);
  });

  it('should remove LOUP_GAROU handlers if no more LOUP_GAROU', () => {
    jest.spyOn(roundHandlersService, 'removeHandlers');
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
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
    ];

    service.handleNewDeaths(mockPlayers);

    expect(roundHandlersService.removeHandlers).toBeCalledWith([
      PlayerRoleEnum.LOUP_GAROU,
    ]);
  });

  it('should add CHASSEUR round to the beginning of after-death rounds', () => {
    service['afterDeathRoundQueue'] = [RoundEnum.CAPITAINE];

    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CHASSEUR,
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
    ];

    service.handleNewDeaths(mockPlayers);

    expect(service['afterDeathRoundQueue'][0]).toEqual(RoundEnum.CHASSEUR);
  });

  it('should remove CUPIDON handlers if CUPIDON is dead', () => {
    jest.spyOn(roundHandlersService, 'removeHandlers');
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CUPIDON,
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
    ];

    service.handleNewDeaths(mockPlayers);

    expect(roundHandlersService.removeHandlers).toBeCalledWith([
      PlayerRoleEnum.CUPIDON,
    ]);
  });

  it('should remove SORCIERE handlers if SORCIERE is dead', () => {
    jest.spyOn(roundHandlersService, 'removeHandlers');
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SORCIERE,
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
    ];

    service.handleNewDeaths(mockPlayers);

    expect(roundHandlersService.removeHandlers).toBeCalledWith([
      PlayerRoleEnum.SORCIERE,
    ]);
  });

  it('should remove VOYANTE handlers if VOYANTE is dead', () => {
    jest.spyOn(roundHandlersService, 'removeHandlers');
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VOYANTE,
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
    ];

    service.handleNewDeaths(mockPlayers);

    expect(roundHandlersService.removeHandlers).toBeCalledWith([
      PlayerRoleEnum.VOYANTE,
    ]);
  });

  it('should remove JOUEUR_FLUTE handlers if JOUEUR_FLUTE is dead', () => {
    jest.spyOn(roundHandlersService, 'removeHandlers');
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.JOUEUR_FLUTE,
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
    ];

    service.handleNewDeaths(mockPlayers);

    expect(roundHandlersService.removeHandlers).toBeCalledWith([
      PlayerRoleEnum.JOUEUR_FLUTE,
    ]);
  });

  it('should remove useless victory handlers on deaths handle', () => {
    jest.spyOn(victoryHandlersService, 'removeUselessHandlers');
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VOYANTE,
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
    ];

    service.handleNewDeaths(mockPlayers);

    expect(victoryHandlersService.removeUselessHandlers).toBeCalledWith(
      mockPlayers
    );
  });

  it('should announce deaths if there are some', () => {
    jest.spyOn(announcementService, 'announceDeaths');
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VOYANTE,
        statuses: new Set(),
        isDead: true,
      },
    ];

    service['deathsToAnnounce'] = mockPlayers;

    service.announceDeaths();

    expect(announcementService.announceDeaths).toBeCalledWith(mockPlayers);
  });

  it('should not announce deaths if there are none', () => {
    jest.spyOn(announcementService, 'announceDeaths');

    service['deathsToAnnounce'] = [];

    service.announceDeaths();

    expect(announcementService.announceDeaths).toBeCalledTimes(0);
  });

  it('should clear deaths to announce after announce', () => {
    service['deathsToAnnounce'] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VOYANTE,
        statuses: new Set(),
        isDead: true,
      },
    ];

    service.announceDeaths();

    expect(service['deathsToAnnounce'].length).toEqual(0);
  });
});
