import { PlayersStatusUtility } from '@/current-game/players/players-status-utility';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import {
  createInjectionContextFactory,
  SpectatorInjectionContext,
} from '@ngneat/spectator/vitest';
import { firstValueFrom } from 'rxjs';
import { JoueurFluteRoundHandler } from './joueur-flute-round.handler';

describe('JoueurFluteRoundHandler', () => {
  let roundHandler: JoueurFluteRoundHandler;
  let spectator: SpectatorInjectionContext;

  const createInjectionContext = createInjectionContextFactory({
    mocks: [PlayersStatusUtility],
  });

  beforeEach(() => {
    spectator = createInjectionContext();
    roundHandler = spectator.runInInjectionContext(
      () => new JoueurFluteRoundHandler(),
    );
  });

  it('should not be only once', () => {
    expect(roundHandler.isOnlyOnce).toEqual(false);
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

  it('should add CHARMED status to selected players', async () => {
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
    const expectedPlayer1 = { ...players[0] };
    const expectedPlayer2 = { ...players[2] };
    const playersStatusUtility = spectator.inject(PlayersStatusUtility);
    playersStatusUtility.addStatusToPlayer.mockImplementation(
      (player: Player) => (player.id === 0 ? expectedPlayer1 : expectedPlayer2),
    );

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [0, 2]),
    );
    expect(newPlayers[0]).toBe(expectedPlayer1);
    expect(playersStatusUtility.addStatusToPlayer).toHaveBeenCalledWith(
      players[0],
      PlayerStatusEnum.CHARMED,
    );
    expect(newPlayers[2]).toBe(expectedPlayer2);
    expect(playersStatusUtility.addStatusToPlayer).toHaveBeenCalledWith(
      players[2],
      PlayerStatusEnum.CHARMED,
    );
  });

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

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers).toEqual([1]);
  });

  it('should return JOUEUR_FLUTE as role round', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.round).toEqual(RoundEnum.JOUEUR_FLUTE);
  });

  it('should return 2 as maxSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.maxSelectable).toEqual(2);
  });

  it('should return 0 as minSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.minSelectable).toEqual(0);
  });
});
