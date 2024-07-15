import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { waitForAsync } from '@angular/core/testing';
import { DefaultRoundHandler } from './default-round.handler';

describe('DefaultRoundHandler', () => {
  let roundHandler: DefaultRoundHandler;

  it('should be only once if set', () => {
    roundHandler = new DefaultRoundHandler(RoundEnum.CUPIDON, true, true);
    expect(roundHandler.isOnlyOnce).toEqual(true);
  });

  it('should not be only once if set', () => {
    roundHandler = new DefaultRoundHandler(RoundEnum.VILLAGEOIS, false, true);
    expect(roundHandler.isOnlyOnce).toEqual(false);
  });

  it('should be during day if set', () => {
    roundHandler = new DefaultRoundHandler(RoundEnum.VILLAGEOIS, false, true);
    expect(roundHandler.isDuringDay).toEqual(true);
  });

  it('should not be during day if set', () => {
    roundHandler = new DefaultRoundHandler(RoundEnum.LOUP_GAROU, false, false);
    expect(roundHandler.isDuringDay).toEqual(false);
  });

  it('should return during day if set', () => {
    roundHandler = new DefaultRoundHandler(RoundEnum.VILLAGEOIS, false, true);
    const round = roundHandler.getRoundConfig([]);

    expect(round.isDuringDay).toEqual(true);
  });

  it('should return not during day if set', () => {
    roundHandler = new DefaultRoundHandler(RoundEnum.LOUP_GAROU, false, false);
    const round = roundHandler.getRoundConfig([]);

    expect(round.isDuringDay).toEqual(false);
  });

  it('should be DEFAULT type', () => {
    roundHandler = new DefaultRoundHandler(RoundEnum.CUPIDON, true, false);
    expect(roundHandler.type).toEqual(RoundTypeEnum.DEFAULT);
  });

  it('should return DEFAULT type', () => {
    roundHandler = new DefaultRoundHandler(RoundEnum.CUPIDON, true, false);
    const round = roundHandler.getRoundConfig([]);

    expect(round.type).toEqual(RoundTypeEnum.DEFAULT);
  });

  it('should return players without change', waitForAsync(() => {
    roundHandler = new DefaultRoundHandler(RoundEnum.CUPIDON, true, false);
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
    ];

    roundHandler
      .handleAction(players, [])
      .subscribe((newPlayers) => expect(newPlayers).toEqual(players));
  }));

  it('should return no players as selectable players', () => {
    roundHandler = new DefaultRoundHandler(RoundEnum.CUPIDON, true, false);
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
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
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers).toEqual([]);
  });

  it('should return set role as round role', () => {
    roundHandler = new DefaultRoundHandler(RoundEnum.CUPIDON, true, false);
    const round = roundHandler.getRoundConfig([]);

    expect(round.role).toEqual(RoundEnum.CUPIDON);
  });

  it('should return 0 as maxSelectable players', () => {
    roundHandler = new DefaultRoundHandler(RoundEnum.CUPIDON, true, false);
    const round = roundHandler.getRoundConfig([]);

    expect(round.maxSelectable).toEqual(0);
  });

  it('should return 0 as minSelectable players', () => {
    roundHandler = new DefaultRoundHandler(RoundEnum.CUPIDON, true, false);
    const round = roundHandler.getRoundConfig([]);

    expect(round.minSelectable).toEqual(0);
  });
});