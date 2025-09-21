import { Victory } from '@/types/victory';
import { Player } from '@/shared/types/player';
import { VictoryHandlersStore } from '@/game-handlers/victories/victory-handlers-store';
import { signal } from '@angular/core';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { VictoryHandlersManager } from './victory-handlers-manager';
import { NoneVictoryHandler } from './none/none-victory.handler';
import { VictoryHandler } from './victory.handler';
import { VillageoisVictoryHandler } from './villageois/villageois-victory.handler';

class MockVictoryHandler implements VictoryHandler {
  isVictorious(_: Player[]): boolean {
    return false;
  }
}

describe('VictoryHandlersManager', () => {
  let service: VictoryHandlersManager;

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(VictoryHandlersManager).mock(VictoryHandlersStore),
  );

  beforeAll(() => {
    MockInstance(VictoryHandlersStore, 'state', signal(new Set<Victory>()));
  });

  beforeEach(() => {
    service = MockRender(VictoryHandlersManager).point.componentInstance;
  });

  it('should init VILLAGEOIS victory handler', () => {
    service.initRequiredHandlers();

    expect(service['victoryHandlers'].get(Victory.VILLAGEOIS)).toBeInstanceOf(
      VillageoisVictoryHandler,
    );
  });

  it('should init NONE victory handler', () => {
    service.initRequiredHandlers();

    expect(service['victoryHandlers'].get(Victory.NONE)).toBeInstanceOf(
      NoneVictoryHandler,
    );
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

    service['victoryHandlers'].clear();
    service['victoryHandlers'].set(
      Victory.AMOUREUX,
      mockAmoureuxVictoryHandler,
    );
    service['victoryHandlers'].set(
      Victory.LOUP_GAROU,
      mockLoupGarouVictoryHandler,
    );
    service['victoryHandlers'].set(
      Victory.VILLAGEOIS,
      mockVillageoisVictoryHandler,
    );

    const victory = service.getVictory([], false);

    expect(victory).toEqual(Victory.LOUP_GAROU);
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

    service['victoryHandlers'].clear();
    service['victoryHandlers'].set(
      Victory.AMOUREUX,
      mockAmoureuxVictoryHandler,
    );
    service['victoryHandlers'].set(
      Victory.LOUP_GAROU,
      mockLoupGarouVictoryHandler,
    );
    service['victoryHandlers'].set(
      Victory.VILLAGEOIS,
      mockVillageoisVictoryHandler,
    );

    const victory = service.getVictory([], false);

    expect(victory).toEqual(undefined);
  });

  it('should remove victory handler', () => {
    service['victoryHandlers'].set(
      Victory.JOUEUR_FLUTE,
      new MockVictoryHandler(),
    );

    service.removeHandler(Victory.JOUEUR_FLUTE);

    expect(service['victoryHandlers'].has(Victory.JOUEUR_FLUTE)).toEqual(false);
  });

  afterAll(MockReset);
});
