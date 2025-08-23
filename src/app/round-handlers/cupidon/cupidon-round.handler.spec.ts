import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { CupidonRoundHandler } from './cupidon-round.handler';
import { waitForAsync } from '@angular/core/testing';
import * as statusUtils from '@/utils/status.utils';

describe('CupidonRoundHandler', () => {
  let roundHandler: CupidonRoundHandler;

  beforeAll(() => {
    roundHandler = new CupidonRoundHandler();
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

  it('should add LOVER status to selected players', waitForAsync(() => {
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
        role: PlayerRoleEnum.CUPIDON,
        card: PlayerRoleEnum.CUPIDON,
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

    const expectedPlayer1 = { ...players[0] };
    const expectedPlayer2 = { ...players[2] };
    jest
      .spyOn(statusUtils, 'addStatusToPlayer')
      .mockImplementation((player: Player) =>
        player.id === 0 ? expectedPlayer1 : expectedPlayer2,
      );

    roundHandler.handleAction(players, [0, 2]).subscribe((newPlayers) => {
      expect(newPlayers[0]).toBe(expectedPlayer1);
      expect(statusUtils.addStatusToPlayer).toHaveBeenCalledWith(
        players[0],
        PlayerStatusEnum.LOVER,
      );
      expect(newPlayers[2]).toBe(expectedPlayer2);
      expect(statusUtils.addStatusToPlayer).toHaveBeenCalledWith(
        players[2],
        PlayerStatusEnum.LOVER,
      );
    });
  }));

  it('should return all players as selectable', () => {
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
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.CUPIDON,
        card: PlayerRoleEnum.CUPIDON,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers).toEqual([0, 1, 2]);
  });

  it('should return CUPIDON as role round', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.round).toEqual(RoundEnum.CUPIDON);
  });

  it('should return 2 as maxSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.maxSelectable).toEqual(2);
  });

  it('should return 2 as minSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.minSelectable).toEqual(2);
  });
});
