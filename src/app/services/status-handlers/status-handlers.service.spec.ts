import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { StatusHandler } from '@/status-handlers/status-handler.interface';
import { WolfTargetStatusHandler } from '@/status-handlers/wolf-target/wolf-target.status-handler';
import { CurrentPlayersStore } from '@/stores/current-players/current-players.store';
import { signal } from '@angular/core';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { StatusHandlersService } from './status-handlers.service';

describe('StatusHandlersService', () => {
  ngMocks.faster();
  let service: StatusHandlersService;

  beforeAll(() => MockBuilder(StatusHandlersService).mock(CurrentPlayersStore));

  beforeAll(() => {
    MockInstance(CurrentPlayersStore, 'state', signal<Player[]>([]));
  });

  beforeAll(() => {
    service = MockRender(StatusHandlersService).point.componentInstance;
  });

  beforeEach(() => {
    service['statusHandlers'].clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should clear handlers', () => {
    service['statusHandlers'].set(
      PlayerStatusEnum.WOLF_TARGET,
      {} as unknown as StatusHandler,
    );
    expect(service['statusHandlers'].size).toBe(1);

    service.clearHandlers();

    expect(service['statusHandlers'].size).toBe(0);
  });

  it('should initialize WOLF_TARGET handler if role present', () => {
    const players: Player[] = [
      { id: 1, role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];

    service.initHandlers(players);

    expect(
      service['statusHandlers'].get(PlayerStatusEnum.WOLF_TARGET),
    ).toBeInstanceOf(WolfTargetStatusHandler);
  });

  it('should not initialize WOLF_TARGET handler if role not present', () => {
    const players: Player[] = [];

    service.initHandlers(players);

    expect(service['statusHandlers'].has(PlayerStatusEnum.WOLF_TARGET)).toBe(
      false,
    );
  });

  it('should return WOLF_TARGET handler', () => {
    const statusHandler = new WolfTargetStatusHandler();
    service['statusHandlers'].set(PlayerStatusEnum.WOLF_TARGET, statusHandler);

    const testHandler = service.getHandler(PlayerStatusEnum.WOLF_TARGET);
    expect(testHandler).toBe(statusHandler);
  });

  afterAll(MockReset);
});
