import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { StatusesService } from './statuses.service';
import { StatusHandler } from '@/status-handlers/status-handler.interface';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { StatusHandlersService } from '../status-handlers/status-handlers.service';

class MockStatusHandler implements StatusHandler {
  handleDeath(players: Player[], deadPlayer: Player): Player[] {
    return players;
  }

  triggerAction = jest.fn().mockImplementation((players: Player[]) => players);
}

describe('StatusesService', () => {
  let service: StatusesService;
  let mockRustySwordHandler: StatusHandler;

  ngMocks.faster();

  beforeAll(() => MockBuilder(StatusesService).mock(StatusHandlersService));

  beforeAll(() => {
    mockRustySwordHandler = new MockStatusHandler();
    MockInstance(
      StatusHandlersService,
      'getHandler',
      () => mockRustySwordHandler,
    );
  });

  beforeAll(() => {
    service = MockRender(StatusesService).point.componentInstance;
  });

  afterAll(MockReset);

  it('should remove RAVEN status on after-day cleaning if there is a CORBEAU', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CORBEAU,
        card: PlayerRoleEnum.CORBEAU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.RAVEN]),
        isDead: false,
      },
    ];

    const newPlayers = service.cleanStatusesAfterDay(mockPlayers);

    expect(newPlayers[1].statuses.has(PlayerStatusEnum.RAVEN)).toEqual(false);
  });

  it('should remove PROTECTED status on after-day cleaning if SALVATEUR is dead', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SALVATEUR,
        card: PlayerRoleEnum.SALVATEUR,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.PROTECTED]),
        isDead: false,
      },
    ];

    const newPlayers = service.cleanStatusesAfterDay(mockPlayers);

    expect(newPlayers[1].statuses.has(PlayerStatusEnum.PROTECTED)).toEqual(
      false,
    );
  });

  it('should not remove PROTECTED status on after-day cleaning if SALVATEUR is alive', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SALVATEUR,
        card: PlayerRoleEnum.SALVATEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.PROTECTED]),
        isDead: false,
      },
    ];

    const newPlayers = service.cleanStatusesAfterDay(mockPlayers);

    expect(newPlayers[1].statuses.has(PlayerStatusEnum.PROTECTED)).toEqual(
      true,
    );
  });

  it('should remove NO_VOTE status from player', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.NO_VOTE]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.IDIOT,
        card: PlayerRoleEnum.IDIOT,
        statuses: new Set([PlayerStatusEnum.NO_VOTE]),
        isDead: false,
      },
    ];

    const newPlayers = service.cleanNoVoteAfterDay(mockPlayers);

    expect(newPlayers[0].statuses.has(PlayerStatusEnum.NO_VOTE)).toEqual(false);
    expect(newPlayers[1].statuses.has(PlayerStatusEnum.NO_VOTE)).toEqual(false);
  });

  it('should not remove NO_VOTE status from IDIOT killedBy', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.NO_VOTE]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.IDIOT,
        card: PlayerRoleEnum.IDIOT,
        statuses: new Set([PlayerStatusEnum.NO_VOTE]),
        isDead: false,
        killedBy: PlayerRoleEnum.VILLAGEOIS,
      },
    ];

    const newPlayers = service.cleanNoVoteAfterDay(mockPlayers);

    expect(newPlayers[1].statuses.has(PlayerStatusEnum.NO_VOTE)).toEqual(true);
  });

  it('should triggerAction for RUSTY_SWORD status if CHEVALIER is dead', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CHEVALIER,
        card: PlayerRoleEnum.CHEVALIER,
        statuses: new Set([PlayerStatusEnum.RUSTY_SWORD]),
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
    ];

    const newPlayers = service.cleanStatusesAfterDay(mockPlayers);

    expect(mockRustySwordHandler.triggerAction).toHaveBeenCalledWith(
      newPlayers,
    );
  });
});
