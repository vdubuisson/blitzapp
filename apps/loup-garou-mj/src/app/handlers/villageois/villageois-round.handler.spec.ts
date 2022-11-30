import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { VillageoisRoundHandler } from './villageois-round.handler';

describe('VillageoisRoundHandler', () => {
  let roundHandler: VillageoisRoundHandler;

  beforeEach(() => {
    roundHandler = new VillageoisRoundHandler();
  });

  it('should not be only once', () => {
    expect(roundHandler.isOnlyOnce).toEqual(false);
  });

  it('should kill selected player', () => {
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
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = roundHandler.handleAction(players, [0]);

    expect(newPlayers[0].isDead).toEqual(true);
  });

  it('should return all players alive as selectable players', () => {
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

    expect(round.selectablePlayers).toEqual([1, 2]);
  });

  it('should return VILLAGEOIS as round role', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.role).toEqual(RoundEnum.VILLAGEOIS);
  });

  it('should return 1 as maxSelectable players', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.maxSelectable).toEqual(1);
  });

  it('should return 1 as minSelectable players', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.minSelectable).toEqual(1);
  });
});
