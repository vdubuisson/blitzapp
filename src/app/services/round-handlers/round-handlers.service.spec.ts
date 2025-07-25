import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundEnum } from '@/enums/round.enum';
import { CapitaineRoundHandler } from '@/round-handlers/capitaine/capitaine-round.handler';
import { DefaultRoundHandler } from '@/round-handlers/default/default-round.handler';
import { LoupGarouRoundHandler } from '@/round-handlers/loup-garou/loup-garou-round.handler';
import { VillageoisRoundHandler } from '@/round-handlers/villageois/villageois-round.handler';
import { VoyanteRoundHandler } from '@/round-handlers/voyante/voyante-round.handler';
import { AnnouncementService } from '@/services/announcement/announcement.service';
import { ModalService } from '@/services/modal/modal.service';
import { DefaultRoundHandlersStore } from '@/stores/default-round-handlers/default-round-handlers.store';
import { RoundHandlersStore } from '@/stores/round-handlers/round-handlers.store';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { RoundHandlersService } from './round-handlers.service';

describe('RoundHandlersService', () => {
  ngMocks.faster();
  let service: RoundHandlersService;
  let villageoisRoundHandler: VillageoisRoundHandler;
  let voyanteRoundHandler: VoyanteRoundHandler;

  beforeAll(() =>
    MockBuilder(RoundHandlersService)
      .mock(AnnouncementService)
      .mock(ModalService)
      .mock(RoundHandlersStore)
      .mock(DefaultRoundHandlersStore),
  );

  beforeAll(() => {
    MockInstance(RoundHandlersStore, 'state', signal(new Set<RoundEnum>()));
    MockInstance(
      DefaultRoundHandlersStore,
      'state',
      signal(new Set<RoundEnum>()),
    );

    TestBed.runInInjectionContext(() => {
      villageoisRoundHandler = new VillageoisRoundHandler();
      voyanteRoundHandler = new VoyanteRoundHandler();
    });
  });

  beforeAll(() => {
    service = MockRender(RoundHandlersService).point.componentInstance;
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

      expect(service['roundHandlers'].get(RoundEnum.VILLAGEOIS)).toBeInstanceOf(
        VillageoisRoundHandler,
      );
    });

    it('should init CAPITAINE round handler', () => {
      service.initRequiredHandlers();

      expect(service['roundHandlers'].get(RoundEnum.CAPITAINE)).toBeInstanceOf(
        CapitaineRoundHandler,
      );
    });

    it('should init LOUP_GAROU round handler for LOUP_GAROU role', () => {
      service.initRequiredHandlers();

      expect(service['roundHandlers'].get(RoundEnum.LOUP_GAROU)).toBeInstanceOf(
        LoupGarouRoundHandler,
      );
    });
  });

  describe('getHandler', () => {
    it('should return configured round handler', () => {
      service['roundHandlers'].set(
        RoundEnum.VILLAGEOIS,
        villageoisRoundHandler,
      );

      const testHandler = service.getHandler(RoundEnum.VILLAGEOIS);

      expect(testHandler).toEqual(villageoisRoundHandler);
    });
  });

  describe('initAsDefaultHandlers', () => {
    it('should init handler as default', () => {
      service.initAsDefaultHandlers([PlayerRoleEnum.VOYANTE]);

      expect(service['roundHandlers'].get(RoundEnum.VOYANTE)).toBeInstanceOf(
        DefaultRoundHandler,
      );
    });
  });

  describe('removeHandlersByRoles', () => {
    it('should remove handlers for specified roles', () => {
      service['roundHandlers'].set(RoundEnum.VOYANTE, voyanteRoundHandler);

      service.removeHandlersByRoles([PlayerRoleEnum.VOYANTE]);

      expect(service['roundHandlers'].get(RoundEnum.VOYANTE)).toBeUndefined();
    });

    it('should not remove handlers for non-specified roles', () => {
      service['roundHandlers'].set(
        RoundEnum.VILLAGEOIS,
        villageoisRoundHandler,
      );

      service.removeHandlersByRoles([PlayerRoleEnum.VOYANTE]);

      expect(service['roundHandlers'].get(RoundEnum.VILLAGEOIS)).toBeInstanceOf(
        VillageoisRoundHandler,
      );
    });
  });

  describe('clearHandlers', () => {
    it('should clear all round handlers', () => {
      service['roundHandlers'].set(
        RoundEnum.VILLAGEOIS,
        villageoisRoundHandler,
      );

      service.clearHandlers();

      expect(service['roundHandlers'].size).toEqual(0);
    });

    it('should clear round handlers state', () => {
      service['roundHandlersState'].set(new Set([RoundEnum.VILLAGEOIS]));

      service.clearHandlers();

      expect(service['roundHandlersState']().size).toEqual(0);
    });

    it('should clear default round handlers state', () => {
      service['defaultRoundHandlersState'].set(new Set([RoundEnum.VILLAGEOIS]));

      service.clearHandlers();

      expect(service['defaultRoundHandlersState']().size).toEqual(0);
    });
  });

  describe('removeHandler', () => {
    it('should remove specific round handler', () => {
      service['roundHandlers'].set(
        RoundEnum.VILLAGEOIS,
        villageoisRoundHandler,
      );

      service.removeHandler(RoundEnum.VILLAGEOIS);

      expect(
        service['roundHandlers'].get(RoundEnum.VILLAGEOIS),
      ).toBeUndefined();
    });

    it('should update round handlers state after removal', () => {
      service['roundHandlersState'].set(new Set([RoundEnum.VILLAGEOIS]));

      service.removeHandler(RoundEnum.VILLAGEOIS);

      expect(service['roundHandlersState']().has(RoundEnum.VILLAGEOIS)).toEqual(
        false,
      );
    });

    it('should update default round handlers state after removal', () => {
      service['defaultRoundHandlersState'].set(new Set([RoundEnum.VILLAGEOIS]));

      service.removeHandler(RoundEnum.VILLAGEOIS);

      expect(
        service['defaultRoundHandlersState']().has(RoundEnum.VILLAGEOIS),
      ).toEqual(false);
    });
  });

  describe('createRoundHandler', () => {
    it('should create and add a new round handler', () => {
      service.createRoundHandler(RoundEnum.VILLAGEOIS);

      expect(service['roundHandlers'].get(RoundEnum.VILLAGEOIS)).toBeInstanceOf(
        VillageoisRoundHandler,
      );
    });

    it('should not create a handler if it already exists', () => {
      service['roundHandlers'].set(
        RoundEnum.VILLAGEOIS,
        villageoisRoundHandler,
      );

      service.createRoundHandler(RoundEnum.VILLAGEOIS);

      expect(service['roundHandlers'].size).toEqual(1);
    });
  });

  afterAll(MockReset);
});
