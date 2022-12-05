import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { VictoryEnum } from '../../enums/victory.enum';
import { Player } from '../../models/player.model';
import { AmoureuxVictoryHandler } from '../../victory-handlers/amoureux/amoureux-victory.handler';
import { LoupGarouVictoryHandler } from '../../victory-handlers/loup-garou/loup-garou-victory.handler';
import { NoneVictoryHandler } from '../../victory-handlers/none/none-victory.handler';
import { VictoryHandler } from '../../victory-handlers/victory.handler';
import { VillageoisVictoryHandler } from '../../victory-handlers/villageois/villageois-victory.handler';

import { VictoryHandlersService } from './victory-handlers.service';

class MockVictoryHandler implements VictoryHandler {
  isVictorious(_: Player[]): boolean {
    return false;
  }
}

describe('VictoryHandlersService', () => {
  let service: VictoryHandlersService;

  beforeEach(() => {
    service = new VictoryHandlersService();
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
        statuses: new Set([PlayerStatusEnum.LOVER]),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.LOVER]),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
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
