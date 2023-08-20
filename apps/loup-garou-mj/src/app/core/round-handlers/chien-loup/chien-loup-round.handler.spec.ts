import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { ChienLoupRoundHandler } from './chien-loup-round.handler';
import { waitForAsync } from '@angular/core/testing';

describe('ChienLoupRoundHandler', () => {
  let roundHandler: ChienLoupRoundHandler;

  beforeEach(() => {
    roundHandler = new ChienLoupRoundHandler();
  });

  it('should be only once', () => {
    expect(roundHandler.isOnlyOnce).toEqual(true);
  });

  it('should not be during day', () => {
    expect(roundHandler.isDuringDay).toEqual(false);
  });

  it('should return not during day', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.isDuringDay).toEqual(false);
  });

  it('should be ROLES type', () => {
    expect(roundHandler.type).toEqual(RoundTypeEnum.ROLES);
  });

  it('should return ROLES type', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.type).toEqual(RoundTypeEnum.ROLES);
  });

  it('should set selected role to CHIEN_LOUP', waitForAsync(() => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CHIEN_LOUP,
        card: PlayerRoleEnum.CHIEN_LOUP,
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
    ];

    roundHandler
      .handleAction(players, [], PlayerRoleEnum.LOUP_GAROU)
      .subscribe((newPlayers) =>
        expect(newPlayers[0].role).toEqual(PlayerRoleEnum.LOUP_GAROU)
      );
  }));

  it('should return LOUP_GAROU and VILLAGEOIS as selectable roles', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.selectableRoles).toEqual([
      PlayerRoleEnum.VILLAGEOIS,
      PlayerRoleEnum.LOUP_GAROU,
    ]);
  });

  it('should return CHIEN_LOUP as selectable player', () => {
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
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.CHIEN_LOUP,
        card: PlayerRoleEnum.CHIEN_LOUP,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers).toEqual([2]);
  });

  it('should return CHIEN_LOUP as round role', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.role).toEqual(RoundEnum.CHIEN_LOUP);
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
