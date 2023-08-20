import { MockService } from 'ng-mocks';
import { of } from 'rxjs';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { VictoryEnum } from '../../enums/victory.enum';
import { Player } from '../../models/player.model';
import {
  VillageoisVictoryHandler,
  NoneVictoryHandler,
  LoupGarouVictoryHandler,
  AmoureuxVictoryHandler,
  JoueurFluteVictoryHandler,
  LoupBlancVictoryHandler,
} from '../../victory-handlers';
import { VictoryHandler } from '../../victory-handlers/victory.handler';
import { StorageService } from '../storage/storage.service';
import { VictoryHandlersService } from './victory-handlers.service';

class MockVictoryHandler implements VictoryHandler {
  isVictorious(_: Player[]): boolean {
    return false;
  }
}

describe('VictoryHandlersService', () => {
  let service: VictoryHandlersService;
  let storageService: StorageService;

  beforeEach(() => {
    storageService = MockService(StorageService);

    jest.spyOn(storageService, 'get').mockReturnValue(of(null));

    service = new VictoryHandlersService(storageService);
  });

  it('should init VILLAGEOIS victory handler', () => {
    service.initHandlers([]);

    expect(
      service['victoryHandlers'].get(VictoryEnum.VILLAGEOIS)
    ).toBeInstanceOf(VillageoisVictoryHandler);
  });

  it('should init NONE victory handler', () => {
    service.initHandlers([]);

    expect(service['victoryHandlers'].get(VictoryEnum.NONE)).toBeInstanceOf(
      NoneVictoryHandler
    );
  });

  it('should init LOUP_GAROU victory handler if there are LOUP_GAROU', () => {
    service.initHandlers([PlayerRoleEnum.LOUP_GAROU]);

    expect(
      service['victoryHandlers'].get(VictoryEnum.LOUP_GAROU)
    ).toBeInstanceOf(LoupGarouVictoryHandler);
  });

  it('should init LOUP_GAROU victory handler if there is GRAND_MECHANT_LOUP', () => {
    service.initHandlers([PlayerRoleEnum.GRAND_MECHANT_LOUP]);

    expect(
      service['victoryHandlers'].get(VictoryEnum.LOUP_GAROU)
    ).toBeInstanceOf(LoupGarouVictoryHandler);
  });

  it('should not init LOUP_GAROU victory handler if there are no LOUP_GAROU', () => {
    service.initHandlers([]);

    expect(service['victoryHandlers'].has(VictoryEnum.LOUP_GAROU)).toEqual(
      false
    );
  });

  it('should init AMOUREUX victory handler if there is CUPIDON', () => {
    service.initHandlers([PlayerRoleEnum.CUPIDON]);

    expect(service['victoryHandlers'].get(VictoryEnum.AMOUREUX)).toBeInstanceOf(
      AmoureuxVictoryHandler
    );
  });

  it('should not init AMOUREUX victory handler if there is no CUPIDON', () => {
    service.initHandlers([]);

    expect(service['victoryHandlers'].has(VictoryEnum.AMOUREUX)).toEqual(false);
  });

  it('should remove AMOUREUX victory handler if some Lover is dead', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.LOVER]),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.LOVER]),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    service['victoryHandlers'].set(
      VictoryEnum.AMOUREUX,
      new AmoureuxVictoryHandler()
    );

    service.removeUselessHandlers(players);

    expect(service['victoryHandlers'].has(VictoryEnum.AMOUREUX)).toEqual(false);
  });

  it('should init JOUEUR_FLUTE victory handler if there is JOUEUR_FLUTE', () => {
    service.initHandlers([PlayerRoleEnum.JOUEUR_FLUTE]);

    expect(
      service['victoryHandlers'].get(VictoryEnum.JOUEUR_FLUTE)
    ).toBeInstanceOf(JoueurFluteVictoryHandler);
  });

  it('should not init JOUEUR_FLUTE victory handler if there is no JOUEUR_FLUTE', () => {
    service.initHandlers([]);

    expect(service['victoryHandlers'].has(VictoryEnum.JOUEUR_FLUTE)).toEqual(
      false
    );
  });

  it('should remove JOUEUR_FLUTE victory handler if JOUEUR_FLUTE is dead', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.JOUEUR_FLUTE,
card: PlayerRoleEnum.JOUEUR_FLUTE,
        statuses: new Set(),
        isDead: true,
      },
    ];
    service['victoryHandlers'].set(
      VictoryEnum.JOUEUR_FLUTE,
      new JoueurFluteVictoryHandler()
    );

    service.removeUselessHandlers(players);

    expect(service['victoryHandlers'].has(VictoryEnum.JOUEUR_FLUTE)).toEqual(
      false
    );
  });

  it('should init LOUP_BLANC victory handler if there is LOUP_BLANC', () => {
    service.initHandlers([PlayerRoleEnum.LOUP_BLANC]);

    expect(
      service['victoryHandlers'].get(VictoryEnum.LOUP_BLANC)
    ).toBeInstanceOf(LoupBlancVictoryHandler);
  });

  it('should not init LOUP_BLANC victory handler if there is no LOUP_BLANC', () => {
    service.initHandlers([]);

    expect(service['victoryHandlers'].has(VictoryEnum.LOUP_BLANC)).toEqual(
      false
    );
  });

  it('should remove LOUP_BLANC victory handler if LOUP_BLANC is dead', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_BLANC,
card: PlayerRoleEnum.LOUP_BLANC,
        statuses: new Set(),
        isDead: true,
      },
    ];
    service['victoryHandlers'].set(
      VictoryEnum.LOUP_BLANC,
      new LoupBlancVictoryHandler()
    );

    service.removeUselessHandlers(players);

    expect(service['victoryHandlers'].has(VictoryEnum.LOUP_BLANC)).toEqual(
      false
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

    service['victoryHandlers'].set(
      VictoryEnum.AMOUREUX,
      mockAmoureuxVictoryHandler
    );
    service['victoryHandlers'].set(
      VictoryEnum.LOUP_GAROU,
      mockLoupGarouVictoryHandler
    );
    service['victoryHandlers'].set(
      VictoryEnum.VILLAGEOIS,
      mockVillageoisVictoryHandler
    );

    const victory = service.getVictory([]);

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

    service['victoryHandlers'].set(
      VictoryEnum.AMOUREUX,
      mockAmoureuxVictoryHandler
    );
    service['victoryHandlers'].set(
      VictoryEnum.LOUP_GAROU,
      mockLoupGarouVictoryHandler
    );
    service['victoryHandlers'].set(
      VictoryEnum.VILLAGEOIS,
      mockVillageoisVictoryHandler
    );

    const victory = service.getVictory([]);

    expect(victory).toEqual(undefined);
  });
});
