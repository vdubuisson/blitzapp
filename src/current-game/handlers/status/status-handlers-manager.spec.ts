import { CurrentPlayersStore } from '@/current-game/current-players-store/current-players-store';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { signal } from '@angular/core';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/vitest';
import { DefaultStatusHandler } from './default/default.status-handler';
import { StatusHandler } from './status-handler.interface';
import { StatusHandlersManager } from './status-handlers-manager';
import { WolfTargetStatusHandler } from './wolf-target/wolf-target.status-handler';

describe('StatusHandlersManager', () => {
  let spectator: SpectatorService<StatusHandlersManager>;

  const createService = createServiceFactory({
    service: StatusHandlersManager,
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
    spectator.service['statusHandlers'].set(
      PlayerStatusEnum.WOLF_TARGET,
      {} as unknown as StatusHandler,
    );
    expect(spectator.service['statusHandlers'].size).toBe(1);

    spectator.service.clearHandlers();

    expect(spectator.service['statusHandlers'].size).toBe(0);
  });

  it('should initialize WOLF_TARGET handler if role present', () => {
    const players: Player[] = [
      { id: 1, role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];

    spectator.service.initHandlers(players);

    expect(
      spectator.service['statusHandlers'].get(PlayerStatusEnum.WOLF_TARGET),
    ).toBeInstanceOf(WolfTargetStatusHandler);
  });

  it('should not initialize WOLF_TARGET handler if role not present', () => {
    const players: Player[] = [];

    spectator.service.initHandlers(players);

    expect(
      spectator.service['statusHandlers'].has(PlayerStatusEnum.WOLF_TARGET),
    ).toBe(false);
  });

  it('should return already initialized handler', () => {
    const statusHandler = new DefaultStatusHandler();
    spectator.service['statusHandlers'].set(
      PlayerStatusEnum.WOLF_TARGET,
      statusHandler,
    );

    const testHandler = spectator.service.getHandler(
      PlayerStatusEnum.WOLF_TARGET,
    );
    expect(testHandler).toBe(statusHandler);
  });

  it('should reuse the DefaultStatusHandler instance', () => {
    const players: Player[] = [
      { id: 1, role: PlayerRoleEnum.SORCIERE } as Player,
    ];

    spectator.service.initHandlers(players);

    const healthPotionHandler = spectator.service.getHandler(
      PlayerStatusEnum.HEALTH_POTION,
    );
    const deaththPotionHandler = spectator.service.getHandler(
      PlayerStatusEnum.DEATH_POTION,
    );

    expect(healthPotionHandler).toBeInstanceOf(DefaultStatusHandler);
    expect(healthPotionHandler).toBe(deaththPotionHandler);
  });
});
