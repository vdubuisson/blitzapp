import { VictoryEnum } from '@/enums/victory.enum';
import { Player } from '@/models/player.model';
import { VictoryHandlersStore } from '@/stores/victory-handlers/victory-handlers.store';
import { NoneVictoryHandler } from '@/victory-handlers/none/none-victory.handler';
import { VictoryHandler } from '@/victory-handlers/victory.handler';
import { VillageoisVictoryHandler } from '@/victory-handlers/villageois/villageois-victory.handler';
import { signal } from '@angular/core';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { VictoryHandlersService } from './victory-handlers.service';

class MockVictoryHandler implements VictoryHandler {
  isVictorious(_: Player[]): boolean {
    return false;
  }
}

describe('VictoryHandlersService', () => {
  let service: VictoryHandlersService;

  ngMocks.faster();

  beforeAll(() =>
    MockBuilder(VictoryHandlersService).mock(VictoryHandlersStore),
  );

  beforeAll(() => {
    MockInstance(VictoryHandlersStore, 'state', signal(new Set<VictoryEnum>()));
  });

  beforeEach(() => {
    service = MockRender(VictoryHandlersService).point.componentInstance;
  });

  it('should init VILLAGEOIS victory handler', () => {
    service.initRequiredHandlers();

    expect(
      service['victoryHandlers'].get(VictoryEnum.VILLAGEOIS),
    ).toBeInstanceOf(VillageoisVictoryHandler);
  });

  it('should init NONE victory handler', () => {
    service.initRequiredHandlers();

    expect(service['victoryHandlers'].get(VictoryEnum.NONE)).toBeInstanceOf(
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
      VictoryEnum.AMOUREUX,
      mockAmoureuxVictoryHandler,
    );
    service['victoryHandlers'].set(
      VictoryEnum.LOUP_GAROU,
      mockLoupGarouVictoryHandler,
    );
    service['victoryHandlers'].set(
      VictoryEnum.VILLAGEOIS,
      mockVillageoisVictoryHandler,
    );

    const victory = service.getVictory([], false);

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

    service['victoryHandlers'].clear();
    service['victoryHandlers'].set(
      VictoryEnum.AMOUREUX,
      mockAmoureuxVictoryHandler,
    );
    service['victoryHandlers'].set(
      VictoryEnum.LOUP_GAROU,
      mockLoupGarouVictoryHandler,
    );
    service['victoryHandlers'].set(
      VictoryEnum.VILLAGEOIS,
      mockVillageoisVictoryHandler,
    );

    const victory = service.getVictory([], false);

    expect(victory).toEqual(undefined);
  });

  it('should remove victory handler', () => {
    service['victoryHandlers'].set(
      VictoryEnum.JOUEUR_FLUTE,
      new MockVictoryHandler(),
    );

    service.removeHandler(VictoryEnum.JOUEUR_FLUTE);

    expect(service['victoryHandlers'].has(VictoryEnum.JOUEUR_FLUTE)).toEqual(
      false,
    );
  });

  afterAll(MockReset);
});
