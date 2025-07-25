import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { VictoryEnum } from '@/enums/victory.enum';
import { Player } from '@/models/player.model';
import { VictoryHandlersStore } from '@/stores/victory-handlers/victory-handlers.store';
import { AmoureuxVictoryHandler } from '@/victory-handlers/amoureux/amoureux-victory.handler';
import { JoueurFluteVictoryHandler } from '@/victory-handlers/joueur-flute/joueur-flute-victory.handler';
import { LoupBlancVictoryHandler } from '@/victory-handlers/loup-blanc/loup-blanc-victory.handler';
import { LoupGarouVictoryHandler } from '@/victory-handlers/loup-garou/loup-garou-victory.handler';
import { NoneVictoryHandler } from '@/victory-handlers/none/none-victory.handler';
import { SectaireVictoryHandler } from '@/victory-handlers/sectaire/sectaire-victory.handler';
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
    service.initHandlers([]);

    expect(
      service['victoryHandlers'].get(VictoryEnum.VILLAGEOIS),
    ).toBeInstanceOf(VillageoisVictoryHandler);
  });

  it('should init NONE victory handler', () => {
    service.initHandlers([]);

    expect(service['victoryHandlers'].get(VictoryEnum.NONE)).toBeInstanceOf(
      NoneVictoryHandler,
    );
  });

  it('should init LOUP_GAROU victory handler if there are LOUP_GAROU', () => {
    service.initHandlers([PlayerRoleEnum.LOUP_GAROU]);

    expect(
      service['victoryHandlers'].get(VictoryEnum.LOUP_GAROU),
    ).toBeInstanceOf(LoupGarouVictoryHandler);
  });

  it('should init LOUP_GAROU victory handler if there is GRAND_MECHANT_LOUP', () => {
    service.initHandlers([PlayerRoleEnum.GRAND_MECHANT_LOUP]);

    expect(
      service['victoryHandlers'].get(VictoryEnum.LOUP_GAROU),
    ).toBeInstanceOf(LoupGarouVictoryHandler);
  });

  it('should not init LOUP_GAROU victory handler if there are no LOUP_GAROU', () => {
    service.initHandlers([]);

    expect(service['victoryHandlers'].has(VictoryEnum.LOUP_GAROU)).toEqual(
      false,
    );
  });

  it('should init AMOUREUX victory handler if there is CUPIDON', () => {
    service.initHandlers([PlayerRoleEnum.CUPIDON]);

    expect(service['victoryHandlers'].get(VictoryEnum.AMOUREUX)).toBeInstanceOf(
      AmoureuxVictoryHandler,
    );
  });

  it('should not init AMOUREUX victory handler if there is no CUPIDON', () => {
    service.initHandlers([]);

    expect(service['victoryHandlers'].has(VictoryEnum.AMOUREUX)).toEqual(false);
  });

  it('should init JOUEUR_FLUTE victory handler if there is JOUEUR_FLUTE', () => {
    service.initHandlers([PlayerRoleEnum.JOUEUR_FLUTE]);

    expect(
      service['victoryHandlers'].get(VictoryEnum.JOUEUR_FLUTE),
    ).toBeInstanceOf(JoueurFluteVictoryHandler);
  });

  it('should not init JOUEUR_FLUTE victory handler if there is no JOUEUR_FLUTE', () => {
    service.initHandlers([]);

    expect(service['victoryHandlers'].has(VictoryEnum.JOUEUR_FLUTE)).toEqual(
      false,
    );
  });

  it('should init LOUP_BLANC victory handler if there is LOUP_BLANC', () => {
    service.initHandlers([PlayerRoleEnum.LOUP_BLANC]);

    expect(
      service['victoryHandlers'].get(VictoryEnum.LOUP_BLANC),
    ).toBeInstanceOf(LoupBlancVictoryHandler);
  });

  it('should not init LOUP_BLANC victory handler if there is no LOUP_BLANC', () => {
    service.initHandlers([]);

    expect(service['victoryHandlers'].has(VictoryEnum.LOUP_BLANC)).toEqual(
      false,
    );
  });

  it('should init SECTAIRE victory handler if there is SECTAIRE', () => {
    service.initHandlers([PlayerRoleEnum.SECTAIRE]);

    expect(service['victoryHandlers'].get(VictoryEnum.SECTAIRE)).toBeInstanceOf(
      SectaireVictoryHandler,
    );
  });

  it('should not init SECTAIRE victory handler if there is no SECTAIRE', () => {
    service.initHandlers([]);

    expect(service['victoryHandlers'].has(VictoryEnum.SECTAIRE)).toEqual(false);
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
