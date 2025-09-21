import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
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
  type = RoundType.DEFAULT;
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
    service['uniqueRoundsPassed'].set(new Set([Round.CUPIDON]));

    service.resetRounds();

    expect(service['uniqueRoundsPassed']().size).toEqual(0);
  });

  it('should return next available round', () => {
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) =>
        round === Round.LOUP_GAROU ? new MockRoundHandler() : undefined,
      );

    const nextRound = service.getNextRound(Round.VOYANTE);

    expect(nextRound).toEqual(Round.LOUP_GAROU);
  });

  it('should skip LOUP_BLANC on odd days', () => {
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) =>
        round === Round.LOUP_BLANC || round === Round.SORCIERE_HEALTH
          ? new MockRoundHandler()
          : undefined,
      );

    const dayCountStore = ngMocks.get(DayCountStore);
    dayCountStore.state.set(1);

    const nextRound = service.getNextRound(Round.LOUP_GAROU);

    expect(nextRound).toEqual(Round.SORCIERE_HEALTH);
  });

  it('should not skip LOUP_BLANC on even days', () => {
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) =>
        round === Round.LOUP_BLANC || round === Round.SORCIERE_HEALTH
          ? new MockRoundHandler()
          : undefined,
      );

    const dayCountStore = ngMocks.get(DayCountStore);
    dayCountStore.state.set(2);

    const nextRound = service.getNextRound(Round.LOUP_GAROU);

    expect(nextRound).toEqual(Round.LOUP_BLANC);
  });

  it('should return next available round when end of rounds', () => {
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) =>
        round === Round.VOYANTE ? new MockRoundHandler() : undefined,
      );

    const nextRound = service.getNextRound(Round.VILLAGEOIS);

    expect(nextRound).toEqual(Round.VOYANTE);
  });

  it('should return next after-death round when there is one', () => {
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) =>
        round === Round.VILLAGEOIS ? new MockRoundHandler() : undefined,
      );

    const deathHandler = ngMocks.get(DeathHandler);
    jest
      .spyOn(deathHandler, 'getNextAfterDeathRound')
      .mockReturnValue(Round.CHASSEUR);

    const nextRound = service.getNextRound(Round.SORCIERE_KILL);

    expect(nextRound).toEqual(Round.CHASSEUR);
  });

  it('should use round before after-death round as current after after-death rounds', () => {
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) =>
        round === Round.VILLAGEOIS ? new MockRoundHandler() : undefined,
      );

    const deathHandler = ngMocks.get(DeathHandler);
    jest
      .spyOn(deathHandler, 'getNextAfterDeathRound')
      .mockReturnValueOnce(Round.CHASSEUR);

    const nextRound1 = service.getNextRound(Round.SORCIERE_KILL);
    expect(nextRound1).toEqual(Round.CHASSEUR);
    const nextRound2 = service.getNextRound(Round.CHASSEUR);
    expect(nextRound2).toEqual(Round.VILLAGEOIS);
  });

  it('should continue round chain correctly after after-death rounds', () => {
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.VILLAGEOIS:
            return new MockRoundHandler();
          case Round.LOUP_GAROU:
            return new MockRoundHandler();
          default:
            return undefined;
        }
      });

    const deathHandler = ngMocks.get(DeathHandler);

    jest
      .spyOn(deathHandler, 'getNextAfterDeathRound')
      .mockReturnValueOnce(Round.CHASSEUR);

    const nextRound1 = service.getNextRound(Round.SORCIERE_KILL);
    expect(nextRound1).toEqual(Round.CHASSEUR);
    const nextRound2 = service.getNextRound(Round.CHASSEUR);
    expect(nextRound2).toEqual(Round.VILLAGEOIS);
    const nextRound3 = service.getNextRound(Round.VILLAGEOIS);
    expect(nextRound3).toEqual(Round.LOUP_GAROU);
  });

  it('should add current round to unique list if onlyOnce', () => {
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.VOYANTE:
            return new MockRoundHandler();
          case Round.CUPIDON:
            return new MockRoundHandler(true);
          default:
            return undefined;
        }
      });

    service.getNextRound(Round.CUPIDON);

    expect(service['uniqueRoundsPassed']().has(Round.CUPIDON)).toEqual(true);
  });

  it('should not add current round to unique list if not onlyOnce', () => {
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.AMOUREUX:
            return new MockRoundHandler();
          case Round.CUPIDON:
            return new MockRoundHandler(true);
          default:
            return undefined;
        }
      });

    service.getNextRound(Round.VOYANTE);

    expect(service['uniqueRoundsPassed']().has(Round.VOYANTE)).toEqual(false);
  });

  it('should not return unique round if already passed', () => {
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.VOYANTE:
          case Round.VILLAGEOIS:
            return new MockRoundHandler();
          case Round.CUPIDON:
            return new MockRoundHandler(true);
          default:
            return undefined;
        }
      });

    service['uniqueRoundsPassed'].set(new Set([Round.CUPIDON]));

    const nextRound = service.getNextRound(Round.VILLAGEOIS);

    expect(nextRound).toEqual(Round.VOYANTE);
  });

  it('should return first round with handler', () => {
    const roundHandlersManager = ngMocks.get(RoundHandlersManager);
    jest
      .spyOn(roundHandlersManager, 'getHandler')
      .mockImplementation((round) => {
        switch (round) {
          case Round.VOYANTE:
            return new MockRoundHandler();
          default:
            return undefined;
        }
      });

    const firstRound = service.getFirstRound();

    expect(firstRound).toEqual(Round.VOYANTE);
  });

  it('should move VILLAGEOIS round after SECTAIRE on setVillageoisFirst', () => {
    service['sortedRounds'] = [
      Round.SECTAIRE,
      Round.SORCIERE_HEALTH,
      Round.LOUP_GAROU,
      Round.VILLAGEOIS,
    ];

    service.setVillageoisFirst();

    expect(service['sortedRounds']).toEqual([
      Round.SECTAIRE,
      Round.VILLAGEOIS,
      Round.SORCIERE_HEALTH,
      Round.LOUP_GAROU,
    ]);
  });

  it('should reset sorted rounds on resetRoundsOrder', () => {
    service['sortedRounds'] = [
      Round.VILLAGEOIS,
      Round.SECTAIRE,
      Round.SORCIERE_HEALTH,
      Round.LOUP_GAROU,
    ];

    service.resetRoundsOrder();

    expect(service['sortedRounds']).toEqual([...ROUNDS_ORDER]);
  });
});
