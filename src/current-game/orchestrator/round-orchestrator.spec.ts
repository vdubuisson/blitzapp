import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { RoundEnum } from '@/types/round';
import { Player } from '@/shared/types/player';
import { RoundConfig } from '@/shared/types/round-config';
import { RoundHandler } from '@/game-handlers/rounds/round-handler.interface';
import { DeathHandler } from '@/current-game/death/death-handler';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { MockBuilder, MockInstance, MockRender, ngMocks } from 'ng-mocks';
import { Observable } from 'rxjs';

import { BeforeDeathRoundStore } from '@/current-game/orchestrator/before-death-round/before-death-round-store';
import { UniqueRoundsPassedStore } from '@/current-game/orchestrator/unique-rounds-passed/unique-rounds-passed-store';
import { signal } from '@angular/core';
import { RoundOrchestrator } from './round-orchestrator';
import { DayCountStore } from '@/current-game/orchestrator/day-count/day-count-store';
import { ROUNDS_ORDER } from '@/config/rounds-order';

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

describe('RoundOrchestrator', () => {
  let service: RoundOrchestrator;

  MockInstance.scope();

  beforeEach(() =>
    MockBuilder(RoundOrchestrator)
      .mock(RoundHandlersManager)
      .mock(DeathHandler)
      .mock(BeforeDeathRoundStore)
      .mock(UniqueRoundsPassedStore)
      .mock(DayCountStore),
  );

  beforeEach(() => {
    MockInstance(RoundHandlersManager, () => ({
      getHandler: jest.fn(),
    }));
    MockInstance(DeathHandler, () => ({
      getNextAfterDeathRound: jest.fn(),
    }));
    MockInstance(BeforeDeathRoundStore, 'state', signal(null));
    MockInstance(UniqueRoundsPassedStore, 'state', signal(new Set<Round>()));
    MockInstance(DayCountStore, 'state', signal(0));
  });

  beforeEach(() => {
    service = MockRender(RoundOrchestrator).point.componentInstance;
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
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) =>
        round === RoundEnum.LOUP_GAROU ? new MockRoundHandler() : undefined,
      );

    const nextRound = service.getNextRound(RoundEnum.VOYANTE);

    expect(nextRound).toEqual(RoundEnum.LOUP_GAROU);
  });

  it('should skip LOUP_BLANC on odd days', () => {
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) =>
        round === RoundEnum.LOUP_BLANC || round === RoundEnum.SORCIERE_HEALTH
          ? new MockRoundHandler()
          : undefined,
      );

    const dayCountStore = ngMocks.get(DayCountStore);
    dayCountStore.state.set(1);

    const nextRound = service.getNextRound(RoundEnum.LOUP_GAROU);

    expect(nextRound).toEqual(RoundEnum.SORCIERE_HEALTH);
  });

  it('should not skip LOUP_BLANC on even days', () => {
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) =>
        round === RoundEnum.LOUP_BLANC || round === RoundEnum.SORCIERE_HEALTH
          ? new MockRoundHandler()
          : undefined,
      );

    const dayCountStore = ngMocks.get(DayCountStore);
    dayCountStore.state.set(2);

    const nextRound = service.getNextRound(RoundEnum.LOUP_GAROU);

    expect(nextRound).toEqual(RoundEnum.LOUP_BLANC);
  });

  it('should return next available round when end of rounds', () => {
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) =>
        round === RoundEnum.VOYANTE ? new MockRoundHandler() : undefined,
      );

    const nextRound = service.getNextRound(RoundEnum.VILLAGEOIS);

    expect(nextRound).toEqual(RoundEnum.VOYANTE);
  });

  it('should return next after-death round when there is one', () => {
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) =>
        round === RoundEnum.VILLAGEOIS ? new MockRoundHandler() : undefined,
      );

    const deathHandler = ngMocks.get(DeathHandler);
    jest
      .spyOn(deathHandler, 'getNextAfterDeathRound')
      .mockReturnValue(RoundEnum.CHASSEUR);

    const nextRound = service.getNextRound(RoundEnum.SORCIERE_KILL);

    expect(nextRound).toEqual(RoundEnum.CHASSEUR);
  });

  it('should use round before after-death round as current after after-death rounds', () => {
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) =>
        round === RoundEnum.VILLAGEOIS ? new MockRoundHandler() : undefined,
      );

    const deathHandler = ngMocks.get(DeathHandler);
    jest
      .spyOn(deathHandler, 'getNextAfterDeathRound')
      .mockReturnValueOnce(RoundEnum.CHASSEUR);

    const nextRound1 = service.getNextRound(RoundEnum.SORCIERE_KILL);
    expect(nextRound1).toEqual(RoundEnum.CHASSEUR);
    const nextRound2 = service.getNextRound(RoundEnum.CHASSEUR);
    expect(nextRound2).toEqual(RoundEnum.VILLAGEOIS);
  });

  it('should continue round chain correctly after after-death rounds', () => {
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
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

    const deathHandler = ngMocks.get(DeathHandler);

    jest
      .spyOn(deathHandler, 'getNextAfterDeathRound')
      .mockReturnValueOnce(RoundEnum.CHASSEUR);

    const nextRound1 = service.getNextRound(RoundEnum.SORCIERE_KILL);
    expect(nextRound1).toEqual(RoundEnum.CHASSEUR);
    const nextRound2 = service.getNextRound(RoundEnum.CHASSEUR);
    expect(nextRound2).toEqual(RoundEnum.VILLAGEOIS);
    const nextRound3 = service.getNextRound(RoundEnum.VILLAGEOIS);
    expect(nextRound3).toEqual(RoundEnum.LOUP_GAROU);
  });

  it('should add current round to unique list if onlyOnce', () => {
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
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
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
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
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
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
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
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

  it('should reset sorted rounds on resetRoundsOrder', () => {
    service['sortedRounds'] = [
      RoundEnum.VILLAGEOIS,
      RoundEnum.SECTAIRE,
      RoundEnum.SORCIERE_HEALTH,
      RoundEnum.LOUP_GAROU,
    ];

    service.resetRoundsOrder();

    expect(service['sortedRounds']).toEqual([...ROUNDS_ORDER]);
  });
});
