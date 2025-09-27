import { PlayerRole } from '@/types/player-role';
import { Round } from '@/types/round';
import { CapitaineRoundHandler } from '@/game-handlers/rounds/capitaine/capitaine-round.handler';
import { DefaultRoundHandler } from '@/game-handlers/rounds/default/default-round.handler';
import { LoupGarouRoundHandler } from '@/game-handlers/rounds/loup-garou/loup-garou-round.handler';
import { VillageoisRoundHandler } from '@/game-handlers/rounds/villageois/villageois-round.handler';
import { VoyanteRoundHandler } from '@/game-handlers/rounds/voyante/voyante-round.handler';
import { DefaultRoundHandlersStore } from '@/game-handlers/rounds/default-round-handlers-store';
import { RoundHandlersStore } from '@/game-handlers/rounds/round-handlers-store';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { RoundHandlersManager } from './round-handlers-manager';

describe('RoundHandlersManager', () => {
  ngMocks.faster();
  let service: RoundHandlersManager;
  let villageoisRoundHandler: VillageoisRoundHandler;
  let voyanteRoundHandler: VoyanteRoundHandler;

  beforeAll(() =>
    MockBuilder(RoundHandlersManager)
      .mock(RoundHandlersStore)
      .mock(DefaultRoundHandlersStore),
  );

  beforeAll(() => {
    MockInstance(RoundHandlersStore, 'state', signal(new Set<Round>()));
    MockInstance(DefaultRoundHandlersStore, 'state', signal(new Set<Round>()));

    TestBed.runInInjectionContext(() => {
      villageoisRoundHandler = new VillageoisRoundHandler();
      voyanteRoundHandler = new VoyanteRoundHandler();
    });
  });

  beforeAll(() => {
    service = MockRender(RoundHandlersManager).point.componentInstance;
  });

  beforeEach(() => {
    service['roundHandlers'].clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('initRequiredHandlers', () => {
    it('should init VILLAGEOIS round handler', () => {
      service.initRequiredHandlers();

      expect(service['roundHandlers'].get(Round.VILLAGEOIS)).toBeInstanceOf(
        VillageoisRoundHandler,
      );
    });

    it('should init CAPITAINE round handler', () => {
      service.initRequiredHandlers();

      expect(service['roundHandlers'].get(Round.CAPITAINE)).toBeInstanceOf(
        CapitaineRoundHandler,
      );
    });

    it('should init LOUP_GAROU round handler for LOUP_GAROU role', () => {
      service.initRequiredHandlers();

      expect(service['roundHandlers'].get(Round.LOUP_GAROU)).toBeInstanceOf(
        LoupGarouRoundHandler,
      );
    });
  });

  describe('getHandler', () => {
    it('should return configured round handler', () => {
      service['roundHandlers'].set(Round.VILLAGEOIS, villageoisRoundHandler);

      const testHandler = service.getHandler(Round.VILLAGEOIS);

      expect(testHandler).toEqual(villageoisRoundHandler);
    });
  });

  describe('initAsDefaultHandlers', () => {
    it('should init handler as default', () => {
      service.initAsDefaultHandlers([PlayerRole.VOYANTE]);

      expect(service['roundHandlers'].get(Round.VOYANTE)).toBeInstanceOf(
        DefaultRoundHandler,
      );
    });
  });

  describe('removeHandlersByRoles', () => {
    it('should remove handlers for specified roles', () => {
      service['roundHandlers'].set(Round.VOYANTE, voyanteRoundHandler);

      service.removeHandlersByRoles([PlayerRole.VOYANTE]);

      expect(service['roundHandlers'].get(Round.VOYANTE)).toBeUndefined();
    });

    it('should not remove handlers for non-specified roles', () => {
      service['roundHandlers'].set(Round.VILLAGEOIS, villageoisRoundHandler);

      service.removeHandlersByRoles([PlayerRole.VOYANTE]);

      expect(service['roundHandlers'].get(Round.VILLAGEOIS)).toBeInstanceOf(
        VillageoisRoundHandler,
      );
    });
  });

  describe('clearHandlers', () => {
    it('should clear all round handlers', () => {
      service['roundHandlers'].set(Round.VILLAGEOIS, villageoisRoundHandler);

      service.clearHandlers();

      expect(service['roundHandlers'].size).toEqual(0);
    });

    it('should clear round handlers state', () => {
      service['roundHandlersState'].set(new Set([Round.VILLAGEOIS]));

      service.clearHandlers();

      expect(service['roundHandlersState']().size).toEqual(0);
    });

    it('should clear default round handlers state', () => {
      service['defaultRoundHandlersState'].set(new Set([Round.VILLAGEOIS]));

      service.clearHandlers();

      expect(service['defaultRoundHandlersState']().size).toEqual(0);
    });
  });

  describe('removeHandler', () => {
    it('should remove specific round handler', () => {
      service['roundHandlers'].set(Round.VILLAGEOIS, villageoisRoundHandler);

      service.removeHandler(Round.VILLAGEOIS);

      expect(service['roundHandlers'].get(Round.VILLAGEOIS)).toBeUndefined();
    });

    it('should update round handlers state after removal', () => {
      service['roundHandlersState'].set(new Set([Round.VILLAGEOIS]));

      service.removeHandler(Round.VILLAGEOIS);

      expect(service['roundHandlersState']().has(Round.VILLAGEOIS)).toEqual(
        false,
      );
    });

    it('should update default round handlers state after removal', () => {
      service['defaultRoundHandlersState'].set(new Set([Round.VILLAGEOIS]));

      service.removeHandler(Round.VILLAGEOIS);

      expect(
        service['defaultRoundHandlersState']().has(Round.VILLAGEOIS),
      ).toEqual(false);
    });
  });

  describe('createRoundHandler', () => {
    it('should create and add a new round handler', () => {
      service.createRoundHandler(Round.VILLAGEOIS);

      expect(service['roundHandlers'].get(Round.VILLAGEOIS)).toBeInstanceOf(
        VillageoisRoundHandler,
      );
    });

    it('should not create a handler if it already exists', () => {
      service['roundHandlers'].set(Round.VILLAGEOIS, villageoisRoundHandler);

      service.createRoundHandler(Round.VILLAGEOIS);

      expect(service['roundHandlers'].size).toEqual(1);
    });
  });

  afterAll(MockReset);
});
