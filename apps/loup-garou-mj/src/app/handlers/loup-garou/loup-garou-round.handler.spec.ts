import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { Player } from '../../models/player.model';
import { LoupGarouRoundHandler } from './loup-garou-round.handler';

describe('LoupGarouRoundHandler', () => {
  let roundHandler: LoupGarouRoundHandler;

  beforeEach(() => {
    roundHandler = new LoupGarouRoundHandler();
  });

  it('should not be only first night', () => {
    expect(roundHandler.isOnlyFirstNight).toEqual(false);
  });

  it('should add WOLF_TARGET status to selected player', () => {
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

    const newPlayers = roundHandler.handleAction(players, [0]);

    expect(newPlayers[0].statuses.has(PlayerStatusEnum.WOLF_TARGET)).toEqual(
      true
    );
  });
});
