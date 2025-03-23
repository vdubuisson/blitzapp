import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { RoundConfig } from '@/models/round-config.model';
import { RoundHandler } from '@/round-handlers/round-handler.interface';
import { DeathService } from '@/services/death/death.service';
import { RoundHandlersService } from '@/services/round-handlers/round-handlers.service';
import { MockBuilder, MockInstance, MockRender, ngMocks } from 'ng-mocks';
import { Observable } from 'rxjs';

import { BeforeDeathRoundStore } from '@/stores/before-death-round/before-death-round.store';
import { UniqueRoundsPassedStore } from '@/stores/unique-rounds-passed/unique-rounds-passed.store';
import { signal } from '@angular/core';
import { RoundOrchestrationService } from './round-orchestration.service';

class MockRoundHandler implements RoundHandler {
  constructor(isOnlyOnce = false) {
    this.isOnlyOnce = isOnlyOnce;
  }

  isOnlyOnce = false;
  isDuringDay = false;
  type = RoundTypeEnum.DEFAULT;
  handleAction(_: Player[], __: number[]): Observable<Player[]> {
    throw new Error('Method not implemented.');
  }
  getRoundConfig(_: Player[]): RoundConfig {
    throw new Error('Method not implemented.');
  }
}

describe('RoundOrchestrationService', () => {
  let service: RoundOrchestrationService;

  MockInstance.scope();

  beforeEach(() =>
    MockBuilder(RoundOrchestrationService)
      .mock(RoundHandlersService)
      .mock(DeathService)
      .mock(BeforeDeathRoundStore)
      .mock(UniqueRoundsPassedStore),
  );

  beforeEach(() => {
    MockInstance(RoundHandlersService, () => ({
      getHandler: jest.fn(),
    }));
    MockInstance(DeathService, () => ({
      getNextAfterDeathRound: jest.fn(),
    }));
    MockInstance(BeforeDeathRoundStore, 'state', signal(null));
    MockInstance(
      UniqueRoundsPassedStore,
      'state',
      signal(new Set<RoundEnum>()),
    );
  });

  beforeEach(() => {
    service = MockRender(RoundOrchestrationService).point.componentInstance;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should reset unique rounds passed', () => {
    service['uniqueRoundsPassed'].set(new Set([RoundEnum.CUPIDON]));

    service.resetRounds();

    expect(service['uniqueRoundsPassed']().size).toEqual(0);
  });

  it('should return next available round', () => {
    const roundHandlersService = ngMocks.get(RoundHandlersService);
    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) =>
        round === RoundEnum.LOUP_GAROU ? new MockRoundHandler() : undefined,
      );

    const nextRound = service.getNextRound(RoundEnum.VOYANTE);

    expect(nextRound).toEqual(RoundEnum.LOUP_GAROU);
  });

  it('should return next available round when end of rounds', () => {
    const roundHandlersService = ngMocks.get(RoundHandlersService);
    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) =>
        round === RoundEnum.VOYANTE ? new MockRoundHandler() : undefined,
      );

    const nextRound = service.getNextRound(RoundEnum.VILLAGEOIS);

    expect(nextRound).toEqual(RoundEnum.VOYANTE);
  });

  it('should return next after-death round when there is one', () => {
    const roundHandlersService = ngMocks.get(RoundHandlersService);
    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) =>
        round === RoundEnum.VILLAGEOIS ? new MockRoundHandler() : undefined,
      );

    const deathService = ngMocks.get(DeathService);
    jest
      .spyOn(deathService, 'getNextAfterDeathRound')
      .mockReturnValue(RoundEnum.CHASSEUR);

    const nextRound = service.getNextRound(RoundEnum.SORCIERE_KILL);

    expect(nextRound).toEqual(RoundEnum.CHASSEUR);
  });

  it('should use round before after-death round as current after after-death rounds', () => {
    const roundHandlersService = ngMocks.get(RoundHandlersService);
    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) =>
        round === RoundEnum.VILLAGEOIS ? new MockRoundHandler() : undefined,
      );

    const deathService = ngMocks.get(DeathService);
    jest
      .spyOn(deathService, 'getNextAfterDeathRound')
      .mockReturnValueOnce(RoundEnum.CHASSEUR);

    const nextRound1 = service.getNextRound(RoundEnum.SORCIERE_KILL);
    expect(nextRound1).toEqual(RoundEnum.CHASSEUR);
    const nextRound2 = service.getNextRound(RoundEnum.CHASSEUR);
    expect(nextRound2).toEqual(RoundEnum.VILLAGEOIS);
  });

  it('should continue round chain correctly after after-death rounds', () => {
    const roundHandlersService = ngMocks.get(RoundHandlersService);
    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.VILLAGEOIS:
            return new MockRoundHandler();
          case RoundEnum.LOUP_GAROU:
            return new MockRoundHandler();
          default:
            return undefined;
        }
      });

    const deathService = ngMocks.get(DeathService);

    jest
      .spyOn(deathService, 'getNextAfterDeathRound')
      .mockReturnValueOnce(RoundEnum.CHASSEUR);

    const nextRound1 = service.getNextRound(RoundEnum.SORCIERE_KILL);
    expect(nextRound1).toEqual(RoundEnum.CHASSEUR);
    const nextRound2 = service.getNextRound(RoundEnum.CHASSEUR);
    expect(nextRound2).toEqual(RoundEnum.VILLAGEOIS);
    const nextRound3 = service.getNextRound(RoundEnum.VILLAGEOIS);
    expect(nextRound3).toEqual(RoundEnum.LOUP_GAROU);
  });

  it('should add current round to unique list if onlyOnce', () => {
    const roundHandlersService = ngMocks.get(RoundHandlersService);
    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.VOYANTE:
            return new MockRoundHandler();
          case RoundEnum.CUPIDON:
            return new MockRoundHandler(true);
          default:
            return undefined;
        }
      });

    service.getNextRound(RoundEnum.CUPIDON);

    expect(service['uniqueRoundsPassed']().has(RoundEnum.CUPIDON)).toEqual(
      true,
    );
  });

  it('should not add current round to unique list if not onlyOnce', () => {
    const roundHandlersService = ngMocks.get(RoundHandlersService);
    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.AMOUREUX:
            return new MockRoundHandler();
          case RoundEnum.CUPIDON:
            return new MockRoundHandler(true);
          default:
            return undefined;
        }
      });

    service.getNextRound(RoundEnum.VOYANTE);

    expect(service['uniqueRoundsPassed']().has(RoundEnum.VOYANTE)).toEqual(
      false,
    );
  });

  it('should not return unique round if already passed', () => {
    const roundHandlersService = ngMocks.get(RoundHandlersService);
    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.VOYANTE:
          case RoundEnum.VILLAGEOIS:
            return new MockRoundHandler();
          case RoundEnum.CUPIDON:
            return new MockRoundHandler(true);
          default:
            return undefined;
        }
      });

    service['uniqueRoundsPassed'].set(new Set([RoundEnum.CUPIDON]));

    const nextRound = service.getNextRound(RoundEnum.VILLAGEOIS);

    expect(nextRound).toEqual(RoundEnum.VOYANTE);
  });

  it('should return first round with handler', () => {
    const roundHandlersService = ngMocks.get(RoundHandlersService);
    jest
      .spyOn(roundHandlersService, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case RoundEnum.VOYANTE:
            return new MockRoundHandler();
          default:
            return undefined;
        }
      });

    const firstRound = service.getFirstRound();

    expect(firstRound).toEqual(RoundEnum.VOYANTE);
  });

  it('should move VILLAGEOIS round after SECTAIRE on setVillageoisFirst', () => {
    service['sortedRounds'] = [
      RoundEnum.SECTAIRE,
      RoundEnum.SORCIERE_HEALTH,
      RoundEnum.LOUP_GAROU,
      RoundEnum.VILLAGEOIS,
    ];

    service.setVillageoisFirst();

    expect(service['sortedRounds']).toEqual([
      RoundEnum.SECTAIRE,
      RoundEnum.VILLAGEOIS,
      RoundEnum.SORCIERE_HEALTH,
      RoundEnum.LOUP_GAROU,
    ]);
  });
});
