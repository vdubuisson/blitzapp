import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { Player } from '@/shared/types/player';
import { CurrentPlayersStore } from '@/current-game/current-players-store/current-players-store';
import { signal } from '@angular/core';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { StatusHandlersManager } from './status-handlers-manager';
import { StatusHandler } from './status-handler.interface';
import { WolfTargetStatusHandler } from './wolf-target/wolf-target.status-handler';
import { DefaultStatusHandler } from './default/default.status-handler';

describe('StatusHandlersManager', () => {
  ngMocks.faster();
  let service: StatusHandlersManager;

  beforeAll(() => MockBuilder(StatusHandlersManager).mock(CurrentPlayersStore));

  beforeAll(() => {
    MockInstance(CurrentPlayersStore, 'state', signal<Player[]>([]));
  });

  beforeAll(() => {
    service = MockRender(StatusHandlersManager).point.componentInstance;
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

  it('should reuse the DefaultStatusHandler instance', () => {
    const players: Player[] = [
      { id: 1, role: PlayerRoleEnum.SORCIERE } as Player,
    ];

    service.initHandlers(players);

    const healthPotionHandler = service.getHandler(
      PlayerStatusEnum.HEALTH_POTION,
    );
    const deaththPotionHandler = service.getHandler(
      PlayerStatusEnum.DEATH_POTION,
    );

    expect(healthPotionHandler).toBeInstanceOf(DefaultStatusHandler);
    expect(healthPotionHandler).toBe(deaththPotionHandler);
  });

  afterAll(MockReset);
});
