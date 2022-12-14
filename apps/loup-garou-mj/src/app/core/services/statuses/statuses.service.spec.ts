import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { Player } from '../../models/player.model';
import { StatusesService } from './statuses.service';

describe('StatusesService', () => {
  let service: StatusesService;

  beforeEach(() => {
    service = new StatusesService();
  });

  it('should remove RAVEN status on after-day cleaning if there is a CORBEAU', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CORBEAU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
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
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.PROTECTED]),
        isDead: false,
      },
    ];

    const newPlayers = service.cleanStatusesAfterDay(mockPlayers);

    expect(newPlayers[1].statuses.has(PlayerStatusEnum.PROTECTED)).toEqual(
      false
    );
  });

  it('should not remove PROTECTED status on after-day cleaning if SALVATEUR is alive', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SALVATEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.PROTECTED]),
        isDead: false,
      },
    ];

    const newPlayers = service.cleanStatusesAfterDay(mockPlayers);

    expect(newPlayers[1].statuses.has(PlayerStatusEnum.PROTECTED)).toEqual(
      true
    );
  });
});
