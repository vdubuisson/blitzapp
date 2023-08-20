import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { Player } from '../../models/player.model';
import { JoueurFluteVictoryHandler } from './joueur-flute-victory.handler';

describe('JoueurFluteVictoryHandler', () => {
  let victoryHandler: JoueurFluteVictoryHandler;

  beforeEach(() => {
    victoryHandler = new JoueurFluteVictoryHandler();
  });

  it('should be victorious if JOUEUR_FLUTE alive and other alive players CHARMED', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.JOUEUR_FLUTE,
card: PlayerRoleEnum.JOUEUR_FLUTE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
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
        statuses: new Set([PlayerStatusEnum.CHARMED]),
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
    ];

    expect(victoryHandler.isVictorious(players)).toEqual(true);
  });

  it('should not be victorious if JOUEUR_FLUTE is dead', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.JOUEUR_FLUTE,
card: PlayerRoleEnum.JOUEUR_FLUTE,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
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
        statuses: new Set([PlayerStatusEnum.CHARMED]),
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
    ];

    expect(victoryHandler.isVictorious(players)).toEqual(false);
  });

  it('should not be victorious if some alive players are not CHARMED', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.JOUEUR_FLUTE,
card: PlayerRoleEnum.JOUEUR_FLUTE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
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
        statuses: new Set([PlayerStatusEnum.CHARMED]),
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

    expect(victoryHandler.isVictorious(players)).toEqual(false);
  });
});
