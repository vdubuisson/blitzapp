import { LOUPS_GAROUS_ROLES } from '@/config/loups-garous-roles';
import { PlayersRoleUtility } from '@/current-game/players/players-role-utility';
import { Player } from '@/shared/types/player';
import { PlayerStatusEnum } from '@/shared/types/player-status';
import { PlayerRoleEnum } from '@/types/player-role';
import {
  createInjectionContextFactory,
  mockProvider,
  SpectatorInjectionContext,
} from '@ngneat/spectator/vitest';
import { LoupGarouVictoryHandler } from './loup-garou-victory.handler';

describe('LoupGarouVictoryHandler', () => {
  let victoryHandler: LoupGarouVictoryHandler;
  let spectator: SpectatorInjectionContext;

  const createInjectionContext = createInjectionContextFactory({
    providers: [
      mockProvider(PlayersRoleUtility, {
        isLoupGarou: vi.fn(
          (player) =>
            LOUPS_GAROUS_ROLES.includes(player.role) ||
            player.statuses.has(PlayerStatusEnum.INFECTED),
        ),
      }),
    ],
  });

  beforeEach(() => {
    spectator = createInjectionContext();
    victoryHandler = spectator.runInInjectionContext(
      () => new LoupGarouVictoryHandler(),
    );
  });

  it('should be victorious if only Loup-Garou are alive', () => {
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
        role: PlayerRoleEnum.GRAND_MECHANT_LOUP,
        card: PlayerRoleEnum.GRAND_MECHANT_LOUP,
        statuses: new Set(),
        isDead: false,
      },
    ];

    expect(victoryHandler.isVictorious(players)).toEqual(true);
  });

  it('should not be victorious if other players are alive', () => {
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
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    expect(victoryHandler.isVictorious(players)).toEqual(false);
  });
});
