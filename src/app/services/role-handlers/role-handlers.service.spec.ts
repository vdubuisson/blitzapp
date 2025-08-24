import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { RoleHandlersService } from './role-handlers.service';
import { RoundHandlersService } from '../round-handlers/round-handlers.service';
import { CurrentPlayersStore } from '@/stores/current-players/current-players.store';
import { signal } from '@angular/core';
import { Player } from '@/models/player.model';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { VillageoisRoleHandler } from '@/role-handlers/villageois/villageois.role-handler';
import { RoleHandler } from '@/role-handlers/role-handler.interface';

describe('RoleHandlersService', () => {
  ngMocks.faster();
  let service: RoleHandlersService;

  beforeAll(() =>
    MockBuilder(RoleHandlersService)
      .mock(RoundHandlersService)
      .mock(CurrentPlayersStore),
  );

  beforeAll(() => {
    MockInstance(CurrentPlayersStore, 'state', signal<Player[]>([]));
  });

  beforeAll(() => {
    service = MockRender(RoleHandlersService).point.componentInstance;
  });

  beforeEach(() => {
    service['roleHandlers'].clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should clear handlers', () => {
    service['roleHandlers'].set(
      PlayerRoleEnum.VILLAGEOIS,
      {} as unknown as RoleHandler,
    );
    expect(service['roleHandlers'].size).toBe(1);

    service.clearHandlers();

    expect(service['roleHandlers'].size).toBe(0);
  });

  it('should initialize VILLAGEOIS handler if role present', () => {
    const players: Player[] = [
      { id: 1, role: PlayerRoleEnum.VILLAGEOIS } as Player,
    ];

    service.initHandlers(players);

    expect(
      service['roleHandlers'].get(PlayerRoleEnum.VILLAGEOIS),
    ).toBeInstanceOf(VillageoisRoleHandler);
  });

  it('should not initialize VILLAGEOIS handler if role not present', () => {
    const players: Player[] = [];

    service.initHandlers(players);

    expect(service['roleHandlers'].has(PlayerRoleEnum.VILLAGEOIS)).toBe(false);
  });

  it('should return VILLAGEOIS handler', () => {
    const roleHandler = {} as RoleHandler;
    service['roleHandlers'].set(PlayerRoleEnum.VILLAGEOIS, roleHandler);

    const testHandler = service.getHandler(PlayerRoleEnum.VILLAGEOIS);
    expect(testHandler).toBe(roleHandler);
  });

  afterAll(MockReset);
});
