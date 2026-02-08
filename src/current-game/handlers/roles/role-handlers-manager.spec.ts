import { CurrentPlayersStore } from '@/current-game/current-players-store/current-players-store';
import { RoleHandler } from '@/game-handlers/roles/role-handler.interface';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { signal } from '@angular/core';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/jest';
import { RoleHandlersManager } from './role-handlers-manager';

jest.mock('@/config/role-metadata', () => {
  class RoleHandlerMock {}

  return {
    ROLE_METADATA_CONFIG: {
      [PlayerRoleEnum.VILLAGEOIS]: {
        handler: RoleHandlerMock,
        rounds: [],
        statuses: [],
        victories: [],
      },
    },
  };
});

describe('RoleHandlersManager', () => {
  let spectator: SpectatorService<RoleHandlersManager>;

  const createService = createServiceFactory({
    service: RoleHandlersManager,
    providers: [
      mockProvider(CurrentPlayersStore, {
        state: signal<Player[]>([]),
      }),
    ],
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should clear handlers', () => {
    spectator.service['roleHandlers'].set(
      PlayerRoleEnum.VILLAGEOIS,
      {} as unknown as RoleHandler,
    );
    expect(spectator.service['roleHandlers'].size).toBe(1);

    spectator.service.clearHandlers();

    expect(spectator.service['roleHandlers'].size).toBe(0);
  });

  it('should initialize VILLAGEOIS handler if role present', () => {
    const players: Player[] = [
      { id: 1, role: PlayerRoleEnum.VILLAGEOIS } as Player,
    ];

    spectator.service.initHandlers(players);

    const handler = spectator.service['roleHandlers'].get(
      PlayerRoleEnum.VILLAGEOIS,
    );
    expect(handler).toBeDefined();
    expect(handler?.constructor.name).toBe('RoleHandlerMock');
  });

  it('should not initialize VILLAGEOIS handler if role not present', () => {
    const players: Player[] = [];

    spectator.service.initHandlers(players);

    expect(
      spectator.service['roleHandlers'].has(PlayerRoleEnum.VILLAGEOIS),
    ).toBe(false);
  });

  it('should return VILLAGEOIS handler', () => {
    const roleHandler = {} as RoleHandler;
    spectator.service['roleHandlers'].set(
      PlayerRoleEnum.VILLAGEOIS,
      roleHandler,
    );

    const testHandler = spectator.service.getHandler(PlayerRoleEnum.VILLAGEOIS);
    expect(testHandler).toBe(roleHandler);
  });
});
