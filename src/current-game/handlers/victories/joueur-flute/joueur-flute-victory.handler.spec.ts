import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { Player } from '@/shared/types/player';
import { JoueurFluteVictoryHandler } from './joueur-flute-victory.handler';

describe('JoueurFluteVictoryHandler', () => {
  let victoryHandler: JoueurFluteVictoryHandler;

  beforeAll(() => {
    victoryHandler = new JoueurFluteVictoryHandler();
  });

  it('should be victorious if JOUEUR_FLUTE alive and other alive players CHARMED', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.JOUEUR_FLUTE,
        card: PlayerRole.JOUEUR_FLUTE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set([PlayerStatus.CHARMED]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set([PlayerStatus.CHARMED]),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
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
        role: PlayerRole.JOUEUR_FLUTE,
        card: PlayerRole.JOUEUR_FLUTE,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set([PlayerStatus.CHARMED]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set([PlayerStatus.CHARMED]),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
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
        role: PlayerRole.JOUEUR_FLUTE,
        card: PlayerRole.JOUEUR_FLUTE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set([PlayerStatus.CHARMED]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set([PlayerStatus.CHARMED]),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    expect(victoryHandler.isVictorious(players)).toEqual(false);
  });
});
