import { DefaultRoundHandlersStore } from '@/game-handlers/rounds/default-round-handlers-store';
import { DefaultRoundHandler } from '@/game-handlers/rounds/default/default-round.handler';
import { RoundHandlersStore } from '@/game-handlers/rounds/round-handlers-store';
import { VillageoisRoundHandler } from '@/game-handlers/rounds/villageois/villageois-round.handler';
import { VoyanteRoundHandler } from '@/game-handlers/rounds/voyante/voyante-round.handler';
import { PlayerRoleEnum } from '@/types/player-role';
import { Round, RoundEnum } from '@/types/round';
import { signal } from '@angular/core';
import {
  createServiceFactory,
  mockProvider,
  SpectatorService,
} from '@ngneat/spectator/jest';
import { RoundHandlersManager } from './round-handlers-manager';

jest.mock('@/config/round-handlers', () => {
  class VillageoisRoundHandlerMock {}
  class LoupGarouRoundHandlerMock {}
  class CapitaineRoundHandlerMock {}
  class VoyanteRoundHandlerMock {}

  return {
    ROUND_HANDLERS: {
      [RoundEnum.VILLAGEOIS]: VillageoisRoundHandlerMock,
      [RoundEnum.LOUP_GAROU]: LoupGarouRoundHandlerMock,
      [RoundEnum.CAPITAINE]: CapitaineRoundHandlerMock,
      [RoundEnum.VOYANTE]: VoyanteRoundHandlerMock,
    },
  };
});

describe('RoundHandlersManager', () => {
  let spectator: SpectatorService<RoundHandlersManager>;

  const createService = createServiceFactory({
    service: RoundHandlersManager,
    providers: [
      mockProvider(RoundHandlersStore, {
        state: signal(new Set<Round>()),
      }),
      mockProvider(DefaultRoundHandlersStore, {
        state: signal(new Set<Round>()),
      }),
    ],
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  describe('initRequiredHandlers', () => {
    it('should init VILLAGEOIS round handler', () => {
      spectator.service.initRequiredHandlers();

      expect(
        spectator.service['roundHandlers'].get(RoundEnum.VILLAGEOIS)
          ?.constructor.name,
      ).toEqual('VillageoisRoundHandlerMock');
    });

    it('should init CAPITAINE round handler', () => {
      spectator.service.initRequiredHandlers();

      expect(
        spectator.service['roundHandlers'].get(RoundEnum.CAPITAINE)?.constructor
          .name,
      ).toEqual('CapitaineRoundHandlerMock');
    });

    it('should init LOUP_GAROU round handler for LOUP_GAROU role', () => {
      spectator.service.initRequiredHandlers();

      expect(
        spectator.service['roundHandlers'].get(RoundEnum.LOUP_GAROU)
          ?.constructor.name,
      ).toEqual('LoupGarouRoundHandlerMock');
    });
  });

  describe('getHandler', () => {
    it('should return configured round handler', () => {
      const villageoisRoundHandler = {} as VillageoisRoundHandler;
      spectator.service['roundHandlers'].set(
        RoundEnum.VILLAGEOIS,
        villageoisRoundHandler,
      );

      const testHandler = spectator.service.getHandler(RoundEnum.VILLAGEOIS);

      expect(testHandler).toBe(villageoisRoundHandler);
    });
  });

  describe('initAsDefaultHandlers', () => {
    it('should init handler as default', () => {
      spectator.service.initAsDefaultHandlers([PlayerRoleEnum.VOYANTE]);

      expect(
        spectator.service['roundHandlers'].get(RoundEnum.VOYANTE),
      ).toBeInstanceOf(DefaultRoundHandler);
    });
  });

  describe('removeHandlersByRoles', () => {
    it('should remove handlers for specified roles', () => {
      spectator.service['roundHandlers'].set(
        RoundEnum.VOYANTE,
        {} as VoyanteRoundHandler,
      );

      spectator.service.removeHandlersByRoles([PlayerRoleEnum.VOYANTE]);

      expect(
        spectator.service['roundHandlers'].get(RoundEnum.VOYANTE),
      ).toBeUndefined();
    });

    it('should not remove handlers for non-specified roles', () => {
      spectator.service['roundHandlers'].set(
        RoundEnum.VILLAGEOIS,
        {} as VillageoisRoundHandler,
      );

      spectator.service.removeHandlersByRoles([PlayerRoleEnum.VOYANTE]);

      expect(
        spectator.service['roundHandlers'].get(RoundEnum.VILLAGEOIS),
      ).toBeDefined();
    });
  });

  describe('clearHandlers', () => {
    it('should clear all round handlers', () => {
      spectator.service['roundHandlers'].set(
        RoundEnum.VILLAGEOIS,
        {} as VillageoisRoundHandler,
      );

      spectator.service.clearHandlers();

      expect(spectator.service['roundHandlers'].size).toEqual(0);
    });

    it('should clear round handlers state', () => {
      spectator.service['roundHandlersState'].set(
        new Set([RoundEnum.VILLAGEOIS]),
      );

      spectator.service.clearHandlers();

      expect(spectator.service['roundHandlersState']().size).toEqual(0);
    });

    it('should clear default round handlers state', () => {
      spectator.service['defaultRoundHandlersState'].set(
        new Set([RoundEnum.VILLAGEOIS]),
      );

      spectator.service.clearHandlers();

      expect(spectator.service['defaultRoundHandlersState']().size).toEqual(0);
    });
  });

  describe('removeHandler', () => {
    it('should remove specific round handler', () => {
      spectator.service['roundHandlers'].set(
        RoundEnum.VILLAGEOIS,
        {} as VillageoisRoundHandler,
      );

      spectator.service.removeHandler(RoundEnum.VILLAGEOIS);

      expect(
        spectator.service['roundHandlers'].get(RoundEnum.VILLAGEOIS),
      ).toBeUndefined();
    });

    it('should update round handlers state after removal', () => {
      spectator.service['roundHandlersState'].set(
        new Set([RoundEnum.VILLAGEOIS]),
      );

      spectator.service.removeHandler(RoundEnum.VILLAGEOIS);

      expect(
        spectator.service['roundHandlersState']().has(RoundEnum.VILLAGEOIS),
      ).toEqual(false);
    });

    it('should update default round handlers state after removal', () => {
      spectator.service['defaultRoundHandlersState'].set(
        new Set([RoundEnum.VILLAGEOIS]),
      );

      spectator.service.removeHandler(RoundEnum.VILLAGEOIS);

      expect(
        spectator.service['defaultRoundHandlersState']().has(
          RoundEnum.VILLAGEOIS,
        ),
      ).toEqual(false);
    });
  });

  describe('createRoundHandler', () => {
    it('should create and add a new round handler', () => {
      spectator.service.createRoundHandler(RoundEnum.VILLAGEOIS);

      expect(
        spectator.service['roundHandlers'].get(RoundEnum.VILLAGEOIS)
          ?.constructor.name,
      ).toEqual('VillageoisRoundHandlerMock');
    });

    it('should not create a handler if it already exists', () => {
      spectator.service['roundHandlers'].set(
        RoundEnum.VILLAGEOIS,
        {} as VillageoisRoundHandler,
      );

      spectator.service.createRoundHandler(RoundEnum.VILLAGEOIS);

      expect(spectator.service['roundHandlers'].size).toEqual(1);
    });
  });
});
