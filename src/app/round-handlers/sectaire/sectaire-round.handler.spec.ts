import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import * as statusUtils from '@/utils/status.utils';
import { firstValueFrom } from 'rxjs';
import { SectaireRoundHandler } from './sectaire-round.handler';

describe('SectaireRoundHandler', () => {
  let roundHandler: SectaireRoundHandler;

  beforeAll(() => {
    roundHandler = new SectaireRoundHandler();
  });

  it('should be only once', () => {
    expect(roundHandler.isOnlyOnce).toEqual(true);
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

  it('should add BLUE_TEAM to selected players', async () => {
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
      {
        id: 3,
        name: 'player3',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    jest
      .spyOn(statusUtils, 'addStatusToPlayer')
      .mockImplementation((player, status) => ({
        ...player,
        statuses: new Set([...(player.statuses || []), status]),
      }));

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0, 2]),
    );
    expect(newPlayers[0].statuses.has(PlayerStatusEnum.BLUE_TEAM)).toEqual(
      true,
    );
    expect(statusUtils.addStatusToPlayer).toHaveBeenCalledWith(
      players[0],
      PlayerStatusEnum.BLUE_TEAM,
    );
    expect(newPlayers[2].statuses.has(PlayerStatusEnum.BLUE_TEAM)).toEqual(
      true,
    );
    expect(statusUtils.addStatusToPlayer).toHaveBeenCalledWith(
      players[2],
      PlayerStatusEnum.BLUE_TEAM,
    );
  });

  it('should add RED_TEAM to not selected players', async () => {
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
      {
        id: 3,
        name: 'player3',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    jest
      .spyOn(statusUtils, 'addStatusToPlayer')
      .mockImplementation((player, status) => ({
        ...player,
        statuses: new Set([...(player.statuses || []), status]),
      }));

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0, 2]),
    );
    expect(newPlayers[1].statuses.has(PlayerStatusEnum.RED_TEAM)).toEqual(true);
    expect(statusUtils.addStatusToPlayer).toHaveBeenCalledWith(
      players[1],
      PlayerStatusEnum.RED_TEAM,
    );
    expect(newPlayers[3].statuses.has(PlayerStatusEnum.RED_TEAM)).toEqual(true);
    expect(statusUtils.addStatusToPlayer).toHaveBeenCalledWith(
      players[3],
      PlayerStatusEnum.RED_TEAM,
    );
  });

  it('should return all players as selectable players', () => {
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
      {
        id: 3,
        name: 'player3',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers).toEqual([0, 1, 2, 3]);
  });

  it('should return SECTAIRE as round role', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.round).toEqual(RoundEnum.SECTAIRE);
  });

  it('should return players length minus 1 as maxSelectable players', () => {
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
      {
        id: 3,
        name: 'player3',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.maxSelectable).toEqual(3);
  });

  it('should return 1 as minSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.minSelectable).toEqual(1);
  });
});
