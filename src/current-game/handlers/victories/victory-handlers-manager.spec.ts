import { VictoryHandlersStore } from '@/game-handlers/victories/victory-handlers-store';
import { Player } from '@/shared/types/player';
import { Victory, VictoryEnum } from '@/types/victory';
import { signal } from '@angular/core';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/jest';
import { NoneVictoryHandler } from './none/none-victory.handler';
import { VictoryHandlersManager } from './victory-handlers-manager';
import { VictoryHandler } from './victory.handler';
import { VillageoisVictoryHandler } from './villageois/villageois-victory.handler';

class MockVictoryHandler implements VictoryHandler {
  isVictorious(_: Player[]): boolean {
    return false;
  }
}

describe('VictoryHandlersManager', () => {
  let spectator: SpectatorService<VictoryHandlersManager>;

  const createService = createServiceFactory({
    service: VictoryHandlersManager,
    providers: [
      mockProvider(VictoryHandlersStore, {
        state: signal(new Set<Victory>()),
      }),
    ],
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should init VILLAGEOIS victory handler', () => {
    spectator.service.initRequiredHandlers();

    expect(
      spectator.service['victoryHandlers'].get(VictoryEnum.VILLAGEOIS),
    ).toBeInstanceOf(VillageoisVictoryHandler);
  });

  it('should init NONE victory handler', () => {
    spectator.service.initRequiredHandlers();

    expect(
      spectator.service['victoryHandlers'].get(VictoryEnum.NONE),
    ).toBeInstanceOf(NoneVictoryHandler);
  });

  it('should return victory based on victorious Handler', () => {
    const mockAmoureuxVictoryHandler = new MockVictoryHandler();
    jest
      .spyOn(mockAmoureuxVictoryHandler, 'isVictorious')
      .mockReturnValue(false);
    const mockLoupGarouVictoryHandler = new MockVictoryHandler();
    jest
      .spyOn(mockLoupGarouVictoryHandler, 'isVictorious')
      .mockReturnValue(true);
    const mockVillageoisVictoryHandler = new MockVictoryHandler();
    jest
      .spyOn(mockVillageoisVictoryHandler, 'isVictorious')
      .mockReturnValue(false);

    spectator.service['victoryHandlers'].clear();
    spectator.service['victoryHandlers'].set(
      VictoryEnum.AMOUREUX,
      mockAmoureuxVictoryHandler,
    );
    spectator.service['victoryHandlers'].set(
      VictoryEnum.LOUP_GAROU,
      mockLoupGarouVictoryHandler,
    );
    spectator.service['victoryHandlers'].set(
      VictoryEnum.VILLAGEOIS,
      mockVillageoisVictoryHandler,
    );

    const victory = spectator.service.getVictory([], false);

    expect(victory).toEqual(VictoryEnum.LOUP_GAROU);
  });

  it('should return no victory if no victorious handler', () => {
    const mockAmoureuxVictoryHandler = new MockVictoryHandler();
    jest
      .spyOn(mockAmoureuxVictoryHandler, 'isVictorious')
      .mockReturnValue(false);
    const mockLoupGarouVictoryHandler = new MockVictoryHandler();
    jest
      .spyOn(mockLoupGarouVictoryHandler, 'isVictorious')
      .mockReturnValue(false);
    const mockVillageoisVictoryHandler = new MockVictoryHandler();
    jest
      .spyOn(mockVillageoisVictoryHandler, 'isVictorious')
      .mockReturnValue(false);

    spectator.service['victoryHandlers'].clear();
    spectator.service['victoryHandlers'].set(
      VictoryEnum.AMOUREUX,
      mockAmoureuxVictoryHandler,
    );
    spectator.service['victoryHandlers'].set(
      VictoryEnum.LOUP_GAROU,
      mockLoupGarouVictoryHandler,
    );
    spectator.service['victoryHandlers'].set(
      VictoryEnum.VILLAGEOIS,
      mockVillageoisVictoryHandler,
    );

    const victory = spectator.service.getVictory([], false);

    expect(victory).toEqual(undefined);
  });

  it('should remove victory handler', () => {
    spectator.service['victoryHandlers'].set(
      VictoryEnum.JOUEUR_FLUTE,
      new MockVictoryHandler(),
    );

    spectator.service.removeHandler(VictoryEnum.JOUEUR_FLUTE);

    expect(
      spectator.service['victoryHandlers'].has(VictoryEnum.JOUEUR_FLUTE),
    ).toEqual(false);
  });
});
