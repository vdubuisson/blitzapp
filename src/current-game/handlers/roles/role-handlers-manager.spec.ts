import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { RoleHandlersManager } from './role-handlers-manager';
import { CurrentPlayersStore } from '@/current-game/current-players-store/current-players-store';
import { signal } from '@angular/core';
import { Player } from '@/shared/types/player';
import { PlayerRole } from '@/types/player-role';
import { VillageoisRoleHandler } from '@/game-handlers/roles/villageois/villageois.role-handler';
import { RoleHandler } from '@/game-handlers/roles/role-handler.interface';
import { RoundHandlersManager } from '../rounds/round-handlers-manager';

describe('RoleHandlersManager', () => {
  ngMocks.faster();
  let service: RoleHandlersManager;

  beforeAll(() =>
    MockBuilder(RoleHandlersManager)
      .mock(RoundHandlersManager)
      .mock(CurrentPlayersStore),
  );

  beforeAll(() => {
    MockInstance(CurrentPlayersStore, 'state', signal<Player[]>([]));
  });

  beforeAll(() => {
    service = MockRender(RoleHandlersManager).point.componentInstance;
  });

  beforeEach(() => {
    service['roleHandlers'].clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should clear handlers', () => {
    service['roleHandlers'].set(
      PlayerRole.VILLAGEOIS,
      {} as unknown as RoleHandler,
    );
    expect(service['roleHandlers'].size).toBe(1);

    service.clearHandlers();

    expect(service['roleHandlers'].size).toBe(0);
  });

  it('should initialize VILLAGEOIS handler if role present', () => {
    const players: Player[] = [
      { id: 1, role: PlayerRole.VILLAGEOIS } as Player,
    ];

    service.initHandlers(players);

    expect(service['roleHandlers'].get(PlayerRole.VILLAGEOIS)).toBeInstanceOf(
      VillageoisRoleHandler,
    );
  });

  it('should not initialize VILLAGEOIS handler if role not present', () => {
    const players: Player[] = [];

    service.initHandlers(players);

    expect(service['roleHandlers'].has(PlayerRole.VILLAGEOIS)).toBe(false);
  });

  it('should return VILLAGEOIS handler', () => {
    const roleHandler = {} as RoleHandler;
    service['roleHandlers'].set(PlayerRole.VILLAGEOIS, roleHandler);

    const testHandler = service.getHandler(PlayerRole.VILLAGEOIS);
    expect(testHandler).toBe(roleHandler);
  });

  afterAll(MockReset);
});
