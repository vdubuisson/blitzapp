import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { Player } from '../../models/player.model';
import { SorciereHealthRoundHandler } from './sorciere-health-round.handler';

describe('LoupGarouRoundHandler', () => {
  let roundHandler: SorciereHealthRoundHandler;

  beforeEach(() => {
    roundHandler = new SorciereHealthRoundHandler();
  });

  it('should not be only first night', () => {
    expect(roundHandler.isOnlyFirstNight).toEqual(false);
  });

  it('should remove WOLF_TARGET status to selected player', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SORCIERE,
        statuses: new Set([PlayerStatusEnum.HEALTH_POTION]),
        isDead: false,
      },
    ];

    const newPlayers = roundHandler.handleAction(players, [0]);

    expect(newPlayers[0].statuses.has(PlayerStatusEnum.WOLF_TARGET)).toEqual(
      false
    );
  });

  it('should remove HEALTH_POTION status to SORCIERE player', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.WOLF_TARGET]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SORCIERE,
        statuses: new Set([PlayerStatusEnum.HEALTH_POTION]),
        isDead: false,
      },
    ];

    const newPlayers = roundHandler.handleAction(players, [0]);

    expect(newPlayers[1].statuses.has(PlayerStatusEnum.HEALTH_POTION)).toEqual(
      false
    );
  });
});
