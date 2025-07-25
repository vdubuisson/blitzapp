import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { MockBuilder, MockRender, MockReset, ngMocks } from 'ng-mocks';
import { StatusesService } from './statuses.service';

describe('StatusesService', () => {
  let service: StatusesService;

  ngMocks.faster();

  beforeAll(() => MockBuilder(StatusesService));

  beforeAll(() => {
    service = MockRender(StatusesService).point.componentInstance;
  });

  afterAll(MockReset);

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
});
