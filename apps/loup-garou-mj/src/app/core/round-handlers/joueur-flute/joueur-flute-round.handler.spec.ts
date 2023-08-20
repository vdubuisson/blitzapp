import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { JoueurFluteRoundHandler } from './joueur-flute-round.handler';
import { waitForAsync } from '@angular/core/testing';

describe('JoueurFluteRoundHandler', () => {
  let roundHandler: JoueurFluteRoundHandler;

  beforeEach(() => {
    roundHandler = new JoueurFluteRoundHandler();
  });

  it('should not be only once', () => {
    expect(roundHandler.isOnlyOnce).toEqual(false);
  });

  it('should not be during day', () => {
    expect(roundHandler.isDuringDay).toEqual(false);
  });

  it('should return not during day', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.isDuringDay).toEqual(false);
  });

  it('should be PLAYERS type', () => {
    expect(roundHandler.type).toEqual(RoundTypeEnum.PLAYERS);
  });

  it('should return PLAYERS type', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.type).toEqual(RoundTypeEnum.PLAYERS);
  });

  it('should add CHARMED status to selected players', waitForAsync(() => {
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
        role: PlayerRoleEnum.JOUEUR_FLUTE,
        card: PlayerRoleEnum.JOUEUR_FLUTE,
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

    roundHandler.handleAction(players, [0, 2]).subscribe((newPlayers) => {
      expect(newPlayers[0].statuses.has(PlayerStatusEnum.CHARMED)).toEqual(
        true
      );
      expect(newPlayers[2].statuses.has(PlayerStatusEnum.CHARMED)).toEqual(
        true
      );
    });
  }));

  it('should return all alive players except JOUEUR_FLUTE and CHARMED as selectable', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.CHARMED]),
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
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 3,
        name: 'player3',
        role: PlayerRoleEnum.JOUEUR_FLUTE,
        card: PlayerRoleEnum.JOUEUR_FLUTE,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const round = roundHandler.getRoundConfig(players);

    expect(round.selectablePlayers).toEqual([1]);
  });

  it('should return JOUEUR_FLUTE as role round', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.role).toEqual(RoundEnum.JOUEUR_FLUTE);
  });

  it('should return 2 as maxSelectable players', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.maxSelectable).toEqual(2);
  });

  it('should return 0 as minSelectable players', () => {
    const round = roundHandler.getRoundConfig([]);

    expect(round.minSelectable).toEqual(0);
  });
});
